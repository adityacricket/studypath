import React, { useState } from 'react'

export default function PercentageCalculator() {
  const [mode, setMode] = useState('basic') // basic | increase | change
  const [value, setValue] = useState('')
  const [percent, setPercent] = useState('')
  const [oldVal, setOldVal] = useState('')
  const [newVal, setNewVal] = useState('')

  const basicResult = value && percent ? ((parseFloat(value) * parseFloat(percent)) / 100).toFixed(2) : null
  const increaseResult = value && percent ? (parseFloat(value) * (1 + parseFloat(percent) / 100)).toFixed(2) : null
  const decreaseResult = value && percent ? (parseFloat(value) * (1 - parseFloat(percent) / 100)).toFixed(2) : null
  const changeResult = oldVal && newVal && parseFloat(oldVal) !== 0
    ? (((parseFloat(newVal) - parseFloat(oldVal)) / parseFloat(oldVal)) * 100).toFixed(2)
    : null

  const modes = [
    { id: 'basic', label: 'X% of Y' },
    { id: 'increase', label: 'Increase/Decrease' },
    { id: 'change', label: '% Change' },
  ]

  return (
    <div className="space-y-4">
      <div className="flex gap-2 overflow-x-auto">
        {modes.map((m) => (
          <button
            key={m.id}
            onClick={() => setMode(m.id)}
            className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium ${mode === m.id ? 'bg-primary-600 text-white' : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-500'}`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {mode === 'basic' && (
        <div className="card p-4 space-y-3">
          <Field label="Percentage (%)" value={percent} onChange={setPercent} placeholder="e.g. 20" />
          <Field label="Of Value" value={value} onChange={setValue} placeholder="e.g. 500" />
          <ResultBox label={`${percent || 'X'}% of ${value || 'Y'} is`} value={basicResult} />
        </div>
      )}

      {mode === 'increase' && (
        <div className="card p-4 space-y-3">
          <Field label="Base Value" value={value} onChange={setValue} placeholder="e.g. 1000" />
          <Field label="Percentage (%)" value={percent} onChange={setPercent} placeholder="e.g. 15" />
          <div className="grid grid-cols-2 gap-3">
            <ResultBox label="After Increase" value={increaseResult} />
            <ResultBox label="After Decrease" value={decreaseResult} />
          </div>
        </div>
      )}

      {mode === 'change' && (
        <div className="card p-4 space-y-3">
          <Field label="Old Value" value={oldVal} onChange={setOldVal} placeholder="e.g. 400" />
          <Field label="New Value" value={newVal} onChange={setNewVal} placeholder="e.g. 460" />
          <ResultBox label="Percentage Change" value={changeResult} suffix="%" highlightSign />
        </div>
      )}

      <div className="card p-4">
        <p className="text-xs font-semibold text-slate-400 mb-2">FORMULA USED</p>
        <p className="text-sm text-slate-600 dark:text-slate-300 font-mono">
          {mode === 'basic' && 'Result = (X × Y) / 100'}
          {mode === 'increase' && 'New = Value × (1 ± %/100)'}
          {mode === 'change' && '% Change = [(New − Old) / Old] × 100'}
        </p>
      </div>
    </div>
  )
}

export function Field({ label, value, onChange, placeholder, type = 'number' }) {
  return (
    <div>
      <label className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1 block">{label}</label>
      <input
        type={type}
        inputMode="decimal"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="input-field"
      />
    </div>
  )
}

export function ResultBox({ label, value, suffix = '', highlightSign = false }) {
  const isNegative = highlightSign && value && parseFloat(value) < 0
  return (
    <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-3">
      <p className="text-xs text-slate-500 dark:text-slate-400 mb-0.5">{label}</p>
      <p className={`text-xl font-bold ${isNegative ? 'text-rose-500' : 'text-primary-700 dark:text-primary-300'}`}>
        {value !== null && value !== undefined ? `${value}${suffix}` : '—'}
      </p>
    </div>
  )
}
