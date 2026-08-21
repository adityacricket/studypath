import React, { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getExamById } from '../data/exams.js'
import { subjects as quizSubjects } from '../data/quizzes.js'
import { useApp } from '../context/AppContext.jsx'
import AdSlot from '../components/AdSlot.jsx'
import NotFound from './NotFound.jsx'

const tabs = [
  { id: 'overview', label: 'Overview', icon: 'fa-circle-info' },
  { id: 'pattern', label: 'Exam Pattern', icon: 'fa-list-ol' },
  { id: 'syllabus', label: 'Syllabus', icon: 'fa-book' },
  { id: 'strategy', label: 'Strategy', icon: 'fa-chess' },
  { id: 'practice', label: 'Practice', icon: 'fa-pen' },
]

export default function ExamDetails() {
  const { examId } = useParams()
  const navigate = useNavigate()
  const exam = getExamById(examId)
  const [tab, setTab] = useState('overview')
  const { updateProfile, profile } = useApp()

  if (!exam) return <NotFound />

  const isSelected = profile.selectedExam === exam.id

  return (
    <div className="space-y-5 -mt-1">
      {/* Hero */}
      <div className={`rounded-2xl p-5 bg-gradient-to-br ${exam.color} text-white relative overflow-hidden`}>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-extrabold">{exam.name}</h1>
            <p className="text-sm text-white/85">{exam.fullName}</p>
            <p className="text-xs text-white/70 mt-2 max-w-md">{exam.tagline}</p>
          </div>
          <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-2xl shrink-0">
            <i className={`fas ${exam.icon}`}></i>
          </div>
        </div>
        <button
          onClick={() => updateProfile({ selectedExam: isSelected ? null : exam.id })}
          className={`mt-4 text-xs font-semibold px-3 py-1.5 rounded-full ${isSelected ? 'bg-white text-primary-700' : 'bg-white/20 text-white'}`}
        >
          <i className={`fas ${isSelected ? 'fa-check' : 'fa-plus'} mr-1`}></i>
          {isSelected ? 'Selected as your goal' : 'Set as my target exam'}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4 md:mx-0 md:px-0">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition ${
              tab === t.id ? 'bg-primary-600 text-white' : 'bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
            }`}
          >
            <i className={`fas ${t.icon} text-xs`}></i>
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {tab === 'overview' && (
        <div className="space-y-4">
          <InfoCard title="Eligibility" icon="fa-user-check">
            <InfoRow label="Education" value={exam.eligibility.education} />
            <InfoRow label="Nationality" value={exam.eligibility.nationality} />
            {exam.eligibility.other && <InfoRow label="Other" value={exam.eligibility.other} />}
          </InfoCard>
          <InfoCard title="Age Limit" icon="fa-cake-candles">
            <InfoRow label="General" value={exam.ageLimit.general} />
            <InfoRow label="Relaxation" value={exam.ageLimit.relaxation} />
          </InfoCard>
          <InfoCard title="Posts / Wings" icon="fa-briefcase">
            <div className="flex flex-wrap gap-2">
              {exam.posts.map((p) => (
                <span key={p} className="badge bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">{p}</span>
              ))}
            </div>
          </InfoCard>
          <InfoCard title="Important Topics" icon="fa-star">
            <div className="flex flex-wrap gap-2">
              {exam.importantTopics.map((t) => (
                <span key={t} className="badge bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300">{t}</span>
              ))}
            </div>
          </InfoCard>
          <a href={exam.officialLink} target="_blank" rel="noopener noreferrer" className="btn-outline w-full">
            <i className="fas fa-arrow-up-right-from-square"></i> Visit Official Website
          </a>
        </div>
      )}

      {tab === 'pattern' && (
        <div className="space-y-3">
          {exam.examPattern.map((stage, i) => (
            <div key={i} className="card p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-7 h-7 rounded-full bg-primary-600 text-white text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                <h3 className="font-bold text-sm">{stage.stage}</h3>
              </div>
              <div className="flex gap-4 text-xs text-slate-400 mb-2 ml-9">
                <span><i className="fas fa-desktop mr-1"></i>{stage.mode}</span>
                <span><i className="fas fa-clock mr-1"></i>{stage.duration}</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 ml-9">{stage.details}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'syllabus' && (
        <div className="space-y-3">
          <p className="text-sm text-slate-500 dark:text-slate-400">Subjects: <span className="font-medium text-slate-700 dark:text-slate-200">{exam.subjects.join(', ')}</span></p>
          {Object.entries(exam.syllabus).map(([subject, topics]) => (
            <SyllabusAccordion key={subject} subject={subject} topics={topics} />
          ))}
        </div>
      )}

      {tab === 'strategy' && (
        <div className="space-y-3">
          <div className="card p-4">
            <h3 className="font-bold text-sm mb-3"><i className="fas fa-chess-knight text-primary-500 mr-2"></i>Preparation Strategy</h3>
            <ol className="space-y-2.5">
              {exam.strategy.map((s, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <span className="w-6 h-6 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
          </div>
          <Link to="/planner" state={{ examName: exam.name }} className="btn-primary w-full">
            <i className="fas fa-calendar-days"></i> Create a study plan for {exam.name}
          </Link>
        </div>
      )}

      {tab === 'practice' && (
        <div className="space-y-4">
          <div className="card p-4">
            <h3 className="font-bold text-sm mb-3"><i className="fas fa-pen text-primary-500 mr-2"></i>Practice Section</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">Sharpen your skills with subject-wise practice quizzes relevant to {exam.name}.</p>
            <div className="grid grid-cols-2 gap-2">
              {quizSubjects.map((s) => (
                <Link key={s.id} to={`/quiz?subject=${s.id}`} className="card card-hover p-3 flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-lg ${s.color} flex items-center justify-center text-white text-xs shrink-0`}>
                    <i className={`fas ${s.icon}`}></i>
                  </div>
                  <span className="text-xs font-medium">{s.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="card p-4 bg-gradient-to-br from-emerald-500 to-teal-500 text-white">
            <h3 className="font-bold text-sm mb-1"><i className="fas fa-flag-checkered mr-2"></i>Mock Test Section</h3>
            <p className="text-xs text-white/85 mb-3">Attempt a full-length timed mock test covering all {exam.name} subjects together.</p>
            <button
              onClick={() => navigate('/quiz/play', { state: { mockExamId: exam.id, examName: exam.name, mixed: true } })}
              className="bg-white text-emerald-700 font-bold text-sm px-4 py-2 rounded-xl"
            >
              Start Full Mock Test
            </button>
          </div>

          <AdSlot label="Sponsored Practice Material" />
        </div>
      )}
    </div>
  )
}

function InfoCard({ title, icon, children }) {
  return (
    <div className="card p-4">
      <h3 className="font-bold text-sm mb-3"><i className={`fas ${icon} text-primary-500 mr-2`}></i>{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  )
}

function InfoRow({ label, value }) {
  return (
    <div>
      <p className="text-xs text-slate-400 font-medium">{label}</p>
      <p className="text-sm text-slate-600 dark:text-slate-300">{value}</p>
    </div>
  )
}

function SyllabusAccordion({ subject, topics }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="card overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-4">
        <span className="font-semibold text-sm">{subject}</span>
        <i className={`fas fa-chevron-down text-slate-400 text-xs transition-transform ${open ? 'rotate-180' : ''}`}></i>
      </button>
      {open && (
        <div className="px-4 pb-4 flex flex-wrap gap-2">
          {topics.map((t) => (
            <span key={t} className="badge bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">{t}</span>
          ))}
        </div>
      )}
    </div>
  )
}
