import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import AdSlot from '../components/AdSlot.jsx'
import storage from '../utils/storage.js'
import { getExamById } from '../data/exams.js'

const missionKey = (date = new Date()) => `studypath_dashboard_missions_${date.toISOString().slice(0, 10)}`

export default function Dashboard() {
  const { profile, updateProfile, progress, quizHistory, mistakes } = useApp()
  const planner = storage.getPlanner()
  const revisionQueue = storage.getRevisionQueue()
  const [targetDate, setTargetDate] = useState(profile.targetExamDate || '')
  const [missionDone, setMissionDone] = useState(() => {
    try { return JSON.parse(localStorage.getItem(missionKey()) || '[]') } catch { return [] }
  })

  const selectedExam = profile.selectedExam ? getExamById(profile.selectedExam) : null
  const avgScore = quizHistory.length ? Math.round(quizHistory.reduce((sum, q) => sum + (q.total ? (q.score / q.total) * 100 : 0), 0) / quizHistory.length) : 0
  const recentQuizzes = quizHistory.slice(0, 8)
  const openMistakes = mistakes.filter((m) => !m.fixedAt)
  const recentMistakes = openMistakes.slice(0, 5)
  const plannerDays = planner?.timetable?.weekPlan || []
  const todayName = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date())
  const todayPlan = plannerDays.find((d) => d.day === todayName)
  const todayTotal = Number(todayPlan?.totalHours || 0)
  const todayDone = progress.studyLog.filter((log) => new Date(log.date).toDateString() === new Date().toDateString()).reduce((sum, log) => sum + Number(log.hours || 0), 0)
  const todayPercent = todayTotal ? Math.min(100, Math.round((todayDone / todayTotal) * 100)) : 0
  const overallProgress = Math.min(100, Math.round((progress.topicsCompleted.length * 2 + quizHistory.length * 3 + progress.studyHours * 2) / 150 * 100))

  const missions = useMemo(() => {
    const list = []
    todayPlan?.blocks?.slice(0, 3).forEach((b, i) => list.push({ id: `plan-${i}`, text: `${b.subject} session · ${b.hours}h`, to: '/planner' }))
    if (openMistakes.length) list.push({ id: 'mistakes', text: `Review ${Math.min(openMistakes.length, 5)} mistake${openMistakes.length === 1 ? '' : 's'}`, to: '/coach' })
    if (quizHistory.length === 0 || list.length < 3) list.push({ id: 'quiz', text: quizHistory.length ? 'Take a timed quiz' : 'Take your first quiz', to: '/quiz' })
    return list.slice(0, 5)
  }, [todayPlan, openMistakes.length, quizHistory.length])

  const toggleMission = (id) => {
    const next = missionDone.includes(id) ? missionDone.filter((x) => x !== id) : [...missionDone, id]
    setMissionDone(next)
    localStorage.setItem(missionKey(), JSON.stringify(next))
  }

  const saveTargetDate = (e) => {
    const value = e.target.value
    setTargetDate(value)
    updateProfile({ targetExamDate: value })
  }

  const daysLeft = targetDate ? Math.max(0, Math.ceil((new Date(`${targetDate}T23:59:59`) - new Date()) / 86400000)) : null
  const subjectStats = buildSubjectStats(quizHistory)
  const speedStats = buildSpeedStats(quizHistory)
  const revisionItems = buildRevisionItems(revisionQueue, openMistakes, progress)
  const week = buildWeek(progress.studyLog)

  const nextAction = openMistakes.length ? `Fix ${openMistakes.length} mistake${openMistakes.length === 1 ? '' : 's'} from your Mistake Bank` : todayPlan ? `Complete today's ${todayPlan.blocks?.[0]?.subject || 'study'} session` : quizHistory.length ? 'Take another quiz and improve one weak area' : 'Start your first quiz and build your performance profile'

  return (
    <div className="space-y-6">
      <div><h1 className="text-2xl font-extrabold mb-1">Progress Dashboard</h1><p className="text-slate-500 dark:text-slate-400 text-sm">Your preparation, mistakes and next best action in one place</p></div>

      <Link to={openMistakes.length ? '/coach' : todayPlan ? '/planner' : '/quiz'} className="block rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 p-5 text-white shadow-lg transition hover:-translate-y-0.5"><div className="flex items-start justify-between gap-4"><div><p className="text-xs font-black uppercase tracking-widest text-white/70">Next best action</p><h2 className="mt-1 text-xl font-black">{nextAction}</h2><p className="mt-2 text-sm text-white/75">Open your next step →</p></div><span className="text-3xl">🧭</span></div></Link>

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="card p-5"><div className="mb-4 flex items-center justify-between"><div><p className="text-[10px] font-black uppercase tracking-widest text-primary-600 dark:text-primary-400">Today's Mission</p><h2 className="mt-1 text-lg font-black">{missions.length ? `${missions.filter((m) => missionDone.includes(m.id)).length}/${missions.length} completed` : 'Build your first mission'}</h2></div><span className="text-2xl">🎯</span></div>{missions.length ? <div className="space-y-2">{missions.map((m) => <div key={m.id} className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 dark:bg-slate-800/70"><button onClick={() => toggleMission(m.id)} className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${missionDone.includes(m.id) ? 'border-emerald-500 bg-emerald-500 text-white' : 'border-slate-300 dark:border-slate-600'}`}>{missionDone.includes(m.id) && '✓'}</button><Link to={m.to} className={`flex-1 text-sm font-semibold ${missionDone.includes(m.id) ? 'text-slate-400 line-through' : ''}`}>{m.text}</Link></div>)}</div> : <Link to="/planner" className="text-sm font-semibold text-primary-600">Open Planner and create today's plan →</Link>}</section>

        <section className="card p-5"><div className="flex items-start justify-between gap-3"><div><p className="text-[10px] font-black uppercase tracking-widest text-primary-600 dark:text-primary-400">Exam Countdown</p><h2 className="mt-1 text-lg font-black">{selectedExam?.name || 'Choose an exam'}</h2></div><span className="text-2xl">⏳</span></div>{selectedExam ? <div className="mt-4 flex items-end justify-between gap-4"><div><p className="text-4xl font-black">{daysLeft === null ? '—' : daysLeft}</p><p className="text-xs text-slate-400">{daysLeft === null ? 'days remaining · set your target date' : 'days remaining'}</p></div><input aria-label="Exam target date" type="date" value={targetDate} onChange={saveTargetDate} className="input-field max-w-[160px]" /></div> : <Link to="/exams" className="mt-4 inline-block text-sm font-semibold text-primary-600">Select your exam goal →</Link>}</section>
      </div>

      {planner && <div className="card p-5"><div className="mb-3 flex items-center justify-between gap-3"><div><p className="text-[10px] font-black uppercase tracking-widest text-primary-600 dark:text-primary-400">Today's Plan</p><h2 className="mt-1 text-lg font-black">{todayPlan ? todayName : 'Planner ready'}</h2></div><Link to="/planner" className="text-xs font-bold text-primary-600">Open Planner →</Link></div>{todayPlan ? <><div className="mb-3 flex items-center justify-between text-xs text-slate-500"><span>{todayDone.toFixed(1)}h studied</span><span>{todayTotal}h planned</span></div><div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800"><div className="h-full rounded-full bg-primary-600 transition-all" style={{ width: `${todayPercent}%` }} /></div><div className="mt-3 flex flex-wrap gap-2">{todayPlan.blocks?.map((block, i) => <span key={i} className="badge bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300">{block.subject} · {block.hours}h</span>)}</div></> : <p className="text-sm text-slate-500 dark:text-slate-400">Your timetable is saved. Open Planner to review the weekly schedule.</p>}</div>}

      <div className="card p-5 flex flex-wrap items-center gap-5"><ProgressRing percent={overallProgress} /><div className="min-w-[180px]"><p className="text-2xl font-extrabold">{overallProgress}%</p><p className="text-sm text-slate-500 dark:text-slate-400">Overall Preparation Progress</p><p className="mt-2 text-xs font-bold text-orange-500">🔥 {progress.streakDays || 0} day study streak</p></div></div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-5"><StatCard icon="fa-list-check" value={progress.topicsCompleted.length} label="Topics Completed" color="bg-emerald-500" /><StatCard icon="fa-clock" value={`${progress.studyHours}h`} label="Study Hours" color="bg-indigo-500" /><StatCard icon="fa-file-pen" value={quizHistory.length} label="Quizzes Taken" color="bg-amber-500" /><StatCard icon="fa-chart-simple" value={`${avgScore}%`} label="Avg Quiz Score" color="bg-rose-500" /><StatCard icon="fa-triangle-exclamation" value={openMistakes.length} label="Open Mistakes" color="bg-orange-500" /></div>

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="card p-5"><div className="mb-4 flex items-center justify-between"><div><h2 className="section-title">Subject Performance</h2><p className="text-xs text-slate-400">Based on recorded quiz results</p></div><span className="text-2xl">📊</span></div>{subjectStats.length ? <div className="space-y-3">{subjectStats.slice(0, 6).map((s) => <div key={s.name}><div className="mb-1 flex justify-between text-xs font-semibold"><span>{s.name}</span><span>{s.pct}% · {s.count} quiz{s.count > 1 ? 'zes' : ''}</span></div><div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800"><div className="h-full rounded-full bg-primary-500" style={{ width: `${s.pct}%` }} /></div></div>)}</div> : <p className="text-sm text-slate-400">Take subject-labelled quizzes to build your performance profile.</p>}</section>

        <section className="card p-5"><div className="mb-4 flex items-center justify-between"><div><h2 className="section-title">Accuracy vs Speed</h2><p className="text-xs text-slate-400">Uses timing data recorded by quizzes</p></div><span className="text-2xl">⚡</span></div><div className="grid grid-cols-2 gap-3"><MetricBox label="Accuracy" value={`${speedStats.accuracy}%`} /><MetricBox label="Avg time / question" value={speedStats.timePerQuestion !== null ? `${speedStats.timePerQuestion}s` : 'Not recorded'} /></div>{speedStats.timePerQuestion === null && <p className="mt-3 text-xs text-slate-400">Speed will appear automatically when timed quiz results include time data.</p>}</section>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="card p-5"><div className="mb-4 flex items-center justify-between"><div><h2 className="section-title">Revision Queue</h2><p className="text-xs text-slate-400">Mistakes and scheduled revision in priority order</p></div><Link to="/coach" className="text-xs font-bold text-primary-600">Open Coach →</Link></div>{revisionItems.length ? <div className="space-y-2">{revisionItems.slice(0, 6).map((r, i) => <div key={`${r.id}-${i}`} className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 dark:bg-slate-800/70"><span className="text-sm">{i < 2 ? '🔴' : '🟡'}</span><div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold">{r.title}</p><p className="text-xs text-slate-400">{r.meta}</p></div><Link to={r.to || '/coach'} className="text-xs font-bold text-primary-600">Revise</Link></div>)}</div> : <p className="text-sm text-slate-400">Your revision queue is clear. Mistakes and scheduled revisions will appear here.</p>}</section>

        <section className="card p-5"><div className="mb-4 flex items-center justify-between"><div><h2 className="section-title">7-Day Consistency</h2><p className="text-xs text-slate-400">Study hours logged each day</p></div><span className="text-2xl">📅</span></div><div className="flex items-end gap-2">{week.map((d) => <div key={d.key} className="flex flex-1 flex-col items-center gap-1"><div className="flex h-28 w-full items-end rounded-lg bg-slate-100 p-1 dark:bg-slate-800"><div className="w-full rounded-md bg-primary-500" style={{ height: `${d.percent}%` }} /></div><span className="text-[10px] font-semibold text-slate-400">{d.label}</span><span className="text-[10px] text-slate-500">{d.hours}h</span></div>)}</div></section>
      </div>

      <div><div className="flex items-center justify-between mb-3"><h2 className="section-title">Mistake Bank</h2><Link to="/coach" className="text-xs font-bold text-primary-600">Fix mistakes →</Link></div>{recentMistakes.length === 0 ? <div className="card p-6 text-center text-sm text-slate-400">No open mistakes yet. They will appear automatically when you miss quiz questions.</div> : <div className="space-y-2">{recentMistakes.map((mistake) => <div key={mistake.id} className="card p-4"><div className="flex items-start justify-between gap-3"><div><p className="text-sm font-semibold">{mistake.question || mistake.note}</p><p className="mt-1 text-xs text-rose-500">{mistake.topic || 'General'} • {mistake.type}</p></div><span className="badge bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-300">Review</span></div></div>)}</div>}</div>

      <div><h2 className="section-title mb-3">Quiz Score Trend</h2>{recentQuizzes.length === 0 ? <div className="card p-6 text-center text-sm text-slate-400">Take some quizzes to see your trend here.</div> : <div className="card p-4"><div className="flex h-32 items-end gap-2">{recentQuizzes.slice().reverse().map((q, i) => { const pct = q.total ? Math.round((q.score / q.total) * 100) : 0; return <div key={i} className="group flex flex-1 flex-col items-center gap-1"><div className="relative flex h-full w-full items-end overflow-hidden rounded-t-lg bg-slate-100 dark:bg-slate-800"><div className={`w-full rounded-t-lg ${pct >= 60 ? 'bg-emerald-400' : pct >= 40 ? 'bg-amber-400' : 'bg-rose-400'}`} style={{ height: `${pct}%` }} /></div><span className="text-[10px] text-slate-400">{pct}%</span></div> })}</div></div>}</div>
      <div className="grid gap-4 md:grid-cols-2"><InsightCard title="Weak Subjects" icon="fa-triangle-exclamation" tone="rose" items={progress.weakSubjects} empty="Add weak subjects via the Study Planner to see insights here." /><InsightCard title="Strong Subjects" icon="fa-star" tone="emerald" items={progress.strongSubjects} empty="Add strong subjects via the Study Planner to see insights here." /></div>
      <div><h2 className="section-title mb-3">Recent Study Log</h2>{progress.studyLog.length === 0 ? <div className="card p-6 text-center text-sm text-slate-400">No study sessions logged yet.</div> : <div className="space-y-2">{progress.studyLog.slice(0, 6).map((log, i) => <div key={i} className="card p-3 flex items-center justify-between"><span className="text-sm font-medium">{log.subject}</span><div className="flex items-center gap-3 text-xs text-slate-400"><span>{new Date(log.date).toLocaleDateString('en-IN')}</span><span className="font-semibold text-primary-600 dark:text-primary-400">{log.hours}h</span></div></div>)}</div>}</div>
      <AdSlot label="Dashboard Ad" />
    </div>
  )
}

function buildSubjectStats(history) {
  const groups = {}
  history.forEach((q) => { const subject = q.subject || q.section || q.topic || 'Overall'; const total = Number(q.total || 0); if (!total) return; const g = groups[subject] || { name: subject, score: 0, total: 0, count: 0 }; g.score += Number(q.score || 0); g.total += total; g.count += 1; groups[subject] = g })
  return Object.values(groups).map((g) => ({ ...g, pct: Math.round((g.score / g.total) * 100) })).sort((a, b) => b.count - a.count || b.pct - a.pct)
}

function buildSpeedStats(history) {
  const timed = history.filter((q) => Number(q.timeSpent || q.duration || q.elapsedSeconds || 0) > 0 && Number(q.total || 0) > 0)
  const totalQuestions = history.reduce((s, q) => s + Number(q.total || 0), 0)
  const totalCorrect = history.reduce((s, q) => s + Number(q.score || 0), 0)
  const seconds = timed.reduce((s, q) => s + Number(q.timeSpent || q.duration || q.elapsedSeconds || 0), 0)
  return { accuracy: totalQuestions ? Math.round((totalCorrect / totalQuestions) * 100) : 0, timePerQuestion: timed.length && timed.reduce((s, q) => s + Number(q.total || 0), 0) ? Math.round(seconds / timed.reduce((s, q) => s + Number(q.total || 0), 0)) : null }
}

function buildRevisionItems(queue, mistakes, progress) {
  const items = []
  queue.slice(0, 4).forEach((q) => items.push({ id: q.id, title: q.title || q.topic || 'Scheduled revision', meta: q.date ? `Due ${new Date(q.date).toLocaleDateString('en-IN')}` : 'Scheduled revision', to: q.path || '/coach' }))
  mistakes.slice(0, 6).forEach((m) => items.push({ id: m.id, title: m.topic || m.question || 'Mistake review', meta: `${m.type || 'Mistake'} · ${new Date(m.date).toLocaleDateString('en-IN')}`, to: '/coach' }))
  progress.topicsCompleted.slice(-3).forEach((t) => items.push({ id: `topic-${t}`, title: `Refresh ${String(t).replaceAll('-', ' ')}`, meta: 'Completed topic · revise to retain', to: '/books' }))
  return items
}

function buildWeek(logs) {
  const days = []
  const now = new Date()
  for (let i = 6; i >= 0; i -= 1) { const d = new Date(now); d.setHours(0, 0, 0, 0); d.setDate(now.getDate() - i); const key = d.toISOString().slice(0, 10); const hours = logs.filter((l) => new Date(l.date).toISOString().slice(0, 10) === key).reduce((s, l) => s + Number(l.hours || 0), 0); days.push({ key, label: d.toLocaleDateString('en-US', { weekday: 'short' }).slice(0, 2), hours: hours.toFixed(1), percent: Math.min(100, Math.round((hours / 6) * 100)) }) }
  return days
}

function StatCard({ icon, value, label, color }) { return <div className="card flex flex-col gap-2 p-4"><div className={`flex h-8 w-8 items-center justify-center rounded-lg ${color} text-xs text-white`}><i className={`fas ${icon}`} /></div><span className="text-xl font-bold">{value}</span><span className="text-xs text-slate-400">{label}</span></div> }
function MetricBox({ label, value }) { return <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800"><p className="text-xs text-slate-400">{label}</p><p className="mt-1 text-xl font-black">{value}</p></div> }
function InsightCard({ title, icon, tone, items, empty }) { const tones = tone === 'rose' ? 'text-rose-500' : 'text-emerald-500'; const badge = tone === 'rose' ? 'bg-rose-50 text-rose-600 dark:bg-rose-900/30 dark:text-rose-300' : 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-300'; return <div className="card p-4"><h3 className={`mb-3 text-sm font-bold ${tones}`}><i className={`fas ${icon} mr-2`} />{title}</h3>{items.length === 0 ? <p className="text-sm text-slate-400">{empty}</p> : <div className="flex flex-wrap gap-2">{items.map((s) => <span key={s} className={`badge ${badge}`}>{s}</span>)}</div>}</div> }
function ProgressRing({ percent }) { const radius = 40; const stroke = 8; const normalizedRadius = radius - stroke / 2; const circumference = normalizedRadius * 2 * Math.PI; const strokeDashoffset = circumference - (percent / 100) * circumference; return <svg height={radius * 2} width={radius * 2} className="shrink-0"><circle stroke="currentColor" className="text-slate-100 dark:text-slate-800" fill="transparent" strokeWidth={stroke} r={normalizedRadius} cx={radius} cy={radius} /><circle stroke="currentColor" className="text-primary-600" fill="transparent" strokeWidth={stroke} strokeDasharray={`${circumference} ${circumference}`} style={{ strokeDashoffset, transition: 'stroke-dashoffset .6s ease', strokeLinecap: 'round' }} r={normalizedRadius} cx={radius} cy={radius} transform={`rotate(-90 ${radius} ${radius})`} /></svg> }
