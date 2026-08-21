import React, { useState } from 'react'
import { Field, ResultBox } from './PercentageCalculator.jsx'
import { useApp } from '../../context/AppContext.jsx'

export default function StudyTimeCalculator() {
  const [topics, setTopics] = useState('')
  const [hoursPerTopic, setHoursPerTopic] = useState('')
  const [dailyHours, setDailyHours] = useState('')
  const { logStudyHours } = useApp()
  const [logHours, setLogHours] = useState('')
  const [logSubject, setLogSubject] = useState('')
  const [logged, setLogged] = useState(false)

  const totalHoursNeeded = topics && hoursPerTopic ? parseFloat(topics) * parseFloat(hoursPerTopic) : null
  const daysNeeded = totalHoursNeeded && dailyHours ? Math.ceil(totalHoursNeeded / parseFloat(dailyHours)) : null

  const handleLog = () => {
    const h = parseFloat(logHours)
    if (h > 0) {
      logStudyHours(h, logSubject || 'General')
      setLogged(true)
      setLogHours('')
      setTimeout(() => setLogged(false), 2000)
    }
  }

  return (
    <div className="space-y-4">
      <div className="card p-4 space-y-3">
        <p className="text-sm font-semibold">Estimate time needed to finish syllabus</p>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Number of topics" value={topics} onChange={setTopics} placeholder="e.g. 40" />
          <Field label="Hours per topic" value={hoursPerTopic} onChange={setHoursPerTopic} placeholder="e.g. 2" />
        </div>
        <Field label="Hours you can study daily" value={dailyHours} onChange={setDailyHours} placeholder="e.g. 4" />
        <div className="grid grid-cols-2 gap-3">
          <ResultBox label="Total hours needed" value={totalHoursNeeded} suffix="h" />
          <ResultBox label="Days needed" value={daysNeeded} suffix=" days" />
        </div>
      </div>

      <div className="card p-4 space-y-3">
        <p className="text-sm font-semibold"><i className="fas fa-clock text-primary-500 mr-2"></i>Log today's study hours</p>
        <div className="grid grid-cols-[1fr_1fr_auto] gap-2 items-end">
          <Field label="Hours studied" value={logHours} onChange={setLogHours} placeholder="e.g. 3" />
          <Field label="Subject (optional)" value={logSubject} onChange={setLogSubject} placeholder="e.g. Maths" type="text" />
          <button onClick={handleLog} className="btn-primary h-10 shrink-0">
            <i className="fas fa-check"></i>
          </button>
        </div>
        {logged && <p className="text-xs text-emerald-500"><i className="fas fa-circle-check mr-1"></i>Logged! View it in your Dashboard.</p>}
      </div>
    </div>
  )
}
