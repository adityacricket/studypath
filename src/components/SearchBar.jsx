import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { globalSearch, flattenResults } from '../utils/search.js'

export default function SearchBar({ placeholder = 'Search exams, tools, topics, careers...', autoFocus = false }) {
  const [query, setQuery] = useState('')
  const [showResults, setShowResults] = useState(false)
  const navigate = useNavigate()
  const containerRef = useRef(null)

  const results = query.trim() ? flattenResults(globalSearch(query)) : []

  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowResults(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (item) => {
    setQuery('')
    setShowResults(false)
    navigate(item.path)
  }

  const typeIcon = {
    Exam: 'fa-building-columns',
    Tool: 'fa-calculator',
    Resource: 'fa-book',
    Career: 'fa-route',
    'Quiz Topic': 'fa-brain',
  }

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative">
        <i className="fas fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
        <input
          type="text"
          value={query}
          autoFocus={autoFocus}
          onChange={(e) => {
            setQuery(e.target.value)
            setShowResults(true)
          }}
          onFocus={() => setShowResults(true)}
          placeholder={placeholder}
          className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl pl-11 pr-4 py-3.5 text-sm shadow-card focus:outline-none focus:ring-2 focus:ring-primary-400"
        />
        {query && (
          <button
            onClick={() => { setQuery(''); setShowResults(false) }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
          >
            <i className="fas fa-xmark"></i>
          </button>
        )}
      </div>

      {showResults && query.trim() && (
        <div className="absolute mt-2 w-full bg-white dark:bg-slate-900 rounded-2xl shadow-card-hover border border-slate-100 dark:border-slate-800 max-h-80 overflow-y-auto z-50 animate-slide-up">
          {results.length === 0 ? (
            <div className="p-4 text-sm text-slate-400 text-center">No results found for "{query}"</div>
          ) : (
            results.slice(0, 10).map((item) => (
              <button
                key={item.type + item.id}
                onClick={() => handleSelect(item)}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 text-left border-b border-slate-50 dark:border-slate-800 last:border-0"
              >
                <i className={`fas ${typeIcon[item.type] || 'fa-magnifying-glass'} text-primary-500 w-4`}></i>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{item.title}</p>
                  <p className="text-xs text-slate-400 truncate">{item.subtitle}</p>
                </div>
                <span className="badge bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px]">{item.type}</span>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  )
}
