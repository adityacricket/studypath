import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import backend from '../services/backend.js'

const plans = [
  {
    id: 'monthly',
    name: 'Monthly',
    price: '₹199',
    period: '/month',
    popular: false,
    features: ['Full detailed chapters', 'Advanced question banks', 'Mock analytics', 'Smart revision queue', 'No study ads'],
  },
  {
    id: 'yearly',
    name: 'Yearly',
    price: '₹999',
    period: '/year',
    popular: true,
    features: ['Everything in Monthly', 'Exam-specific study plans', 'Deep mistake analysis', 'Premium mock packs', 'Best value'],
  },
]

export default function Premium() {
  const navigate = useNavigate()
  const [busy, setBusy] = useState(false)
  const [message, setMessage] = useState('')

  const checkout = async (plan) => {
    setBusy(true)
    setMessage('')
    const result = await backend.createCheckout(plan)

    if (result.ok && result.data?.url) {
      window.location.href = result.data.url
      return
    }

    if (!result.configured) {
      setMessage('Premium checkout is ready in the app, but payment credentials/backend still need to be connected.')
    } else {
      setMessage(result.error || 'Checkout could not be started.')
    }
    setBusy(false)
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div className="text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-sm">
          <i className="fas fa-crown" />
        </div>
        <h1 className="mt-3 text-3xl font-black">StudyPath Premium</h1>
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          Free gets you studying. Premium helps you study smarter with deeper content, stronger practice and better analysis.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {plans.map((plan) => (
          <div key={plan.id} className={`card relative p-6 ${plan.popular ? 'ring-2 ring-indigo-500' : ''}`}>
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white">
                Best Value
              </div>
            )}

            <h2 className="text-xl font-black">{plan.name}</h2>
            <div className="mt-3 flex items-end gap-1">
              <span className="text-4xl font-black">{plan.price}</span>
              <span className="pb-1 text-sm text-slate-400">{plan.period}</span>
            </div>

            <div className="my-5 space-y-2.5">
              {plan.features.map((feature) => (
                <div key={feature} className="flex gap-2 text-sm text-slate-600">
                  <span className="text-emerald-500">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <button disabled={busy} onClick={() => checkout(plan.id)} className="btn-primary w-full py-3">
              {busy ? 'Opening checkout…' : 'Choose Plan'}
            </button>
          </div>
        ))}
      </div>

      {message && <div className="card bg-amber-50 p-4 text-center text-sm text-amber-800">{message}</div>}

      <div className="card p-5 text-center">
        <p className="text-sm font-bold">Not ready for Premium?</p>
        <p className="mt-1 text-sm text-slate-500">Keep using the free resources and build your study streak first.</p>
        <button onClick={() => navigate('/resources')} className="btn-outline mt-4">Continue with Free Study</button>
      </div>
    </div>
  )
}
