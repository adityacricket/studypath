import React, { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getResourceById } from '../data/resources.js'
import { chapterData } from '../data/chapterData.js'

const handwriting = 'Kalam, "Segoe Print", "Comic Sans MS", cursive'

function Highlight({ children, tone = 'yellow' }) {
  const tones = {
    yellow: 'bg-yellow-200/80 -rotate-1',
    pink: 'bg-pink-200/75 rotate-1',
    blue: 'bg-blue-200/75 -rotate-[0.5deg]',
    green: 'bg-emerald-200/75 rotate-[0.5deg]',
  }

  return (
    <span className={`inline px-1.5 py-0.5 ${tones[tone] || tones.yellow}`}>
      {children}
    </span>
  )
}

function NoteCard({ title, emoji, children, tone = 'blue' }) {
  const tones = {
    blue: 'border-sky-300 bg-sky-50/65',
    green: 'border-emerald-300 bg-emerald-50/65',
    yellow: 'border-amber-300 bg-amber-50/70',
    pink: 'border-pink-300 bg-pink-50/65',
    purple: 'border-violet-300 bg-violet-50/65',
    orange: 'border-orange-300 bg-orange-50/65',
    red: 'border-rose-300 bg-rose-50/65',
  }

  return (
    <section className={`relative rounded-2xl border-2 border-dashed p-5 shadow-[2px_3px_0_rgba(15,23,42,0.05)] ${tones[tone] || tones.blue}`}>
      <div className="mb-3 flex items-center gap-2">
        <span className="text-xl">{emoji}</span>
        <h3
          className="text-lg font-black text-slate-800"
          style={{ fontFamily: handwriting }}
        >
          {title}
        </h3>
      </div>
      {children}
    </section>
  )
}

export default function ResourceViewer() {
  const { resourceId } = useParams()
  const navigate = useNavigate()
  const resource = getResourceById(resourceId)
  const chapter = chapterData[resourceId]
  const [page, setPage] = useState(1)
  const [showAnswers, setShowAnswers] = useState(false)

  const pages = useMemo(() => {
    if (chapter?.pages?.length) return chapter.pages
    return [{
      page: 1,
      section: 'Study Note',
      title: resource?.title || 'Study Note',
      intro: 'This resource is available as a StudyPath learning note.',
      keyPoints: resource?.content || [],
    }]
  }, [chapter, resource])

  if (!resource) {
    return (
      <div className="min-h-screen bg-slate-100 p-6">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 text-center shadow">
          <div className="text-5xl">📚</div>
          <h1 className="mt-4 text-2xl font-black text-slate-900">Resource not found</h1>
          <button
            onClick={() => navigate('/resources')}
            className="mt-5 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white"
          >
            ← Back to Resources
          </button>
        </div>
      </div>
    )
  }

  const current = pages[page - 1]
  const progress = Math.round((page / pages.length) * 100)
  const answerList = current.answers || []
  const practiceList = current.practice || current.questions || []

  const goToPage = (next) => {
    setPage(next)
    setShowAnswers(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-slate-100 px-2 py-3 md:px-6 md:py-6">
      <div
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] border border-slate-200 bg-[#fffef8] shadow-[0_18px_50px_rgba(15,23,42,0.12)]"
        style={{
          backgroundImage: [
            'linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px)',
            'linear-gradient(to bottom, rgba(148,163,184,0.10) 1px, transparent 1px)',
          ].join(','),
          backgroundSize: '28px 100%, 100% 28px',
        }}
      >
        <div className="pointer-events-none absolute left-0 top-0 h-full w-9 border-r border-red-200/70 bg-red-50/20" />
        <div className="pointer-events-none absolute right-4 top-8 rotate-[-7deg] rounded-lg border-2 border-slate-300/60 px-3 py-1 text-[10px] font-black tracking-[0.28em] text-slate-400/70">
          STUDYPATH • STUDY COPY
        </div>
        <div className="pointer-events-none absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 rotate-[-24deg] select-none whitespace-nowrap text-[55px] font-black tracking-[0.35em] text-slate-900/[0.025] md:text-[110px]">
          STUDYPATH
        </div>

        <div className="relative z-10 pl-7 md:pl-10">
          <header className="border-b-2 border-slate-200/80 bg-[#fffef8]/90 px-5 py-5 backdrop-blur md:px-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => navigate('/resources')}
                className="text-sm font-black text-slate-500 hover:text-indigo-600"
              >
                ← Resources
              </button>

              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-black text-indigo-700">
                  {chapter?.subject || 'StudyPath'}
                </span>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-700">
                  FREE
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">
                  {page} / {pages.length}
                </span>
              </div>
            </div>

            <div className="mt-5">
              <div className="text-xs font-black uppercase tracking-[0.22em] text-indigo-600">
                ✦ Teacher-style study notes
              </div>
              <h1
                className="mt-1 text-4xl font-black leading-tight text-slate-900 md:text-6xl"
                style={{ fontFamily: handwriting }}
              >
                {chapter?.chapter || resource.title}
              </h1>
              <p className="mt-2 max-w-3xl text-sm font-semibold leading-6 text-slate-500">
                Learn the idea → see how a teacher solves it → remember the shortcut → practise it yourself.
              </p>
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full rounded-full bg-indigo-500 transition-all" style={{ width: `${progress}%` }} />
            </div>
          </header>

          <main className="px-5 py-6 md:px-8 md:py-8">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-black uppercase tracking-[0.16em] text-indigo-600">
                  {current.section}
                </div>
                <h2
                  className="mt-1 text-3xl font-black leading-tight text-slate-900 md:text-4xl"
                  style={{ fontFamily: handwriting }}
                >
                  {current.title}
                </h2>
              </div>

              <div className="hidden -rotate-2 rounded-xl border-2 border-dashed border-slate-300 bg-white/80 px-4 py-2 text-center md:block">
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Page</div>
                <div className="text-2xl font-black text-slate-800">{current.page}</div>
              </div>
            </div>

            {current.intro && (
              <NoteCard title="Samjho pehle" emoji="💡" tone="blue">
                <p className="text-[15px] leading-8 text-slate-700">
                  {current.intro}
                </p>
              </NoteCard>
            )}

            {current.formula && (
              <div className="relative my-5 -rotate-[0.4deg] rounded-2xl border-2 border-indigo-300 bg-indigo-50/80 p-5 shadow-[3px_4px_0_rgba(79,70,229,0.08)]">
                <div className="text-xs font-black uppercase tracking-widest text-indigo-600">⭐ Formula to remember</div>
                <div
                  className="mt-3 text-center text-2xl font-black leading-relaxed text-indigo-900 md:text-3xl"
                  style={{ fontFamily: handwriting }}
                >
                  {current.formula}
                </div>
              </div>
            )}

            {current.keyPoints?.length > 0 && (
              <NoteCard title="Class Notes" emoji="📚" tone="green">
                <div className="space-y-3">
                  {current.keyPoints.map((point, i) => (
                    <div key={i} className="flex gap-3 text-[15px] leading-8 text-slate-700">
                      <span className="mt-2 text-emerald-600">✦</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </NoteCard>
            )}

            {current.example && (
              <NoteCard title="Teacher Example — step by step" emoji="✍️" tone="yellow">
                <div className="rounded-xl bg-white/75 p-4 text-[15px] leading-8 text-slate-700">
                  <div className="mb-2 text-sm font-black text-amber-700">Q.</div>
                  {current.example}
                </div>
              </NoteCard>
            )}

            {current.method?.length > 0 && (
              <NoteCard title="How I would solve it in the exam" emoji="🧠" tone="purple">
                <div className="space-y-3">
                  {current.method.map((step, i) => (
                    <div key={i} className="relative flex gap-3 text-[15px] leading-8 text-slate-700">
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-violet-300 bg-white font-black text-violet-700"
                        style={{ fontFamily: handwriting }}
                      >
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </NoteCard>
            )}

            {current.shortcut && (
              <NoteCard title="Shortcut / Smart Trick" emoji="⚡" tone="yellow">
                <p className="text-[15px] leading-8 text-slate-700">
                  <Highlight tone="yellow">{current.shortcut}</Highlight>
                </p>
              </NoteCard>
            )}

            {current.memory && (
              <NoteCard title="Yaad kaise rakho?" emoji="🧠" tone="pink">
                <p
                  className="text-xl font-black leading-9 text-slate-800"
                  style={{ fontFamily: handwriting }}
                >
                  {current.memory}
                </p>
              </NoteCard>
            )}

            {current.commonMistake && (
              <NoteCard title="Teacher Alert — yahan students phaste hain" emoji="🚨" tone="red">
                <p className="text-[15px] leading-8 text-slate-700">
                  <Highlight tone="pink">{current.commonMistake}</Highlight>
                </p>
              </NoteCard>
            )}

            {current.warning && (
              <NoteCard title="Exam Trap" emoji="⚠️" tone="orange">
                <p className="text-[15px] leading-8 text-slate-700">{current.warning}</p>
              </NoteCard>
            )}

            {current.examFocus && (
              <NoteCard title="Exam mein kya poocha ja sakta hai?" emoji="🎯" tone="purple">
                <p className="text-[15px] leading-8 text-slate-700">{current.examFocus}</p>
              </NoteCard>
            )}

            {practiceList.length > 0 && (
              <NoteCard title="Ab tum solve karo" emoji="✏️" tone="blue">
                <div className="space-y-3">
                  {practiceList.map((question, i) => (
                    <div key={i} className="rounded-xl border border-slate-200 bg-white/80 p-4 text-[15px] leading-8 text-slate-700">
                      <span className="mr-2 font-black text-indigo-600">{i + 1}.</span>
                      {question}
                    </div>
                  ))}
                </div>

                {answerList.length > 0 && (
                  <div className="mt-4">
                    <button
                      onClick={() => setShowAnswers((value) => !value)}
                      className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-black text-white"
                    >
                      {showAnswers ? 'Hide Answers' : 'Reveal Answers'}
                    </button>

                    {showAnswers && (
                      <div className="mt-3 rounded-xl border border-emerald-300 bg-emerald-50/70 p-4">
                        {answerList.map((answer, i) => (
                          <div key={i} className="py-1.5 text-sm font-semibold text-slate-700">
                            {i + 1}. {answer}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </NoteCard>
            )}

            {current.mistakes?.length > 0 && (
              <NoteCard title="10-second revision" emoji="⏱️" tone="green">
                <div className="grid gap-2 md:grid-cols-2">
                  {current.mistakes.map((mistake, i) => (
                    <div key={i} className="rounded-xl bg-white/80 p-3 text-sm leading-7 text-slate-700">
                      ✕ {mistake}
                    </div>
                  ))}
                </div>
              </NoteCard>
            )}

            {current.memoryMap?.length > 0 && (
              <NoteCard title="One-page memory map" emoji="🗺️" tone="pink">
                <div className="grid gap-3 md:grid-cols-2">
                  {current.memoryMap.map((item, i) => (
                    <div key={i} className="rounded-xl border border-pink-200 bg-white/80 p-4 text-sm font-bold leading-7 text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
              </NoteCard>
            )}

            {current.finalTip && (
              <NoteCard title="Teacher's last advice" emoji="⭐" tone="yellow">
                <p
                  className="text-xl font-black leading-9 text-slate-800"
                  style={{ fontFamily: handwriting }}
                >
                  {current.finalTip}
                </p>
              </NoteCard>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-bold text-slate-400">
              <span>✎ Learn</span>
              <span>→</span>
              <span>Practice</span>
              <span>→</span>
              <span>Recall</span>
              <span>→</span>
              <span>Revise</span>
            </div>
          </main>

          <footer className="border-t-2 border-slate-200/80 bg-[#fffef8]/95 px-5 py-5 md:px-8">
            <div className="mb-4 flex items-center justify-between text-xs font-black text-slate-400">
              <span>{progress}% chapter complete</span>
              <span>StudyPath Notes</span>
            </div>

            <div className="flex items-center justify-between gap-3">
              <button
                disabled={page === 1}
                onClick={() => goToPage(Math.max(1, page - 1))}
                className="rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm font-black text-slate-700 disabled:cursor-not-allowed disabled:opacity-35"
              >
                ← Previous
              </button>

              <div
                className="hidden text-sm font-black text-slate-400 md:block"
                style={{ fontFamily: handwriting }}
              >
                Keep going — page {page}!
              </div>

              <button
                disabled={page === pages.length}
                onClick={() => goToPage(Math.min(pages.length, page + 1))}
                className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-black text-white disabled:cursor-not-allowed disabled:opacity-35"
              >
                Next Page →
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
