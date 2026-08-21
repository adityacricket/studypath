import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function QuizResult() {
  const location = useLocation()
  const navigate = useNavigate()
  const { answers, score, total, title } = location.state || {}
  const [showReview, setShowReview] = useState(false)

  if (!answers) {
    return (
      <div className="card p-8 text-center space-y-3">
        <p className="font-semibold">No result data found</p>
        <button onClick={() => navigate('/quiz')} className="btn-primary">Back to Quiz</button>
      </div>
    )
  }

  const percentage = Math.round((score / total) * 100)
  const wrong = total - score

  let feedback = { text: 'Keep practicing!', color: 'text-rose-500', icon: 'fa-face-frown' }
  if (percentage >= 80) feedback = { text: 'Excellent work!', color: 'text-emerald-500', icon: 'fa-face-laugh-beam' }
  else if (percentage >= 60) feedback = { text: 'Good job!', color: 'text-primary-500', icon: 'fa-face-smile' }
  else if (percentage >= 40) feedback = { text: 'Nice try, keep going!', color: 'text-amber-500', icon: 'fa-face-meh' }

  return (
    <div className="space-y-5 max-w-2xl mx-auto">
      <div className="card p-6 text-center space-y-3">
        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-extrabold">
          {percentage}%
        </div>
        <h2 className="text-xl font-extrabold">{title} - Complete!</h2>
        <p className={`text-sm font-medium ${feedback.color}`}>
          <i className={`fas ${feedback.icon} mr-1`}></i>{feedback.text}
        </p>
        <div className="grid grid-cols-3 gap-2 mt-4">
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-3">
            <p className="text-lg font-bold">{total}</p>
            <p className="text-xs text-slate-400">Total</p>
          </div>
          <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-3">
            <p className="text-lg font-bold text-emerald-600">{score}</p>
            <p className="text-xs text-slate-400">Correct</p>
          </div>
          <div className="bg-rose-50 dark:bg-rose-900/20 rounded-xl p-3">
            <p className="text-lg font-bold text-rose-500">{wrong}</p>
            <p className="text-xs text-slate-400">Wrong</p>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button onClick={() => setShowReview(!showReview)} className="btn-outline flex-1">
          <i className="fas fa-list"></i> {showReview ? 'Hide' : 'Review'} Answers
        </button>
        <button onClick={() => navigate('/quiz')} className="btn-primary flex-1">
          <i className="fas fa-rotate"></i> Try Another Quiz
        </button>
      </div>

      {showReview && (
        <div className="space-y-3 animate-slide-up">
          {answers.map((a, idx) => (
            <div key={idx} className="card p-4">
              <div className="flex items-start gap-2 mb-2">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${a.correct ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-500'}`}>
                  <i className={`fas ${a.correct ? 'fa-check' : 'fa-xmark'}`}></i>
                </span>
                <p className="text-sm font-medium">{a.question.question}</p>
              </div>
              <div className="ml-8 space-y-1 text-xs">
                <p className="text-slate-500">
                  Your answer: <span className={a.correct ? 'text-emerald-600 font-medium' : 'text-rose-500 font-medium'}>{a.selected !== null ? a.question.options[a.selected] : 'Not answered'}</span>
                </p>
                {!a.correct && (
                  <p className="text-slate-500">Correct answer: <span className="text-emerald-600 font-medium">{a.question.options[a.question.answer]}</span></p>
                )}
                <p className="text-slate-400 mt-1">{a.question.explanation}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
