import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { pyqCoverage } from '../data/pyqLibrary.js'

const originalPracticePath = '/pyq/ssc-cgl-original-practice-2024/tier-1'

export default function PYQ() {
  const [exam, setExam] = useState('ssc-cgl')
  const [year, setYear] = useState('all')
  const [tier, setTier] = useState('all')
  const coverage = pyqCoverage[exam]

  const filtered = useMemo(() => coverage.years.filter((paper) => {
    const yearMatch = year === 'all' || String(paper.year) === year
    const paperMatch = exam === 'nda'
      ? tier === 'all' || paper.papers.some((item) => item.paper === tier)
      : tier === 'all' || paper.tiers.some((item) => item.tier === tier)
    return yearMatch && paperMatch
  }), [coverage, exam, year, tier])

  const changeExam = (nextExam) => {
    setExam(nextExam)
    setYear('all')
    setTier('all')
  }

  return (
    <div className="space-y-6 pb-8">
      <section className="rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-indigo-700 p-6 text-white shadow-lg md:p-7">
        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-indigo-200">Previous Year Questions</p>
        <div className="mt-2 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-black">StudyPath PYQ Library</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/75">Real PYQs will be hosted inside StudyPath only after an authorized paper asset is supplied. Until then, this section is a clean index — never a fake paper or an external redirect.</p>
          </div>
          <div className="rounded-2xl bg-white/10 px-5 py-4 text-center backdrop-blur">
            <div className="text-2xl font-black">{coverage.years.length}</div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-200">Years indexed</div>
          </div>
        </div>
      </section>

      <section className="flex gap-2 overflow-x-auto pb-1">
        {Object.entries(pyqCoverage).map(([id, item]) => (
          <button key={id} onClick={() => changeExam(id)} className={`shrink-0 rounded-2xl px-5 py-3 text-sm font-black transition ${exam === id ? 'bg-indigo-600 text-white shadow-md' : 'border border-slate-200 bg-white text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300'}`}>
            {item.exam} PYQs
          </button>
        ))}
      </section>

      {exam === 'ssc-cgl' && (
        <section className="card border border-indigo-100 bg-indigo-50/60 p-5 dark:border-indigo-900/50 dark:bg-indigo-950/20">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-indigo-500">Ready to practice</p>
              <h2 className="mt-1 font-black text-slate-900 dark:text-white">SSC CGL Tier-I — StudyPath Original Practice Paper</h2>
              <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">20 original questions based on the SSC CGL Tier-I pattern. This is practice content, not an official SSC paper.</p>
            </div>
            <Link to={originalPracticePath} className="shrink-0 rounded-xl bg-indigo-600 px-4 py-3 text-center text-sm font-black text-white hover:bg-indigo-700">Start Practice</Link>
          </div>
        </section>
      )}

      <section className="card p-4 md:p-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-black text-slate-900 dark:text-white">Coverage: {coverage.firstIndexedYear}–{coverage.lastIndexedYear}</h2>
            <p className="mt-1 text-xs text-slate-400">{exam === 'nda' ? 'Mathematics + GAT · StudyPath-only index' : 'Tier I + Tier II · StudyPath-only index'}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <select value={year} onChange={(e) => setYear(e.target.value)} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
              <option value="all">All years</option>
              {coverage.years.map((paper) => <option key={paper.year} value={paper.year}>{paper.year}</option>)}
            </select>
            <select value={tier} onChange={(e) => setTier(e.target.value)} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
              <option value="all">All {exam === 'nda' ? 'papers' : 'tiers'}</option>
              {(exam === 'nda' ? ['Mathematics', 'GAT'] : ['Tier I', 'Tier II']).map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </div>
        </div>
      </section>

      <section className="grid gap-3 md:grid-cols-2">
        {filtered.map((paper) => (
          <article key={paper.id} className="card card-hover p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-500">{coverage.exam}</p>
                <h2 className="mt-1 text-xl font-black">{paper.year}</h2>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-black text-slate-600 dark:bg-slate-800 dark:text-slate-300">Index ready</span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              {(exam === 'nda' ? paper.papers : paper.tiers).map((item) => (
                <div key={exam === 'nda' ? item.paper : item.tier} className="rounded-xl bg-slate-50 p-3 dark:bg-slate-800/60">
                  <p className="text-xs font-black text-slate-700 dark:text-slate-200">{exam === 'nda' ? item.paper : item.tier}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-amber-600 dark:text-amber-300">Authorized asset pending</p>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs leading-5 text-slate-500 dark:text-slate-400">{paper.sourceNote}</p>
            <div className="mt-4 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-3 text-xs font-bold text-slate-600 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300">Paper viewer is intentionally locked. Once you provide an authorized PDF, it can be added to this StudyPath route without changing the library structure.</div>
          </article>
        ))}
      </section>
    </div>
  )
}
