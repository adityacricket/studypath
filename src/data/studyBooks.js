import { exams } from './exams.js'

const slugify = (value) =>
  String(value)
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const subjectTone = (subject) => {
  const s = String(subject).toLowerCase()
  if (s.includes('mathemat') || s.includes('quant') || s.includes('numerical')) return 'solve'
  if (s.includes('physics') || s.includes('chemistry') || s.includes('science')) return 'concept'
  if (s.includes('english') || s.includes('vocabulary')) return 'language'
  if (s.includes('history') || s.includes('polity') || s.includes('geography') || s.includes('econom')) return 'memory'
  if (s.includes('reasoning')) return 'logic'
  return 'balanced'
}

const makeChapter = (exam, subject, title, index) => ({
  id: `${exam.id}-${slugify(subject)}-${slugify(title)}`,
  examId: exam.id,
  examName: exam.name,
  subject,
  subjectTone: subjectTone(subject),
  title,
  slug: slugify(title),
  order: index + 1,
  estimatedPages: Math.max(16, Math.min(40, 18 + String(title).length % 16)),
  sections: [
    'Chapter overview',
    'Build the concept from zero',
    'Teacher explanation in simple language',
    'Worked examples',
    'Exam-specific traps',
    'Shortcuts / memory hooks',
    'PYQ-style practice',
    'Challenge set',
    'Answers with explanation',
    'One-page revision',
    'Recall test'
  ]
})

export const studyBooks = exams.map((exam) => {
  const chapters = Object.entries(exam.syllabus || {}).flatMap(([subject, topics]) =>
    (topics || []).map((topic, index) => makeChapter(exam, subject, topic, index))
  )

  return {
    id: exam.id,
    examId: exam.id,
    examName: exam.name,
    fullName: exam.fullName,
    category: exam.category,
    color: exam.color,
    icon: exam.icon,
    tagline: exam.tagline,
    subjects: exam.subjects || [],
    chapters,
    totalChapters: chapters.length,
    bookTitle: `${exam.name} Complete Study Books`,
    description: `Exam-specific books mapped directly to the ${exam.name} syllabus. Each chapter follows the StudyPath teacher-notebook format.`
  }
})

export const getStudyBook = (examId) =>
  studyBooks.find((book) => book.examId === examId)

export const getStudyChapter = (examId, chapterId) => {
  const book = getStudyBook(examId)
  return book?.chapters.find((chapter) => chapter.id === chapterId)
}

export const getStudyBookStats = () => ({
  exams: studyBooks.length,
  books: studyBooks.length,
  chapters: studyBooks.reduce((sum, book) => sum + book.totalChapters, 0)
})

export default studyBooks
