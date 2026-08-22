import React, { useState } from 'react'

const checklist = [
  { label: 'Sample Papers route + navigation', done: true },
  { label: 'Route audit', done: true },
  { label: 'Quiz: 15 questions each', done: true },
  { label: 'Mocks: full attempt flow', done: false },
  { label: 'Sample Papers: complete flow', done: false },
  { label: 'Study Books: all links work', done: false },
  { label: 'Resources: all sections work', done: false },
  { label: 'Detailed Notes content', done: false },
  { label: 'Planner + progress tracking', done: false },
  { label: 'Dashboard data + stats', done: false },
  { label: 'Profile / Account / Settings', done: false },
  { label: 'Study Coach polish', done: false },
  { label: 'Careers flow', done: false },
  { label: 'Mobile UI check', done: false },
  { label: 'Dark mode check', done: false },
  { label: 'Broken links / 404 check', done: false },
  { label: 'Final live deployment check', done: false },
]

export default function ProjectChecklist() {
  const [open, setOpen] = useState(true)
  const completed = checklist.filter((item) => item.done).length

  return (
    <div className="hidden xl:block fixed right-4 top-24 z-50 w-72">
      {open ? (
        <div className="rounded-2xl border border-slate-200 bg-white/95 shadow-xl backdrop-blur dark:border-slate-700 dark:bg-slate-900/95 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <p className="text-sm font-extrabold text-slate-800 dark:text-slate-100">Today’s Finish List</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">{completed}/{checklist.length} complete</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="w-7 h-7 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Collapse checklist"
            >
              −
            </button>
          </div>

          <div className="max-h-[70vh] overflow-y-auto p-3 space-y-1">
            {checklist.map((item) => (
              <div
                key={item.label}
                className={`flex items-start gap-2.5 rounded-xl px-2.5 py-2 ${item.done ? 'bg-emerald-50/70 dark:bg-emerald-950/20' : 'bg-slate-50/70 dark:bg-slate-800/50'}`}
              >
                <span className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] font-black ${item.done ? 'bg-emerald-500 text-white' : 'border border-slate-300 text-transparent dark:border-slate-600'}`}>
                  ✓
                </span>
                <span className={`text-[11px] leading-4 ${item.done ? 'text-emerald-700 line-through decoration-emerald-300 dark:text-emerald-300' : 'text-slate-600 dark:text-slate-300'}`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="ml-auto flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
        >
          <span className="h-2 w-2 rounded-full bg-primary-500" />
          {completed}/{checklist.length} done
        </button>
      )}
    </div>
  )
}
