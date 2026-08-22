import React from 'react'
import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import AdSlot from '../components/AdSlot.jsx'
import storage from '../utils/storage.js'

export default function Dashboard() {
  const { progress, quizHistory, mistakes } = useApp()
  const planner = storage.getPlanner()

  const avgScore = quizHistory.length
    ? Math.round(quizHistory.reduce((sum, q) => sum + (q.total ? (q.score / q.total) * 100 : 0), 0) / quizHistory.length)
    : 0

  const recentQuizzes = quizHistory.slice(0, 8)
  const openMistakes = mistakes.filter((m) => !m.fixedAt)
  const recentMistakes = openMistakes.slice(0, 5)

  const plannerDays = planner?.timetable?.weekPlan || []
  const todayName = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date())
  const todayPlan = plannerDays.find((d) => d.day === todayName)
  const todayTotal = todayPlan?.totalHours || 0
  const todayDone = progress.studyLog.filter((log) => new Date(log.date).toDateString() === new Date().toDateString()).reduce((sum, log) => sum + Number(log.hours || 0), 0)
  const todayPercent = todayTotal ? Math.min(100, Math.round((todayDone / todayTotal) * 100)) : 0

  const overallProgress = Math.min(100, Math.round((progress.topicsCompleted.length * 2 + quizHistory.length * 3 + progress.studyHours * 2) / 150 * 100))

  const nextAction = openMistakes.length
    ? `Fix ${openMistakes.length} mistake${openMistakes.length === 1 ? '' : 's'} from your Mistake Bank`
    : todayPlan
      ? `Complete today's ${todayPlan.blocks?.[0]?.subject || 'study'} session`
      : quizHistory.length
        ? 'Take another quiz and improve one weak area'
        : 'Start your first quiz and build your performance profile'

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold mb-1">Progress Dashboard</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm">Your preparation, mistakes and next best action in one place</p>
      </div>

      <Link to={openMistakes.length ? '/coach' : todayPlan ? '/planner' : '/quiz'} className="block rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 p-5 text-white shadow-lg transition hover:-translate-y-0.5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-white/70">Next best action</p>
            <h2 className="mt-1 text-xl font-black">{nextAction}</h2>
            <p className="mt-2 text-sm text-white/75">Open your next step →</p>
          </div>
          <span className="text-3xl">🧭</span>
        </div>
      </Link>

      {planner && (
        <div className="card p-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-primary-600 dark:text-primary-400">Today's Plan</p>
              <h2 className="mt-1 text-lg font-black">{todayPlan ? todayName : 'Planner ready'}</h2>
            </div>
            <Link to="/planner" className="text-xs font-bold text-primary-600">Open Planner →</Link>
          </div>
          {todayPlan ? (
            <>
              <div className="mb-3 flex items-center justify-between text-xs text-slate-500"><span>{todayDone.toFixed(1)}h studied</span><span>{todayTotal}h planned</span></div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800"><div className="h-full rounded-full bg-primary-600 transition-all" style={{ width: `${todayPercent}%` }} /></div>
              <div className="mt-3 flex flex-wrap gap-2">
                {todayPlan.blocks?.map((block, i) => <span key={i} className="badge bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300">{block.subject} · {block.hours}h</span>)}
              </div>
            </>
          ) : <p className="text-sm text-slate-500 dark:text-slate-400">Your timetable is saved. Open Planner to review the weekly schedule.</p>}
        </div>
      )}

      <div className="card p-5 flex flex-wrap items-center gap-5">
        <ProgressRing percent={overallProgress} />
        <div className="min-w-[180px]"><p className="text-2xl font-extrabold">{overallProgress}%</p><p className="text-sm text-slate-500 dark:text-slate-400">Overall Preparation Progress</p><p className="mt-2 text-xs font-bold text-orange-500">🔥 {progress.streakDays || 0} day study streak</p></div>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
        <StatCard icon="fa-list-check" value={progress.topicsCompleted.length} label="Topics Completed" color="bg-emerald-500" />
        <StatCard icon="fa-clock" value={`${progress.studyHours}h`} label="Study Hours" color="bg-indigo-500" />
        <StatCard icon="fa-file-pen" value={quizHistory.length} label="Quizzes Taken" color="bg-amber-500" />
        <StatCard icon="fa-chart-simple" value={`${avgScore}%`} label="Avg Quiz Score" color="bg-rose-500" />
        <StatCard icon="fa-triangle-exclamation" value={openMistakes.length} label="Open Mistakes" color="bg-orange-500" />
      </div>

      <div><div className="flex items-center justify-between mb-3"><h2 className="section-title">Mistake Bank</h2><Link to="/coach" className="text-xs font-bold text-primary-600">Fix mistakes →</Link></div>{recentMistakes.length === 0 ? <div className="card p-6 text-center text-sm text-slate-400">No open mistakes yet. They will appear automatically when you miss quiz questions.</div> : <div className="space-y-2">{recentMistakes.map((mistake) => <div key={mistake.id} className="card p-4"><div className="flex items-start justify-between gap-3"><div><p className="text-sm font-semibold">{mistake.question || mistake.note}</p><p className="mt-1 text-xs text-rose-500">{mistake.topic || 'General'} • {mistake.type}</p></div><span className="badge bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-300">Review</span></div></div>)}</div>}</div>

      <div><h2 className="section-title mb-3">Quiz Score Trend</h2>{recentQuizzes.length === 0 ? <div className="card p-6 text-center text-sm text-slate-400">Take some quizzes to see your trend here.</div> : <div className="card p-4"><div className="flex h-32 items-end gap-2">{recentQuizzes.slice().reverse().map((q, i) => { const pct = q.total ? Math.round((q.score / q.total) * 100) : 0; return <div key={i} className="group flex flex-1 flex-col items-center gap-1"><div className="relative flex h-full w-full items-end overflow-hidden rounded-t-lg bg-slate-100 dark:bg-slate-800"><div className={`w-full rounded-t-lg ${pct >= 60 ? 'bg-emerald-400' : pct >= 40 ? 'bg-amber-400' : 'bg-rose-400'}`} style={{ height: `${pct}%` }} /></div><span className="text-[10px] text-slate-400">{pct}%</span></div> })}</div></div>}</div>

      <div className="grid gap-4 md:grid-cols-2"><InsightCard title="Weak Subjects" icon="fa-triangle-exclamation" tone="rose" items={progress.weakSubjects} empty="Add weak subjects via the Study Planner to see insights here." /><InsightCard title="Strong Subjects" icon="fa-star" tone="emerald" items={progress.strongSubjects} empty="Add strong subjects via the Study Planner to see insights here." /></div>

      <div><h2 className="section-title mb-3">Recent Study Log</h2>{progress.studyLog.length === 0 ? <div className="card p-6 text-center text-sm text-slate-400">No study sessions logged yet.</div> : <div className="space-y-2">{progress.studyLog.slice(0, 6).map((log, i) => <div key={i} className="card p-3 flex items-center justify-between"><span className="text-sm font-medium">{log.subject}</span><div className="flex items-center gap-3 text-xs text-slate-400"><span>{new Date(log.date).toLocaleDateString('en-IN')}</span><span className="font-semibold text-primary-600 dark:text-primary-400">{log.hours}h</span></div></div>)}</div>}</div>

      <AdSlot label="Dashboard Ad" />
    </div>
  )
}

function StatCard({ icon, value, label, color }) { return <div className="card flex flex-col gap-2 p-4"><div className={`flex h-8 w-8 items-center justify-center rounded-lg ${color} text-xs text-white`}><i className={`fas ${icon}`} /></div><span className="text-xl font-bold">{value}</span><span className="text-xs text-slate-400">{label}</span></div> }
function InsightCard({ title, icon, tone, items, empty }) { const tones = tone === 'rose' ? 'text-rose-500' : 'text-emerald-500'; const badge = tone === 'rose' ? 'bg-rose-50 text-rose-600 dark:bg-rose-900/30 dark:text-rose-300' : 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-300'; return <div className="card p-4"><h3 className={`mb-3 text-sm font-bold ${tones}`}><i className={`fas ${icon} mr-2`} />{title}</h3>{items.length === 0 ? <p className="text-sm text-slate-400">{empty}</p> : <div className="flex flex-wrap gap-2">{items.map((s) => <span key={s} className={`badge ${badge}`}>{s}</span>)}</div>}</div> }
function ProgressRing({ percent }) { const radius = 40; const stroke = 8; const normalizedRadius = radius - stroke / 2; const circumference = normalizedRadius * 2 * Math.PI; const strokeDashoffset = circumference - (percent / 100) * circumference; return <svg height={radius * 2} width={radius * 2} className="shrink-0"><circle stroke="currentColor" className="text-slate-100 dark:text-slate-800" fill="transparent" strokeWidth={stroke} r={normalizedRadius} cx={radius} cy={radius} /><circle stroke="currentColor" className="text-primary-600" fill="transparent" strokeWidth={stroke} strokeDasharray={`${circumference} ${circumference}`} style={{ strokeDashoffset, transition: 'stroke-dashoffset .6s ease', strokeLinecap: 'round' }} r={normalizedRadius} cx={radius} cy={radius} transform={`rotate(-90 ${radius} ${radius})`} /></svg> }
