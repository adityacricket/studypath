import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import { getExamById } from '../data/exams.js'
import { resources } from '../data/resources.js'

const emojis = ['🎓', '📚', '✏️', '🧠', '🚀', '⭐', '🏆', '💡']

export default function Profile() {
  const { profile, updateProfile, progress, quizHistory, savedResources } = useApp()
  const [editingName, setEditingName] = useState(false)
  const [nameInput, setNameInput] = useState(profile.name)

  const selectedExam = profile.selectedExam ? getExamById(profile.selectedExam) : null
  const avgScore = quizHistory.length
    ? Math.round(quizHistory.reduce((sum, q) => sum + (q.score / q.total) * 100, 0) / quizHistory.length)
    : 0
  const savedResourceItems = resources.filter((r) => savedResources.includes(r.id))

  const saveName = () => {
    if (nameInput.trim()) updateProfile({ name: nameInput.trim() })
    setEditingName(false)
  }

  return (
    <div className="space-y-6">
      {/* Profile header */}
      <div className="card p-6 flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-3xl shrink-0">
          {profile.avatarEmoji}
        </div>
        <div className="flex-1 min-w-0">
          {editingName ? (
            <div className="flex gap-2">
              <input
                autoFocus
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && saveName()}
                className="input-field py-1.5"
              />
              <button onClick={saveName} className="btn-primary py-1.5 px-3 text-sm">Save</button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-extrabold truncate">{profile.name}</h2>
              <button onClick={() => setEditingName(true)} className="text-slate-400 hover:text-primary-500">
                <i className="fas fa-pen text-xs"></i>
              </button>
            </div>
          )}
          <p className="text-xs text-slate-400">Joined {new Date(profile.joinedAt).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}</p>
        </div>
      </div>

      {/* Avatar picker */}
      <div className="card p-4">
        <p className="text-xs font-semibold text-slate-400 mb-2">CHOOSE AVATAR</p>
        <div className="flex gap-2 flex-wrap">
          {emojis.map((e) => (
            <button
              key={e}
              onClick={() => updateProfile({ avatarEmoji: e })}
              className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl ${profile.avatarEmoji === e ? 'bg-primary-100 dark:bg-primary-900/40 ring-2 ring-primary-500' : 'bg-slate-50 dark:bg-slate-800'}`}
            >
              {e}
            </button>
          ))}
        </div>
      </div>

      {/* Selected exam */}
      <div className="card p-4">
        <p className="text-xs font-semibold text-slate-400 mb-2">SELECTED EXAM GOAL</p>
        {selectedExam ? (
          <Link to={`/exams/${selectedExam.id}`} className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${selectedExam.color} flex items-center justify-center text-white shrink-0`}>
              <i className={`fas ${selectedExam.icon}`}></i>
            </div>
            <div>
              <p className="font-semibold text-sm">{selectedExam.name}</p>
              <p className="text-xs text-slate-400">{selectedExam.fullName}</p>
            </div>
          </Link>
        ) : (
          <Link to="/exams" className="text-primary-600 dark:text-primary-400 text-sm font-medium">
            No exam selected — browse Exam Hub →
          </Link>
        )}
      </div>

      {/* Study statistics */}
      <div>
        <h2 className="section-title mb-3">Study Statistics</h2>
        <div className="grid grid-cols-2 gap-3">
          <StatCard icon="fa-clock" value={`${progress.studyHours}h`} label="Total Study Hours" />
          <StatCard icon="fa-list-check" value={progress.topicsCompleted.length} label="Topics Completed" />
          <StatCard icon="fa-file-pen" value={quizHistory.length} label="Quizzes Taken" />
          <StatCard icon="fa-chart-simple" value={`${avgScore}%`} label="Average Score" />
        </div>
      </div>

      {/* Quiz history */}
      <div>
        <h2 className="section-title mb-3">Quiz History</h2>
        {quizHistory.length === 0 ? (
          <div className="card p-6 text-center text-sm text-slate-400">No quizzes attempted yet.</div>
        ) : (
          <div className="space-y-2">
            {quizHistory.slice(0, 6).map((h) => (
              <div key={h.id} className="card p-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">{h.title}</p>
                  <p className="text-xs text-slate-400">{new Date(h.date).toLocaleDateString('en-IN')}</p>
                </div>
                <span className="badge bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">{h.score}/{h.total}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Saved resources */}
      <div>
        <h2 className="section-title mb-3">Saved Resources</h2>
        {savedResourceItems.length === 0 ? (
          <div className="card p-6 text-center text-sm text-slate-400">
            <Link to="/resources" className="text-primary-600 dark:text-primary-400 font-medium">Browse resources</Link> and bookmark your favorites.
          </div>
        ) : (
          <div className="space-y-2">
            {savedResourceItems.map((r) => (
              <Link key={r.id} to={`/resources?open=${r.id}`} className="card p-3 flex items-center gap-3">
                <i className="fas fa-bookmark text-amber-500"></i>
                <span className="text-sm font-medium flex-1 truncate">{r.title}</span>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Link to="/settings" className="btn-outline w-full">
        <i className="fas fa-gear"></i> Go to Settings
      </Link>
    </div>
  )
}

function StatCard({ icon, value, label }) {
  return (
    <div className="card p-4 flex flex-col gap-1">
      <i className={`fas ${icon} text-primary-500`}></i>
      <span className="text-lg font-bold">{value}</span>
      <span className="text-xs text-slate-400">{label}</span>
    </div>
  )
}
