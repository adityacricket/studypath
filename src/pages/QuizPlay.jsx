import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { questionBank, shuffleArray } from '../data/quizzes.js'
import { useApp } from '../context/AppContext.jsx'

const OPTION_LABELS = ['A', 'B', 'C', 'D']

function getCorrectIndex(question) {
  const raw = question?.answer
  if (Number.isInteger(raw)) return raw >= 0 && raw < 4 ? raw : -1

  if (typeof raw === 'string') {
    const trimmed = raw.trim()
    const letter = trimmed.match(/^[A-Da-d]/)?.[0]?.toUpperCase()
    if (letter) return OPTION_LABELS.indexOf(letter)

    const parsed = Number(trimmed)
    if (Number.isInteger(parsed)) {
      if (parsed >= 0 && parsed < 4) return parsed
      if (parsed >= 1 && parsed <= 4) return parsed - 1
    }
  }

  return -1
}

function buildSections(sectionTimers, questionCount) {
  if (!Array.isArray(sectionTimers) || sectionTimers.length === 0) return []

  let cursor = 0
  return sectionTimers.map((section, index) => {
    const count = Math.max(0, Number(section.questions || 0))
    const start = cursor
    const end = Math.min(questionCount, cursor + count) - 1
    cursor += count
    return {
      ...section,
      index,
      start,
      end,
      minutes: Math.max(1, Number(section.minutes || 15)),
    }
  }).filter((section) => section.start <= section.end)
}

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
  const isFullLength = !!state.fullLength
  const sections = useMemo(() => buildSections(state.sectionTimers, questions.length), [state.sectionTimers, questions.length])
  const hasSectionTimers = isFullLength && sections.length > 0
  const totalDurationSeconds = isFullLength ? Math.max(60, Number(state.duration || 120) * 60) : 30
  const negativeMarking = Math.max(0, Number(state.negativeMarking || 0))

  const [currentIdx, setCurrentIdx] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [answers, setAnswers] = useState([])
  const [timeLeft, setTimeLeft] = useState(hasSectionTimers ? sections[0]?.minutes * 60 || 900 : totalDurationSeconds)
  const answersRef = useRef([])
  const finishQuizRef = useRef(null)

  const { addQuizResult, addMockScore, recordMistake, completeStudySession } = useApp()

  const question = questions[currentIdx]
  const currentSectionIndex = hasSectionTimers
    ? Math.max(0, sections.findIndex((section) => currentIdx >= section.start && currentIdx <= section.end))
    : -1
  const currentSection = currentSectionIndex >= 0 ? sections[currentSectionIndex] : null
  const progress = questions.length ? ((currentIdx + 1) / questions.length) * 100 : 0

  useEffect(() => {
    answersRef.current = answers
  }, [answers])

  function getScoreDetails(finalAnswers) {
    const correctCount = finalAnswers.filter((entry) => entry.correct).length
    const wrongCount = finalAnswers.filter((entry) => !entry.correct && !entry.timedOut).length
    const unansweredCount = finalAnswers.filter((entry) => entry.timedOut || entry.selected === null).length
    const netScore = correctCount - (wrongCount * negativeMarking)
    return { correctCount, wrongCount, unansweredCount, netScore }
  }

  function finishQuiz(finalAnswers) {
    const { correctCount, wrongCount, unansweredCount, netScore } = getScoreDetails(finalAnswers)
    const total = questions.length
    const result = {
      title,
      score: correctCount,
      total,
      subject: state.subject || null,
      isDaily,
      mixed,
      mistakes: finalAnswers.filter((a) => !a.correct).map((a) => a.questionId),
      correctCount,
      wrongCount,
      unansweredCount,
      netScore,
      negativeMarking,
    }

    addQuizResult(result)

    if (mixed) {
      addMockScore({ exam: examName || 'Mock Test', score: netScore, total })
    }

    completeStudySession(
      Math.max(0.05, Math.round((questions.length * 0.5) / 60 * 100) / 100),
      state.subject || 'Quiz',
      title
    )

    navigate('/quiz/result', {
      state: {
        answers: finalAnswers,
        score: correctCount,
        total,
        title,
        correctCount,
        wrongCount,
        unansweredCount,
        netScore,
        negativeMarking,
        hasNegativeMarking: negativeMarking > 0,
      },
    })
  }

  finishQuizRef.current = finishQuiz

  useEffect(() => {
    if (hasSectionTimers) {
      setTimeLeft(currentSection?.minutes * 60 || 900)
      setSelectedOption(null)
      setShowExplanation(false)
      return
    }

    if (!isFullLength) {
      setSelectedOption(null)
      setShowExplanation(false)
      setTimeLeft(30)
    }
  }, [currentIdx, currentSectionIndex, currentSection?.minutes, hasSectionTimers, isFullLength])

  useEffect(() => {
    if (!questions.length) return undefined
    if (!hasSectionTimers && !isFullLength && showExplanation) return undefined

    const timer = setInterval(() => {
      setTimeLeft((seconds) => {
        if (seconds > 1) return seconds - 1

        clearInterval(timer)

        if (hasSectionTimers && currentSection) {
          const answeredIds = new Set(answersRef.current.map((answer) => answer.questionId))
          const timedOutAnswers = questions
            .slice(currentSection.start, currentSection.end + 1)
            .filter((item) => !answeredIds.has(item.id))
            .map((item) => ({
              questionId: item.id,
              selected: null,
              correct: false,
              question: item,
              timedOut: true,
              correctIndex: getCorrectIndex(item),
            }))

          const nextAnswers = [...answersRef.current, ...timedOutAnswers]
          answersRef.current = nextAnswers
          setAnswers(nextAnswers)
          timedOutAnswers.forEach((entry) => {
            recordMistake({
              questionId: entry.question.id,
              topic: entry.question.topic,
              type: 'time',
              note: `Section timer expired before this question was answered.`,
            })
          })

          const nextQuestion = currentSection.end + 1
          if (nextQuestion < questions.length) {
            setCurrentIdx(nextQuestion)
            return currentSectionIndex + 1
          }

          finishQuizRef.current?.(nextAnswers)
          return 0
        }

        if (isFullLength) {
          const answeredIds = new Set(answersRef.current.map((answer) => answer.questionId))
          const timedOutAnswers = questions
            .filter((item) => !answeredIds.has(item.id))
            .map((item) => ({
              questionId: item.id,
              selected: null,
              correct: false,
              question: item,
              timedOut: true,
              correctIndex: getCorrectIndex(item),
            }))

          const finalAnswers = [...answersRef.current, ...timedOutAnswers]
          answersRef.current = finalAnswers
          setAnswers(finalAnswers)
          finalAnswers.filter((entry) => entry.timedOut).forEach((entry) => {
            recordMistake({
              questionId: entry.question.id,
              topic: entry.question.topic,
              type: 'time',
              note: 'Question timed out before the full-length paper was submitted.',
            })
          })
          finishQuizRef.current?.(finalAnswers)
          return 0
        }

        if (question) {
          const entry = {
            questionId: question.id,
            selected: null,
            correct: false,
            question,
            timedOut: true,
            correctIndex: getCorrectIndex(question),
          }
          setSelectedOption(null)
          setShowExplanation(true)
          const nextAnswers = [...answersRef.current, entry]
          answersRef.current = nextAnswers
          setAnswers(nextAnswers)
          recordMistake({
            questionId: question.id,
            topic: question.topic,
            type: 'time',
            note: 'Question timed out before an answer was submitted.',
          })
        }
        return 0
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [currentIdx, currentSectionIndex, currentSection, hasSectionTimers, isFullLength, question, questions, recordMistake, showExplanation])

  if (!questions.length) {
    return (
      <div className="card p-8 text-center space-y-3">
        <i className="fas fa-triangle-exclamation text-3xl text-amber-500"></i>
        <p className="font-semibold">No quiz data found</p>
        <button onClick={() => navigate('/quiz')} className="btn-primary">Go back to Quiz</button>
      </div>
    )
  }

  function handleAnswer(optionIdx) {
    if (showExplanation) return

    const correctIndex = getCorrectIndex(question)
    const isCorrect = optionIdx === correctIndex
    setSelectedOption(optionIdx)
    setShowExplanation(true)

    const entry = {
      questionId: question.id,
      selected: optionIdx,
      correct: isCorrect,
      question,
      timedOut: false,
      correctIndex,
    }

    const nextAnswers = [...answersRef.current, entry]
    answersRef.current = nextAnswers
    setAnswers(nextAnswers)

    if (!isCorrect) {
      recordMistake({
        questionId: question.id,
        topic: question.topic,
        difficulty: question.difficulty,
        type: 'concept',
        selected: optionIdx,
        correctAnswer: correctIndex,
        question: question.question,
        explanation: question.explanation,
      })
    }
  }

  function handleNext() {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx((index) => index + 1)
      setSelectedOption(null)
      setShowExplanation(false)
      return
    }

    finishQuizRef.current?.(answersRef.current)
  }

  const timerLabel = hasSectionTimers || isFullLength
    ? `${Math.floor(timeLeft / 60)}:${String(timeLeft % 60).padStart(2, '0')}`
    : String(timeLeft)

  return (
    <div className="mx-auto max-w-2xl space-y-5">
      <div className="flex items-center gap-3">
        <button onClick={() => navigate('/quiz')} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900" aria-label="Exit quiz">
          <i className="fas fa-xmark text-sm"></i>
        </button>

        <div className="flex-1">
          <div className="mb-1 flex justify-between text-xs text-slate-400">
            <span>{title}{currentSection ? ` · ${currentSection.name}` : ''}</span>
            <span>{currentIdx + 1} / {questions.length}</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
            <div className="h-full rounded-full bg-primary-600 transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className={`flex h-10 min-w-10 shrink-0 items-center justify-center rounded-full px-2 text-xs font-bold ${timeLeft <= (hasSectionTimers || isFullLength ? 300 : 10) ? 'bg-rose-100 text-rose-600 dark:bg-rose-900/30' : 'bg-slate-100 text-slate-500 dark:bg-slate-800'}`} aria-label="Time remaining">
          {timerLabel}
        </div>
      </div>

      {hasSectionTimers && currentSection && (
        <div className="rounded-xl bg-indigo-50 px-3 py-2 text-xs text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300">
          <div className="flex items-center justify-between gap-3">
            <span className="font-bold">Section {currentSectionIndex + 1} of {sections.length}</span>
            <span>{currentSection.questions} questions · {currentSection.minutes} minutes</span>
          </div>
        </div>
      )}

      {negativeMarking > 0 && (
        <div className="rounded-xl bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-700 dark:bg-amber-900/20 dark:text-amber-300">
          Wrong answer penalty: −{negativeMarking} marks
        </div>
      )}

      <div className="card animate-slide-up p-5">
        <div className="mb-3 flex items-center gap-2">
          <span className="badge bg-slate-100 text-slate-500 dark:bg-slate-800">{question.topic}</span>
          <span className={`badge ${question.difficulty === 'Easy' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300' : question.difficulty === 'Medium' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300' : 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300'}`}>{question.difficulty}</span>
        </div>

        <p className="mb-4 text-base font-semibold">{question.question}</p>

        <div className="space-y-2.5">
          {question.options.map((opt, idx) => {
            const correctIndex = getCorrectIndex(question)
            let stateClass = 'border-slate-200 dark:border-slate-700 hover:border-primary-300'

            if (showExplanation) {
              if (idx === correctIndex) stateClass = 'border-emerald-400 bg-emerald-50 dark:bg-emerald-900/20'
              else if (idx === selectedOption) stateClass = 'border-rose-400 bg-rose-50 dark:bg-rose-900/20'
              else stateClass = 'border-slate-200 opacity-60 dark:border-slate-700'
            }

            return (
              <button key={idx} onClick={() => handleAnswer(idx)} disabled={showExplanation} className={`flex w-full items-center gap-3 rounded-xl border-2 px-4 py-3 text-left text-sm font-medium transition ${stateClass}`}>
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold dark:bg-slate-800">{OPTION_LABELS[idx]}</span>
                <span className="flex-1">{opt}</span>
                {showExplanation && idx === correctIndex && <i className="fas fa-circle-check text-emerald-500"></i>}
                {showExplanation && idx === selectedOption && idx !== correctIndex && <i className="fas fa-circle-xmark text-rose-500"></i>}
              </button>
            )
          })}
        </div>

        {showExplanation && (
          <div className="mt-4 rounded-xl bg-indigo-50 p-4 animate-fade-in dark:bg-indigo-900/20">
            <p className="mb-1 text-xs font-bold text-indigo-600 dark:text-indigo-400"><i className="fas fa-lightbulb mr-1"></i>Explanation</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">{question.explanation}</p>
            {selectedOption !== getCorrectIndex(question) && <p className="mt-2 text-xs font-semibold text-rose-600 dark:text-rose-300">This question has been added to your Mistake Bank.</p>}
          </div>
        )}
      </div>

      {showExplanation && (
        <button onClick={handleNext} className="btn-primary w-full animate-slide-up py-3 text-base">
          {currentIdx + 1 < questions.length ? 'Next Question' : 'Finish Quiz'}
          <i className="fas fa-arrow-right"></i>
        </button>
      )}
    </div>
  )
}
