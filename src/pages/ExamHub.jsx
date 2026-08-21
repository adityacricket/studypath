import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { exams, examCategories } from '../data/exams.js'
import AdSlot from '../components/AdSlot.jsx'

export default function ExamHub() {
  const [category, setCategory] = useState('All')
  const filtered = category === 'All' ? exams : exams.filter((e) => e.category === category)

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-extrabold mb-1">Exam Hub</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm">Complete guides for top competitive exams</p>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4 md:mx-0 md:px-0">
        {examCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition ${
              category === cat
                ? 'bg-primary-600 text-white'
                : 'bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map((exam) => (
          <Link key={exam.id} to={`/exams/${exam.id}`} className="card card-hover p-5 flex gap-4">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${exam.color} flex items-center justify-center text-white text-xl shrink-0`}>
              <i className={`fas ${exam.icon}`}></i>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="font-bold">{exam.name}</h3>
                <span className="badge bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">{exam.category}</span>
              </div>
              <p className="text-xs text-slate-400 mb-2">{exam.fullName}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">{exam.tagline}</p>
              <div className="flex items-center gap-4 mt-3 text-xs text-slate-400">
                <span><i className="fas fa-layer-group mr-1"></i>{exam.subjects.length} subjects</span>
                <span><i className="fas fa-list-ol mr-1"></i>{exam.examPattern.length} stages</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <AdSlot label="Exam Hub Ad" />
    </div>
  )
}
