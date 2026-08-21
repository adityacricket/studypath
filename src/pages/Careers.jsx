import React from 'react'
import { Link } from 'react-router-dom'
import { careerRoadmaps } from '../data/careers.js'
import AdSlot from '../components/AdSlot.jsx'

export default function Careers() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-extrabold mb-1">Career Roadmaps</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm">Step-by-step guidance for popular career paths</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {careerRoadmaps.map((career) => (
          <Link key={career.id} to={`/careers/${career.id}`} className="card card-hover p-5 flex gap-4">
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${career.color} flex items-center justify-center text-white text-lg shrink-0`}>
              <i className={`fas ${career.icon}`}></i>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold mb-1">{career.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">{career.summary}</p>
              <p className="text-xs text-primary-500 mt-2 font-medium">{career.steps.length} steps →</p>
            </div>
          </Link>
        ))}
      </div>

      <AdSlot label="Careers Page Ad" />
    </div>
  )
}
