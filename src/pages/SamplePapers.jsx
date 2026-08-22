import React from 'react'
import { Link } from 'react-router-dom'
import { upscSamplePapers } from '../data/upscSamplePapers.js'

const basePapers = [
  { id: 'maths-foundation-1', title: 'Mathematics Foundation Sample Paper 1', subject: 'Mathematics', questions: 15, duration: 30, level: 'Foundation', free: true },
  { id: 'science-foundation-1', title: 'Science Foundation Sample Paper 1', subject: 'Science', questions: 15, duration: 30, level: 'Foundation', free: true },
  { id: 'english-foundation-1', title: 'English Foundation Sample Paper 1', subject: 'English', questions: 15, duration: 25, level: 'Foundation', free: true },
  { id: 'mixed-practice-1', title: 'Mixed Practice Sample Paper 1', subject: 'Mixed', questions: 20, duration: 35, level: 'Practice', free: true },
]

const papers = [
  ...basePapers,
  ...upscSamplePapers.map((paper, index) => ({
    id: paper.id,
    title: paper.title,
    subject: 'UPSC CSE',
    questions: paper.questions?.length || 100,
    duration: 120,
    level: 'Prelims • 200 Marks',
    free: true,
    number: index + 1,
  })),
]

export default function SamplePapers() {
  return (
    <div className="space-y-6 pb-6">
      <section className="rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 p-6 text-white shadow-lg">
        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/70">Practice Library</p>
        <h1 className="mt-1 text-3xl font-black">Sample Papers</h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-white/80">Practice exam-style papers with a clear attempt flow, timer and result review.</p>
      </section>

      <section className="space-y-3">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-500">UPSC CSE</p>
            <h2 className="text-xl font-black">Prelims Mock Series</h2>
            <p className="text-sm text-slate-400">10 full-length practice papers • free access</p>
          </div>
          <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-black text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-300">10 MOCKS</span>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {papers.filter((paper) => paper.subject === 'UPSC CSE').map((paper) => (
            <article key={paper.id} className="card card-hover p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400"><i className="fas fa-file-lines" /></div>
                <span className="badge bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">FREE</span>
              </div>
              <h3 className="mt-4 text-base font-black">{paper.title}</h3>
              <p className="mt-1 text-xs text-slate-400">{paper.level}</p>
              <div className="mt-4 flex gap-2 text-xs font-bold text-slate-500 dark:text-slate-400"><span className="rounded-lg bg-slate-100 px-2.5 py-1.5 dark:bg-slate-800">{paper.questions} Questions</span><span className="rounded-lg bg-slate-100 px-2.5 py-1.5 dark:bg-slate-800">{paper.duration} min</span></div>
              <Link to={`/sample-papers/${paper.id}`} className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-black text-white hover:bg-indigo-700">Open Mock <i className="fas fa-arrow-right text-xs" /></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-black">More Practice</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {papers.filter((paper) => paper.subject !== 'UPSC CSE').map((paper) => (
            <article key={paper.id} className="card card-hover p-5">
              <h3 className="text-base font-black">{paper.title}</h3>
              <p className="mt-1 text-xs text-slate-400">{paper.subject} · {paper.level}</p>
              <Link to={`/sample-papers/${paper.id}`} className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-black text-white">View Paper <i className="fas fa-arrow-right text-xs" /></Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
