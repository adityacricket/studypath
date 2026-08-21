import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'
import storage, { defaultProfile, defaultSettings, defaultProgress } from '../utils/storage.js'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [profile, setProfileState] = useState(() => storage.getProfile())
  const [settings, setSettingsState] = useState(() => storage.getSettings())
  const [progress, setProgressState] = useState(() => storage.getProgress())
  const [quizHistory, setQuizHistoryState] = useState(() => storage.getQuizHistory())
  const [savedResources, setSavedResourcesState] = useState(() => storage.getSavedResources())
  const [mistakes, setMistakesState] = useState(() => storage.getMistakes())
  const [chapterProgress, setChapterProgressState] = useState(() => storage.getChapterProgress())

  useEffect(() => {
    const root = document.documentElement
    if (settings.theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
  }, [settings.theme])

  const updateProfile = useCallback((updates) => {
    setProfileState((prev) => {
      const next = { ...prev, ...updates }
      storage.setProfile(next)
      return next
    })
  }, [])

  const updateSettings = useCallback((updates) => {
    setSettingsState((prev) => {
      const next = { ...prev, ...updates }
      storage.setSettings(next)
      return next
    })
  }, [])

  const toggleTheme = useCallback(() => {
    setSettingsState((prev) => {
      const next = { ...prev, theme: prev.theme === 'dark' ? 'light' : 'dark' }
      storage.setSettings(next)
      return next
    })
  }, [])

  const updateProgress = useCallback((updates) => {
    setProgressState((prev) => {
      const next = { ...prev, ...updates }
      storage.setProgress(next)
      return next
    })
  }, [])

  const markTopicComplete = useCallback((topicId) => {
    setProgressState((prev) => {
      if (prev.topicsCompleted.includes(topicId)) return prev
      const next = { ...prev, topicsCompleted: [...prev.topicsCompleted, topicId] }
      storage.setProgress(next)
      return next
    })
  }, [])

  const logStudyHours = useCallback((hours, subject, topic = null) => {
    const next = storage.logStudySession(hours, subject, topic)
    setProgressState(next)
  }, [])

  const completeStudySession = useCallback((hours, subject, topic = null) => {
    const next = storage.logStudySession(hours, subject, topic)
    setProgressState(next)
  }, [])

  const addMockScore = useCallback((mockResult) => {
    setProgressState((prev) => {
      const next = {
        ...prev,
        mockScores: [
          { ...mockResult, date: new Date().toISOString() },
          ...prev.mockScores,
        ].slice(0, 50),
      }
      storage.setProgress(next)
      return next
    })
  }, [])

  const addQuizResult = useCallback((result) => {
    const updated = storage.addQuizResult(result)
    setQuizHistoryState(updated)
  }, [])

  const recordMistake = useCallback((mistake) => {
    const updated = storage.addMistake(mistake)
    setMistakesState(updated)
  }, [])

  const fixMistake = useCallback((mistakeId) => {
    const updated = storage.markMistakeFixed(mistakeId)
    setMistakesState(updated)
  }, [])

  const updateChapterProgress = useCallback((chapterId, updates) => {
    const updated = storage.updateChapterProgress(chapterId, updates)
    setChapterProgressState(updated)
  }, [])

  const toggleSavedResource = useCallback((resourceId) => {
    const updated = storage.toggleSavedResource(resourceId)
    setSavedResourcesState(updated)
  }, [])

  const resetProgress = useCallback(() => {
    storage.resetProgress()
    setProgressState(defaultProgress)
    setQuizHistoryState([])
    setMistakesState([])
  }, [])

  const resetAll = useCallback(() => {
    storage.resetAll()
    setProfileState(defaultProfile)
    setSettingsState(defaultSettings)
    setProgressState(defaultProgress)
    setQuizHistoryState([])
    setSavedResourcesState([])
    setMistakesState([])
    setChapterProgressState({})
  }, [])

  const value = {
    profile,
    updateProfile,
    settings,
    updateSettings,
    toggleTheme,
    progress,
    updateProgress,
    markTopicComplete,
    logStudyHours,
    completeStudySession,
    addMockScore,
    quizHistory,
    addQuizResult,
    savedResources,
    toggleSavedResource,
    mistakes,
    recordMistake,
    fixMistake,
    chapterProgress,
    updateChapterProgress,
    resetProgress,
    resetAll,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
