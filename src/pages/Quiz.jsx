import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { subjects, topicsBySubject, getQuestionsBySubject, getQuestionsByTopic, getDailyQuiz, shuffleArray } from '../data/quizzes.js'
import { useApp } from '../context/AppContext.jsx'
import AdSlot, { PremiumBanner } from '../components/AdSlot.jsx'

const difficulties = ['Easy', 'Medium', 'Hard']

export default function Quiz() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const initialSubject = searchParams.get('subject')
  const [selectedSubject, setSelectedSubject] = useState(initialSubject || null)
  const [selectedTopic, setSelectedTopic] = useState(searchParams.get('topic') || null)
  const [selectedDifficulty, setSelectedDifficulty] = useState('All')
  const { quizHistory } = useApp()

  const dailyQuiz = getDailyQuiz()

  const startQuiz = () => {
    let questions = selectedTopic
      ? getQuestionsByTopic(selectedSubject, selectedTopic)
      : getQuestionsBySubject(selectedSubject)

    if (selectedDifficulty !== 'All') {
      questions = questions.filter((q) => q.difficulty === selectedDifficulty)
    }
    if (questions.length === 0) questions = getQuestionsBySubject(selectedSubject)
    questions = shuffleArray(questions)

    const subjectName = subjects.find((s) => s.id === selectedSubject)?.name
    navigate('/quiz/play', {
      state: {
        questions,
        title: selectedTopic || subjectName,
        subject: selectedSubject,
      },
    })
  }

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-extrabold mb-1">Quiz Zone</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm">Practice, test yourself & track your scores</p>
      </div>

      {/* Daily quiz card */}
      <div className="card p-4 bg-gradient-to-r from-primary-600 to-indigo-600 text-white flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
          <i className="fas fa-bolt text-xl"></i>
        </div>
        <div className="flex-1">
          <p className="font-bold">Today's Daily Quiz</p>
          <p className="text-xs text-white/80">{dailyQuiz.length} questions, mixed subjects</p>
        </div>
        <button
          onClick={() => navigate('/quiz/play', { state: { questions: dailyQuiz, title: 'Daily Quiz', isDaily: true } })}
          className="bg-white text-primary-700 font-bold text-sm px-4 py-2 rounded-xl shrink-0"
        >
          Start
        </button>
      </div>

      {/* Subject selection */}
      <div>
        <h2 className="section-title mb-3">Choose Subject</h2>
        <div className="grid grid-cols-2 gap-3">
          {subjects.map((s) => (
            <button
              key={s.id}
              onClick={() => { setSelectedSubject(s.id); setSelectedTopic(null) }}
              className={`card p-4 flex flex-col gap-2 items-start text-left transition ${selectedSubject === s.id ? 'ring-2 ring-primary-500' : ''}`}
            >
              <div className={`w-9 h-9 rounded-xl ${s.color} flex items-center justify-center text-white`}>
                <i className={`fas ${s.icon} text-sm`}></i>
              </div>
              <span className="text-sm font-semibold">{s.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Topic selection */}
      {selectedSubject && (
        <div className="animate-slide-up">
          <h2 className="section-title mb-3">Choose Topic (optional)</h2>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTopic(null)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium ${!selectedTopic ? 'bg-primary-600 text-white' : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-500'}`}
            >
              All Topics
            </button>
            {topicsBySubject[selectedSubject]?.map((topic) => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium ${selectedTopic === topic ? 'bg-primary-600 text-white' : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-500'}`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Difficulty */}
      {selectedSubject && (
        <div className="animate-slide-up">
          <h2 className="section-title mb-3">Difficulty Level</h2>
          <div className="flex gap-2">
            {['All', ...difficulties].map((d) => (
              <button
                key={d}
                onClick={() => setSelectedDifficulty(d)}
                className={`flex-1 py-2 rounded-xl text-sm font-medium ${selectedDifficulty === d ? 'bg-primary-600 text-white' : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-500'}`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedSubject && (
        <button onClick={startQuiz} className="btn-primary w-full text-base py-3">
          <i className="fas fa-play"></i> Start Quiz
        </button>
      )}

      <PremiumBanner onClick={() => navigate('/settings')} />

      {/* Score history */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="section-title">Recent Score History</h2>
          <span className="text-xs text-slate-400">{quizHistory.length} attempts</span>
        </div>
        {quizHistory.length === 0 ? (
          <div className="card p-6 text-center text-sm text-slate-400">No quiz attempts yet. Start one above!</div>
        ) : (
          <div className="space-y-2">
            {quizHistory.slice(0, 5).map((h) => (
              <div key={h.id} className="card p-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">{h.title}</p>
                  <p className="text-xs text-slate-400">{new Date(h.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                </div>
                <span className={`badge ${h.score / h.total >= 0.6 ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300' : 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300'}`}>
                  {h.score}/{h.total}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <AdSlot label="Quiz Page Ad" />
    </div>
  )
}
