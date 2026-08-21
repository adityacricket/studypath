import React, { useState } from 'react'
import { ResultBox } from './PercentageCalculator.jsx'

export default function AgeCalculator() {
  const [dob, setDob] = useState('')
  const [asOfDate, setAsOfDate] = useState(new Date().toISOString().slice(0, 10))

  let result = null
  if (dob) {
    const birth = new Date(dob)
    const asOf = new Date(asOfDate)
    if (asOf >= birth) {
      let years = asOf.getFullYear() - birth.getFullYear()
      let months = asOf.getMonth() - birth.getMonth()
      let days = asOf.getDate() - birth.getDate()
      if (days < 0) {
        months -= 1
        const prevMonth = new Date(asOf.getFullYear(), asOf.getMonth(), 0)
        days += prevMonth.getDate()
      }
      if (months < 0) {
        years -= 1
        months += 12
      }
      const totalDays = Math.floor((asOf - birth) / (1000 * 60 * 60 * 24))
      result = { years, months, days, totalDays }
    }
  }

  return (
    <div className="space-y-4">
      <div className="card p-4 space-y-3">
        <div>
          <label className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1 block">Date of Birth</label>
          <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} className="input-field" />
        </div>
        <div>
          <label className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1 block">Calculate age as of</label>
          <input type="date" value={asOfDate} onChange={(e) => setAsOfDate(e.target.value)} className="input-field" />
        </div>
      </div>

      {result && (
        <div className="card p-4 space-y-3">
          <ResultBox label="Exact Age" value={`${result.years}y ${result.months}m ${result.days}d`} />
          <ResultBox label="Total days lived" value={result.totalDays.toLocaleString()} />
        </div>
      )}

      <div className="card p-4">
        <p className="text-xs text-slate-500 dark:text-slate-400">
          <i className="fas fa-info-circle mr-1"></i>
          Useful for checking age eligibility for exams like SSC CGL, NDA & CDS which have strict age limits.
        </p>
      </div>
    </div>
  )
}
