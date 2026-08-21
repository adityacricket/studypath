import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'
import storage, { defaultProfile, defaultSettings, defaultProgress } from '../utils/storage.js'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [profile, setProfileState] = useState(() => storage.getProfile())
  const [settings, setSettingsState] = useState(() => storage.getSettings())
  const [progress, setProgressState] = useState(() => storage.getProgress())
  const [quizHistory, setQuizHistoryState] = useState(() => storage.getQuizHistory())
  const [savedResources, setSavedResourcesState] = useState(() => storage.getSavedResources())

  // Apply dark mode class to html element
  useEffect(() => {
    const root = document.documentElement
    if (settings.theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
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

  const logStudyHours = useCallback((hours, subject) => {
    setProgressState((prev) => {
      const entry = { date: new Date().toISOString(), hours, subject: subject || 'General' }
      const next = {
        ...prev,
        studyHours: Math.round((prev.studyHours + hours) * 100) / 100,
        studyLog: [entry, ...prev.studyLog].slice(0, 200),
      }
      storage.setProgress(next)
      return next
    })
  }, [])

  const addMockScore = useCallback((mockResult) => {
    setProgressState((prev) => {
      const next = { ...prev, mockScores: [{ ...mockResult, date: new Date().toISOString() }, ...prev.mockScores].slice(0, 50) }
      storage.setProgress(next)
      return next
    })
  }, [])

  const addQuizResult = useCallback((result) => {
    const updated = storage.addQuizResult(result)
    setQuizHistoryState(updated)
  }, [])

  const toggleSavedResource = useCallback((resourceId) => {
    const updated = storage.toggleSavedResource(resourceId)
    setSavedResourcesState(updated)
  }, [])

  const resetProgress = useCallback(() => {
    storage.resetProgress()
    setProgressState(defaultProgress)
    setQuizHistoryState([])
  }, [])

  const resetAll = useCallback(() => {
    storage.resetAll()
    setProfileState(defaultProfile)
    setSettingsState(defaultSettings)
    setProgressState(defaultProgress)
    setQuizHistoryState([])
    setSavedResourcesState([])
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
    addMockScore,
    quizHistory,
    addQuizResult,
    savedResources,
    toggleSavedResource,
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
