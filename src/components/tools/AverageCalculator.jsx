import React, { useState } from 'react'
import { ResultBox } from './PercentageCalculator.jsx'

export default function AverageCalculator() {
  const [numbers, setNumbers] = useState('')

  const parsed = numbers
    .split(/[,\s]+/)
    .map((n) => parseFloat(n))
    .filter((n) => !isNaN(n))

  const sum = parsed.reduce((a, b) => a + b, 0)
  const avg = parsed.length ? (sum / parsed.length).toFixed(2) : null
  const max = parsed.length ? Math.max(...parsed) : null
  const min = parsed.length ? Math.min(...parsed) : null

  return (
    <div className="space-y-4">
      <div className="card p-4 space-y-3">
        <label className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1 block">
          Enter numbers (comma or space separated)
        </label>
        <textarea
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
          placeholder="e.g. 12, 18, 24, 30, 45"
          rows={3}
          className="input-field resize-none"
        />
        <div className="grid grid-cols-2 gap-3">
          <ResultBox label="Average" value={avg} />
          <ResultBox label="Count" value={parsed.length || null} />
          <ResultBox label="Sum" value={parsed.length ? sum : null} />
          <ResultBox label="Highest / Lowest" value={parsed.length ? `${max} / ${min}` : null} />
        </div>
      </div>

      <div className="card p-4">
        <p className="text-xs font-semibold text-slate-400 mb-2">FORMULA USED</p>
        <p className="text-sm text-slate-600 dark:text-slate-300 font-mono">Average = (Sum of values) / (Count of values)</p>
      </div>
    </div>
  )
}
