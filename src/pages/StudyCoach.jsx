import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { chapterData } from '../data/chapterData.js'
import { resources } from '../data/resources.js'
import { useApp } from '../context/AppContext.jsx'

function daysSince(date) {
  if (!date) return Infinity
  return Math.floor((Date.now() - new Date(date).getTime()) / 86400000)
}

export default function StudyCoach() {
  const { profile, progress, quizHistory, mistakes, chapterProgress, completeStudySession, fixMistake } = useApp()
  const [sessionStarted, setSessionStarted] = useState(false)

  const nextChapter = useMemo(() => {
    const available = Object.entries(chapterData)
    const unfinished = available.find(([id]) => !chapterProgress[id]?.completed)
    if (unfinished) {
      const [id, chapter] = unfinished
      return { id, title: chapter.chapter, subject: chapter.subject }
    }
    return null
  }, [chapterProgress])

  const recentMistakes = mistakes
    .filter((m) => !m.fixedAt)
    .slice(0, 3)

  const weakTopics = useMemo(() => {
    const counts = {}
    mistakes.filter((m) => !m.fixedAt).forEach((m) => {
      const key = m.topic || 'General'
      counts[key] = (counts[key] || 0) + 1
    })
    return Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 5)
  }, [mistakes])

  const lastQuiz = quizHistory[0]
  const revisionDue = Object.entries(chapterProgress)
    .map(([id, value]) => ({ id, ...value }))
    .filter((item) => item.lastViewedAt && daysSince(item.lastViewedAt) >= 3 && !item.completed)
    .slice(0, 3)

  const startSession = () => {
    setSessionStarted(true)
    completeStudySession(0.5, 'Study Coach', nextChapter?.title || 'Revision')
  }

  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-gradient-to-br from-indigo-700 via-primary-600 to-violet-600 p-6 text-white shadow-lg">
        <p className="text-sm font-bold text-white/75">TODAY'S STUDY COACH</p>
        <h1 className="mt-1 text-3xl font-black">Ready when you are, {profile.name} 👋</h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-white/80">
          No more guessing what to study. StudyPath turns your progress and mistakes into your next best action.
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <button onClick={startSession} className="rounded-xl bg-white px-5 py-3 text-sm font-black text-indigo-700 shadow-sm">
            {sessionStarted ? 'Session Started ✓' : 'Start 30-Min Study Session'}
          </button>
          <div className="rounded-xl bg-white/15 px-4 py-3 text-sm font-bold backdrop-blur">
            🔥 {progress.streakDays || 0} day streak
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="card p-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-black uppercase tracking-wider text-indigo-500">Next best topic</p>
              <h2 className="mt-1 text-lg font-black">{nextChapter?.title || 'Keep revising your saved topics'}</h2>
              <p className="mt-1 text-sm text-slate-500">{nextChapter?.subject || 'Your revision queue is clear.'}</p>
            </div>
            <span className="text-3xl">📘</span>
          </div>

          {nextChapter ? (
            <Link to={`/resources/${nextChapter.id}`} className="btn-primary mt-4 w-full">
              Start Learning
            </Link>
          ) : (
            <Link to="/resources" className="btn-secondary mt-4 w-full">
              Open Resources
            </Link>
          )}
        </div>

        <div className="card p-5">
          <p className="text-xs font-black uppercase tracking-wider text-rose-500">Your biggest leak</p>
          {weakTopics.length ? (
            <div className="mt-3 space-y-2">
              {weakTopics.map(([topic, count]) => (
                <div key={topic} className="flex items-center justify-between rounded-xl bg-rose-50 px-3 py-2 text-sm dark:bg-rose-900/20">
                  <span className="font-semibold">{topic}</span>
                  <span className="font-black text-rose-600">{count} mistakes</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-3 text-sm text-slate-500">No repeated mistakes yet. Your mistake bank will learn as you practise.</p>
          )}
        </div>
      </div>

      <div className="card p-5">
        <div className="flex items-center justify-between">
          <h2 className="section-title">Fix these mistakes</h2>
          <Link to="/dashboard" className="text-xs font-bold text-primary-600">Open Dashboard →</Link>
        </div>

        {recentMistakes.length === 0 ? (
          <p className="mt-3 text-sm text-slate-500">Your mistake bank is empty. Take a quiz to build it.</p>
        ) : (
          <div className="mt-4 space-y-3">
            {recentMistakes.map((mistake) => (
              <div key={mistake.id} className="rounded-2xl border border-rose-200 bg-rose-50/60 p-4 dark:bg-rose-900/10">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-bold text-slate-800 dark:text-slate-100">{mistake.question || mistake.note}</p>
                    <p className="mt-1 text-xs font-semibold text-rose-600">{mistake.topic || 'General'} • {mistake.type}</p>
                  </div>
                  <button onClick={() => fixMistake(mistake.id)} className="rounded-lg bg-white px-3 py-2 text-xs font-black text-emerald-600 shadow-sm">
                    Mark Fixed
                  </button>
                </div>
                {mistake.explanation && (
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{mistake.explanation}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="card p-5">
          <p className="text-xs font-black uppercase tracking-wider text-amber-500">Revision due</p>
          {revisionDue.length ? (
            <div className="mt-3 space-y-2">
              {revisionDue.map((item) => {
                const r = resources.find((resource) => resource.id === item.id)
                return (
                  <Link key={item.id} to={`/resources/${item.id}`} className="block rounded-xl bg-amber-50 p-3 text-sm font-semibold hover:bg-amber-100 dark:bg-amber-900/20">
                    {r?.title || item.id}
                  </Link>
                )
              })}
            </div>
          ) : (
            <p className="mt-3 text-sm text-slate-500">No overdue chapter revisions.</p>
          )}
        </div>

        <div className="card p-5">
          <p className="text-xs font-black uppercase tracking-wider text-emerald-500">Latest performance</p>
          {lastQuiz ? (
            <>
              <p className="mt-2 text-3xl font-black">{Math.round((lastQuiz.score / lastQuiz.total) * 100)}%</p>
              <p className="text-sm text-slate-500">{lastQuiz.title} • {lastQuiz.score}/{lastQuiz.total}</p>
            </>
          ) : (
            <p className="mt-3 text-sm text-slate-500">Take your first quiz and your coach will start learning your strengths.</p>
          )}
        </div>
      </div>
    </div>
  )
}
