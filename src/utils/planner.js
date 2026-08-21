// Study planner generation logic
// Given exam, exam date, subjects, daily hours, strong & weak subjects
// generates a week-based timetable with more time allocated to weak subjects.

export function daysUntil(dateStr) {
  const target = new Date(dateStr)
  const now = new Date()
  now.setHours(0, 0, 0, 0)
  target.setHours(0, 0, 0, 0)
  const diff = Math.ceil((target - now) / (1000 * 60 * 60 * 24))
  return diff
}

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export function generateTimetable({ examName, examDate, subjects, dailyHours, strongSubjects = [], weakSubjects = [] }) {
  const days = Math.max(daysUntil(examDate), 1)
  const validSubjects = subjects.filter((s) => s && s.trim())

  // Assign weight: weak subjects get 1.6x, strong subjects get 0.7x, neutral 1x
  const weights = validSubjects.map((s) => {
    if (weakSubjects.includes(s)) return 1.6
    if (strongSubjects.includes(s)) return 0.7
    return 1
  })
  const totalWeight = weights.reduce((a, b) => a + b, 0) || 1

  // Build a 7-day weekly template with hour blocks per subject (in 30 min increments)
  const weekPlan = DAY_NAMES.map((day, dayIdx) => {
    const isSunday = dayIdx === 0
    const hoursForDay = isSunday ? dailyHours * 0.7 : dailyHours // lighter Sunday, revision-focused

    const blocks = validSubjects.map((subject, i) => {
      const share = (weights[i] / totalWeight) * hoursForDay
      const rounded = Math.round(share * 2) / 2 // nearest 0.5
      return { subject, hours: Math.max(rounded, 0.5) }
    })

    // Normalize so sum matches hoursForDay reasonably (small rounding drift accepted)
    const revisionBlock = isSunday ? { subject: 'Full Revision + Mock Test', hours: Math.max(Math.round(dailyHours * 0.3 * 2) / 2, 0.5) } : null

    return {
      day,
      isSunday,
      totalHours: hoursForDay,
      blocks: isSunday ? [revisionBlock, ...blocks.map(b => ({...b, hours: Math.max(Math.round(b.hours*0.5*2)/2, 0.5)}))] : blocks,
    }
  })

  // Milestones based on days remaining
  const milestones = []
  if (days > 60) {
    milestones.push({ phase: 'Foundation Building', range: `Day 1 - ${Math.round(days * 0.4)}`, focus: 'Build strong basics in all subjects, especially weak ones. Complete NCERT/basic reference books.' })
    milestones.push({ phase: 'Practice & Speed', range: `Day ${Math.round(days * 0.4) + 1} - ${Math.round(days * 0.75)}`, focus: 'Topic-wise practice sets, timed quizzes, and error analysis.' })
    milestones.push({ phase: 'Mock Tests & Revision', range: `Day ${Math.round(days * 0.75) + 1} - ${days}`, focus: 'Full-length mock tests, revise formula sheets & notes, focus on weak areas.' })
  } else if (days > 20) {
    milestones.push({ phase: 'Rapid Revision', range: `Day 1 - ${Math.round(days * 0.5)}`, focus: 'Revise all subjects with focus on high-weightage topics and weak subjects.' })
    milestones.push({ phase: 'Mock Test Sprint', range: `Day ${Math.round(days * 0.5) + 1} - ${days}`, focus: 'Attempt daily mock tests, analyze mistakes, revise formula sheets.' })
  } else {
    milestones.push({ phase: 'Final Sprint', range: `Day 1 - ${days}`, focus: 'Focus only on revision, formula sheets, and full mock tests. Avoid new topics.' })
  }

  return {
    examName,
    examDate,
    daysRemaining: days,
    dailyHours,
    weekPlan,
    milestones,
    generatedAt: new Date().toISOString(),
  }
}
