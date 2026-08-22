import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { samplePapers } from '../data/samplePapers.js'
import { upscMock07 } from '../data/upscMock07.js'
import { upscMock08 } from '../data/upscMock08.js'
import { upscMock09 } from '../data/upscMock09.js'
import { upscMock10 } from '../data/upscMock10.js'
import { upscSamplePapers } from '../data/upscSamplePapers.js'

const upscById = Object.fromEntries([
  upscMock07,
  upscMock08,
  upscMock09,
  upscMock10,
].map((paper) => [paper.id, paper]))

export default function SamplePaperDetail() {
  const { paperId } = useParams()
  const navigate = useNavigate()
  const legacyPaper = samplePapers[paperId]
  const upscPaper = upscById[paperId]
  const paper = upscPaper || legacyPaper

  if (!paper) {
    return (
      <div className="card p-8 text-center space-y-3">
        <i className="fas fa-file-circle-question text-3xl text-amber-500" />
        <h1 className="text-lg font-extrabold">Sample paper not found</h1>
        <Link to="/sample-papers" className="btn-primary">Back to Sample Papers</Link>
      </div>
    )
  }

  const startPaper = () => {
    navigate('/quiz/play', {
      state: {
        questions: paper.questions,
        title: paper.title,
        subject: paper.subject || 'UPSC CSE',
        mixed: false,
        examName: paper.title,
        duration: paper.duration || 120,
        source: 'sample-paper',
      },
    })
  }

  const questionCount = paper.questions?.length || 0
  const duration = paper.duration || 120
  const topics = [...new Set((paper.questions || []).map((q) => q.topic).filter(Boolean))]
  const isUpsc = Boolean(upscPaper || upscSamplePapers.some((item) => item.id === paperId))

  return (
    <div className="mx-auto max-w-3xl space-y-5 pb-8">
      <Link to="/sample-papers" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-primary-600">
        <i className="fas fa-arrow-left" /> Sample Papers
      </Link>

      <section className="rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 p-6 text-white shadow-lg">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/70">FREE SAMPLE PAPER</p>
            <h1 className="mt-2 text-2xl font-black">{paper.title}</h1>
            <p className="mt-2 text-sm text-white/80">{paper.subject || 'UPSC CSE'} · {paper.level || paper.meta || 'Prelims'}</p>
          </div>
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15">
            <i className="fas fa-file-lines text-xl" />
          </div>
        </div>
      </section>

      <div className="grid grid-cols-3 gap-3">
        <div className="card p-4 text-center"><p className="text-xl font-black text-primary-600">{questionCount}</p><p className="text-xs text-slate-400">Questions</p></div>
        <div className="card p-4 text-center"><p className="text-xl font-black text-primary-600">{duration}</p><p className="text-xs text-slate-400">Minutes</p></div>
        <div className="card p-4 text-center"><p className="text-xl font-black text-emerald-600">FREE</p><p className="text-xs text-slate-400">Access</p></div>
      </div>

      <div className="card p-5 space-y-4">
        <h2 className="section-title">Before you start</h2>
        <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
          <p><i className="fas fa-circle-check mr-2 text-emerald-500" />{questionCount} original practice questions with four options each.</p>
          <p><i className="fas fa-circle-check mr-2 text-emerald-500" />Every question includes an answer and explanation for review.</p>
          <p><i className="fas fa-circle-info mr-2 text-primary-500" />{isUpsc ? 'UPSC CSE practice paper — free to attempt.' : 'Original StudyPath practice paper — free to attempt.'}</p>
        </div>

        <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/60">
          <p className="text-xs font-black uppercase tracking-wider text-slate-400">Topics covered</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {topics.map((topic) => <span key={topic} className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-600 shadow-sm dark:bg-slate-700 dark:text-slate-200">{topic}</span>)}
          </div>
        </div>

        <button onClick={startPaper} className="btn-primary w-full py-3 text-base">
          Start Paper <i className="fas fa-arrow-right" />
        </button>
      </div>
    </div>
  )
}
