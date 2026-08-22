import React, { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getResourceById } from '../data/resources.js'
import { chapterBooks } from '../data/chapterBooks.js'
import { percentagePremiumBook } from '../data/percentagePremiumBook.js'

const handwriting = 'Kalam, "Segoe Print", cursive'

const bookOverrides = {
  'formula-percentage': percentagePremiumBook,
}

function NotebookRule({ children }) {
  return <div className="relative pl-7 text-[15px] leading-8 text-slate-700 before:absolute before:left-0 before:top-[0.95rem] before:h-1.5 before:w-1.5 before:rounded-full before:bg-indigo-500">{children}</div>
}

function SectionLabel({ children }) {
  return <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white">{children}</div>
}

function PaperSection({ title, children, accent = 'indigo' }) {
  const accents = {
    indigo: 'border-indigo-300 bg-indigo-50/55',
    green: 'border-emerald-300 bg-emerald-50/50',
    yellow: 'border-amber-300 bg-amber-50/55',
    pink: 'border-pink-300 bg-pink-50/45',
    red: 'border-rose-300 bg-rose-50/45',
    purple: 'border-violet-300 bg-violet-50/50',
  }
  return (
    <section className={`rounded-[22px] border ${accents[accent] || accents.indigo} p-5 md:p-6`}>
      <h3 className="text-lg font-black text-slate-900 md:text-xl" style={{ fontFamily: handwriting }}>{title}</h3>
      <div className="mt-4">{children}</div>
    </section>
  )
}

export default function ResourceViewer() {
  const { resourceId } = useParams()
  const navigate = useNavigate()
  const resource = getResourceById(resourceId)
  const fallbackBook = chapterBooks[resourceId]
  const book = bookOverrides[resourceId] || fallbackBook
  const [page, setPage] = useState(1)
  const [showAnswers, setShowAnswers] = useState(false)

  const pages = useMemo(() => {
    if (book?.pages?.length) return book.pages
    return [{
      page: 1,
      section: 'Study Note',
      title: resource?.title || 'Study Note',
      concept: 'This resource is available as an original StudyPath note.',
      board: resource?.content || [],
    }]
  }, [book, resource])

  if (!resource) {
    return (
      <div className="min-h-screen bg-slate-100 p-6">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 text-center shadow">
          <div className="text-5xl">📚</div>
          <h1 className="mt-4 text-2xl font-black text-slate-900">Resource not found</h1>
          <button onClick={() => navigate('/resources')} className="mt-5 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white">← Back to Resources</button>
        </div>
      </div>
    )
  }

  const current = pages[page - 1]
  const progress = Math.round((page / pages.length) * 100)
  const practice = current.practice || current.questions || []
  const answers = current.answers || []
  const board = current.teacherBoard || current.board || current.keyPoints || []

  const goToPage = (nextPage) => {
    setPage(nextPage)
    setShowAnswers(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#edf0f3] px-2 py-3 md:px-6 md:py-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[30px] border border-slate-300/80 bg-[#fffdf7] shadow-[0_22px_70px_rgba(15,23,42,0.14)]">
        <div
          className="relative"
          style={{
            backgroundImage: 'linear-gradient(to right, transparent 0, transparent 52px, rgba(220,38,38,0.16) 52px, rgba(220,38,38,0.16) 54px, transparent 54px), linear-gradient(to bottom, rgba(148,163,184,0.09) 1px, transparent 1px)',
            backgroundSize: '100% 100%, 100% 30px',
          }}
        >
          <div className="pointer-events-none absolute left-3 top-0 h-full w-10 opacity-60">
            {[...Array(28)].map((_, i) => <div key={i} className="my-8 h-1.5 w-1.5 rounded-full bg-slate-300" />)}
          </div>
          <div className="pointer-events-none absolute right-6 top-7 rotate-[-6deg] text-[11px] font-black tracking-[0.25em] text-slate-400/65">STUDYPATH • ORIGINAL NOTES</div>

          <header className="relative z-10 border-b border-slate-200 bg-[#fffdf7]/94 px-7 py-7 md:px-12 md:py-9">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <button onClick={() => navigate('/resources')} className="text-sm font-black text-slate-500 hover:text-indigo-600">← Back to Resources</button>
              <div className="flex items-center gap-2 text-[11px] font-black">
                <span className="rounded-full bg-indigo-100 px-3 py-1.5 text-indigo-700">{book?.subject || 'StudyPath'}</span>
                <span className="rounded-full bg-emerald-100 px-3 py-1.5 text-emerald-700">FREE</span>
                <span className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-600">{page}/{pages.length}</span>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <div className="text-[11px] font-black uppercase tracking-[0.25em] text-indigo-600">StudyPath Study Book</div>
                <h1 className="mt-2 text-4xl font-black leading-[0.98] text-slate-950 md:text-6xl" style={{ fontFamily: handwriting }}>{book?.chapter || resource.title}</h1>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">{book?.audience || 'Understand → practise → recall → revise.'}</p>
              </div>
              <div className="-rotate-2 rounded-2xl border-2 border-dashed border-indigo-300 bg-indigo-50 px-5 py-4 text-center">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-500">Chapter Progress</div>
                <div className="mt-1 text-3xl font-black text-indigo-800">{progress}%</div>
              </div>
            </div>

            <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full rounded-full bg-indigo-600 transition-all" style={{ width: `${progress}%` }} />
            </div>
          </header>

          <main className="relative z-10 space-y-6 px-7 py-7 md:px-12 md:py-10">
            <div className="flex items-end justify-between gap-5">
              <div>
                <SectionLabel>{current.section}</SectionLabel>
                <h2 className="text-3xl font-black leading-tight text-slate-950 md:text-5xl" style={{ fontFamily: handwriting }}>{current.title}</h2>
              </div>
              <div className="hidden md:block">
                <div className="rotate-3 rounded-xl border border-slate-300 bg-white/80 px-4 py-3 text-center shadow-sm">
                  <div className="text-[9px] font-black uppercase tracking-widest text-slate-400">Page</div>
                  <div className="text-2xl font-black text-slate-800">{current.page}</div>
                </div>
              </div>
            </div>

            {current.concept && (
              <PaperSection title="Understand this first" accent="blue">
                <p className="text-[16px] leading-8 text-slate-700 md:text-[17px]">{current.concept}</p>
              </PaperSection>
            )}

            {board.length > 0 && (
              <PaperSection title="Write this in your notebook" accent="green">
                <div className="space-y-2">
                  {board.map((item, index) => <NotebookRule key={index}>{item}</NotebookRule>)}
                </div>
              </PaperSection>
            )}

            {current.formula && (
              <div className="relative rounded-[24px] border-2 border-indigo-300 bg-indigo-50/55 px-6 py-6 md:px-10">
                <div className="absolute right-5 top-4 rotate-3 rounded-md border-2 border-amber-300 bg-amber-50 px-2 py-1 text-[9px] font-black uppercase tracking-widest text-amber-700">Remember</div>
                <div className="text-[11px] font-black uppercase tracking-[0.2em] text-indigo-600">Formula</div>
                <div className="mt-4 overflow-x-auto text-center text-2xl font-black leading-relaxed text-indigo-950 md:text-4xl" style={{ fontFamily: handwriting }}>{current.formula}</div>
                <div className="mx-auto mt-4 max-w-xl text-center text-xs font-semibold text-slate-500">Do not memorise the line until you can explain what every symbol and base means.</div>
              </div>
            )}

            {current.workedExample && (
              <PaperSection title="Teacher example — think before you calculate" accent="yellow">
                <div className="rounded-2xl border border-amber-200 bg-white/90 p-5">
                  <div className="text-[10px] font-black uppercase tracking-[0.16em] text-amber-700">Question + method</div>
                  <p className="mt-3 text-[16px] leading-8 text-slate-700">{current.workedExample}</p>
                </div>
                {current.steps?.length > 0 && (
                  <div className="mt-5 space-y-2">
                    {current.steps.map((step, index) => <div key={index} className="flex gap-3 text-[15px] leading-8 text-slate-700"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-black text-white">{index + 1}</span><span>{step}</span></div>)}
                  </div>
                )}
              </PaperSection>
            )}

            {current.teacherTip && (
              <PaperSection title="Teacher's margin note" accent="pink">
                <p className="text-[16px] leading-8 text-slate-700" style={{ fontFamily: handwriting }}>✎ {current.teacherTip}</p>
              </PaperSection>
            )}

            {current.examTrap && (
              <PaperSection title="Exam trap — underline this" accent="red">
                <p className="text-[16px] font-semibold leading-8 text-slate-700">⚠️ {current.examTrap}</p>
              </PaperSection>
            )}

            {practice.length > 0 && (
              <PaperSection title="Now close the book and solve" accent="purple">
                <div className="space-y-3">
                  {practice.map((question, index) => <div key={index} className="rounded-2xl border border-slate-200 bg-white/90 p-4 text-[15px] leading-8 text-slate-700"><span className="mr-2 font-black text-indigo-600">{index + 1}</span>{question}</div>)}
                </div>
                {answers.length > 0 && (
                  <div className="mt-5">
                    <button onClick={() => setShowAnswers((v) => !v)} className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-black text-white">{showAnswers ? 'Hide Answers' : 'Reveal Answers'}</button>
                    {showAnswers && <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">{answers.map((answer, index) => <div key={index} className="py-1.5 text-sm font-semibold text-slate-700">{index + 1}. {answer}</div>)}</div>}
                  </div>
                )}
              </PaperSection>
            )}

            {current.quickCheck?.length > 0 && (
              <PaperSection title="Quick recall — no peeking" accent="green">
                <div className="space-y-3">{current.quickCheck.map((item, index) => <div key={index} className="rounded-xl bg-white/80 px-4 py-3 text-[15px] font-semibold leading-7 text-slate-700">🧠 {item}</div>)}</div>
              </PaperSection>
            )}

            {current.finalTip && (
              <div className="rounded-[24px] border-2 border-dashed border-indigo-300 bg-indigo-50/50 p-6 text-center">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600">One line to remember</div>
                <p className="mt-3 text-xl font-black leading-9 text-slate-800 md:text-2xl" style={{ fontFamily: handwriting }}>{current.finalTip}</p>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs font-black text-slate-400">
              <span>UNDERSTAND</span><span>→</span><span>WRITE</span><span>→</span><span>SOLVE</span><span>→</span><span>RECALL</span><span>→</span><span>REVISE</span>
            </div>
          </main>

          <footer className="relative z-10 border-t border-slate-200 bg-[#fffdf7]/96 px-7 py-6 md:px-12">
            <div className="mb-4 flex items-center justify-between text-xs font-black text-slate-400">
              <span>Page {page} of {pages.length}</span>
              <span>StudyPath • Teacher Edition</span>
            </div>
            <div className="flex items-center justify-between gap-3">
              <button disabled={page === 1} onClick={() => goToPage(Math.max(1, page - 1))} className="rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm font-black text-slate-700 disabled:opacity-35">← Previous</button>
              <div className="hidden text-sm font-black text-slate-400 md:block" style={{ fontFamily: handwriting }}>Keep going. One concept at a time.</div>
              <button disabled={page === pages.length} onClick={() => goToPage(Math.min(pages.length, page + 1))} className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-black text-white disabled:opacity-35">Next Page →</button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
