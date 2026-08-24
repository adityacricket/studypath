import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { samplePapers } from '../data/samplePapers.js'
import { upscSamplePapers } from '../data/upscSamplePapers.js'
import { sscCglSamplePapersV2 } from '../data/sscCglSamplePapersV2.js'

const upscById = Object.fromEntries(
  upscSamplePapers
    .filter((paper) => paper?.id && paper?.questions?.length)
    .map((paper) => [paper.id, paper])
)

const sscById = Object.fromEntries(
  sscCglSamplePapersV2
    .filter((paper) => paper?.id && paper?.questions?.length)
    .map((paper) => [paper.id, paper])
)

export default function SamplePaperDetail() {
  const { paperId } = useParams()
  const navigate = useNavigate()
  const legacyPaper = samplePapers[paperId]
  const upscPaper = upscById[paperId]
  const sscPaper = sscById[paperId]
  const paper = sscPaper || upscPaper || legacyPaper

  if (!paper) {
    const knownUpsc = upscSamplePapers.find((item) => item.id === paperId)
    if (knownUpsc?.status === 'coming-soon') {
      return (
        <div className="card p-8 text-center space-y-3">
          <i className="fas fa-hourglass-half text-3xl text-amber-500" />
          <h1 className="text-lg font-extrabold">This sample paper is coming soon</h1>
          <p className="text-sm text-slate-500">We are preparing the complete question set and explanations.</p>
          <Link to="/sample-papers" className="btn-primary">Back to Sample Papers</Link>
        </div>
      )
    }

    return (
      <div className="card p-8 text-center space-y-3">
        <i className="fas fa-file-circle-question text-3xl text-amber-500" />
        <h1 className="text-lg font-extrabold">Sample paper not found</h1>
        <Link to="/sample-papers" className="btn-primary">Back to Sample Papers</Link>
      </div>
    )
  }

  const questionCount = paper.questions?.length || 0
  const duration = paper.duration || 120
  const isUpsc = Boolean(upscPaper)
  const isSsc = Boolean(sscPaper)
  const isFullLength = (isUpsc || isSsc) && questionCount >= 100
  const topics = [...new Set((paper.questions || []).map((q) => q.topic).filter(Boolean))]

  const startPaper = () => {
    navigate('/quiz/play', {
      state: {
        questions: paper.questions,
        title: paper.title,
        subject: paper.subject || 'UPSC CSE',
        mixed: false,
        examName: paper.title,
        duration,
        fullLength: isFullLength,
        sectionTimers: paper.sectionTimers || null,
        negativeMarking: Number(paper.negativeMarking || 0),
        maxMarks: Number(paper.marks || 0),
        source: 'sample-paper',
      },
    })
  }

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
          <p><i className="fas fa-circle-info mr-2 text-primary-500" />{isSsc ? 'SSC CGL Tier-I model paper — free to attempt.' : isUpsc ? 'UPSC CSE practice paper — free to attempt.' : 'Original StudyPath practice paper — free to attempt.'}</p>
          {paper.marks && <p><i className="fas fa-star mr-2 text-amber-500" />Maximum marks: {paper.marks}. Wrong answer penalty: {paper.negativeMarking || 0} marks.</p>}
          {paper.sectionTimers?.length > 0 && (
            <div className="rounded-xl bg-indigo-50 p-3 dark:bg-indigo-900/20">
              <p className="mb-2 text-xs font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-300">Section timers</p>
              <div className="grid gap-2 sm:grid-cols-2">
                {paper.sectionTimers.map((section) => (
                  <div key={section.name} className="flex items-center justify-between rounded-lg bg-white px-3 py-2 text-xs dark:bg-slate-800">
                    <span className="font-semibold">{section.name}</span>
                    <span className="font-black text-indigo-600 dark:text-indigo-300">{section.questions} · {section.minutes} min</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {isFullLength && !paper.sectionTimers?.length && <p><i className="fas fa-clock mr-2 text-primary-500" />The full paper uses one continuous {duration}-minute timer.</p>}
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
