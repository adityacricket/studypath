import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { questionBank, shuffleArray } from '../data/quizzes.js'
import { useApp } from '../context/AppContext.jsx'

export default function QuizPlay() {
  const location = useLocation()
  const navigate = useNavigate()
  const state = location?.state

  let questions = state?.questions
  const title = state?.title || 'Quiz'
  const isDaily = state?.isDaily
  const mixed = state?.mixed
  const examName = state?.examName

  if (mixed && !questions) {
    // Full mock test: mix questions from all subjects
    questions = shuffleArray(questionBank).slice(0, 20)
  }

  const [currentIdx, setCurrentIdx] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [answers, setAnswers] = useState([]) // {questionId, selected, correct}
  const [timeLeft, setTimeLeft] = useState(30)
  const { addQuizResult, addMockScore } = useApp()

  useEffect(() => {
    if (!questions || questions.length === 0) return
    setTimeLeft(30)
  }, [currentIdx])

  useEffect(() => {
    if (showExplanation) return
    if (!questions || questions.length === 0) return
    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          handleAnswer(null)
          return 0
        }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [currentIdx, showExplanation, questions])

  if (!questions || questions.length === 0) {
    return (
      <div className="card p-8 text-center space-y-3">
        <i className="fas fa-triangle-exclamation text-3xl text-amber-500"></i>
        <p className="font-semibold">No quiz data found</p>
        <button onClick={() => navigate('/quiz')} className="btn-primary">Go back to Quiz</button>
      </div>
    )
  }

  const question = questions[currentIdx]
  const progress = ((currentIdx + 1) / questions.length) * 100

  function handleAnswer(optionIdx) {
    if (showExplanation) return
    setSelectedOption(optionIdx)
    setShowExplanation(true)
    const isCorrect = optionIdx === question.answer
    setAnswers((prev) => [...prev, { questionId: question.id, selected: optionIdx, correct: isCorrect, question }])
  }

  function handleNext() {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(currentIdx + 1)
      setSelectedOption(null)
      setShowExplanation(false)
    } else {
      // finish quiz
      const score = answers.filter((a) => a.correct).length
      const total = questions.length
      const result = { title, score, total, subject: state?.subject || null, isDaily: !!isDaily }
      addQuizResult(result)
      if (mixed) {
        addMockScore({ exam: examName || 'Mock Test', score, total })
      }
      navigate('/quiz/result', { state: { answers, score, total, title } })
    }
  }

  const optionLabels = ['A', 'B', 'C', 'D']

  return (
    <div className="space-y-5 max-w-2xl mx-auto">
      {/* Progress header */}
      <div className="flex items-center gap-3">
        <button onClick={() => navigate('/quiz')} className="w-9 h-9 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0">
          <i className="fas fa-xmark text-sm"></i>
        </button>
        <div className="flex-1">
          <div className="flex justify-between text-xs text-slate-400 mb-1">
            <span>{title}</span>
            <span>{currentIdx + 1} / {questions.length}</span>
          </div>
          <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-primary-600 transition-all duration-300" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
        <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${timeLeft <= 10 ? 'bg-rose-100 text-rose-600 dark:bg-rose-900/30' : 'bg-slate-100 text-slate-500 dark:bg-slate-800'}`}>
          {timeLeft}
        </div>
      </div>

      {/* Question */}
      <div className="card p-5 animate-slide-up">
        <div className="flex items-center gap-2 mb-3">
          <span className="badge bg-slate-100 dark:bg-slate-800 text-slate-500">{question.topic}</span>
          <span className={`badge ${question.difficulty === 'Easy' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300' : question.difficulty === 'Medium' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300' : 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300'}`}>
            {question.difficulty}
          </span>
        </div>
        <p className="font-semibold text-base mb-4">{question.question}</p>

        <div className="space-y-2.5">
          {question.options.map((opt, idx) => {
            let stateClass = 'border-slate-200 dark:border-slate-700 hover:border-primary-300'
            if (showExplanation) {
              if (idx === question.answer) stateClass = 'border-emerald-400 bg-emerald-50 dark:bg-emerald-900/20'
              else if (idx === selectedOption) stateClass = 'border-rose-400 bg-rose-50 dark:bg-rose-900/20'
              else stateClass = 'border-slate-200 dark:border-slate-700 opacity-60'
            } else if (idx === selectedOption) {
              stateClass = 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
            }
            return (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                disabled={showExplanation}
                className={`w-full flex items-center gap-3 border-2 rounded-xl px-4 py-3 text-left text-sm font-medium transition ${stateClass}`}
              >
                <span className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs font-bold shrink-0">
                  {optionLabels[idx]}
                </span>
                <span className="flex-1">{opt}</span>
                {showExplanation && idx === question.answer && <i className="fas fa-circle-check text-emerald-500"></i>}
                {showExplanation && idx === selectedOption && idx !== question.answer && <i className="fas fa-circle-xmark text-rose-500"></i>}
              </button>
            )
          })}
        </div>

        {showExplanation && (
          <div className="mt-4 p-4 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 animate-fade-in">
            <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-1"><i className="fas fa-lightbulb mr-1"></i>Explanation</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">{question.explanation}</p>
          </div>
        )}
      </div>

      {showExplanation && (
        <button onClick={handleNext} className="btn-primary w-full text-base py-3 animate-slide-up">
          {currentIdx + 1 < questions.length ? 'Next Question' : 'Finish Quiz'} <i className="fas fa-arrow-right"></i>
        </button>
      )}
    </div>
  )
}
