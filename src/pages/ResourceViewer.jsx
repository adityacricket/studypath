import React, { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getResourceById } from '../data/resources.js'
import { chapterBooks } from '../data/chapterBooks.js'

const handwriting = 'Kalam, "Segoe Print", "Comic Sans MS", cursive'

const tones = {
  blue: 'border-sky-300 bg-sky-50/70',
  green: 'border-emerald-300 bg-emerald-50/70',
  yellow: 'border-amber-300 bg-amber-50/75',
  pink: 'border-pink-300 bg-pink-50/70',
  purple: 'border-violet-300 bg-violet-50/70',
  orange: 'border-orange-300 bg-orange-50/70',
  red: 'border-rose-300 bg-rose-50/70',
}

function Card({ title, emoji, children, tone = 'blue' }) {
  return (
    <section className={`rounded-2xl border-2 border-dashed p-5 shadow-[3px_4px_0_rgba(15,23,42,0.04)] ${tones[tone] || tones.blue}`}>
      <div className="mb-3 flex items-center gap-2">
        <span className="text-xl">{emoji}</span>
        <h3 className="text-lg font-black text-slate-800" style={{ fontFamily: handwriting }}>
          {title}
        </h3>
      </div>
      {children}
    </section>
  )
}

function Lines({ items, ordered = false }) {
  if (!items?.length) return null
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className="flex gap-3 text-[15px] leading-8 text-slate-700">
          <span className="mt-2 shrink-0 font-black text-emerald-600">
            {ordered ? `${index + 1}.` : '✦'}
          </span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  )
}

export default function ResourceViewer() {
  const { resourceId } = useParams()
  const navigate = useNavigate()
  const resource = getResourceById(resourceId)
  const book = chapterBooks[resourceId]
  const [page, setPage] = useState(1)
  const [showAnswers, setShowAnswers] = useState(false)

  const pages = useMemo(() => {
    if (book?.pages?.length) return book.pages
    return [{
      page: 1,
      section: 'Study Note',
      title: resource?.title || 'Study Note',
      explanation: 'This resource is available as an original StudyPath note.',
      board: resource?.content || [],
    }]
  }, [book, resource])

  if (!resource) {
    return (
      <div className="min-h-screen bg-slate-100 p-6">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 text-center shadow">
          <div className="text-5xl">📚</div>
          <h1 className="mt-4 text-2xl font-black text-slate-900">Resource not found</h1>
          <button onClick={() => navigate('/resources')} className="mt-5 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white">
            ← Back to Resources
          </button>
        </div>
      </div>
    )
  }

  const current = pages[page - 1]
  const progress = Math.round((page / pages.length) * 100)
  const practice = current.practice || current.questions || []
  const answers = current.answers || []

  const goToPage = (nextPage) => {
    setPage(nextPage)
    setShowAnswers(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-slate-100 px-2 py-3 md:px-6 md:py-6">
      <div
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] border border-slate-200 bg-[#fffef8] shadow-[0_18px_50px_rgba(15,23,42,0.12)]"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.10) 1px, transparent 1px)',
          backgroundSize: '28px 100%, 100% 28px',
        }}
      >
        <div className="pointer-events-none absolute left-0 top-0 h-full w-9 border-r border-red-200/70 bg-red-50/20" />
        <div className="pointer-events-none absolute right-4 top-7 rotate-[-7deg] rounded-lg border-2 border-slate-300/60 px-3 py-1 text-[10px] font-black tracking-[0.28em] text-slate-400/70">
          STUDYPATH • STUDY COPY
        </div>
        <div className="pointer-events-none absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 rotate-[-24deg] select-none whitespace-nowrap text-[58px] font-black tracking-[0.35em] text-slate-900/[0.025] md:text-[110px]">
          STUDYPATH
        </div>

        <div className="relative z-10 pl-7 md:pl-10">
          <header className="border-b-2 border-slate-200/80 bg-[#fffef8]/95 px-5 py-5 md:px-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <button onClick={() => navigate('/resources')} className="text-sm font-black text-slate-500 hover:text-indigo-600">
                ← Resources
              </button>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-black text-indigo-700">
                  {book?.subject || 'StudyPath'}
                </span>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-700">FREE</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">Page {page} / {pages.length}</span>
              </div>
            </div>

            <div className="mt-5">
              <div className="text-xs font-black uppercase tracking-[0.22em] text-indigo-600">✦ Original teacher-style study book</div>
              <h1 className="mt-1 text-4xl font-black leading-tight text-slate-900 md:text-6xl" style={{ fontFamily: handwriting }}>
                {book?.chapter || resource.title}
              </h1>
              <p className="mt-2 max-w-4xl text-sm font-semibold leading-7 text-slate-500">
                {book?.audience || 'Learn the idea → understand why → solve with method → practise → recall.'}
              </p>
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full rounded-full bg-indigo-500 transition-all" style={{ width: `${progress}%` }} />
            </div>
          </header>

          <main className="space-y-5 px-5 py-6 md:px-8 md:py-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-black uppercase tracking-[0.16em] text-indigo-600">{current.section}</div>
                <h2 className="mt-1 text-3xl font-black leading-tight text-slate-900 md:text-5xl" style={{ fontFamily: handwriting }}>
                  {current.title}
                </h2>
              </div>
              <div className="hidden -rotate-2 rounded-xl border-2 border-dashed border-slate-300 bg-white/85 px-4 py-2 text-center md:block">
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Page</div>
                <div className="text-2xl font-black text-slate-800">{current.page}</div>
              </div>
            </div>

            {current.explanation && (
              <Card title="Teacher explains it like this" emoji="🧑‍🏫" tone="blue">
                <p className="text-[16px] leading-8 text-slate-700">{current.explanation}</p>
              </Card>
            )}

            {current.board?.length > 0 && (
              <Card title="Class notebook — write this down" emoji="📓" tone="green">
                <Lines items={current.board} />
              </Card>
            )}

            {current.formula && (
              <Card title="Formula — but understand the words" emoji="⭐" tone="purple">
                <div className="rounded-xl bg-white/85 p-5 text-center">
                  <div className="text-2xl font-black leading-relaxed text-indigo-900 md:text-3xl" style={{ fontFamily: handwriting }}>
                    {current.formula}
                  </div>
                </div>
              </Card>
            )}

            {current.steps?.length > 0 && (
              <Card title="Teacher method — step by step" emoji="✍️" tone="yellow">
                <Lines items={current.steps} ordered />
              </Card>
            )}

            {current.workedExample && (
              <Card title="Solved example — follow the thinking" emoji="🧮" tone="yellow">
                <div className="rounded-xl bg-white/85 p-5">
                  <div className="mb-2 text-sm font-black text-amber-700">QUESTION / SOLUTION</div>
                  <p className="text-[16px] leading-8 text-slate-700">{current.workedExample}</p>
                </div>
              </Card>
            )}

            {current.teacherTip && (
              <Card title="Teacher says — important" emoji="🟡" tone="pink">
                <p className="text-[16px] leading-8 text-slate-700" style={{ fontFamily: handwriting }}>{current.teacherTip}</p>
              </Card>
            )}

            {current.examTrap && (
              <Card title="Exam trap — do not make this mistake" emoji="🚨" tone="red">
                <p className="text-[16px] leading-8 text-slate-700">{current.examTrap}</p>
              </Card>
            )}

            {current.practice?.length > 0 && (
              <Card title="Now close the notes and solve" emoji="✏️" tone="blue">
                <div className="space-y-3">
                  {current.practice.map((question, index) => (
                    <div key={index} className="rounded-xl border border-slate-200 bg-white/85 p-4 text-[15px] leading-8 text-slate-700">
                      <span className="mr-2 font-black text-indigo-600">{index + 1}.</span>{question}
                    </div>
                  ))}
                </div>
                {answers.length > 0 && (
                  <div className="mt-4">
                    <button onClick={() => setShowAnswers((value) => !value)} className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-black text-white">
                      {showAnswers ? 'Hide Answers' : 'Reveal Answers'}
                    </button>
                    {showAnswers && (
                      <div className="mt-3 rounded-xl border border-emerald-300 bg-emerald-50/80 p-4">
                        {answers.map((answer, index) => <div key={index} className="py-1.5 text-sm font-semibold text-slate-700">{index + 1}. {answer}</div>)}
                      </div>
                    )}
                  </div>
                )}
              </Card>
            )}

            {current.questions?.length > 0 && (
              <Card title="Exam practice — mixed application" emoji="🎯" tone="orange">
                <div className="space-y-3">
                  {current.questions.map((question, index) => (
                    <div key={index} className="rounded-xl border border-slate-200 bg-white/85 p-4 text-[15px] leading-8 text-slate-700">{question}</div>
                  ))}
                </div>
                {answers.length > 0 && (
                  <button onClick={() => setShowAnswers((value) => !value)} className="mt-4 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-black text-white">
                    {showAnswers ? 'Hide Answers' : 'Reveal Answers'}
                  </button>
                )}
                {showAnswers && answers.length > 0 && (
                  <div className="mt-3 rounded-xl border border-emerald-300 bg-emerald-50/80 p-4">
                    {answers.map((answer, index) => <div key={index} className="py-1.5 text-sm font-semibold text-slate-700">{index + 1}. {answer}</div>)}
                  </div>
                )}
              </Card>
            )}

            {current.quickCheck?.length > 0 && (
              <Card title="Quick recall — answer without looking back" emoji="🧠" tone="green">
                <Lines items={current.quickCheck} />
              </Card>
            )}

            {current.finalTip && (
              <Card title="Last line from the teacher" emoji="⭐" tone="yellow">
                <p className="text-xl font-black leading-9 text-slate-800" style={{ fontFamily: handwriting }}>{current.finalTip}</p>
              </Card>
            )}

            <div className="flex flex-wrap items-center gap-2 text-xs font-black text-slate-400">
              <span>✎ Understand</span><span>→</span><span>See method</span><span>→</span><span>Solve</span><span>→</span><span>Recall</span><span>→</span><span>Revise</span>
            </div>
          </main>

          <footer className="border-t-2 border-slate-200/80 bg-[#fffef8]/95 px-5 py-5 md:px-8">
            <div className="mb-4 flex items-center justify-between text-xs font-black text-slate-400">
              <span>{progress}% chapter complete</span>
              <span>StudyPath Study Book</span>
            </div>
            <div className="flex items-center justify-between gap-3">
              <button disabled={page === 1} onClick={() => goToPage(Math.max(1, page - 1))} className="rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm font-black text-slate-700 disabled:opacity-35">
                ← Previous
              </button>
              <div className="hidden text-sm font-black text-slate-400 md:block" style={{ fontFamily: handwriting }}>Keep going — page {page}!</div>
              <button disabled={page === pages.length} onClick={() => goToPage(Math.min(pages.length, page + 1))} className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-black text-white disabled:opacity-35">
                Next Page →
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
