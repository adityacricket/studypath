import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

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

export default function QuizResult() {
  const location = useLocation()
  const navigate = useNavigate()
  const { answers, score, total, title, correctCount, wrongCount, unansweredCount, netScore, negativeMarking } = location.state || {}
  const [showReview, setShowReview] = useState(false)

  if (!answers) {
    return (
      <div className="card p-8 text-center space-y-3">
        <p className="font-semibold">No result data found</p>
        <button onClick={() => navigate('/quiz')} className="btn-primary">Back to Quiz</button>
      </div>
    )
  }

  const actualCorrect = Number.isFinite(correctCount) ? correctCount : score || 0
  const actualWrong = Number.isFinite(wrongCount) ? wrongCount : Math.max(0, total - actualCorrect)
  const actualUnanswered = Number.isFinite(unansweredCount) ? unansweredCount : 0
  const hasNegativeMarking = Number(negativeMarking || 0) > 0
  const rawNetScore = Number.isFinite(netScore) ? netScore : actualCorrect
  const percentage = total ? Math.round((rawNetScore / total) * 100) : 0
  const accuracyPercentage = total ? Math.round((actualCorrect / total) * 100) : 0
  const accuracyLabel = accuracyPercentage >= 80 ? 'Excellent' : accuracyPercentage >= 60 ? 'Good' : accuracyPercentage >= 40 ? 'Keep building' : 'Needs revision'

  let feedback = { text: 'Keep practicing!', color: 'text-rose-500', icon: 'fa-face-frown' }
  if (accuracyPercentage >= 80) feedback = { text: 'Excellent work!', color: 'text-emerald-500', icon: 'fa-face-laugh-beam' }
  else if (accuracyPercentage >= 60) feedback = { text: 'Good job!', color: 'text-primary-500', icon: 'fa-face-smile' }
  else if (accuracyPercentage >= 40) feedback = { text: 'Nice try, keep going!', color: 'text-amber-500', icon: 'fa-face-meh' }

  return (
    <div className="mx-auto max-w-2xl space-y-5">
      <div className="text-center">
        <p className="text-xs font-black uppercase tracking-widest text-primary-600 dark:text-primary-400">Quiz complete</p>
        <h1 className="mt-1 text-2xl font-extrabold">{title}</h1>
      </div>

      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-indigo-600 to-violet-700 p-6 text-center text-white shadow-xl">
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10" />
        <div className="relative">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-white/25 bg-white/10 text-2xl font-black backdrop-blur-sm">{percentage}%</div>
          <p className="mt-4 text-lg font-extrabold">{accuracyLabel}</p>
          {hasNegativeMarking ? (
            <>
              <p className="mt-1 text-sm text-white/85">Net score: <strong>{rawNetScore}</strong> / {total}</p>
              <p className="mt-1 text-xs text-white/65">{actualCorrect} correct · {actualWrong} wrong · {actualUnanswered} unanswered · −{negativeMarking} per wrong answer</p>
            </>
          ) : (
            <p className="mt-1 text-sm text-white/75">{actualCorrect} correct out of {total}</p>
          )}
          <p className="mt-3 text-sm font-bold text-white"><i className={`fas ${feedback.icon} mr-1`}></i>{feedback.text}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <Stat value={actualCorrect} label="Correct" tone="good" />
        <Stat value={actualWrong} label="Wrong" tone="bad" />
        <Stat value={actualUnanswered} label="Unanswered" />
      </div>

      <div className="card p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-bold">What to do next</p>
            <p className="mt-1 text-xs text-slate-400">Review mistakes before starting another quiz.</p>
          </div>
          <i className="fas fa-compass text-xl text-primary-500"></i>
        </div>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row">
        <button onClick={() => setShowReview(!showReview)} className="btn-outline flex-1 py-3"><i className="fas fa-list-check"></i> {showReview ? 'Hide' : 'Review'} Answers</button>
        <button onClick={() => navigate('/quiz')} className="btn-primary flex-1 py-3"><i className="fas fa-rotate"></i> Try Another Quiz</button>
      </div>

      {showReview && (
        <div className="space-y-3 animate-slide-up">
          <div className="flex items-center justify-between">
            <h2 className="section-title">Answer Review</h2>
            <span className="text-xs text-slate-400">{actualWrong + actualUnanswered} to revise</span>
          </div>
          {answers.map((a, idx) => {
            const correctIndex = Number.isInteger(a.correctIndex) ? a.correctIndex : getCorrectIndex(a.question)
            return (
              <div key={idx} className="card p-4">
                <div className="flex items-start gap-3">
                  <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${a.correct ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-300' : 'bg-rose-100 text-rose-500 dark:bg-rose-900/30 dark:text-rose-300'}`}>
                    {a.correct ? <i className="fas fa-check"></i> : <i className="fas fa-xmark"></i>}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold">{a.question.question}</p>
                    <div className="mt-2 space-y-1 text-xs">
                      <p className="text-slate-500">Your answer: <span className={a.correct ? 'font-semibold text-emerald-600' : 'font-semibold text-rose-500'}>{a.selected !== null ? `${OPTION_LABELS[a.selected]}. ${a.question.options[a.selected]}` : 'Not answered'}</span></p>
                      {!a.correct && <p className="text-slate-500">Correct answer: <span className="font-semibold text-emerald-600">{correctIndex >= 0 ? `${OPTION_LABELS[correctIndex]}. ${a.question.options[correctIndex]}` : 'Answer key unavailable'}</span></p>}
                      {a.timedOut && <p className="font-semibold text-amber-600 dark:text-amber-300">Timed out.</p>}
                      <p className="pt-1 leading-relaxed text-slate-400">{a.question.explanation}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

function Stat({ value, label, tone }) {
  const toneClass = tone === 'good'
    ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-300'
    : tone === 'bad'
      ? 'bg-rose-50 text-rose-500 dark:bg-rose-900/20 dark:text-rose-300'
      : 'bg-slate-50 text-slate-700 dark:bg-slate-800 dark:text-slate-200'

  return (
    <div className={`rounded-2xl p-4 text-center ${toneClass}`}>
      <p className="text-xl font-extrabold">{value}</p>
      <p className="mt-0.5 text-xs opacity-70">{label}</p>
    </div>
  )
}
