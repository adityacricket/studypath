import React, { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getResourceById } from '../data/resources.js'
import { chapterBooks } from '../data/chapterBooks.js'
import { percentagePremiumBook } from '../data/percentagePremiumBook.js'

const handwriting = 'Kalam, "Segoe Print", cursive'
const bookOverrides = { 'formula-percentage': percentagePremiumBook }

const sections = [
  { id: 'concept', label: 'Concept', icon: '💡', hint: 'Learn the idea' },
  { id: 'solved', label: 'Solved', icon: '✍️', hint: 'See the method' },
  { id: 'practice', label: 'Practice', icon: '🎯', hint: 'Test yourself' },
  { id: 'revision', label: 'Revision', icon: '⚡', hint: 'Recall fast' },
]

const boxStyles = {
  blue: 'border-indigo-200 bg-indigo-50/75',
  green: 'border-emerald-200 bg-emerald-50/75',
  yellow: 'border-amber-200 bg-amber-50/75',
  pink: 'border-pink-200 bg-pink-50/70',
  red: 'border-rose-200 bg-rose-50/75',
  purple: 'border-violet-200 bg-violet-50/75',
}

function NoteBox({ title, icon, tone = 'blue', children }) {
  return (
    <section className={`rounded-[22px] border-2 ${boxStyles[tone] || boxStyles.blue} p-5 md:p-7`}>
      <div className="flex items-center gap-2">
        <span className="text-xl">{icon}</span>
        <h4 className="text-lg font-black text-slate-950 md:text-xl" style={{ fontFamily: handwriting }}>{title}</h4>
      </div>
      <div className="mt-4">{children}</div>
    </section>
  )
}

function RuledPage({ children, className = '' }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[28px] border border-slate-300/80 bg-[#fffefa] shadow-[0_14px_45px_rgba(15,23,42,0.08)] ${className}`}
      style={{
        backgroundImage: 'linear-gradient(to bottom, rgba(148,163,184,0.095) 1px, transparent 1px)',
        backgroundSize: '100% 30px',
      }}
    >
      <div className="pointer-events-none absolute bottom-0 left-[44px] top-0 w-px bg-rose-200/45" />
      {children}
    </div>
  )
}

function Watermark() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center overflow-hidden">
      <div className="rotate-[-24deg] whitespace-nowrap text-4xl font-black tracking-[0.32em] text-slate-400/[0.055] md:text-7xl">
        STUDYPATH • ORIGINAL
      </div>
    </div>
  )
}

function asArray(value) {
  if (!value) return []
  return Array.isArray(value) ? value : [value]
}

export default function ResourceViewer() {
  const { resourceId } = useParams()
  const navigate = useNavigate()
  const resource = getResourceById(resourceId)
  const book = bookOverrides[resourceId] || chapterBooks[resourceId]
  const [activeSection, setActiveSection] = useState('concept')
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
    return <div className="p-8 text-center font-semibold text-slate-700">Resource not found.</div>
  }

  const groupedPages = {
    concept: pages.filter((p) => p.concept || p.explanation || p.teacherBoard?.length || p.board?.length || p.keyPoints?.length || p.formula || p.workedExample || p.teacherTip || p.examTrap),
    solved: pages.filter((p) => p.workedExample || p.steps?.length),
    practice: pages.filter((p) => p.practice?.length || p.questions?.length),
    revision: pages.filter((p) => p.teacherTip || p.examTrap || p.shortcut || p.quickCheck?.length || p.finalTip),
  }

  const visiblePages = groupedPages[activeSection]
  const sectionInfo = sections.find((item) => item.id === activeSection)
  const isPremium = Boolean(resource.premium)

  return (
    <div className="min-h-screen bg-[#e8ecef] px-2 py-3 md:px-6 md:py-6">
      <div className="mx-auto max-w-6xl">
        <RuledPage>
          <Watermark />

          <header className="relative z-30 border-b border-slate-300/70 bg-[#fffefa]/95 px-5 py-6 md:px-12 md:py-9">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <button onClick={() => navigate('/resources')} className="text-sm font-black text-slate-500 hover:text-indigo-600">
                ← Back to Resources
              </button>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider">
                <span className="rounded-full bg-indigo-100 px-3 py-1.5 text-indigo-700">{book?.subject || 'StudyPath'}</span>
                <span className={`rounded-full px-3 py-1.5 ${isPremium ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>{isPremium ? 'Premium' : 'Free'}</span>
              </div>
            </div>

            <div className="mt-7 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <div className="inline-flex rounded-full bg-slate-950 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.22em] text-white">
                  StudyPath • Study Book
                </div>
                <h1 className="mt-4 max-w-4xl text-4xl font-black leading-[1.02] text-slate-950 md:text-6xl" style={{ fontFamily: handwriting }}>
                  {book?.chapter || resource.title}
                </h1>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
                  Learn the concept, see a worked method, practise it yourself, then revise it quickly. Built as an original classroom-style study book.
                </p>
              </div>
              <div className="hidden rotate-2 rounded-2xl border-2 border-slate-300 bg-white px-5 py-4 text-center shadow-sm md:block">
                <div className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Study rule</div>
                <div className="mt-1 text-2xl font-black text-indigo-600" style={{ fontFamily: handwriting }}>Understand → Apply</div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-2 md:grid-cols-4">
              {sections.map((item) => {
                const count = groupedPages[item.id].length
                const active = activeSection === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => { setActiveSection(item.id); setShowAnswers(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                    className={`rounded-2xl border-2 px-4 py-4 text-left transition ${active ? 'border-indigo-500 bg-indigo-600 text-white shadow-md' : 'border-slate-200 bg-white text-slate-700 hover:border-indigo-300'}`}
                  >
                    <div className="flex items-center justify-between"><span className="text-xl">{item.icon}</span><span className={`rounded-full px-2 py-1 text-[9px] font-black ${active ? 'bg-white/15 text-white' : 'bg-slate-100 text-slate-400'}`}>{count}</span></div>
                    <div className="mt-2 text-sm font-black">{item.label}</div>
                    <div className={`mt-1 text-[11px] ${active ? 'text-white/75' : 'text-slate-400'}`}>{item.hint}</div>
                  </button>
                )
              })}
            </div>
          </header>

          <main className="relative z-10 space-y-8 px-4 py-7 md:px-12 md:py-10">
            <div className="rounded-[24px] border-2 border-slate-200 bg-white/90 p-5 shadow-sm md:p-6">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.22em] text-indigo-600">Section {sections.findIndex((x) => x.id === activeSection) + 1} of 4</div>
                  <h2 className="mt-1 text-3xl font-black text-slate-950" style={{ fontFamily: handwriting }}>{sectionInfo.label}</h2>
                  <p className="mt-1 text-sm text-slate-500">{sectionInfo.hint} • {visiblePages.length} page{visiblePages.length === 1 ? '' : 's'}</p>
                </div>
                <div className="rounded-xl bg-slate-100 px-3 py-2 text-xs font-black text-slate-600">Original StudyPath notes</div>
              </div>
            </div>

            {visiblePages.length === 0 && (
              <NoteBox title="This section is being prepared" icon="📌" tone="blue">
                <p className="text-sm leading-7 text-slate-600">We will add useful teaching material here rather than filling the page with repetitive content.</p>
              </NoteBox>
            )}

            {visiblePages.map((page) => {
              const board = asArray(page.teacherBoard || page.board || page.keyPoints)
              const practice = [...asArray(page.practice), ...asArray(page.questions)]
              const quickCheck = asArray(page.quickCheck)
              return (
                <RuledPage key={`${activeSection}-${page.page}`} className="p-5 md:p-8">
                  <div className="relative z-10">
                    <div className="flex items-start gap-3 border-b border-slate-200 pb-5">
                      <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-black text-white">{page.page}</span>
                      <div className="min-w-0 flex-1">
                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-500">{page.section || 'Study Note'}</div>
                        <h3 className="mt-1 text-2xl font-black leading-tight text-slate-950 md:text-4xl" style={{ fontFamily: handwriting }}>{page.title || resource.title}</h3>
                      </div>
                      <div className="hidden rotate-[-6deg] text-[9px] font-black tracking-[0.18em] text-slate-400/70 md:block">STUDYPATH</div>
                    </div>

                    {activeSection === 'concept' && (
                      <div className="mt-6 space-y-5">
                        {(page.concept || page.explanation) && <NoteBox title="Understand the concept" icon="💡" tone="blue"><p className="text-[16px] leading-8 text-slate-700 md:text-[17px]">{page.concept || page.explanation}</p></NoteBox>}
                        {board.length > 0 && <NoteBox title="Teacher's board" icon="📝" tone="green"><div className="space-y-2">{board.map((item, i) => <div key={i} className="relative pl-7 text-[15px] leading-8 text-slate-700 before:absolute before:left-0 before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-emerald-600">{item}</div>)}</div></NoteBox>}
                        {page.formula && <NoteBox title="Core formula" icon="⚡" tone="purple"><div className="rounded-2xl border border-violet-200 bg-white p-5 text-center text-2xl font-black leading-relaxed text-indigo-950 md:text-4xl" style={{ fontFamily: handwriting }}>{page.formula}</div></NoteBox>}
                        {page.workedExample && <NoteBox title="Worked example" icon="✍️" tone="yellow"><p className="text-[15px] leading-8 text-slate-700 md:text-[16px]">{page.workedExample}</p>{page.steps?.length > 0 && <StepList steps={page.steps} />}</NoteBox>}
                        {page.teacherTip && <NoteBox title="Teacher tip" icon="💬" tone="pink"><p className="text-[16px] leading-8 text-slate-700" style={{ fontFamily: handwriting }}>✎ {page.teacherTip}</p></NoteBox>}
                        {page.examTrap && <NoteBox title="Don't make this mistake" icon="⚠️" tone="red"><p className="text-[15px] leading-8 text-slate-700">{page.examTrap}</p></NoteBox>}
                        {quickCheck.length > 0 && <NoteBox title="Quick check" icon="🎯" tone="green"><QuestionList items={quickCheck} /></NoteBox>}
                      </div>
                    )}

                    {activeSection === 'solved' && (
                      <div className="mt-6 space-y-5">
                        <NoteBox title="Solved question — follow every step" icon="✍️" tone="yellow">
                          {page.workedExample && <p className="text-[16px] leading-8 text-slate-700">{page.workedExample}</p>}
                          {page.steps?.length > 0 && <StepList steps={page.steps} />}
                        </NoteBox>
                        {page.formula && <NoteBox title="Formula used" icon="⚡" tone="purple"><div className="rounded-xl bg-white p-4 text-center text-2xl font-black text-indigo-950" style={{ fontFamily: handwriting }}>{page.formula}</div></NoteBox>}
                        {page.teacherTip && <NoteBox title="Method tip" icon="💬" tone="pink"><p className="text-[16px] leading-8 text-slate-700" style={{ fontFamily: handwriting }}>{page.teacherTip}</p></NoteBox>}
                        {page.examTrap && <NoteBox title="Exam trap" icon="⚠️" tone="red"><p className="text-[15px] leading-8 text-slate-700">{page.examTrap}</p></NoteBox>}
                      </div>
                    )}

                    {activeSection === 'practice' && (
                      <div className="mt-6 space-y-5">
                        <NoteBox title="Try these yourself" icon="🎯" tone="blue">
                          {practice.length > 0 ? <QuestionList items={practice} /> : <p className="text-sm leading-7 text-slate-600">Practice questions for this page will be added with the study content.</p>}
                        </NoteBox>
                        {quickCheck.length > 0 && <NoteBox title="Quick check" icon="🧠" tone="green"><QuestionList items={quickCheck} /></NoteBox>}
                        {page.answers?.length > 0 && <div className="rounded-[22px] border-2 border-dashed border-indigo-200 bg-indigo-50/50 p-5"><button onClick={() => setShowAnswers(!showAnswers)} className="w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-black text-white">{showAnswers ? 'Hide answers' : 'Reveal answers'}</button>{showAnswers && <div className="mt-4 space-y-2"><QuestionList items={page.answers} numbered={false} /></div>}</div>}
                      </div>
                    )}

                    {activeSection === 'revision' && (
                      <div className="mt-6 space-y-5">
                        {page.shortcut && <NoteBox title="Shortcut" icon="⚡" tone="purple"><p className="text-[16px] leading-8 text-slate-700">{page.shortcut}</p></NoteBox>}
                        {page.finalTip && <NoteBox title="Final exam tip" icon="🏁" tone="green"><p className="text-[16px] leading-8 text-slate-700" style={{ fontFamily: handwriting }}>{page.finalTip}</p></NoteBox>}
                        {page.teacherTip && <NoteBox title="Remember this" icon="🧠" tone="blue"><p className="text-[16px] leading-8 text-slate-700" style={{ fontFamily: handwriting }}>{page.teacherTip}</p></NoteBox>}
                        {page.examTrap && <NoteBox title="Common trap" icon="⚠️" tone="red"><p className="text-[15px] leading-8 text-slate-700">{page.examTrap}</p></NoteBox>}
                        {quickCheck.length > 0 && <NoteBox title="Rapid recall" icon="🎯" tone="yellow"><QuestionList items={quickCheck} /></NoteBox>}
                        {!page.shortcut && !page.finalTip && !page.teacherTip && !page.examTrap && quickCheck.length === 0 && <NoteBox title="Quick revision" icon="⚡" tone="blue"><p className="text-sm leading-7 text-slate-600">Revision points will be added alongside the detailed study content.</p></NoteBox>}
                      </div>
                    )}
                  </div>
                </RuledPage>
              )
            })}
          </main>
        </RuledPage>
      </div>
    </div>
  )
}

function StepList({ steps }) {
  return (
    <div className="mt-5 space-y-3">
      {steps.map((step, i) => (
        <div key={i} className="flex gap-3 text-[15px] leading-8 text-slate-700">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-black text-white">{i + 1}</span>
          <span>{step}</span>
        </div>
      ))}
    </div>
  )
}

function QuestionList({ items, numbered = true }) {
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="rounded-xl border border-slate-200 bg-white/90 p-4 text-[15px] leading-7 text-slate-700">
          {numbered && <span className="mr-2 font-black text-indigo-600">{i + 1}.</span>}
          {item}
        </div>
      ))}
    </div>
  )
}
