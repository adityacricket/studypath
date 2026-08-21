// Centralized localStorage access layer.
// Kept isolated so it can later be swapped for a real database/auth backend
// without touching component code (just change the implementation here).

const KEYS = {
  PROFILE: 'studypath_profile',
  PROGRESS: 'studypath_progress',
  QUIZ_HISTORY: 'studypath_quiz_history',
  SETTINGS: 'studypath_settings',
  PLANNER: 'studypath_planner',
  SAVED_RESOURCES: 'studypath_saved_resources',
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

export const defaultProfile = {
  name: 'Student',
  selectedExam: null,
  joinedAt: new Date().toISOString(),
  avatarEmoji: '🎓',
}

export const defaultSettings = {
  theme: 'light', // 'light' | 'dark'
  notifications: true,
  dailyReminder: true,
}

export const defaultProgress = {
  topicsCompleted: [], // array of topic ids/strings
  studyHours: 0, // total hours logged
  studyLog: [], // [{date, hours, subject}]
  mockScores: [], // [{exam, date, score, total}]
  weakSubjects: [],
  strongSubjects: [],
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
    history.unshift({ ...result, id: Date.now(), date: new Date().toISOString() })
    safeSet(KEYS.QUIZ_HISTORY, history.slice(0, 100))
    return history
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

  resetAll: () => {
    Object.values(KEYS).forEach((k) => localStorage.removeItem(k))
  },

  resetProgress: () => {
    safeSet(KEYS.PROGRESS, defaultProgress)
    safeSet(KEYS.QUIZ_HISTORY, [])
  },
}

export default storage
