import React, { useEffect, useMemo, useState } from 'react'
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
  const [taskState, setTaskState] = useState({})
  const [sessionNote, setSessionNote] = useState('')

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
    setTaskState(saved.taskState || {})
  }, [])

  const persist = (nextTimetable = timetable, nextTasks = taskState) => {
    storage.setPlanner({
      examName,
      examDate,
      subjects: subjectsInput,
      dailyHours: parseFloat(dailyHours) || 4,
      strongSubjects: strongInput,
      weakSubjects: weakInput,
      timetable: nextTimetable,
      taskState: nextTasks,
      updatedAt: new Date().toISOString(),
    })
  }

  const handleGenerate = (e) => {
    e.preventDefault()
    const subjects = subjectsInput.split(',').map((s) => s.trim()).filter(Boolean)
    const strongSubjects = strongInput.split(',').map((s) => s.trim()).filter(Boolean)
    const weakSubjects = weakInput.split(',').map((s) => s.trim()).filter(Boolean)
    if (!examDate || subjects.length === 0 || !dailyHours) return

    const result = generateTimetable({
      examName: examName || 'My Exam', examDate, subjects,
      dailyHours: parseFloat(dailyHours), strongSubjects, weakSubjects,
    })
    setTimetable(result)
    setTaskState({})
    persist(result, {})
    updateProgress({ weakSubjects, strongSubjects })
  }

  const toggleTask = (taskId, subject, hours) => {
    const next = { ...taskState, [taskId]: !taskState[taskId] }
    setTaskState(next)
    persist(timetable, next)
    if (!taskState[taskId]) storage.logStudySession(Number(hours) || 0, subject)
  }

  const today = new Date().toISOString().slice(0, 10)
  const todayPlan = useMemo(() => {
    if (!timetable?.weekPlan?.length) return null
    const dayIndex = new Date().getDay()
    const mondayIndex = dayIndex === 0 ? 6 : dayIndex - 1
    return timetable.weekPlan[mondayIndex] || timetable.weekPlan[0]
  }, [timetable])

  const todayTasks = todayPlan?.blocks || []
  const completedToday = todayTasks.filter((_, i) => taskState[`today-${today}-${i}`]).length
  const todayProgress = todayTasks.length ? Math.round((completedToday / todayTasks.length) * 100) : 0

  return (
    <div className="space-y-5 pb-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="mb-1 text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Plan • Track • Improve</div>
          <h1 className="text-2xl font-extrabold mb-1">Study Planner</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Turn your timetable into small tasks you can actually finish.</p>
        </div>
        <Link to="/coach" className="btn-secondary text-sm"><i className="fas fa-compass"></i> Study Coach</Link>
      </div>

      <form onSubmit={handleGenerate} className="card space-y-4 p-4 md:p-5">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Target Exam"><input type="text" value={examName} onChange={(e) => setExamName(e.target.value)} placeholder="e.g. SSC CGL 2026" className="input-field" list="exam-options" /><datalist id="exam-options">{exams.map((e) => <option key={e.id} value={e.name} />)}</datalist></Field>
          <Field label="Exam Date"><input type="date" value={examDate} onChange={(e) => setExamDate(e.target.value)} className="input-field" required /></Field>
        </div>
        <Field label="Subjects"><input type="text" value={subjectsInput} onChange={(e) => setSubjectsInput(e.target.value)} placeholder="Maths, Reasoning, English, GK" className="input-field" required /></Field>
        <div className="grid gap-4 md:grid-cols-3">
          <Field label="Daily hours"><input type="number" step="0.5" min="1" max="16" value={dailyHours} onChange={(e) => setDailyHours(e.target.value)} className="input-field" required /></Field>
          <Field label="Strong subjects"><input type="text" value={strongInput} onChange={(e) => setStrongInput(e.target.value)} placeholder="English" className="input-field" /></Field>
          <Field label="Weak subjects"><input type="text" value={weakInput} onChange={(e) => setWeakInput(e.target.value)} placeholder="Maths, Reasoning" className="input-field" /></Field>
        </div>
        <button type="submit" className="btn-primary w-full py-3 text-base"><i className="fas fa-wand-magic-sparkles"></i> Generate / Update My Timetable</button>
      </form>

      {timetable && (
        <>
          <section className="card overflow-hidden border-0 bg-gradient-to-r from-primary-600 to-indigo-600 p-5 text-white">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div><p className="text-xs font-bold uppercase tracking-widest text-white/70">Current Plan</p><h2 className="mt-1 text-xl font-black">{timetable.examName}</h2><p className="mt-1 text-sm text-white/80">{timetable.daysRemaining} days remaining • {timetable.dailyHours}h/day</p></div>
              <div className="rounded-2xl bg-white/15 px-4 py-3 text-center"><div className="text-2xl font-black">{todayProgress}%</div><div className="text-[10px] uppercase tracking-wider text-white/70">Today</div></div>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/20"><div className="h-full rounded-full bg-white transition-all" style={{ width: `${todayProgress}%` }} /></div>
          </section>

          <section>
            <div className="mb-3 flex items-center justify-between"><h3 className="section-title">Today’s Tasks</h3><span className="text-xs font-bold text-slate-400">{completedToday}/{todayTasks.length} complete</span></div>
            {todayTasks.length ? <div className="space-y-2">{todayTasks.map((block, i) => { const id = `today-${today}-${i}`; const done = !!taskState[id]; return <button key={id} onClick={() => toggleTask(id, block.subject, block.hours)} className={`card flex w-full items-center gap-3 p-4 text-left transition ${done ? 'border-emerald-300 bg-emerald-50/60 dark:border-emerald-800 dark:bg-emerald-950/20' : 'hover:border-primary-300'}`}><span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${done ? 'bg-emerald-500 text-white' : 'bg-primary-50 text-primary-600 dark:bg-primary-950/40'}`}><i className={`fas ${done ? 'fa-check' : 'fa-book-open'}`} /></span><span className="min-w-0 flex-1"><span className={`block text-sm font-bold ${done ? 'text-emerald-700 line-through dark:text-emerald-300' : ''}`}>{block.subject}</span><span className="text-xs text-slate-400">Study block • {block.hours}h</span></span><span className="text-xs font-black text-primary-600 dark:text-primary-400">{done ? 'Done' : 'Start'}</span></button> })}</div> : <div className="card p-6 text-center text-sm text-slate-400">No tasks for today yet.</div>}
          </section>

          <section>
            <h3 className="section-title mb-3">Preparation Milestones</h3>
            <div className="grid gap-3 md:grid-cols-2">{timetable.milestones.map((m, i) => <div key={i} className="card p-4"><div className="mb-1 flex items-center gap-2"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-600 text-xs font-bold text-white">{i + 1}</span><p className="text-sm font-bold">{m.phase}</p></div><p className="ml-9 text-xs text-slate-400">{m.range}</p><p className="ml-9 mt-1 text-sm text-slate-500 dark:text-slate-400">{m.focus}</p></div>)}</div>
          </section>

          <section>
            <h3 className="section-title mb-3">Weekly Timetable</h3>
            <div className="grid gap-3 md:grid-cols-2">{timetable.weekPlan.map((day) => <div key={day.day} className="card p-4"><div className="mb-2 flex items-center justify-between"><p className="text-sm font-bold">{day.day} {day.isSunday && <span className="badge ml-1 bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">Light Day</span>}</p><span className="text-xs font-bold text-slate-400">{day.totalHours}h</span></div><div className="space-y-1.5">{day.blocks.map((block, i) => <div key={i} className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 dark:bg-slate-800"><span className="text-sm">{block.subject}</span><span className="text-xs font-semibold text-primary-600 dark:text-primary-400">{block.hours}h</span></div>)}</div></div>)}</div>
          </section>

          <section className="card p-4">
            <div className="mb-3 flex items-center justify-between"><div><h3 className="text-sm font-black">Log a study session</h3><p className="text-xs text-slate-400">Keep your progress and streak moving.</p></div><i className="fas fa-fire text-amber-500" /></div>
            <div className="flex gap-2"><input value={sessionNote} onChange={(e) => setSessionNote(e.target.value)} placeholder="What did you study?" className="input-field" /><button onClick={() => { if (!sessionNote.trim()) return; storage.logStudySession(Number(dailyHours) || 0, sessionNote.trim()); setSessionNote('') }} className="btn-primary shrink-0">Log</button></div>
          </section>
        </>
      )}
    </div>
  )
}

function Field({ label, children }) { return <div><label className="mb-1 block text-xs font-medium text-slate-500 dark:text-slate-400">{label}</label>{children}</div> }
