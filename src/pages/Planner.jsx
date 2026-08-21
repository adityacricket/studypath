import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { generateTimetable } from '../utils/planner.js'
import { useApp } from '../context/AppContext.jsx'
import { exams } from '../data/exams.js'
import storage from '../utils/storage.js'

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

  useEffect(() => {
    const saved = storage.getPlanner()
    if (!saved) return

    setExamName(saved.examName || '')
    setExamDate(saved.examDate || '')
    setSubjectsInput(saved.subjects || '')
    setDailyHours(String(saved.dailyHours || 4))
    setStrongInput(saved.strongSubjects || '')
    setWeakInput(saved.weakSubjects || '')
    setTimetable(saved.timetable || null)
  }, [])

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

    storage.setPlanner({
      examName,
      examDate,
      subjects: subjectsInput,
      dailyHours: parseFloat(dailyHours),
      strongSubjects: strongInput,
      weakSubjects: weakInput,
      timetable: result,
      updatedAt: new Date().toISOString(),
    })

    updateProgress({ weakSubjects, strongSubjects })
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold mb-1">Study Planner</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Build it once. Resume it later. Let your mistakes change the plan.</p>
        </div>

        <Link to="/coach" className="btn-secondary text-sm">
          <i className="fas fa-compass"></i> Study Coach
        </Link>
      </div>

      <form onSubmit={handleGenerate} className="card space-y-4 p-4">
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-500 dark:text-slate-400">Target Exam</label>
          <input type="text" value={examName} onChange={(e) => setExamName(e.target.value)} placeholder="e.g. SSC CGL 2026" className="input-field" list="exam-options" />
          <datalist id="exam-options">
            {exams.map((e) => <option key={e.id} value={e.name} />)}
          </datalist>
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-slate-500 dark:text-slate-400">Exam Date</label>
          <input type="date" value={examDate} onChange={(e) => setExamDate(e.target.value)} className="input-field" required />
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-slate-500 dark:text-slate-400">Subjects</label>
          <input type="text" value={subjectsInput} onChange={(e) => setSubjectsInput(e.target.value)} placeholder="Maths, Reasoning, English, GK" className="input-field" required />
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-slate-500 dark:text-slate-400">Daily available hours</label>
          <input type="number" step="0.5" min="1" max="16" value={dailyHours} onChange={(e) => setDailyHours(e.target.value)} className="input-field" required />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-500 dark:text-slate-400">Strong subjects</label>
            <input type="text" value={strongInput} onChange={(e) => setStrongInput(e.target.value)} placeholder="e.g. English" className="input-field" />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-slate-500 dark:text-slate-400">Weak subjects</label>
            <input type="text" value={weakInput} onChange={(e) => setWeakInput(e.target.value)} placeholder="e.g. Maths, Reasoning" className="input-field" />
          </div>
        </div>

        <button type="submit" className="btn-primary w-full py-3 text-base">
          <i className="fas fa-wand-magic-sparkles"></i> Generate / Update My Timetable
        </button>
      </form>

      {timetable && <TimetableView timetable={timetable} />}
    </div>
  )
}

function TimetableView({ timetable }) {
  return (
    <div className="space-y-4 animate-slide-up">
      <div className="card bg-gradient-to-r from-primary-600 to-indigo-600 p-4 text-white">
        <h3 className="font-bold">{timetable.examName}</h3>
        <p className="text-sm text-white/85">{timetable.daysRemaining} days remaining • {timetable.dailyHours}h/day</p>
      </div>

      <div>
        <h3 className="section-title mb-3">Preparation Milestones</h3>
        <div className="space-y-2">
          {timetable.milestones.map((m, i) => (
            <div key={i} className="card p-4">
              <div className="mb-1 flex items-center gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-600 text-xs font-bold text-white">{i + 1}</span>
                <p className="text-sm font-semibold">{m.phase}</p>
                <span className="text-xs text-slate-400">({m.range})</span>
              </div>
              <p className="ml-8 text-sm text-slate-500 dark:text-slate-400">{m.focus}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="section-title mb-3">Weekly Timetable</h3>
        <div className="space-y-3">
          {timetable.weekPlan.map((day) => (
            <div key={day.day} className="card p-4">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-sm font-bold">
                  {day.day}
                  {day.isSunday && <span className="badge ml-1 bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">Light Day</span>}
                </p>
                <span className="text-xs text-slate-400">{day.totalHours}h total</span>
              </div>

              <div className="space-y-1.5">
                {day.blocks.map((block, i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 dark:bg-slate-800">
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
