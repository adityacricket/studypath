import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { getStudyBook, getStudyChapter } from '../data/studyBooks.js'
import { chapterData } from '../data/chapterData.js'
import { getExamContentStandard } from '../data/examContentStandards.js'
import { getChapterEnhancement } from '../data/examChapterEnhancements.js'

const resourceAliases = {
  percentage: 'formula-percentage',
  'profit-loss': 'formula-profit-loss',
  'simple-compound-interest': 'formula-interest',
  average: 'formula-average',
  'time-work': 'formula-time-work',
  'time-speed-distance': 'formula-speed',
  mensuration: 'formula-mensuration',
  trigonometry: 'formula-trigonometry',
  algebra: 'formula-algebra'
}

const toneText = {
  solve: 'Solve it on paper. Build the method first, then use speed techniques only when they are reliable.',
  concept: 'Build the idea first. Then connect it to equations, diagrams, examples and exam questions.',
  language: 'Learn the rule, see the pattern, practise it immediately, then revise the exceptions.',
  memory: 'Understand the story first, then compress it into timelines, comparisons, maps and recall cues.',
  logic: 'Learn the pattern, watch one solution, then solve without looking at the method.',
  balanced: 'Learn the idea, apply it, test it and finish with a compact revision sheet.'
}

const genericSections = [
  ['1', 'Start Here', 'What this chapter is really about, why it matters and what you should already know.'],
  ['2', 'Teacher Explanation', 'A clean, from-zero explanation written like a teacher explaining on the board.'],
  ['3', 'Core Rules', 'Definitions, formulas, rules, cases and the small details students usually skip.'],
  ['4', 'Worked Examples', 'Easy example → standard exam example → tricky example, with every step shown.'],
  ['5', 'Visual Memory', 'Diagrams, tables, timelines, comparisons or mental pictures wherever they genuinely help.'],
  ['6', 'Exam Traps', 'The common ways students lose marks and how to spot the trap before answering.'],
  ['7', 'Teacher Shortcuts', 'Only useful shortcuts — never a shortcut that replaces understanding.'],
  ['8', 'PYQ-style Practice', 'Questions written for this exam and this chapter pattern, followed by reasoning.'],
  ['9', 'Challenge Set', 'Higher-level or mixed-concept questions to check whether the chapter is actually mastered.'],
  ['10', 'Answer & Fix', 'Not just the answer: why the correct method works and why the tempting wrong method fails.'],
  ['11', 'One-Page Revision', 'The chapter compressed into a last-minute revision sheet and recall test.']
]

export default function BookChapter() {
  const { examId, chapterId } = useParams()
  const book = getStudyBook(examId)
  const chapter = getStudyChapter(examId, chapterId)
  const standard = getExamContentStandard(examId)
  const enhancement = getChapterEnhancement(examId, chapter?.slug)

  if (!book || !chapter) {
    return (
      <div className="rounded-3xl bg-white p-10 text-center shadow-sm">
        <div className="text-5xl">📖</div>
        <h1 className="mt-4 text-2xl font-black">Chapter not found</h1>
        <Link to="/books" className="mt-5 inline-flex rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white">Back to Books</Link>
      </div>
    )
  }

  const detailedResourceId = resourceAliases[chapter.slug]
  const detailedChapter = detailedResourceId ? chapterData[detailedResourceId] : null

  return (
    <div className="space-y-6">
      <Link to={`/books/${book.examId}`} className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-indigo-600">
        ← {book.examName} Book
      </Link>

      <section
        className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white px-5 py-7 shadow-xl md:px-10"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(148,163,184,0.12) 1px, transparent 1px)',
          backgroundSize: '100% 34px'
        }}
      >
        <div className="pointer-events-none absolute right-8 top-8 -rotate-12 font-black tracking-[0.2em] text-slate-900/[0.035]">STUDYPATH</div>

        <div className="relative">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-black uppercase tracking-wider text-indigo-600">
            <span>{book.examName}</span><span>•</span><span>{chapter.subject}</span>
          </div>

          <h1 className="mt-3 text-3xl font-black text-slate-900 md:text-5xl">
            {enhancement?.titleSuffix ? `${chapter.title}${enhancement.titleSuffix}` : chapter.title}
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
            {toneText[chapter.subjectTone]}
          </p>

          <div className="mt-5 flex flex-wrap gap-2 text-xs font-bold">
            <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-indigo-700">{standard.teachingFocus}</span>
            <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-emerald-700">Teacher-notebook format</span>
            <span className="rounded-full bg-amber-50 px-3 py-1.5 text-amber-700">Exam traps + practice</span>
            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-600">~{chapter.estimatedPages} pages planned</span>
          </div>
        </div>
      </section>

      {enhancement && (
        <>
          <section className="rounded-3xl border border-indigo-200 bg-indigo-50 p-5 md:p-7">
            <div className="text-xs font-black uppercase tracking-wider text-indigo-700">Why this chapter matters for {book.examName}</div>
            <p className="mt-3 text-sm leading-8 text-slate-700">{enhancement.whyThisMatters}</p>
          </section>

          <section className="grid gap-4 md:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-black text-slate-900">Exam Checklist</h2>
              <div className="mt-4 space-y-3">
                {enhancement.examChecklist.map((item) => (
                  <div key={item} className="flex gap-3 text-sm leading-7 text-slate-700">
                    <span className="text-emerald-600">✓</span><span>{item}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-rose-200 bg-rose-50 p-5 shadow-sm">
              <h2 className="text-lg font-black text-slate-900">Teacher Alert — common traps</h2>
              <div className="mt-4 space-y-3">
                {enhancement.trapBox.map((item) => (
                  <div key={item} className="text-sm leading-7 text-slate-700">
                    <span className="mr-2 text-rose-600">⚠</span>{item}
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section className="space-y-4">
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-indigo-600">Teacher board work</div>
              <h2 className="mt-1 text-2xl font-black text-slate-900">Exam patterns you must recognise</h2>
            </div>
            {enhancement.solvedPatterns.map((pattern) => (
              <article key={pattern.label} className="rounded-3xl border border-slate-200 bg-[#fffef8] p-5 shadow-sm">
                <div className="text-xs font-black uppercase tracking-wider text-amber-700">{pattern.label}</div>
                <div className="mt-2 text-base font-black text-slate-900">Q. {pattern.question}</div>
                <div className="mt-4 space-y-2">
                  {pattern.steps.map((step, index) => (
                    <div key={step} className="flex gap-3 text-sm leading-7 text-slate-700">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-[11px] font-black text-white">{index + 1}</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-2xl bg-emerald-50 p-3 text-sm font-semibold leading-7 text-emerald-900">Takeaway: {pattern.takeaway}</div>
              </article>
            ))}
          </section>

          <section className="rounded-3xl border-2 border-dashed border-slate-300 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-black text-slate-900">Timed Speed Drill</h2>
            <p className="mt-1 text-sm text-slate-500">Try these without looking back at the notes.</p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {enhancement.speedDrill.map((question, index) => (
                <div key={question} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold leading-7 text-slate-700">
                  {index + 1}. {question}
                </div>
              ))}
            </div>
            <details className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
              <summary className="cursor-pointer text-sm font-black text-emerald-800">Reveal answers</summary>
              <div className="mt-3 grid gap-2 text-sm font-semibold text-slate-700 md:grid-cols-2">
                {enhancement.speedAnswers.map((answer, index) => <div key={`${index}-${answer}`}>{index + 1}. {answer}</div>)}
              </div>
            </details>
          </section>
        </>
      )}

      {detailedChapter && (
        <section className="rounded-3xl border border-indigo-200 bg-indigo-50 p-5 md:p-7">
          <div className="text-xs font-black uppercase tracking-wider text-indigo-700">Detailed StudyPath Notes Available</div>
          <h2 className="mt-2 text-xl font-black text-slate-900">{detailedChapter.chapter}</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            This chapter already has a full teacher-style note set in the StudyPath viewer.
          </p>
          <Link
            to={`/resources/${detailedResourceId}`}
            className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-black text-white hover:bg-indigo-700"
          >
            Open Detailed Notes <i className="fas fa-book-open" />
          </Link>
        </section>
      )}

      <section className="grid gap-4 md:grid-cols-2">
        {genericSections.map(([number, title, description]) => (
          <article key={number} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-black text-white">{number}</span>
              <div>
                <h2 className="text-lg font-black text-slate-900">{title}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-amber-200 bg-amber-50 p-5 md:p-7">
        <div className="text-xs font-black uppercase tracking-wider text-amber-700">Teacher's Rule</div>
        <p className="mt-3 text-sm leading-8 text-slate-700">
          Do not jump straight to tricks. First understand one clean method, solve it yourself, and only then keep the shortcut as a speed tool.
        </p>
      </section>
    </div>
  )
}
