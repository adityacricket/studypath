import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import backend from '../services/backend.js'
import storage from '../utils/storage.js'

export default function Account() {
  const navigate = useNavigate()
  const { profile, updateProfile, resetAll } = useApp()
  const [mode, setMode] = useState('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState(profile?.name === 'Student' ? '' : profile?.name || '')
  const [message, setMessage] = useState('')
  const [busy, setBusy] = useState(false)

  const submit = async (event) => {
    event.preventDefault()
    setBusy(true)
    setMessage('')

    const result = mode === 'login'
      ? await backend.login({ email, password })
      : await backend.signup({ email, password, name: name || 'Student' })

    if (result.ok) {
      updateProfile({
        name: result.data?.user?.name || name || 'Student',
        email: result.data?.user?.email || email,
        accountType: 'cloud',
      })
      setMessage('Signed in successfully.')
      setTimeout(() => navigate('/dashboard'), 400)
    } else if (!result.configured) {
      updateProfile({ name: name || 'Student', email, accountType: 'local-demo' })
      setMessage('Local study mode is active. Cloud account is not connected yet.')
    } else {
      setMessage(result.error || 'Unable to continue. Check your details.')
    }

    setBusy(false)
  }

  const exportData = () => {
    const payload = {
      exportedAt: new Date().toISOString(),
      profile: storage.getProfile(),
      progress: storage.getProgress(),
      quizHistory: storage.getQuizHistory(),
      planner: storage.getPlanner(),
      savedResources: storage.getSavedResources(),
    }

    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = 'studypath-data.json'
    anchor.click()
    URL.revokeObjectURL(url)
  }

  const deleteLocalData = () => {
    if (!window.confirm('Delete all StudyPath data from this device?')) return
    resetAll()
    setMessage('Local data deleted.')
  }

  return (
    <div className="mx-auto max-w-2xl space-y-5">
      <div>
        <h1 className="text-2xl font-extrabold">My Account</h1>
        <p className="text-sm text-slate-500">Sign in to keep your study journey across devices.</p>
      </div>

      <div className="card overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-600 to-violet-600 p-5 text-white">
          <div className="text-xs font-black uppercase tracking-widest text-white/75">StudyPath</div>
          <h2 className="mt-1 text-2xl font-black">{mode === 'login' ? 'Welcome back' : 'Create your study account'}</h2>
          <p className="mt-1 text-sm text-white/80">Your notes, progress, mistakes and plans in one place.</p>
        </div>

        <form onSubmit={submit} className="space-y-4 p-5">
          {mode === 'signup' && (
            <div>
              <label className="mb-1 block text-xs font-semibold text-slate-500">Name</label>
              <input className="input-field" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
            </div>
          )}

          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-500">Email</label>
            <input className="input-field" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
          </div>

          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-500">Password</label>
            <input className="input-field" type="password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 6 characters" />
          </div>

          <button disabled={busy} className="btn-primary w-full py-3">
            {busy ? 'Please wait…' : mode === 'login' ? 'Sign In' : 'Create Account'}
          </button>

          {message && <div className="rounded-xl bg-slate-50 p-3 text-sm text-slate-600">{message}</div>}

          <button
            type="button"
            onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
            className="w-full text-sm font-semibold text-indigo-600"
          >
            {mode === 'login' ? 'Create a new account' : 'Already have an account? Sign in'}
          </button>
        </form>
      </div>

      <div className="card space-y-3 p-5">
        <h3 className="font-bold">Data & Privacy</h3>
        <p className="text-sm leading-6 text-slate-500">
          Until cloud sync is connected, StudyPath keeps your study data on this device.
        </p>
        <div className="grid gap-2 sm:grid-cols-2">
          <button onClick={exportData} className="btn-outline">Export My Data</button>
          <button onClick={deleteLocalData} className="btn-outline border-rose-200 text-rose-600">Delete Local Data</button>
        </div>
      </div>
    </div>
  )
}
