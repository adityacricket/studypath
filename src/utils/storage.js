// Centralized localStorage access layer.
// The data model is intentionally backend-ready: this layer can later be
// replaced by a real auth/database adapter without changing page components.

const KEYS = {
  PROFILE: 'studypath_profile',
  PROGRESS: 'studypath_progress',
  QUIZ_HISTORY: 'studypath_quiz_history',
  SETTINGS: 'studypath_settings',
  PLANNER: 'studypath_planner',
  SAVED_RESOURCES: 'studypath_saved_resources',
  CHAPTER_PROGRESS: 'studypath_chapter_progress',
  MISTAKES: 'studypath_mistakes',
  ANNOTATIONS: 'studypath_annotations',
  REVISION_QUEUE: 'studypath_revision_queue',
}

function safeGet(key, fallback) {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return fallback
    return JSON.parse(raw)
  } catch (e) {
    console.warn('storage read error', key, e)
    return fallback
  }
}

function safeSet(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch (e) {
    console.warn('storage write error', key, e)
    return false
  }
}

const todayKey = () => new Date().toISOString().slice(0, 10)

export const defaultProfile = {
  name: 'Student',
  selectedExam: null,
  joinedAt: new Date().toISOString(),
  avatarEmoji: '🎓',
}

export const defaultSettings = {
  theme: 'light',
  notifications: true,
  dailyReminder: true,
}

export const defaultProgress = {
  topicsCompleted: [],
  studyHours: 0,
  studyLog: [],
  mockScores: [],
  weakSubjects: [],
  strongSubjects: [],
  streakDays: 0,
  lastStudyDate: null,
  sessionsCompleted: 0,
}

export const storage = {
  getProfile: () => safeGet(KEYS.PROFILE, defaultProfile),
  setProfile: (profile) => safeSet(KEYS.PROFILE, profile),

  getSettings: () => safeGet(KEYS.SETTINGS, defaultSettings),
  setSettings: (settings) => safeSet(KEYS.SETTINGS, settings),

  getProgress: () => safeGet(KEYS.PROGRESS, defaultProgress),
  setProgress: (progress) => safeSet(KEYS.PROGRESS, progress),

  getQuizHistory: () => safeGet(KEYS.QUIZ_HISTORY, []),
  setQuizHistory: (history) => safeSet(KEYS.QUIZ_HISTORY, history),
  addQuizResult: (result) => {
    const history = safeGet(KEYS.QUIZ_HISTORY, [])
    const entry = {
      ...result,
      id: Date.now(),
      date: new Date().toISOString(),
    }
    const next = [entry, ...history].slice(0, 200)
    safeSet(KEYS.QUIZ_HISTORY, next)
    return next
  },

  getPlanner: () => safeGet(KEYS.PLANNER, null),
  setPlanner: (planner) => safeSet(KEYS.PLANNER, planner),

  getSavedResources: () => safeGet(KEYS.SAVED_RESOURCES, []),
  setSavedResources: (list) => safeSet(KEYS.SAVED_RESOURCES, list),
  toggleSavedResource: (resourceId) => {
    const list = safeGet(KEYS.SAVED_RESOURCES, [])
    const idx = list.indexOf(resourceId)
    if (idx >= 0) list.splice(idx, 1)
    else list.push(resourceId)
    safeSet(KEYS.SAVED_RESOURCES, list)
    return list
  },

  getChapterProgress: () => safeGet(KEYS.CHAPTER_PROGRESS, {}),
  setChapterProgress: (progress) => safeSet(KEYS.CHAPTER_PROGRESS, progress),
  updateChapterProgress: (chapterId, updates) => {
    const all = safeGet(KEYS.CHAPTER_PROGRESS, {})
    const current = all[chapterId] || {
      currentPage: 1,
      completed: false,
      lastViewedAt: null,
      revisionCount: 0,
    }
    all[chapterId] = { ...current, ...updates, lastViewedAt: new Date().toISOString() }
    safeSet(KEYS.CHAPTER_PROGRESS, all)
    return all
  },

  getMistakes: () => safeGet(KEYS.MISTAKES, []),
  addMistake: (mistake) => {
    const mistakes = safeGet(KEYS.MISTAKES, [])
    const normalized = {
      ...mistake,
      id: Date.now() + Math.random(),
      date: new Date().toISOString(),
    }
    const next = [normalized, ...mistakes].slice(0, 500)
    safeSet(KEYS.MISTAKES, next)
    return next
  },
  markMistakeFixed: (mistakeId) => {
    const mistakes = safeGet(KEYS.MISTAKES, [])
    const next = mistakes.map((m) =>
      m.id === mistakeId ? { ...m, fixedAt: new Date().toISOString() } : m
    )
    safeSet(KEYS.MISTAKES, next)
    return next
  },

  getAnnotations: () => safeGet(KEYS.ANNOTATIONS, {}),
  saveAnnotation: (resourceId, annotation) => {
    const all = safeGet(KEYS.ANNOTATIONS, {})
    const list = all[resourceId] || []
    all[resourceId] = [annotation, ...list].slice(0, 100)
    safeSet(KEYS.ANNOTATIONS, all)
    return all
  },

  getRevisionQueue: () => safeGet(KEYS.REVISION_QUEUE, []),
  scheduleRevision: (item) => {
    const queue = safeGet(KEYS.REVISION_QUEUE, [])
    const next = [item, ...queue.filter((q) => q.id !== item.id)]
    safeSet(KEYS.REVISION_QUEUE, next.slice(0, 300))
    return next
  },

  logStudySession: (hours, subject, topic = null) => {
    const progress = safeGet(KEYS.PROGRESS, defaultProgress)
    const today = todayKey()
    const last = progress.lastStudyDate
    let streak = progress.streakDays || 0

    if (last === today) {
      // Same-day session: keep streak unchanged.
    } else if (last) {
      const previous = new Date(`${last}T00:00:00`)
      const current = new Date(`${today}T00:00:00`)
      const diff = Math.round((current - previous) / 86400000)
      streak = diff === 1 ? streak + 1 : 1
    } else {
      streak = 1
    }

    const entry = {
      date: new Date().toISOString(),
      hours,
      subject: subject || 'General',
      topic,
    }

    const next = {
      ...progress,
      studyHours: Math.round((progress.studyHours + hours) * 100) / 100,
      studyLog: [entry, ...progress.studyLog].slice(0, 300),
      streakDays: streak,
      lastStudyDate: today,
      sessionsCompleted: (progress.sessionsCompleted || 0) + 1,
    }

    safeSet(KEYS.PROGRESS, next)
    return next
  },

  resetAll: () => {
    Object.values(KEYS).forEach((k) => localStorage.removeItem(k))
  },

  resetProgress: () => {
    safeSet(KEYS.PROGRESS, defaultProgress)
    safeSet(KEYS.QUIZ_HISTORY, [])
    safeSet(KEYS.MISTAKES, [])
    safeSet(KEYS.REVISION_QUEUE, [])
  },
}

export default storage
