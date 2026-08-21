import React, { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { resourceCategories, resources } from '../data/resources.js'
import { useApp } from '../context/AppContext.jsx'
import AdSlot, { PremiumBanner } from '../components/AdSlot.jsx'

export default function Resources() {
  const [searchParams] = useSearchParams()
  const [activeCategory, setActiveCategory] = useState('formula-sheets')
  const [openResource, setOpenResource] = useState(null)
  const { savedResources, toggleSavedResource } = useApp()

  useEffect(() => {
    const openId = searchParams.get('open')
    if (openId) {
      const r = resources.find((res) => res.id === openId)
      if (r) {
        setActiveCategory(r.category)
        setOpenResource(r)
      }
    }
  }, [searchParams])

  const filtered = resources.filter((r) => r.category === activeCategory)

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-extrabold mb-1">Resources</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm">Formula sheets, notes, vocabulary & more — all original content</p>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4 md:mx-0 md:px-0">
        {resourceCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => { setActiveCategory(cat.id); setOpenResource(null) }}
            className={`shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition ${
              activeCategory === cat.id ? 'bg-primary-600 text-white' : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-500'
            }`}
          >
            <i className={`fas ${cat.icon} text-xs`}></i>
            {cat.name}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map((r) => (
          <div key={r.id} className="card overflow-hidden">
            <button
              onClick={() => setOpenResource(openResource?.id === r.id ? null : r)}
              className="w-full flex items-center justify-between p-4"
            >
              <div className="flex items-center gap-2 min-w-0">
                <span className="font-semibold text-sm truncate">{r.title}</span>
                {r.premium && <span className="premium-tag shrink-0">Premium</span>}
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={(e) => { e.stopPropagation(); toggleSavedResource(r.id) }}
                  className="text-slate-400 hover:text-amber-500"
                >
                  <i className={`${savedResources.includes(r.id) ? 'fas' : 'far'} fa-bookmark`}></i>
                </button>
                <i className={`fas fa-chevron-down text-slate-400 text-xs transition-transform ${openResource?.id === r.id ? 'rotate-180' : ''}`}></i>
              </div>
            </button>
            {openResource?.id === r.id && (
              <div className="px-4 pb-4 animate-slide-up">
                {r.premium ? (
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/40 dark:to-purple-950/40 rounded-xl p-4 text-center">
                    <i className="fas fa-lock text-indigo-500 mb-2"></i>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">This is a premium resource</p>
                    <button className="btn-primary text-sm">Unlock Premium</button>
                  </div>
                ) : (
                  <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
                    {r.content.map((line, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-primary-400">•</span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {r.linkTo && (
                  <Link to={r.linkTo} className="inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 text-sm font-semibold mt-3">
                    Open <i className="fas fa-arrow-right text-xs"></i>
                  </Link>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <PremiumBanner />
      <AdSlot label="Resources Ad" />
    </div>
  )
}
