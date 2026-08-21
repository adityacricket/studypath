import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { careerRoadmaps } from '../data/careers.js'
import NotFound from './NotFound.jsx'
import AdSlot from '../components/AdSlot.jsx'

export default function CareerDetail() {
  const { careerId } = useParams()
  const career = careerRoadmaps.find((c) => c.id === careerId)
  if (!career) return <NotFound />

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        <Link to="/careers" className="w-9 h-9 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0">
          <i className="fas fa-arrow-left text-sm"></i>
        </Link>
      </div>

      <div className={`rounded-2xl p-5 bg-gradient-to-br ${career.color} text-white`}>
        <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-xl mb-3">
          <i className={`fas ${career.icon}`}></i>
        </div>
        <h1 className="text-2xl font-extrabold">{career.title}</h1>
        <p className="text-sm text-white/85 mt-1">{career.summary}</p>
      </div>

      <div className="relative">
        <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-slate-200 dark:bg-slate-700"></div>
        <div className="space-y-4">
          {career.steps.map((step, i) => (
            <div key={i} className="relative flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary-600 text-white font-bold flex items-center justify-center shrink-0 z-10 shadow-sm">
                {i + 1}
              </div>
              <div className="card p-4 flex-1">
                <h3 className="font-bold text-sm mb-1">{step.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AdSlot label="Career Detail Ad" />
    </div>
  )
}
