import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function TimetableGeneratorTool() {
  const navigate = useNavigate()
  return (
    <div className="space-y-4">
      <div className="card p-6 text-center space-y-3">
        <div className="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center mx-auto text-2xl">
          <i className="fas fa-calendar-days"></i>
        </div>
        <h3 className="font-bold">Full Timetable Generator</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
          For a personalized weekly study timetable based on your exam date, subjects, strong & weak areas — use the Study Planner tool.
        </p>
        <button onClick={() => navigate('/planner')} className="btn-primary w-full">
          <i className="fas fa-arrow-right"></i> Go to Study Planner
        </button>
      </div>
    </div>
  )
}
