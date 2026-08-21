import { exams } from '../data/exams.js'
import { careerRoadmaps } from '../data/careers.js'
import { resources } from '../data/resources.js'
import { subjects, topicsBySubject } from '../data/quizzes.js'

const tools = [
  { id: 'percentage', name: 'Percentage Calculator', path: '/tools/percentage' },
  { id: 'average', name: 'Average Calculator', path: '/tools/average' },
  { id: 'ratio', name: 'Ratio Calculator', path: '/tools/ratio' },
  { id: 'age', name: 'Age Calculator', path: '/tools/age' },
  { id: 'marks', name: 'Marks Percentage Calculator', path: '/tools/marks' },
  { id: 'study-time', name: 'Study Time Calculator', path: '/tools/study-time' },
  { id: 'timetable', name: 'Timetable Generator', path: '/tools/timetable' },
]

export function globalSearch(query) {
  const q = query.trim().toLowerCase()
  if (!q) return { exams: [], tools: [], resources: [], careers: [], topics: [] }

  const matchedExams = exams
    .filter((e) => e.name.toLowerCase().includes(q) || e.fullName.toLowerCase().includes(q) || e.category.toLowerCase().includes(q))
    .map((e) => ({ id: e.id, title: e.name, subtitle: e.fullName, path: `/exams/${e.id}`, type: 'Exam' }))

  const matchedTools = tools
    .filter((t) => t.name.toLowerCase().includes(q))
    .map((t) => ({ id: t.id, title: t.name, subtitle: 'Study Tool', path: t.path, type: 'Tool' }))

  const matchedResources = resources
    .filter((r) => r.title.toLowerCase().includes(q) || r.tags.some((t) => t.toLowerCase().includes(q)))
    .map((r) => ({ id: r.id, title: r.title, subtitle: 'Resource', path: `/resources?open=${r.id}`, type: 'Resource' }))

  const matchedCareers = careerRoadmaps
    .filter((c) => c.title.toLowerCase().includes(q) || c.summary.toLowerCase().includes(q))
    .map((c) => ({ id: c.id, title: c.title, subtitle: 'Career Roadmap', path: `/careers?open=${c.id}`, type: 'Career' }))

  const matchedTopics = []
  Object.entries(topicsBySubject).forEach(([subjectId, topics]) => {
    const subj = subjects.find((s) => s.id === subjectId)
    topics.forEach((topic) => {
      if (topic.toLowerCase().includes(q)) {
        matchedTopics.push({ id: `${subjectId}-${topic}`, title: topic, subtitle: subj?.name || 'Topic', path: `/quiz?subject=${subjectId}&topic=${encodeURIComponent(topic)}`, type: 'Quiz Topic' })
      }
    })
  })

  return {
    exams: matchedExams,
    tools: matchedTools,
    resources: matchedResources,
    careers: matchedCareers,
    topics: matchedTopics,
  }
}

export function flattenResults(results) {
  return [...results.exams, ...results.tools, ...results.topics, ...results.resources, ...results.careers]
}
