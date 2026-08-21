import React, { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getStudyBook } from '../data/studyBooks.js'

export default function BookIndex() {
  const { examId } = useParams()
  const book = getStudyBook(examId)
  const [subject, setSubject] = useState('All')
  const [query, setQuery] = useState('')

  const subjects = ['All', ...(book?.subjects || [])]

  const chapters = useMemo(() => {
    if (!book) return []
    const q = query.trim().toLowerCase()
    return book.chapters.filter((chapter) => {
      const subjectMatch = subject === 'All' || chapter.subject === subject
      const queryMatch = !q || `${chapter.title} ${chapter.subject}`.toLowerCase().includes(q)
      return subjectMatch && queryMatch
    })
  }, [book, query, subject])

  if (!book) {
    return (
      <div className="rounded-3xl bg-white p-10 text-center shadow-sm">
        <div className="text-5xl">📚</div>
        <h1 className="mt-4 text-2xl font-black">Book not found</h1>
        <Link to="/books" className="mt-5 inline-flex rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white">Back to Books</Link>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <Link to="/books" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-indigo-600">← All Study Books</Link>

      <section className={`rounded-3xl bg-gradient-to-r ${book.color} p-6 text-white shadow-xl md:p-8`}>
        <div className="flex flex-wrap items-center gap-2 text-xs font-black uppercase tracking-wider text-white/80">
          <span>{book.category}</span><span>•</span><span>{book.totalChapters} chapters</span>
        </div>
        <h1 className="mt-3 text-3xl font-black md:text-5xl">{book.bookTitle}</h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-white/90">{book.description}</p>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Find a chapter..."
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-indigo-100 md:max-w-md"
          />
          <div className="flex gap-2 overflow-x-auto pb-1">
            {subjects.map((item) => (
              <button
                key={item}
                onClick={() => setSubject(item)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold ${subject === item ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-3">
        {chapters.map((chapter) => (
          <article key={chapter.id} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:p-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-sm font-black text-indigo-700">
                  {chapter.order}
                </span>
                <div>
                  <div className="text-[11px] font-black uppercase tracking-wider text-indigo-600">{chapter.subject}</div>
                  <h2 className="mt-1 text-lg font-black text-slate-900">{chapter.title}</h2>
                  <div className="mt-2 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-500">
                    <span className="rounded-full bg-slate-100 px-2.5 py-1">~{chapter.estimatedPages} pages</span>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-emerald-700">Teacher notes</span>
                    <span className="rounded-full bg-amber-50 px-2.5 py-1 text-amber-700">Practice</span>
                  </div>
                </div>
              </div>

              <Link
                to={`/books/${book.examId}/${chapter.id}`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-black text-white hover:bg-indigo-700"
              >
                Open Chapter <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}
