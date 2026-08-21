import React, { useState } from 'react'
import { useApp } from '../context/AppContext.jsx'

export default function Settings() {
  const { settings, updateSettings, resetProgress, resetAll } = useApp()
  const [confirmReset, setConfirmReset] = useState(false)
  const [confirmResetAll, setConfirmResetAll] = useState(false)
  const [resetDone, setResetDone] = useState(false)

  const handleResetProgress = () => {
    resetProgress()
    setConfirmReset(false)
    setResetDone(true)
    setTimeout(() => setResetDone(false), 2500)
  }

  const handleResetAll = () => {
    resetAll()
    setConfirmResetAll(false)
    setResetDone(true)
    setTimeout(() => setResetDone(false), 2500)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold mb-1">Settings</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm">Manage your app preferences</p>
      </div>

      {resetDone && (
        <div className="card p-3 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-300 text-sm text-center animate-slide-up">
          <i className="fas fa-circle-check mr-1"></i> Done successfully!
        </div>
      )}

      {/* Appearance */}
      <div className="card p-4">
        <p className="text-xs font-semibold text-slate-400 mb-3">APPEARANCE</p>
        <ToggleRow
          icon="fa-moon"
          label="Dark Mode"
          desc="Switch between light and dark theme"
          checked={settings.theme === 'dark'}
          onChange={(v) => updateSettings({ theme: v ? 'dark' : 'light' })}
        />
      </div>

      {/* Notifications */}
      <div className="card p-4 space-y-1">
        <p className="text-xs font-semibold text-slate-400 mb-3">NOTIFICATIONS</p>
        <ToggleRow
          icon="fa-bell"
          label="Enable Notifications"
          desc="Get notified about updates & reminders"
          checked={settings.notifications}
          onChange={(v) => updateSettings({ notifications: v })}
        />
        <ToggleRow
          icon="fa-calendar-check"
          label="Daily Study Reminder"
          desc="Remind me to study & take the daily quiz"
          checked={settings.dailyReminder}
          onChange={(v) => updateSettings({ dailyReminder: v })}
        />
      </div>

      {/* Premium */}
      <div className="card p-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <p className="font-bold mb-1"><i className="fas fa-crown mr-2"></i>StudyPath Premium</p>
        <p className="text-sm text-white/85 mb-3">Ad-free experience, premium mock test analytics & exclusive study packs.</p>
        <button className="bg-white text-indigo-700 font-bold text-sm px-4 py-2 rounded-xl">Upgrade Now</button>
      </div>

      {/* Data & Privacy */}
      <div className="card p-4 space-y-3">
        <p className="text-xs font-semibold text-slate-400 mb-1">DATA & PRIVACY</p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Your data is currently stored locally on this device only. No account required. A database & login system can be added later without losing this data structure.
        </p>
      </div>

      {/* Reset progress */}
      <div className="card p-4 space-y-3">
        <p className="text-xs font-semibold text-slate-400 mb-1">RESET</p>
        {!confirmReset ? (
          <button onClick={() => setConfirmReset(true)} className="btn-outline w-full text-rose-500 border-rose-200 dark:border-rose-800">
            <i className="fas fa-rotate-left"></i> Reset Progress & Quiz History
          </button>
        ) : (
          <div className="space-y-2 animate-slide-up">
            <p className="text-sm text-rose-500">Are you sure? This will erase all progress, quiz history and study logs.</p>
            <div className="flex gap-2">
              <button onClick={handleResetProgress} className="btn-primary flex-1 bg-rose-500 hover:bg-rose-600">Yes, Reset</button>
              <button onClick={() => setConfirmReset(false)} className="btn-outline flex-1">Cancel</button>
            </div>
          </div>
        )}

        {!confirmResetAll ? (
          <button onClick={() => setConfirmResetAll(true)} className="btn-outline w-full text-rose-500 border-rose-200 dark:border-rose-800">
            <i className="fas fa-trash"></i> Reset Everything (Full App Reset)
          </button>
        ) : (
          <div className="space-y-2 animate-slide-up">
            <p className="text-sm text-rose-500">This will reset your profile, settings, and ALL data. This cannot be undone.</p>
            <div className="flex gap-2">
              <button onClick={handleResetAll} className="btn-primary flex-1 bg-rose-500 hover:bg-rose-600">Yes, Reset Everything</button>
              <button onClick={() => setConfirmResetAll(false)} className="btn-outline flex-1">Cancel</button>
            </div>
          </div>
        )}
      </div>

      <p className="text-center text-xs text-slate-400">StudyPath v1.0.0 • Made for Indian students 🇮🇳</p>
    </div>
  )
}

function ToggleRow({ icon, label, desc, checked, onChange }) {
  return (
    <div className="flex items-center gap-3 py-2">
      <div className="w-9 h-9 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 shrink-0">
        <i className={`fas ${icon} text-sm`}></i>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold">{label}</p>
        <p className="text-xs text-slate-400">{desc}</p>
      </div>
      <button
        onClick={() => onChange(!checked)}
        className={`w-11 h-6 rounded-full transition relative shrink-0 ${checked ? 'bg-primary-600' : 'bg-slate-200 dark:bg-slate-700'}`}
      >
        <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${checked ? 'translate-x-5' : ''}`}></span>
      </button>
    </div>
  )
}
