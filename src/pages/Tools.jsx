import React from 'react'
import { Link } from 'react-router-dom'
import AdSlot from '../components/AdSlot.jsx'

const tools = [
  { id: 'percentage', name: 'Percentage Calculator', desc: 'Find X% of a value, compare changes, and calculate increase or decrease.', icon: 'fa-percent', color: 'from-indigo-500 to-blue-500', tag: 'Quantitative' },
  { id: 'average', name: 'Average Calculator', desc: 'Get the mean of a list of numbers quickly and accurately.', icon: 'fa-chart-line', color: 'from-emerald-500 to-teal-500', tag: 'Quantitative' },
  { id: 'ratio', name: 'Ratio Calculator', desc: 'Simplify ratios and split a total into ratio-based parts.', icon: 'fa-scale-balanced', color: 'from-amber-500 to-orange-500', tag: 'Quantitative' },
  { id: 'age', name: 'Age Calculator', desc: 'Calculate age from a date of birth for forms and exam applications.', icon: 'fa-cake-candles', color: 'from-rose-500 to-pink-500', tag: 'Everyday' },
  { id: 'marks', name: 'Marks Percentage', desc: 'Turn marks obtained and maximum marks into your percentage.', icon: 'fa-square-check', color: 'from-sky-500 to-cyan-500', tag: 'Exam Prep' },
  { id: 'study-time', name: 'Study Time Calculator', desc: 'Estimate the daily study time needed to finish your target syllabus.', icon: 'fa-hourglass-half', color: 'from-purple-500 to-fuchsia-500', tag: 'Planning' },
  { id: 'timetable', name: 'Timetable Generator', desc: 'Create a weekly plan around your exam date, subjects, strengths and weak areas.', icon: 'fa-calendar-days', color: 'from-lime-600 to-green-600', tag: 'Planning' },
]

export default function Tools() {
  const popular = tools.slice(0, 3)

  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-primary-600 to-violet-600 p-5 text-white shadow-lg md:p-7">
        <div className="relative z-10 max-w-3xl">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
            <i className="fas fa-wand-magic-sparkles"></i> Free Study Tools
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">Do the calculation. Get back to studying.</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-white/80 md:text-base">
            Fast, student-friendly tools for maths, marks, planning and everyday exam prep. No complicated setup.
          </p>
        </div>
        <div className="pointer-events-none absolute -right-10 -top-16 text-[180px] font-black leading-none text-white/10">%</div>
      </section>

      <section>
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h2 className="section-title">Quick picks</h2>
            <p className="text-xs text-slate-400">Most useful for a quick calculation</p>
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {popular.map((tool) => (
            <Link key={tool.id} to={`/tools/${tool.id}`} className="card card-hover flex items-center gap-3 p-4">
              <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${tool.color} text-white shadow-sm`}>
                <i className={`fas ${tool.icon}`}></i>
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold">{tool.name}</p>
                <p className="mt-0.5 text-xs text-slate-400">Open tool →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-3 flex items-end justify-between">
          <div>
            <h2 className="section-title">All Study Tools</h2>
            <p className="text-xs text-slate-400">Choose a tool and start immediately</p>
          </div>
          <span className="badge bg-emerald-100 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300">{tools.length} free tools</span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.id}
              to={`/tools/${tool.id}`}
              className="card card-hover group flex h-full flex-col p-4 transition hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between gap-3">
                <div className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${tool.color} text-white shadow-sm`}>
                  <i className={`fas ${tool.icon}`}></i>
                </div>
                <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-bold text-slate-500 dark:bg-slate-800 dark:text-slate-400">{tool.tag}</span>
              </div>
              <p className="mt-4 text-sm font-bold">{tool.name}</p>
              <p className="mt-1 flex-1 text-xs leading-5 text-slate-400">{tool.desc}</p>
              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-bold text-primary-600 dark:border-slate-800 dark:text-primary-400">
                <span>Use this tool</span>
                <i className="fas fa-arrow-right transition group-hover:translate-x-1"></i>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-4 dark:border-indigo-900/40 dark:bg-indigo-950/20">
        <div className="flex items-start gap-3">
          <span className="text-xl">💡</span>
          <div>
            <p className="text-sm font-bold">Small tip</p>
            <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">Use the calculators for checking your work, then solve a few questions yourself. The goal is faster thinking, not just faster tapping.</p>
          </div>
        </div>
      </div>

      <AdSlot label="Tools Page Ad" />
    </div>
  )
}
