import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'

export default function Header({ title, showBack = false, onBack }) {
  const navigate = useNavigate()
  const { settings, toggleTheme, profile } = useApp()

  return (
    <header className="sticky top-0 z-30 bg-white/90 dark:bg-slate-950/90 backdrop-blur border-b border-slate-100 dark:border-slate-800 md:pl-20 lg:pl-56">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {showBack ? (
            <button
              onClick={onBack || (() => navigate(-1))}
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              aria-label="Go back"
            >
              <i className="fas fa-arrow-left text-slate-600 dark:text-slate-300"></i>
            </button>
          ) : (
            <div className="md:hidden flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-indigo-600 flex items-center justify-center text-white">
                <i className="fas fa-graduation-cap text-sm"></i>
              </div>
              <span className="font-extrabold text-slate-800 dark:text-slate-100">StudyPath</span>
            </div>
          )}
          {title && <h1 className="hidden md:block text-lg font-bold text-slate-800 dark:text-slate-100">{title}</h1>}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition text-slate-600 dark:text-slate-300"
            aria-label="Toggle theme"
          >
            <i className={`fas ${settings.theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
          <button
            onClick={() => navigate('/profile')}
            className="w-9 h-9 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center text-lg"
            aria-label="Profile"
          >
            {profile.avatarEmoji || '🎓'}
          </button>
        </div>
      </div>
    </header>
  )
}
