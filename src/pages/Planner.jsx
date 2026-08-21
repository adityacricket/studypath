import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { generateTimetable } from '../utils/planner.js'
import { useApp } from '../context/AppContext.jsx'
import { exams } from '../data/exams.js'

export default function Planner() {
  const location = useLocation()
  const { updateProgress } = useApp()
  const [examName, setExamName] = useState(location.state?.examName || '')
  const [examDate, setExamDate] = useState('')
  const [subjectsInput, setSubjectsInput] = useState('')
  const [dailyHours, setDailyHours] = useState('4')
  const [strongInput, setStrongInput] = useState('')
  const [weakInput, setWeakInput] = useState('')
  const [timetable, setTimetable] = useState(null)

  const handleGenerate = (e) => {
    e.preventDefault()
    const subjects = subjectsInput.split(',').map((s) => s.trim()).filter(Boolean)
    const strongSubjects = strongInput.split(',').map((s) => s.trim()).filter(Boolean)
    const weakSubjects = weakInput.split(',').map((s) => s.trim()).filter(Boolean)

    if (!examDate || subjects.length === 0 || !dailyHours) return

    const result = generateTimetable({
      examName: examName || 'My Exam',
      examDate,
      subjects,
      dailyHours: parseFloat(dailyHours),
      strongSubjects,
      weakSubjects,
    })
    setTimetable(result)
    // Save weak/strong subjects to progress for dashboard insights
    updateProgress({ weakSubjects, strongSubjects })
  }

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-extrabold mb-1">Study Planner</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm">Get a personalized study timetable based on your exam & availability</p>
      </div>

      <form onSubmit={handleGenerate} className="card p-4 space-y-4">
        <div>
          <label className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1 block">Target Exam</label>
          <input
            type="text"
            value={examName}
            onChange={(e) => setExamName(e.target.value)}
            placeholder="e.g. SSC CGL 2026"
            className="input-field"
            list="exam-options"
          />
          <datalist id="exam-options">
            {exams.map((e) => <option key={e.id} value={e.name} />)}
          </datalist>
        </div>

        <div>
          <label className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1 block">Exam Date</label>
          <input type="date" value={examDate} onChange={(e) => setExamDate(e.target.value)} className="input-field" required />
        </div>

        <div>
          <label className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1 block">Subjects (comma separated)</label>
          <input
            type="text"
            value={subjectsInput}
            onChange={(e) => setSubjectsInput(e.target.value)}
            placeholder="e.g. Maths, Reasoning, English, GK"
            className="input-field"
            required
          />
        </div>

        <div>
          <label className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1 block">Daily available hours</label>
          <input type="number" step="0.5" min="1" max="16" value={dailyHours} onChange={(e) => setDailyHours(e.target.value)} className="input-field" required />
        </div>

        <div>
          <label className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1 block">Strong subjects (comma separated)</label>
          <input type="text" value={strongInput} onChange={(e) => setStrongInput(e.target.value)} placeholder="e.g. English" className="input-field" />
        </div>

        <div>
          <label className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1 block">Weak subjects (comma separated)</label>
          <input type="text" value={weakInput} onChange={(e) => setWeakInput(e.target.value)} placeholder="e.g. Maths, Reasoning" className="input-field" />
        </div>

        <button type="submit" className="btn-primary w-full text-base py-3">
          <i className="fas fa-wand-magic-sparkles"></i> Generate My Timetable
        </button>
      </form>

      {timetable && <TimetableView timetable={timetable} />}
    </div>
  )
}

function TimetableView({ timetable }) {
  return (
    <div className="space-y-4 animate-slide-up">
      <div className="card p-4 bg-gradient-to-r from-primary-600 to-indigo-600 text-white">
        <h3 className="font-bold">{timetable.examName}</h3>
        <p className="text-sm text-white/85">{timetable.daysRemaining} days remaining • {timetable.dailyHours}h/day</p>
      </div>

      <div>
        <h3 className="section-title mb-3">Preparation Milestones</h3>
        <div className="space-y-2">
          {timetable.milestones.map((m, i) => (
            <div key={i} className="card p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-6 h-6 rounded-full bg-primary-600 text-white text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                <p className="font-semibold text-sm">{m.phase}</p>
                <span className="text-xs text-slate-400">({m.range})</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 ml-8">{m.focus}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="section-title mb-3">Weekly Timetable</h3>
        <div className="space-y-3">
          {timetable.weekPlan.map((day) => (
            <div key={day.day} className="card p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="font-bold text-sm">{day.day} {day.isSunday && <span className="badge bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 ml-1">Light Day</span>}</p>
                <span className="text-xs text-slate-400">{day.totalHours}h total</span>
              </div>
              <div className="space-y-1.5">
                {day.blocks.map((block, i) => (
                  <div key={i} className="flex items-center justify-between bg-slate-50 dark:bg-slate-800 rounded-lg px-3 py-2">
                    <span className="text-sm">{block.subject}</span>
                    <span className="text-xs font-semibold text-primary-600 dark:text-primary-400">{block.hours}h</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
