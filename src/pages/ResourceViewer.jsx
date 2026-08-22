import React, { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getResourceById } from '../data/resources.js'
import { chapterBooks } from '../data/chapterBooks.js'
import { percentagePremiumBook } from '../data/percentagePremiumBook.js'

const handwriting = 'Kalam, "Segoe Print", cursive'
const bookOverrides = { 'formula-percentage': percentagePremiumBook }

const sectionConfig = [
  { id: 'concept', label: 'Detailed Notes', icon: '🧠', description: 'Understand the idea with examples.' },
  { id: 'solved', label: 'Solved Questions', icon: '✍️', description: 'See the method step by step.' },
  { id: 'practice', label: 'Practice', icon: '🎯', description: 'Try it without looking.' },
  { id: 'revision', label: 'Quick Revision', icon: '⚡', description: 'Recall, traps and exam tips.' },
]

const accents = {
  indigo: 'border-indigo-200 bg-indigo-50/70',
  green: 'border-emerald-200 bg-emerald-50/70',
  yellow: 'border-amber-200 bg-amber-50/70',
  pink: 'border-pink-200 bg-pink-50/65',
  red: 'border-rose-200 bg-rose-50/70',
  purple: 'border-violet-200 bg-violet-50/70',
}

function PaperSection({ title, children, accent = 'indigo', icon }) {
  return (
    <section className={`rounded-[20px] border-2 ${accents[accent] || accents.indigo} p-5 md:p-6`}>
      <div className="flex items-center gap-2">
        {icon && <span className="text-xl">{icon}</span>}
        <h3 className="text-lg font-black text-slate-950 md:text-xl" style={{ fontFamily: handwriting }}>
          {title}
        </h3>
      </div>
      <div className="mt-4">{children}</div>
    </section>
  )
}

function RuledPaper({ children }) {
  return (
    <div
      className="relative overflow-hidden rounded-[26px] border border-slate-300/80 bg-[#fffefa] shadow-[0_10px_35px_rgba(15,23,42,0.08)]"
      style={{
        backgroundImage: 'linear-gradient(to bottom, rgba(148,163,184,0.105) 1px, transparent 1px)',
        backgroundSize: '100% 28px',
      }}
    >
      <div className="pointer-events-none absolute bottom-0 left-[48px] top-0 w-px bg-rose-200/50" />
      {children}
    </div>
  )
}

function Watermark() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
      <div className="rotate-[-22deg] whitespace-nowrap text-3xl font-black tracking-[0.35em] text-slate-400/[0.08] md:text-6xl">
        STUDYPATH • ORIGINAL NOTES
      </div>
    </div>
  )
}

export default function ResourceViewer() {
  const { resourceId } = useParams()
  const navigate = useNavigate()
  const resource = getResourceById(resourceId)
  const book = bookOverrides[resourceId] || chapterBooks[resourceId]
  const [section, setSection] = useState('concept')
  const [showAnswers, setShowAnswers] = useState(false)

  const pages = useMemo(
    () => book?.pages?.length
      ? book.pages
      : [{ page: 1, section: 'Study Note', title: resource?.title || 'Study Note', concept: 'This resource is available as an original StudyPath note.', board: resource?.content || [] }],
    [book, resource]
  )

  if (!resource) {
    return <div className="p-8 text-center font-semibold">Resource not found</div>
  }

  const conceptPages = pages.filter((p) => p.concept || p.explanation || p.teacherBoard?.length || p.board?.length || p.keyPoints?.length || p.formula || p.workedExample || p.teacherTip || p.examTrap)
  const solvedPages = pages.filter((p) => p.workedExample || p.steps?.length)
  const practicePages = pages.filter((p) => p.practice?.length || p.questions?.length)
  const revisionPages = pages.filter((p) => p.teacherTip || p.examTrap || p.shortcut || p.quickCheck?.length || p.finalTip)
  const grouped = { concept: conceptPages, solved: solvedPages, practice: practicePages, revision: revisionPages }
  const visiblePages = grouped[section]
  const sectionInfo = sectionConfig.find((s) => s.id === section)

  return (
    <div className="min-h-screen bg-[#e9edf0] px-2 py-3 md:px-6 md:py-6">
      <div className="mx-auto max-w-6xl">
        <RuledPaper>
          <Watermark />

          <header className="relative z-10 border-b border-slate-300/70 bg-[#fffefa]/95 px-6 py-6 md:px-12 md:py-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => navigate('/resources')}
                className="text-sm font-black text-slate-500 transition hover:text-indigo-600"
              >
                ← Back to Resources
              </button>
              <div className="flex items-center gap-2 text-[11px] font-black">
                <span className="rounded-full bg-indigo-100 px-3 py-1.5 text-indigo-700">{book?.subject || 'StudyPath'}</span>
                <span className="rounded-full bg-emerald-100 px-3 py-1.5 text-emerald-700">FREE</span>
              </div>
            </div>

            <div className="mt-7 grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-white">
                  StudyPath • Detailed Notes
                </div>
                <h1 className="mt-4 max-w-4xl text-4xl font-black leading-[0.98] text-slate-950 md:text-6xl" style={{ fontFamily: handwriting }}>
                  {book?.chapter || resource.title}
                </h1>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
                  Detailed, exam-focused notes — concept first, then examples, practice and revision. Designed like premium classroom notes, but original to StudyPath.
                </p>
              </div>

              <div className="hidden rotate-2 rounded-2xl border-2 border-slate-300 bg-white px-5 py-4 text-center shadow-sm md:block">
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Notebook</div>
                <div className="mt-1 text-3xl font-black text-indigo-600" style={{ fontFamily: handwriting }}>Learn → Recall</div>
              </div>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-2 md:grid-cols-4">
              {sectionConfig.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { setSection(item.id); setShowAnswers(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                  className={`rounded-2xl border-2 px-4 py-4 text-left transition ${section === item.id ? 'border-indigo-500 bg-indigo-600 text-white shadow-md' : 'border-slate-200 bg-white/90 text-slate-700 hover:border-indigo-300'}`}
                >
                  <div className="text-xl">{item.icon}</div>
                  <div className="mt-1 text-sm font-black">{item.label}</div>
                  <div className={`mt-1 text-[11px] leading-4 ${section === item.id ? 'text-white/80' : 'text-slate-400'}`}>{item.description}</div>
                </button>
              ))}
            </div>
          </header>

          <main className="relative z-10 space-y-8 px-5 py-7 md:px-12 md:py-10">
            <div className="rounded-[22px] border-2 border-slate-200 bg-white/90 p-5 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.22em] text-indigo-600">Study section {sectionConfig.findIndex((s) => s.id === section) + 1} / 4</div>
                  <h2 className="mt-1 text-3xl font-black text-slate-950" style={{ fontFamily: handwriting }}>{sectionInfo.label}</h2>
                  <p className="mt-1 text-sm leading-6 text-slate-500">{sectionInfo.description}</p>
                </div>
                <div className="rounded-xl bg-slate-100 px-3 py-2 text-xs font-black text-slate-600">{visiblePages.length} note pages</div>
              </div>
            </div>

            {visiblePages.length === 0 && (
              <PaperSection title="Coming next" accent="indigo" icon="📌">
                <p className="text-sm leading-7 text-slate-600">This section has not been populated yet. We will add it when there is useful material to teach, not just to increase the page count.</p>
              </PaperSection>
            )}

            {visiblePages.map((p) => {
              const board = p.teacherBoard || p.board || p.keyPoints || []
              const practice = [...(p.practice || []), ...(p.questions || [])]
              return (
                <article key={`${section}-${p.page}`} className="relative overflow-hidden rounded-[28px] border-2 border-slate-300/80 bg-[#fffefa] p-5 shadow-[0_12px_40px_rgba(15,23,42,0.08)] md:p-8">
                  <div className="pointer-events-none absolute inset-0 opacity-80" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)', backgroundSize: '100% 28px' }} />
                  <div className="pointer-events-none absolute bottom-0 left-[42px] top-0 w-px bg-rose-200/45" />
                  <div className="pointer-events-none absolute right-5 top-5 rotate-[-7deg] text-[9px] font-black tracking-[0.2em] text-slate-400/55 md:text-[10px]">STUDYPATH</div>

                  <div className="relative z-10">
                    <div className="flex items-start gap-3 border-b border-slate-200 pb-5">
                      <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-black text-white shadow-sm">{p.page}</span>
                      <div className="min-w-0">
                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-500">{p.section}</div>
                        <h3 className="mt-1 text-2xl font-black leading-tight text-slate-950 md:text-3xl" style={{ fontFamily: handwriting }}>{p.title}</h3>
                      </div>
                    </div>

                    {section === 'concept' && (
                      <div className="mt-6 space-y-5">
                        {(p.concept || p.explanation) && <PaperSection title="Understand the concept" accent="indigo" icon="💡"><p className="text-[16px] leading-8 text-slate-700 md:text-[17px]">{p.concept || p.explanation}</p></PaperSection>}
                        {board.length > 0 && <PaperSection title="Teacher's board" accent="green" icon="📝"><div className="space-y-2">{board.map((x, i) => <div key={i} className="relative pl-7 text-[15px] leading-8 text-slate-700 before:absolute before:left-0 before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-emerald-600">{x}</div>)}</div></PaperSection>}
                        {p.formula && <PaperSection title="Core formula" accent="purple" icon="⚡"><div className="rounded-2xl border border-violet-200 bg-white/90 p-5 text-center text-2xl font-black leading-relaxed text-indigo-950 md:text-4xl" style={{ fontFamily: handwriting }}>{p.formula}</div></PaperSection>}
                        {p.workedExample && <PaperSection title="Worked example" accent="yellow" icon="✍️"><p className="text-[15px] leading-8 text-slate-700 md:text-[16px]">{p.workedExample}</p>{p.steps?.length > 0 && <div className="mt-4 space-y-2">{p.steps.map((step, i) => <div key={i} className="flex gap-3 text-[15px] leading-7 text-slate-700"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-black text-white">{i + 1}</span><span>{step}</span></div>)}</div>}</PaperSection>}
                        {p.teacherTip && <PaperSection title="Teacher tip" accent="pink" icon="💬"><p className="text-[16px] leading-8 text-slate-700" style={{ fontFamily: handwriting }}>✎ {p.teacherTip}</p></PaperSection>}
                        {p.examTrap && <PaperSection title="Don't make this mistake" accent="red" icon="⚠️"><p className="text-[15px] leading-8 text-slate-700">{p.examTrap}</p></PaperSection>}
                        {p.quickCheck?.length > 0 && <PaperSection title="Do it yourself" accent="green" icon="🎯"><div className="space-y-3">{p.quickCheck.map((x, i) => <div key={i} className="rounded-xl border border-emerald-200 bg-white/90 p-4 text-[15px] leading-7 text-slate-700"><span className="font-black text-emerald-600">{i + 1}.</span> {x}</div>)}</div></PaperSection>}
                        {practice.length > 0 && <PaperSection title="Mini practice" accent="indigo" icon="✏️"><div className="space-y-2">{practice.slice(0, 3).map((q, i) => <div key={i} className="rounded-xl bg-white/90 p-3 text-sm leading-7 text-slate-700"><span className="font-black text-indigo-600">{i + 1}.</span> {q}</div>)}</div></PaperSection>}
                      </div>
                    )}

                    {section === 'solved' && (
                      <div className="mt-6 space-y-5">
                        <PaperSection title="Solved question — follow every step" accent="yellow" icon="✍️">
                          {p.workedExample && <p className="text-[16px] leading-8 text-slate-700">{p.workedExample}</p>}
                          {p.steps?.length > 0 && <div className="mt-5 space-y-3">{p.steps.map((step, i) => <div key={i} className="flex gap-3 text-[15px] leading-8 text-slate-700"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-black text-white">{i + 1}</span><span>{step}</span></div>)}</div>}
                        </PaperSection>
                        {p.teacherTip && <PaperSection title="Method tip" accent="pink" icon="💬"><p className="text-[16px] leading-8 text-slate-700" style={{ fontFamily: handwriting }}>{p.teacherTip}</p></PaperSection>}
                        {p.examTrap && <PaperSection title="Exam trap" accent="red" icon="⚠️"><p className="text-[15px] leading-8 text-slate-700">{p.examTrap}</p></PaperSection>}
                      </div>
                    )}

                    {section === 'practice' && (
                      <div className="mt-6">
                        <PaperSection title="Close the notes and solve" accent="green" icon="🎯">
                          <div className="space-y-3">{practice.map((q, i) => <div key={i} className="rounded-xl border border-slate-200 bg-white/90 p-4 text-[15px] leading-8 text-slate-700"><span className="mr-2 font-black text-indigo-600">{i + 1}.</span>{q}</div>)}</div>
                          {p.answers?.length > 0 && <div className="mt-5"><button onClick={() => setShowAnswers((v) => !v)} className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-black text-white">{showAnswers ? 'Hide Answers' : 'Reveal Answers'}</button>{showAnswers && <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4">{p.answers.map((a, i) => <div key={i} className="py-1.5 text-sm font-semibold text-slate-700">{i + 1}. {a}</div>)}</div>}</div>}
                        </PaperSection>
                      </div>
                    )}

                    {section === 'revision' && (
                      <div className="mt-6 space-y-5">
                        {p.teacherTip && <PaperSection title="Teacher tip" accent="yellow" icon="💬"><p className="text-[16px] leading-8 text-slate-700" style={{ fontFamily: handwriting }}>✎ {p.teacherTip}</p></PaperSection>}
                        {p.examTrap && <PaperSection title="Exam trap" accent="red" icon="⚠️"><p className="text-[16px] leading-8 text-slate-700">{p.examTrap}</p></PaperSection>}
                        {p.shortcut && <PaperSection title="Shortcut" accent="purple" icon="⚡"><p className="text-[16px] leading-8 text-slate-700">{p.shortcut}</p></PaperSection>}
                        {p.quickCheck?.length > 0 && <PaperSection title="Quick recall" accent="green" icon="🧠"><div className="space-y-3">{p.quickCheck.map((x, i) => <div key={i} className="rounded-xl bg-white/90 p-4 text-[15px] font-semibold leading-7 text-slate-700">{i + 1}. {x}</div>)}</div></PaperSection>}
                        {p.finalTip && <PaperSection title="Last line to remember" accent="yellow" icon="⭐"><p className="text-xl font-black leading-9 text-slate-800" style={{ fontFamily: handwriting }}>{p.finalTip}</p></PaperSection>}
                      </div>
                    )}
                  </div>
                </article>
              )
            })}

            <div className="rounded-[24px] border-2 border-slate-300 bg-slate-950 p-6 text-white shadow-lg md:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-300">StudyPath note system</div>
                  <h3 className="mt-1 text-2xl font-black" style={{ fontFamily: handwriting }}>Learn it. Close it. Recall it.</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-300">The goal is not a huge PDF. The goal is a note page you can actually revise from.</p>
                </div>
                <button onClick={() => navigate('/resources')} className="rounded-xl bg-white px-5 py-3 text-sm font-black text-slate-950">Back to Resources</button>
              </div>
            </div>
          </main>
        </RuledPaper>
      </div>
    </div>
  )
}
