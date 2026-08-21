import React from 'react'
import { useApp } from '../context/AppContext.jsx'
import AdSlot from '../components/AdSlot.jsx'

export default function Dashboard() {
  const { progress, quizHistory } = useApp()

  const avgScore = quizHistory.length
    ? Math.round(quizHistory.reduce((sum, q) => sum + (q.score / q.total) * 100, 0) / quizHistory.length)
    : 0

  const overallProgress = Math.min(
    Math.round(((progress.topicsCompleted.length * 2 + quizHistory.length * 3 + progress.studyHours) / 150) * 100),
    100
  )

  const recentQuizzes = quizHistory.slice(0, 8)
  const maxScorePercent = Math.max(...recentQuizzes.map((q) => Math.round((q.score / q.total) * 100)), 100)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold mb-1">Progress Dashboard</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm">Track your journey towards exam success</p>
      </div>

      {/* Overall progress ring */}
      <div className="card p-5 flex items-center gap-5">
        <ProgressRing percent={overallProgress} />
        <div>
          <p className="text-2xl font-extrabold">{overallProgress}%</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">Overall Preparation Progress</p>
        </div>
      </div>

      {/* Stat grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard icon="fa-list-check" value={progress.topicsCompleted.length} label="Topics Completed" color="bg-emerald-500" />
        <StatCard icon="fa-clock" value={`${progress.studyHours}h`} label="Study Hours" color="bg-indigo-500" />
        <StatCard icon="fa-file-pen" value={quizHistory.length} label="Quizzes Taken" color="bg-amber-500" />
        <StatCard icon="fa-chart-simple" value={`${avgScore}%`} label="Avg Quiz Score" color="bg-rose-500" />
      </div>

      {/* Mock test scores */}
      <div>
        <h2 className="section-title mb-3">Mock Test Scores</h2>
        {progress.mockScores.length === 0 ? (
          <div className="card p-6 text-center text-sm text-slate-400">No mock tests attempted yet. Visit an Exam's Practice tab to try one!</div>
        ) : (
          <div className="space-y-2">
            {progress.mockScores.slice(0, 5).map((m, i) => (
              <div key={i} className="card p-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">{m.exam}</p>
                  <p className="text-xs text-slate-400">{new Date(m.date).toLocaleDateString('en-IN')}</p>
                </div>
                <span className="badge bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">{m.score}/{m.total}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quiz score trend */}
      <div>
        <h2 className="section-title mb-3">Quiz Score Trend</h2>
        {recentQuizzes.length === 0 ? (
          <div className="card p-6 text-center text-sm text-slate-400">Take some quizzes to see your trend here.</div>
        ) : (
          <div className="card p-4">
            <div className="flex items-end gap-2 h-32">
              {recentQuizzes.slice().reverse().map((q, i) => {
                const pct = Math.round((q.score / q.total) * 100)
                return (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                    <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-t-lg relative flex-1 flex items-end overflow-hidden">
                      <div
                        className={`w-full rounded-t-lg transition-all ${pct >= 60 ? 'bg-emerald-400' : pct >= 40 ? 'bg-amber-400' : 'bg-rose-400'}`}
                        style={{ height: `${pct}%` }}
                      ></div>
                    </div>
                    <span className="text-[10px] text-slate-400">{pct}%</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>

      {/* Weak / strong subjects */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="card p-4">
          <h3 className="font-bold text-sm mb-3 text-rose-500"><i className="fas fa-triangle-exclamation mr-2"></i>Weak Subjects</h3>
          {progress.weakSubjects.length === 0 ? (
            <p className="text-sm text-slate-400">Add weak subjects via the Study Planner to see insights here.</p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {progress.weakSubjects.map((s) => (
                <span key={s} className="badge bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-300">{s}</span>
              ))}
            </div>
          )}
        </div>
        <div className="card p-4">
          <h3 className="font-bold text-sm mb-3 text-emerald-500"><i className="fas fa-star mr-2"></i>Strong Subjects</h3>
          {progress.strongSubjects.length === 0 ? (
            <p className="text-sm text-slate-400">Add strong subjects via the Study Planner to see insights here.</p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {progress.strongSubjects.map((s) => (
                <span key={s} className="badge bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-300">{s}</span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Study log */}
      <div>
        <h2 className="section-title mb-3">Recent Study Log</h2>
        {progress.studyLog.length === 0 ? (
          <div className="card p-6 text-center text-sm text-slate-400">Log study hours using the Study Time Calculator tool.</div>
        ) : (
          <div className="space-y-2">
            {progress.studyLog.slice(0, 6).map((log, i) => (
              <div key={i} className="card p-3 flex items-center justify-between">
                <span className="text-sm font-medium">{log.subject}</span>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span>{new Date(log.date).toLocaleDateString('en-IN')}</span>
                  <span className="font-semibold text-primary-600 dark:text-primary-400">{log.hours}h</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <AdSlot label="Dashboard Ad" />
    </div>
  )
}

function StatCard({ icon, value, label, color }) {
  return (
    <div className="card p-4 flex flex-col gap-2">
      <div className={`w-8 h-8 rounded-lg ${color} flex items-center justify-center text-white text-xs`}>
        <i className={`fas ${icon}`}></i>
      </div>
      <span className="text-xl font-bold">{value}</span>
      <span className="text-xs text-slate-400">{label}</span>
    </div>
  )
}

function ProgressRing({ percent }) {
  const radius = 40
  const stroke = 8
  const normalizedRadius = radius - stroke / 2
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset = circumference - (percent / 100) * circumference

  return (
    <svg height={radius * 2} width={radius * 2} className="shrink-0">
      <circle
        stroke="currentColor"
        className="text-slate-100 dark:text-slate-800"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="currentColor"
        className="text-primary-600"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={circumference + ' ' + circumference}
        style={{ strokeDashoffset, transition: 'stroke-dashoffset 0.6s ease', strokeLinecap: 'round' }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        transform={`rotate(-90 ${radius} ${radius})`}
      />
    </svg>
  )
}
