import React, { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getResourceById } from '../data/resources.js'
import { chapterBooks } from '../data/chapterBooks.js'
import { percentagePremiumBook } from '../data/percentagePremiumBook.js'

const handwriting = 'Kalam, "Segoe Print", cursive'
const bookOverrides = { 'formula-percentage': percentagePremiumBook }

const sectionConfig = [
  { id: 'concept', label: 'Concept', icon: '🧠', description: 'Learn the idea first.' },
  { id: 'solved', label: 'Solved Questions', icon: '✍️', description: 'Watch the method step by step.' },
  { id: 'practice', label: 'Practice', icon: '🎯', description: 'Close notes and solve.' },
  { id: 'revision', label: 'Revision', icon: '⚡', description: 'Recall, traps and final revision.' },
]

const accents = {
  indigo: 'border-indigo-300 bg-indigo-50/55',
  green: 'border-emerald-300 bg-emerald-50/50',
  yellow: 'border-amber-300 bg-amber-50/55',
  pink: 'border-pink-300 bg-pink-50/45',
  red: 'border-rose-300 bg-rose-50/45',
  purple: 'border-violet-300 bg-violet-50/50',
}

function PaperSection({ title, children, accent = 'indigo' }) {
  return <section className={`rounded-[22px] border ${accents[accent] || accents.indigo} p-5 md:p-6`}><h3 className="text-lg font-black text-slate-900 md:text-xl" style={{ fontFamily: handwriting }}>{title}</h3><div className="mt-4">{children}</div></section>
}

export default function ResourceViewer() {
  const { resourceId } = useParams()
  const navigate = useNavigate()
  const resource = getResourceById(resourceId)
  const book = bookOverrides[resourceId] || chapterBooks[resourceId]
  const [section, setSection] = useState('concept')
  const [showAnswers, setShowAnswers] = useState(false)

  const pages = useMemo(() => book?.pages?.length ? book.pages : [{ page: 1, section: 'Study Note', title: resource?.title || 'Study Note', concept: 'This resource is available as an original StudyPath note.', board: resource?.content || [] }], [book, resource])

  if (!resource) return <div className="p-8 text-center">Resource not found</div>

  const conceptPages = pages.filter((p) => p.concept || p.explanation || p.teacherBoard?.length || p.board?.length || p.keyPoints?.length || p.formula)
  const solvedPages = pages.filter((p) => p.workedExample)
  const practicePages = pages.filter((p) => p.practice?.length || p.questions?.length)
  const revisionPages = pages.filter((p) => p.teacherTip || p.examTrap || p.shortcut || p.quickCheck?.length || p.finalTip)
  const grouped = { concept: conceptPages, solved: solvedPages, practice: practicePages, revision: revisionPages }
  const visiblePages = grouped[section]
  const sectionInfo = sectionConfig.find((s) => s.id === section)

  return (
    <div className="min-h-screen bg-[#edf0f3] px-2 py-3 md:px-6 md:py-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[30px] border border-slate-300/80 bg-[#fffdf7] shadow-[0_22px_70px_rgba(15,23,42,0.14)]">
        <div className="relative" style={{ backgroundImage: 'linear-gradient(to right, transparent 0, transparent 52px, rgba(220,38,38,0.16) 52px, rgba(220,38,38,0.16) 54px, transparent 54px), linear-gradient(to bottom, rgba(148,163,184,0.09) 1px, transparent 1px)', backgroundSize: '100% 100%, 100% 30px' }}>
          <div className="pointer-events-none absolute right-6 top-7 rotate-[-6deg] text-[11px] font-black tracking-[0.25em] text-slate-400/65">STUDYPATH • ORIGINAL NOTES</div>
          <header className="relative z-10 border-b border-slate-200 bg-[#fffdf7]/95 px-7 py-7 md:px-12 md:py-9">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <button onClick={() => navigate('/resources')} className="text-sm font-black text-slate-500 hover:text-indigo-600">← Back to Resources</button>
              <div className="flex items-center gap-2 text-[11px] font-black"><span className="rounded-full bg-indigo-100 px-3 py-1.5 text-indigo-700">{book?.subject || 'StudyPath'}</span><span className="rounded-full bg-emerald-100 px-3 py-1.5 text-emerald-700">FREE</span></div>
            </div>
            <div className="mt-7"><div className="text-[11px] font-black uppercase tracking-[0.25em] text-indigo-600">StudyPath Study Book</div><h1 className="mt-2 text-4xl font-black leading-[0.98] text-slate-950 md:text-6xl" style={{ fontFamily: handwriting }}>{book?.chapter || resource.title}</h1><p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">Concept → solved questions → practice → revision. No filler page count.</p></div>
            <div className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-4">
              {sectionConfig.map((item) => <button key={item.id} onClick={() => { setSection(item.id); setShowAnswers(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className={`rounded-2xl border-2 px-4 py-4 text-left transition ${section === item.id ? 'border-indigo-500 bg-indigo-600 text-white shadow-md' : 'border-slate-200 bg-white/90 text-slate-700 hover:border-indigo-300'}`}><div className="text-xl">{item.icon}</div><div className="mt-1 text-sm font-black">{item.label}</div><div className={`mt-1 text-[11px] leading-4 ${section === item.id ? 'text-white/80' : 'text-slate-400'}`}>{item.description}</div></button>)}
            </div>
          </header>

          <main className="relative z-10 space-y-7 px-7 py-7 md:px-12 md:py-10">
            <div className="rounded-2xl border border-slate-200 bg-white/85 p-5"><div className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600">Section {sectionConfig.findIndex((s) => s.id === section) + 1} / 4</div><h2 className="mt-1 text-3xl font-black text-slate-950" style={{ fontFamily: handwriting }}>{sectionInfo.label}</h2><p className="mt-2 text-sm leading-7 text-slate-500">{sectionInfo.description}</p></div>

            {visiblePages.length === 0 && <PaperSection title="Coming next" accent="indigo"><p className="text-sm leading-7 text-slate-600">This section has not been populated yet. We will add it only when there is useful material to teach, not just to increase the page count.</p></PaperSection>}

            {visiblePages.map((p) => {
              const board = p.teacherBoard || p.board || p.keyPoints || []
              const practice = [...(p.practice || []), ...(p.questions || [])]
              return <article key={`${section}-${p.page}`} className="space-y-4">
                <div className="flex items-start gap-3"><span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-black text-white">{p.page}</span><div><div className="text-[10px] font-black uppercase tracking-widest text-indigo-500">{p.section}</div><h3 className="text-2xl font-black text-slate-950" style={{ fontFamily: handwriting }}>{p.title}</h3></div></div>

                {section === 'concept' && <>
                  {(p.concept || p.explanation) && <PaperSection title="Teacher explains" accent="indigo"><p className="text-[16px] leading-8 text-slate-700 md:text-[17px]">{p.concept || p.explanation}</p></PaperSection>}
                  {board.length > 0 && <PaperSection title="Class notebook" accent="green"><div className="space-y-2">{board.map((x, i) => <div key={i} className="relative pl-7 text-[15px] leading-8 text-slate-700 before:absolute before:left-0 before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-emerald-600">{x}</div>)}</div></PaperSection>}
                  {p.formula && <PaperSection title="Formula — understand the base" accent="purple"><div className="rounded-xl bg-white/85 p-5 text-center text-2xl font-black leading-relaxed text-indigo-950 md:text-4xl" style={{ fontFamily: handwriting }}>{p.formula}</div></PaperSection>}
                </>}

                {section === 'solved' && <PaperSection title="Solved question — follow every step" accent="yellow"><div className="rounded-xl border border-amber-200 bg-white/90 p-5"><div className="text-[10px] font-black uppercase tracking-widest text-amber-700">Question / Method</div><p className="mt-3 text-[16px] leading-8 text-slate-700">{p.workedExample}</p></div>{p.steps?.length > 0 && <div className="mt-5 space-y-2">{p.steps.map((step, i) => <div key={i} className="flex gap-3 text-[15px] leading-8 text-slate-700"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-black text-white">{i + 1}</span><span>{step}</span></div>)}</div>}</PaperSection>}

                {section === 'practice' && <PaperSection title="Close the notes and solve" accent="green"><div className="space-y-3">{practice.map((q, i) => <div key={i} className="rounded-xl border border-slate-200 bg-white/90 p-4 text-[15px] leading-8 text-slate-700"><span className="mr-2 font-black text-indigo-600">{i + 1}.</span>{q}</div>)}</div>{p.answers?.length > 0 && <div className="mt-5"><button onClick={() => setShowAnswers((v) => !v)} className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-black text-white">{showAnswers ? 'Hide Answers' : 'Reveal Answers'}</button>{showAnswers && <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4">{p.answers.map((a, i) => <div key={i} className="py-1.5 text-sm font-semibold text-slate-700">{i + 1}. {a}</div>)}</div>}</div>}</PaperSection>}

                {section === 'revision' && <>
                  {p.teacherTip && <PaperSection title="Teacher tip" accent="yellow"><p className="text-[16px] leading-8 text-slate-700" style={{ fontFamily: handwriting }}>✎ {p.teacherTip}</p></PaperSection>}
                  {p.examTrap && <PaperSection title="Exam trap" accent="red"><p className="text-[16px] leading-8 text-slate-700">⚠️ {p.examTrap}</p></PaperSection>}
                  {p.shortcut && <PaperSection title="Shortcut" accent="purple"><p className="text-[16px] leading-8 text-slate-700">{p.shortcut}</p></PaperSection>}
                  {p.quickCheck?.length > 0 && <PaperSection title="Quick recall" accent="green"><div className="space-y-3">{p.quickCheck.map((x, i) => <div key={i} className="rounded-xl bg-white/85 p-4 text-[15px] font-semibold leading-7 text-slate-700">🧠 {x}</div>)}</div></PaperSection>}
                  {p.finalTip && <PaperSection title="Last line from the teacher" accent="yellow"><p className="text-xl font-black leading-9 text-slate-800" style={{ fontFamily: handwriting }}>{p.finalTip}</p></PaperSection>}
                </>}
              </article>
            })}
          </main>
        </div>
      </div>
    </div>
  )
}
