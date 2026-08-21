import React, { useState } from 'react'
import { Field, ResultBox } from './PercentageCalculator.jsx'

export default function MarksCalculator() {
  const [subjects, setSubjects] = useState([{ obtained: '', total: '' }])

  const updateSubject = (idx, field, value) => {
    const next = [...subjects]
    next[idx][field] = value
    setSubjects(next)
  }

  const addSubject = () => setSubjects([...subjects, { obtained: '', total: '' }])
  const removeSubject = (idx) => setSubjects(subjects.filter((_, i) => i !== idx))

  const totalObtained = subjects.reduce((sum, s) => sum + (parseFloat(s.obtained) || 0), 0)
  const totalMax = subjects.reduce((sum, s) => sum + (parseFloat(s.total) || 0), 0)
  const percentage = totalMax > 0 ? ((totalObtained / totalMax) * 100).toFixed(2) : null

  let grade = null
  if (percentage !== null) {
    const p = parseFloat(percentage)
    if (p >= 90) grade = 'A+ (Outstanding)'
    else if (p >= 75) grade = 'A (Excellent)'
    else if (p >= 60) grade = 'B (Good)'
    else if (p >= 45) grade = 'C (Average)'
    else if (p >= 33) grade = 'D (Pass)'
    else grade = 'F (Needs Improvement)'
  }

  return (
    <div className="space-y-4">
      <div className="card p-4 space-y-3">
        <p className="text-sm font-semibold">Enter marks for each subject</p>
        {subjects.map((s, idx) => (
          <div key={idx} className="grid grid-cols-[1fr_1fr_auto] gap-2 items-end">
            <Field label={`Subject ${idx + 1} obtained`} value={s.obtained} onChange={(v) => updateSubject(idx, 'obtained', v)} placeholder="e.g. 78" />
            <Field label="Out of" value={s.total} onChange={(v) => updateSubject(idx, 'total', v)} placeholder="e.g. 100" />
            {subjects.length > 1 && (
              <button onClick={() => removeSubject(idx)} className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-900/30 text-rose-500 flex items-center justify-center shrink-0">
                <i className="fas fa-trash text-sm"></i>
              </button>
            )}
          </div>
        ))}
        <button onClick={addSubject} className="btn-secondary w-full text-sm">
          <i className="fas fa-plus"></i> Add Subject
        </button>
      </div>

      <div className="card p-4 grid grid-cols-2 gap-3">
        <ResultBox label="Total Marks" value={totalMax ? `${totalObtained} / ${totalMax}` : null} />
        <ResultBox label="Percentage" value={percentage} suffix="%" />
      </div>
      {grade && (
        <div className="card p-4">
          <p className="text-xs text-slate-400 mb-1">Grade Assessment</p>
          <p className="font-bold text-primary-600 dark:text-primary-400">{grade}</p>
        </div>
      )}
    </div>
  )
}
