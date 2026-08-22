import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SearchBar from '../components/SearchBar.jsx'
import AdSlot, { SponsoredCard } from '../components/AdSlot.jsx'
import { exams } from '../data/exams.js'
import { careerRoadmaps } from '../data/careers.js'
import { getDailyQuiz } from '../data/quizzes.js'
import { useApp } from '../context/AppContext.jsx'
import storage from '../utils/storage.js'

const quickTools = [
  { id: 'percentage', name: 'Percentage', icon: 'fa-percent', path: '/tools/percentage' },
  { id: 'average', name: 'Average', icon: 'fa-chart-line', path: '/tools/average' },
  { id: 'ratio', name: 'Ratio', icon: 'fa-scale-balanced', path: '/tools/ratio' },
  { id: 'age', name: 'Age Calc', icon: 'fa-cake-candles', path: '/tools/age' },
  { id: 'marks', name: 'Marks %', icon: 'fa-square-check', path: '/tools/marks' },
  { id: 'study-time', name: 'Study Time', icon: 'fa-hourglass-half', path: '/tools/study-time' },
  { id: 'timetable', name: 'Timetable', icon: 'fa-calendar-days', path: '/tools/timetable' },
]

export default function Home() {
  const navigate = useNavigate()
  const { profile, progress, quizHistory, mistakes } = useApp()
  const dailyQuiz = getDailyQuiz()
  const planner = storage.getPlanner()
  const popularExams = [...exams].sort((a, b) => b.popularity - a.popularity)
  const openMistakes = mistakes.filter((m) => !m.fixedAt).length
  const avgScore = quizHistory.length ? Math.round(quizHistory.reduce((sum, q) => sum + (q.total ? (q.score / q.total) * 100 : 0), 0) / quizHistory.length) : 0
  const todayName = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date())
  const todayPlan = planner?.timetable?.weekPlan?.find((day) => day.day === todayName)
  const todayDone = progress.studyLog.filter((log) => new Date(log.date).toDateString() === new Date().toDateString()).reduce((sum, log) => sum + Number(log.hours || 0), 0)
  const todayTarget = todayPlan?.totalHours || 0
  const todayPercent = todayTarget ? Math.min(100, Math.round((todayDone / todayTarget) * 100)) : 0

  return (
    <div className="space-y-7 pb-4">
      <section className="rounded-3xl bg-gradient-to-br from-indigo-600 via-primary-600 to-violet-600 p-5 text-white shadow-lg md:p-7">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/70">Your Study Command Center</p>
            <h1 className="mt-1 text-3xl font-black tracking-tight md:text-4xl">Ready to study, {profile.name} {profile.avatarEmoji}</h1>
            <p className="mt-2 max-w-xl text-sm leading-6 text-white/80">Pick up where you left off, follow today's plan, or jump straight into a quick test.</p>
          </div>
          <div className="flex shrink-0 gap-2">
            <Link to="/planner" className="rounded-xl bg-white px-4 py-3 text-sm font-black text-indigo-700 shadow-sm">Today's Plan</Link>
            <Link to="/quiz" className="rounded-xl bg-white/15 px-4 py-3 text-sm font-black text-white ring-1 ring-white/25">Quick Quiz</Link>
          </div>
        </div>
        <div className="mt-5 rounded-2xl bg-white/10 p-1 backdrop-blur-sm"><SearchBar /></div>
      </section>

      {planner && todayPlan && (
        <section className="card overflow-hidden p-5">
          <div className="flex items-center justify-between gap-3">
            <div><p className="text-[10px] font-black uppercase tracking-widest text-primary-600 dark:text-primary-400">Today's Plan · {todayName}</p><h2 className="mt-1 text-lg font-black">{todayDone.toFixed(1)}h studied of {todayTarget}h</h2></div>
            <span className="text-xl font-black text-primary-600">{todayPercent}%</span>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800"><div className="h-full rounded-full bg-primary-600 transition-all" style={{ width: `${todayPercent}%` }} /></div>
          <div className="mt-4 flex gap-2 overflow-x-auto pb-1">{todayPlan.blocks?.map((block, i) => <span key={i} className="shrink-0 rounded-xl bg-primary-50 px-3 py-2 text-xs font-bold text-primary-700 dark:bg-primary-900/30 dark:text-primary-300">{block.subject} · {block.hours}h</span>)}</div>
        </section>
      )}

      <section>
        <div className="mb-3 flex items-center justify-between"><h2 className="section-title">Your Snapshot</h2><Link to="/dashboard" className="text-sm font-bold text-primary-600 dark:text-primary-400">Full Dashboard →</Link></div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          <Snapshot icon="fa-fire" value={`${progress.streakDays || 0}d`} label="Study Streak" tone="text-orange-500" />
          <Snapshot icon="fa-clock" value={`${progress.studyHours}h`} label="Study Hours" tone="text-indigo-500" />
          <Snapshot icon="fa-file-pen" value={quizHistory.length} label="Quizzes" tone="text-amber-500" />
          <Snapshot icon="fa-chart-simple" value={`${avgScore}%`} label="Avg Score" tone="text-emerald-500" />
        </div>
      </section>

      <section>
        <div className="mb-3 flex items-center justify-between"><h2 className="section-title">Continue Learning</h2><Link to="/resources" className="text-sm font-bold text-primary-600 dark:text-primary-400">Browse Resources →</Link></div>
        <div className="grid gap-3 md:grid-cols-3">
          <Link to="/resources" className="card card-hover p-4"><div className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400"><i className="fas fa-book-open" /></span><div><p className="text-sm font-black">Detailed Notes</p><p className="text-xs text-slate-400">Read & revise concepts</p></div></div></Link>
          <Link to="/quiz" className="card card-hover p-4"><div className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"><i className="fas fa-bolt" /></span><div><p className="text-sm font-black">Practice Quiz</p><p className="text-xs text-slate-400">Test what you know</p></div></div></Link>
          <Link to={openMistakes ? '/coach' : '/planner'} className="card card-hover p-4"><div className="flex items-center gap-3"><span className={`flex h-11 w-11 items-center justify-center rounded-xl ${openMistakes ? 'bg-rose-50 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400' : 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400'}`}><i className={`fas ${openMistakes ? 'fa-triangle-exclamation' : 'fa-calendar-check'}`} /></span><div><p className="text-sm font-black">{openMistakes ? 'Fix Mistakes' : 'Plan Your Study'}</p><p className="text-xs text-slate-400">{openMistakes ? `${openMistakes} to review` : 'Build your timetable'}</p></div></div></Link>
        </div>
      </section>

      <section>
        <div className="mb-3 flex items-center justify-between"><h2 className="section-title">Popular Exams</h2><Link to="/exams" className="text-sm font-bold text-primary-600 dark:text-primary-400">View all →</Link></div>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-5">{popularExams.map((exam) => <Link key={exam.id} to={`/exams/${exam.id}`} className="card card-hover w-36 shrink-0 p-4 md:w-auto"><div className={`mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${exam.color} text-white`}><i className={`fas ${exam.icon}`} /></div><p className="text-sm font-black">{exam.name}</p><p className="mt-1 line-clamp-2 text-xs text-slate-400">{exam.tagline}</p></Link>)}</div>
      </section>

      <section>
        <div className="mb-3 flex items-center justify-between"><h2 className="section-title">Quick Tools</h2><Link to="/tools" className="text-sm font-bold text-primary-600 dark:text-primary-400">All Tools →</Link></div>
        <div className="grid grid-cols-4 gap-2 md:grid-cols-7">{quickTools.map((tool) => <Link key={tool.id} to={tool.path} className="card card-hover flex flex-col items-center gap-1.5 px-1 py-3 text-center"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400"><i className={`fas ${tool.icon} text-sm`} /></span><span className="text-[11px] font-bold leading-tight">{tool.name}</span></Link>)}</div>
      </section>

      <section><div className="card flex items-center gap-4 bg-gradient-to-r from-primary-600 to-indigo-600 p-4 text-white"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/20"><i className="fas fa-bolt text-xl" /></div><div className="flex-1"><p className="font-black">Daily Quiz</p><p className="text-xs text-white/80">{dailyQuiz.length} fresh questions — keep your streak going.</p></div><button onClick={() => navigate('/quiz/play', { state: { questions: dailyQuiz, title: 'Daily Quiz', isDaily: true } })} className="shrink-0 rounded-xl bg-white px-4 py-2 text-sm font-black text-primary-700">Start</button></div></section>

      <section>
        <div className="mb-3 flex items-center justify-between"><h2 className="section-title">Career Roadmaps</h2><Link to="/careers" className="text-sm font-bold text-primary-600 dark:text-primary-400">Explore →</Link></div>
        <div className="grid gap-3 grid-cols-2 md:grid-cols-4">{careerRoadmaps.slice(0, 4).map((career) => <Link key={career.id} to={`/careers/${career.id}`} className="card card-hover p-4"><div className={`mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${career.color} text-white`}><i className={`fas ${career.icon} text-sm`} /></div><p className="text-sm font-black">{career.title}</p></Link>)}</div>
      </section>

      <section className="space-y-3"><AdSlot label="Home Banner Ad" /><SponsoredCard title="Explore recommended prep books" description="Handpicked reference books for competitive exams" cta="View" href="#" /></section>
    </div>
  )
}

function Snapshot({ icon, value, label, tone }) { return <div className="card p-4"><i className={`fas ${icon} ${tone}`} /><p className="mt-2 text-xl font-black">{value}</p><p className="text-xs text-slate-400">{label}</p></div> }
