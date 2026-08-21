import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { studyBooks, getStudyBookStats } from '../data/studyBooks.js'

export default function Books() {
  const stats = getStudyBookStats()
  const [examFilter, setExamFilter] = useState('All')
  const [query, setQuery] = useState('')

  const categories = useMemo(() => ['All', ...new Set(studyBooks.map((book) => book.category))], [])

  const visibleBooks = useMemo(() => {
    const q = query.trim().toLowerCase()
    return studyBooks.filter((book) => {
      const categoryMatch = examFilter === 'All' || book.category === examFilter
      const queryMatch = !q || `${book.examName} ${book.fullName} ${book.category}`.toLowerCase().includes(q)
      return categoryMatch && queryMatch
    })
  }, [examFilter, query])

  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-slate-950 px-5 py-7 text-white shadow-xl md:px-8">
        <div className="flex flex-wrap items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-indigo-300">
          <span>StudyPath Books</span>
          <span>•</span>
          <span>Syllabus mapped</span>
        </div>

        <h1 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
          Complete Study Books, exam by exam.
        </h1>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
          Every exam book is built from its syllabus. Each chapter is designed for teacher-style explanation, examples, traps, practice and revision instead of generic notes.
        </p>

        <div className="mt-6 grid grid-cols-3 gap-3 max-w-2xl">
          <div className="rounded-2xl bg-white/10 p-4">
            <div className="text-2xl font-black">{stats.exams}</div>
            <div className="text-xs text-slate-300">Exam books</div>
          </div>
          <div className="rounded-2xl bg-white/10 p-4">
            <div className="text-2xl font-black">{stats.chapters}</div>
            <div className="text-xs text-slate-300">Syllabus chapters</div>
          </div>
          <div className="rounded-2xl bg-white/10 p-4">
            <div className="text-2xl font-black">11</div>
            <div className="text-xs text-slate-300">Learning layers</div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search exam books..."
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-indigo-100 focus:ring-4 md:max-w-md"
        />

        <div className="flex gap-2 overflow-x-auto pb-1">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setExamFilter(category)}
              className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold ${examFilter === category ? 'bg-indigo-600 text-white' : 'bg-white border border-slate-200 text-slate-600'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visibleBooks.map((book) => (
          <article key={book.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className={`bg-gradient-to-r ${book.color} p-5 text-white`}>
              <div className="flex items-center justify-between gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-lg">
                  <i className={`fas ${book.icon}`} />
                </span>
                <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-black uppercase tracking-wide">
                  {book.category}
                </span>
              </div>
              <h2 className="mt-5 text-xl font-black">{book.bookTitle}</h2>
              <p className="mt-2 text-xs leading-6 text-white/85">{book.tagline}</p>
            </div>

            <div className="p-5">
              <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                <span>{book.totalChapters} chapters</span>
                <span>{book.subjects.length} subjects</span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {book.subjects.slice(0, 5).map((subject) => (
                  <span key={subject} className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
                    {subject}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600">{book.description}</p>

              <Link
                to={`/books/${book.examId}`}
                className="mt-5 flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-4 py-3 text-sm font-black text-white transition hover:bg-indigo-700"
              >
                Open Complete Book
                <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </article>
        ))}
      </section>

      {visibleBooks.length === 0 && (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center">
          <div className="text-4xl">📚</div>
          <h2 className="mt-3 text-xl font-black text-slate-900">No matching book</h2>
          <p className="mt-2 text-sm text-slate-500">Try another exam or clear the search.</p>
        </div>
      )}
    </div>
  )
}
