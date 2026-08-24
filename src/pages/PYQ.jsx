import React, { useMemo, useState } from 'react'
import { pyqCoverage } from '../data/pyqLibrary.js'

const official = pyqCoverage['ssc-cgl']

export default function PYQ() {
  const [year, setYear] = useState('all')
  const [tier, setTier] = useState('all')

  const filtered = useMemo(() => official.years.filter((paper) => {
    const yearMatch = year === 'all' || String(paper.year) === year
    const tierMatch = tier === 'all' || paper.tiers.some((item) => item.tier === tier)
    return yearMatch && tierMatch
  }), [year, tier])

  return (
    <div className="space-y-6 pb-8">
      <section className="rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-indigo-700 p-6 text-white shadow-lg md:p-7">
        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-indigo-200">Previous Year Questions</p>
        <div className="mt-2 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-black">SSC CGL PYQ Library</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/75">Year-wise coverage for Tier I and Tier II, with official SSC source access. StudyPath does not republish copyrighted question-paper text.</p>
          </div>
          <div className="rounded-2xl bg-white/10 px-5 py-4 text-center backdrop-blur">
            <div className="text-2xl font-black">{official.years.length}</div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-200">Years indexed</div>
          </div>
        </div>
      </section>

      <section className="card p-4 md:p-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-black text-slate-900 dark:text-white">Coverage: {official.firstIndexedYear}–{official.lastIndexedYear}</h2>
            <p className="mt-1 text-xs text-slate-400">Tier I + Tier II historical index</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <select value={year} onChange={(e) => setYear(e.target.value)} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
              <option value="all">All years</option>
              {official.years.map((paper) => <option key={paper.year} value={paper.year}>{paper.year}</option>)}
            </select>
            <select value={tier} onChange={(e) => setTier(e.target.value)} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
              <option value="all">All tiers</option>
              <option value="Tier I">Tier I</option>
              <option value="Tier II">Tier II</option>
            </select>
          </div>
        </div>
      </section>

      <section className="grid gap-3 md:grid-cols-2">
        {filtered.map((paper) => (
          <article key={paper.id} className="card card-hover p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-500">SSC CGL</p>
                <h2 className="mt-1 text-xl font-black">{paper.year}</h2>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-black text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">PYQ</span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              {paper.tiers.map((item) => (
                <div key={item.tier} className="rounded-xl bg-slate-50 p-3 dark:bg-slate-800/60">
                  <p className="text-xs font-black text-slate-700 dark:text-slate-200">{item.tier}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-slate-400">{item.status === 'official-archive' ? 'Official archive' : 'Historical index'}</p>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs leading-5 text-slate-500 dark:text-slate-400">{paper.sourceNote}</p>

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <a href={paper.sourceUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-black text-white hover:bg-indigo-700">
                Official SSC <i className="fas fa-arrow-up-right-from-square text-[10px]" />
              </a>
              <a href={paper.answerKeyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-black text-indigo-600 dark:border-slate-700 dark:bg-slate-900 dark:text-indigo-300">
                Answer Key Archive <i className="fas fa-key text-[10px]" />
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900/50 dark:bg-amber-950/20">
        <div className="flex gap-3">
          <i className="fas fa-circle-info mt-0.5 text-amber-600" />
          <div>
            <h3 className="text-sm font-black text-amber-900 dark:text-amber-200">Important source note</h3>
            <p className="mt-1 text-xs leading-5 text-amber-800/80 dark:text-amber-200/70">SSC's archive contains official answer-key/question-paper releases for various years, while some candidate response sheets are time-limited or login-gated. This page records the coverage without copying the original paper text into StudyPath.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
