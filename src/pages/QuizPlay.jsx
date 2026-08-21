import React, { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { questionBank, shuffleArray } from '../data/quizzes.js'
import { useApp } from '../context/AppContext.jsx'

export default function QuizPlay() {
  const location = useLocation()
  const navigate = useNavigate()
  const state = location?.state || {}

  const questions = useMemo(() => {
    if (state.questions?.length) return state.questions
    if (state.mixed) return shuffleArray(questionBank).slice(0, 20)
    return []
  }, [state.questions, state.mixed])

  const title = state.title || 'Quiz'
  const isDaily = !!state.isDaily
  const mixed = !!state.mixed
  const examName = state.examName

  const [currentIdx, setCurrentIdx] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [answers, setAnswers] = useState([])
  const [timeLeft, setTimeLeft] = useState(30)
  const { addQuizResult, addMockScore, recordMistake, completeStudySession } = useApp()

  const question = questions[currentIdx]
  const progress = questions.length ? ((currentIdx + 1) / questions.length) * 100 : 0

  useEffect(() => {
    setSelectedOption(null)
    setShowExplanation(false)
    setTimeLeft(30)
  }, [currentIdx])

  useEffect(() => {
    if (!questions.length || showExplanation) return undefined

    const timer = setInterval(() => {
      setTimeLeft((seconds) => {
        if (seconds <= 1) {
          setSelectedOption(null)
          setShowExplanation(true)
          setAnswers((prev) => [
            ...prev,
            {
              questionId: question.id,
              selected: null,
              correct: false,
              question,
              timedOut: true,
            },
          ])
          recordMistake({
            questionId: question.id,
            topic: question.topic,
            type: 'time',
            note: 'Question timed out before an answer was submitted.',
          })
          return 0
        }
        return seconds - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [currentIdx, showExplanation, questions.length, question, recordMistake])

  if (!questions.length) {
    return (
      <div className="card p-8 text-center space-y-3">
        <i className="fas fa-triangle-exclamation text-3xl text-amber-500"></i>
        <p className="font-semibold">No quiz data found</p>
        <button onClick={() => navigate('/quiz')} className="btn-primary">
          Go back to Quiz
        </button>
      </div>
    )
  }

  function handleAnswer(optionIdx) {
    if (showExplanation) return

    const isCorrect = optionIdx === question.answer
    setSelectedOption(optionIdx)
    setShowExplanation(true)

    const entry = {
      questionId: question.id,
      selected: optionIdx,
      correct: isCorrect,
      question,
      timedOut: false,
    }

    setAnswers((prev) => [...prev, entry])

    if (!isCorrect) {
      recordMistake({
        questionId: question.id,
        topic: question.topic,
        difficulty: question.difficulty,
        type: 'concept',
        selected: optionIdx,
        correctAnswer: question.answer,
        question: question.question,
        explanation: question.explanation,
      })
    }
  }

  function finishQuiz(finalAnswers) {
    const score = finalAnswers.filter((a) => a.correct).length
    const total = questions.length
    const result = {
      title,
      score,
      total,
      subject: state.subject || null,
      isDaily,
      mixed,
      mistakes: finalAnswers.filter((a) => !a.correct).map((a) => a.questionId),
    }

    addQuizResult(result)

    if (mixed) {
      addMockScore({ exam: examName || 'Mock Test', score, total })
    }

    completeStudySession(
      Math.max(0.05, Math.round((questions.length * 0.5) / 60 * 100) / 100),
      state.subject || 'Quiz',
      title
    )

    navigate('/quiz/result', {
      state: {
        answers: finalAnswers,
        score,
        total,
        title,
      },
    })
  }

  function handleNext() {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx((index) => index + 1)
      return
    }

    finishQuiz(answers)
  }

  const optionLabels = ['A', 'B', 'C', 'D']

  return (
    <div className="mx-auto max-w-2xl space-y-5">
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate('/quiz')}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900"
          aria-label="Exit quiz"
        >
          <i className="fas fa-xmark text-sm"></i>
        </button>

        <div className="flex-1">
          <div className="mb-1 flex justify-between text-xs text-slate-400">
            <span>{title}</span>
            <span>{currentIdx + 1} / {questions.length}</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
            <div
              className="h-full rounded-full bg-primary-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
            timeLeft <= 10
              ? 'bg-rose-100 text-rose-600 dark:bg-rose-900/30'
              : 'bg-slate-100 text-slate-500 dark:bg-slate-800'
          }`}
        >
          {timeLeft}
        </div>
      </div>

      <div className="card animate-slide-up p-5">
        <div className="mb-3 flex items-center gap-2">
          <span className="badge bg-slate-100 text-slate-500 dark:bg-slate-800">
            {question.topic}
          </span>
          <span
            className={`badge ${
              question.difficulty === 'Easy'
                ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'
                : question.difficulty === 'Medium'
                  ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300'
                  : 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300'
            }`}
          >
            {question.difficulty}
          </span>
        </div>

        <p className="mb-4 text-base font-semibold">{question.question}</p>

        <div className="space-y-2.5">
          {question.options.map((opt, idx) => {
            let stateClass = 'border-slate-200 dark:border-slate-700 hover:border-primary-300'

            if (showExplanation) {
              if (idx === question.answer) {
                stateClass = 'border-emerald-400 bg-emerald-50 dark:bg-emerald-900/20'
              } else if (idx === selectedOption) {
                stateClass = 'border-rose-400 bg-rose-50 dark:bg-rose-900/20'
              } else {
                stateClass = 'border-slate-200 opacity-60 dark:border-slate-700'
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                disabled={showExplanation}
                className={`flex w-full items-center gap-3 rounded-xl border-2 px-4 py-3 text-left text-sm font-medium transition ${stateClass}`}
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold dark:bg-slate-800">
                  {optionLabels[idx]}
                </span>
                <span className="flex-1">{opt}</span>
                {showExplanation && idx === question.answer && (
                  <i className="fas fa-circle-check text-emerald-500"></i>
                )}
                {showExplanation && idx === selectedOption && idx !== question.answer && (
                  <i className="fas fa-circle-xmark text-rose-500"></i>
                )}
              </button>
            )
          })}
        </div>

        {showExplanation && (
          <div className="mt-4 rounded-xl bg-indigo-50 p-4 animate-fade-in dark:bg-indigo-900/20">
            <p className="mb-1 text-xs font-bold text-indigo-600 dark:text-indigo-400">
              <i className="fas fa-lightbulb mr-1"></i>Explanation
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {question.explanation}
            </p>
            {selectedOption !== question.answer && (
              <p className="mt-2 text-xs font-semibold text-rose-600 dark:text-rose-300">
                This question has been added to your Mistake Bank.
              </p>
            )}
          </div>
        )}
      </div>

      {showExplanation && (
        <button
          onClick={handleNext}
          className="btn-primary w-full animate-slide-up py-3 text-base"
        >
          {currentIdx + 1 < questions.length ? 'Next Question' : 'Finish Quiz'}
          <i className="fas fa-arrow-right"></i>
        </button>
      )}
    </div>
  )
}
