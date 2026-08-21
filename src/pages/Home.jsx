import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SearchBar from '../components/SearchBar.jsx'
import AdSlot, { SponsoredCard } from '../components/AdSlot.jsx'
import { exams } from '../data/exams.js'
import { careerRoadmaps } from '../data/careers.js'
import { getDailyQuiz } from '../data/quizzes.js'
import { useApp } from '../context/AppContext.jsx'

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
  const { profile, progress, quizHistory } = useApp()
  const dailyQuiz = getDailyQuiz()
  const popularExams = [...exams].sort((a, b) => b.popularity - a.popularity)

  const avgScore = quizHistory.length
    ? Math.round(quizHistory.reduce((sum, q) => sum + (q.score / q.total) * 100, 0) / quizHistory.length)
    : 0

  return (
    <div className="space-y-7">
      {/* Greeting + Search */}
      <section className="pt-1">
        <p className="text-slate-500 dark:text-slate-400 text-sm">Welcome back,</p>
        <h1 className="text-2xl font-extrabold text-slate-800 dark:text-slate-100 mb-4">
          {profile.name} {profile.avatarEmoji} 
        </h1>
        <SearchBar />
      </section>

      {/* Popular Exams */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="section-title">Popular Exams</h2>
          <Link to="/exams" className="text-primary-600 dark:text-primary-400 text-sm font-semibold">View all</Link>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-5">
          {popularExams.map((exam) => (
            <Link
              key={exam.id}
              to={`/exams/${exam.id}`}
              className="card card-hover shrink-0 w-36 md:w-auto p-4 flex flex-col gap-2"
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${exam.color} flex items-center justify-center text-white`}>
                <i className={`fas ${exam.icon}`}></i>
              </div>
              <p className="font-bold text-sm">{exam.name}</p>
              <p className="text-xs text-slate-400 line-clamp-2">{exam.tagline}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Tools */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="section-title">Quick Tools</h2>
          <Link to="/tools" className="text-primary-600 dark:text-primary-400 text-sm font-semibold">View all</Link>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
          {quickTools.map((tool) => (
            <Link key={tool.id} to={tool.path} className="card card-hover flex flex-col items-center gap-1.5 py-3 px-1 text-center">
              <div className="w-9 h-9 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                <i className={`fas ${tool.icon} text-sm`}></i>
              </div>
              <span className="text-[11px] font-medium leading-tight">{tool.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Daily Quiz */}
      <section>
        <div className="card p-4 bg-gradient-to-r from-primary-600 to-indigo-600 text-white flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
            <i className="fas fa-bolt text-xl"></i>
          </div>
          <div className="flex-1">
            <p className="font-bold">Daily Quiz</p>
            <p className="text-xs text-white/80">{dailyQuiz.length} fresh questions — test yourself today!</p>
          </div>
          <button onClick={() => navigate('/quiz/play', { state: { questions: dailyQuiz, title: 'Daily Quiz', isDaily: true } })} className="bg-white text-primary-700 font-bold text-sm px-4 py-2 rounded-xl shrink-0">
            Start
          </button>
        </div>
      </section>

      {/* Progress Overview */}
      <section>
        <h2 className="section-title mb-3">Your Progress Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <StatCard icon="fa-list-check" value={progress.topicsCompleted.length} label="Topics Done" color="text-emerald-500" />
          <StatCard icon="fa-clock" value={`${progress.studyHours}h`} label="Study Hours" color="text-indigo-500" />
          <StatCard icon="fa-file-pen" value={quizHistory.length} label="Quizzes Taken" color="text-amber-500" />
          <StatCard icon="fa-chart-simple" value={`${avgScore}%`} label="Avg Score" color="text-rose-500" />
        </div>
        <Link to="/dashboard" className="block text-center mt-3 text-primary-600 dark:text-primary-400 text-sm font-semibold">
          View full dashboard →
        </Link>
      </section>

      {/* Career roadmaps */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="section-title">Career Roadmaps</h2>
          <Link to="/careers" className="text-primary-600 dark:text-primary-400 text-sm font-semibold">View all</Link>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-4">
          {careerRoadmaps.slice(0, 4).map((career) => (
            <Link key={career.id} to={`/careers/${career.id}`} className="card card-hover shrink-0 w-40 md:w-auto p-4 flex flex-col gap-2">
              <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${career.color} flex items-center justify-center text-white`}>
                <i className={`fas ${career.icon} text-sm`}></i>
              </div>
              <p className="font-semibold text-sm">{career.title}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Study Resources */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="section-title">Study Resources</h2>
          <Link to="/resources" className="text-primary-600 dark:text-primary-400 text-sm font-semibold">View all</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-3">
          <Link to="/resources" className="card card-hover p-4 flex items-center gap-3">
            <i className="fas fa-square-root-variable text-indigo-500 text-lg w-8"></i>
            <span className="text-sm font-medium">Formula Sheets</span>
          </Link>
          <Link to="/resources" className="card card-hover p-4 flex items-center gap-3">
            <i className="fas fa-spell-check text-amber-500 text-lg w-8"></i>
            <span className="text-sm font-medium">Vocabulary Lists</span>
          </Link>
          <Link to="/resources" className="card card-hover p-4 flex items-center gap-3">
            <i className="fas fa-list-check text-purple-500 text-lg w-8"></i>
            <span className="text-sm font-medium">Checklists</span>
          </Link>
        </div>
      </section>

      {/* Monetization ready area */}
      <section className="space-y-3">
        <AdSlot label="Home Banner Ad" />
        <SponsoredCard
          title="Explore recommended prep books"
          description="Handpicked reference books for competitive exams"
          cta="View"
          href="#"
        />
      </section>
    </div>
  )
}

function StatCard({ icon, value, label, color }) {
  return (
    <div className="card p-4 flex flex-col gap-1">
      <i className={`fas ${icon} ${color}`}></i>
      <span className="text-xl font-bold">{value}</span>
      <span className="text-xs text-slate-400">{label}</span>
    </div>
  )
}
