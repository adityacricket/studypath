import React from 'react'
import { Link } from 'react-router-dom'
import AdSlot from '../components/AdSlot.jsx'

const tools = [
  { id: 'percentage', name: 'Percentage Calculator', desc: 'Calculate percentages, increase/decrease & more', icon: 'fa-percent', color: 'from-indigo-500 to-blue-500' },
  { id: 'average', name: 'Average Calculator', desc: 'Find average of any set of numbers', icon: 'fa-chart-line', color: 'from-emerald-500 to-teal-500' },
  { id: 'ratio', name: 'Ratio Calculator', desc: 'Simplify and divide values by ratio', icon: 'fa-scale-balanced', color: 'from-amber-500 to-orange-500' },
  { id: 'age', name: 'Age Calculator', desc: 'Calculate exact age from date of birth', icon: 'fa-cake-candles', color: 'from-rose-500 to-pink-500' },
  { id: 'marks', name: 'Marks Percentage Calculator', desc: 'Calculate percentage from marks obtained', icon: 'fa-square-check', color: 'from-sky-500 to-cyan-500' },
  { id: 'study-time', name: 'Study Time Calculator', desc: 'Plan how many hours needed to cover syllabus', icon: 'fa-hourglass-half', color: 'from-purple-500 to-fuchsia-500' },
  { id: 'timetable', name: 'Timetable Generator', desc: 'Auto-generate a weekly study timetable', icon: 'fa-calendar-days', color: 'from-lime-600 to-green-600' },
]

export default function Tools() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-extrabold mb-1">Study Tools</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm">Handy calculators to speed up your exam prep</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {tools.map((tool) => (
          <Link key={tool.id} to={`/tools/${tool.id}`} className="card card-hover p-4 flex flex-col gap-2">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-white`}>
              <i className={`fas ${tool.icon}`}></i>
            </div>
            <p className="font-semibold text-sm">{tool.name}</p>
            <p className="text-xs text-slate-400 line-clamp-2">{tool.desc}</p>
          </Link>
        ))}
      </div>

      <AdSlot label="Tools Page Ad" />
    </div>
  )
}
