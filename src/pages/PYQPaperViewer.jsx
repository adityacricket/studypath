import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { pyqCoverage } from '../data/pyqLibrary.js'

export default function PYQPaperViewer() {
  const { paperId, tier } = useParams()
  const papers = pyqCoverage['ssc-cgl']?.years || []
  const paper = papers.find((item) => item.id === paperId)
  const tierName = tier === 'tier-2' ? 'Tier II' : 'Tier I'
  const tierData = paper?.tiers.find((item) => item.tier === tierName)

  if (!paper || !tierData) {
    return (
      <div className="mx-auto max-w-3xl py-8">
        <div className="card p-8 text-center space-y-3">
          <i className="fas fa-file-circle-question text-3xl text-amber-500" />
          <h1 className="text-xl font-black">Paper not found</h1>
          <Link to="/pyq" className="btn-primary inline-flex">Back to PYQ Library</Link>
        </div>
      </div>
    )
  }

  // Assets intentionally live under StudyPath's own public path.
  // Only authorized/licensed or user-supplied paper PDFs should be placed here.
  const pdfPath = `/pyqs/ssc-cgl/${paper.year}/${tier === 'tier-2' ? 'tier-2' : 'tier-1'}.pdf`

  return (
    <div className="mx-auto max-w-6xl space-y-4 pb-8">
      <div className="flex items-center justify-between gap-3">
        <Link to="/pyq" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-primary-600">
          <i className="fas fa-arrow-left" /> PYQ Library
        </Link>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">STUDYPATH VIEWER</span>
      </div>

      <section className="rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 p-5 text-white shadow-lg">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70">SSC CGL · {tierName}</p>
        <h1 className="mt-1 text-2xl font-black">{paper.year} Previous Year Paper</h1>
        <p className="mt-1 text-sm text-white/75">The paper stays inside the StudyPath interface.</p>
      </section>

      <div className="card overflow-hidden">
        <div className="flex items-center justify-between gap-3 border-b border-slate-100 p-3 dark:border-slate-800">
          <div className="flex items-center gap-2 text-sm font-bold">
            <i className="fas fa-file-pdf text-red-500" />
            {paper.year} · {tierName}
          </div>
          <a href={pdfPath} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-primary-600 hover:text-primary-700">
            Open PDF <i className="fas fa-up-right-from-square ml-1" />
          </a>
        </div>

        <div className="bg-slate-100 p-2 dark:bg-slate-950">
          <iframe
            title={`${paper.year} SSC CGL ${tierName} paper`}
            src={pdfPath}
            className="h-[75vh] min-h-[620px] w-full rounded-xl bg-white"
          />
        </div>
      </div>

      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-xs leading-5 text-amber-900 dark:border-amber-900/50 dark:bg-amber-950/20 dark:text-amber-200">
        <i className="fas fa-circle-info mr-2" />
        This viewer is internal to StudyPath. The PDF asset must be authorized/licensed for StudyPath hosting; the app does not copy third-party paper text into its source code.
      </div>
    </div>
  )
}
