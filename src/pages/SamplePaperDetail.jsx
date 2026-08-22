import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { questionBank, shuffleArray } from '../data/quizzes.js'

const papers = {
  'maths-foundation-1': { title: 'Mathematics Foundation Sample Paper 1', subject: 'Mathematics', questions: 15, duration: 30, level: 'Foundation', note: 'Practice set based on the current Quantitative Aptitude question bank.' },
  'science-foundation-1': { title: 'Science Foundation Sample Paper 1', subject: 'Science', questions: 15, duration: 30, level: 'Foundation', note: 'Science practice content is currently sourced from the existing GK/Science bank.' },
  'english-foundation-1': { title: 'English Foundation Sample Paper 1', subject: 'English', questions: 15, duration: 25, level: 'Foundation', note: 'Practice set based on the current English question bank.' },
  'mixed-practice-1': { title: 'Mixed Practice Sample Paper 1', subject: 'Mixed', questions: 20, duration: 35, level: 'Practice', note: 'Mixed practice using the current question bank.' },
}

function getQuestions(id) {
  const paper = papers[id]
  if (!paper) return []
  if (id === 'mixed-practice-1') return shuffleArray(questionBank).slice(0, 20)
  if (id === 'maths-foundation-1') return shuffleArray(questionBank.filter((q) => q.subject === 'quant')).slice(0, 15)
  if (id === 'english-foundation-1') return shuffleArray(questionBank.filter((q) => q.subject === 'english')).slice(0, 15)
  return shuffleArray(questionBank.filter((q) => q.topic === 'Science' || q.subject === 'gk')).slice(0, 15)
}

export default function SamplePaperDetail() {
  const { paperId } = useParams()
  const navigate = useNavigate()
  const paper = papers[paperId]

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
    const questions = getQuestions(paperId)
    navigate('/quiz/play', {
      state: {
        questions,
        title: paper.title,
        subject: paper.subject,
        mixed: paperId === 'mixed-practice-1',
        examName: 'Sample Paper',
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
            <p className="mt-2 text-sm text-white/80">{paper.subject} · {paper.level}</p>
          </div>
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15">
            <i className="fas fa-file-lines text-xl" />
          </div>
        </div>
      </section>

      <div className="grid grid-cols-3 gap-3">
        <div className="card p-4 text-center"><p className="text-xl font-black text-primary-600">{paper.questions}</p><p className="text-xs text-slate-400">Questions</p></div>
        <div className="card p-4 text-center"><p className="text-xl font-black text-primary-600">{paper.duration}</p><p className="text-xs text-slate-400">Minutes</p></div>
        <div className="card p-4 text-center"><p className="text-xl font-black text-emerald-600">FREE</p><p className="text-xs text-slate-400">Access</p></div>
      </div>

      <div className="card p-5 space-y-4">
        <h2 className="section-title">Before you start</h2>
        <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
          <p><i className="fas fa-circle-check mr-2 text-emerald-500" />Answer each question and read the explanation after submitting.</p>
          <p><i className="fas fa-circle-check mr-2 text-emerald-500" />The current practice engine shows one question at a time with a short timer.</p>
          <p><i className="fas fa-circle-info mr-2 text-primary-500" />{paper.note}</p>
        </div>
        <button onClick={startPaper} className="btn-primary w-full py-3 text-base">
          Start Paper <i className="fas fa-arrow-right" />
        </button>
      </div>
    </div>
  )
}
