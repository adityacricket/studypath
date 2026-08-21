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

  const filtered = resources.filter(
    (resource) => resource.category === activeCategory
  )

  const handleOpenViewer = (resource) => {
    setOpenResource(null)
  }

  return (
    <div className="space-y-5">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold mb-1">
          Resources
        </h1>

        <p className="text-slate-500 dark:text-slate-400 text-sm">
          Detailed notes, formulas, revision material & official sources
        </p>
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4 md:mx-0 md:px-0">

        {resourceCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setActiveCategory(cat.id)
              setOpenResource(null)
            }}
            className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition ${
              activeCategory === cat.id
                ? 'bg-primary-600 text-white'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-300'
            }`}
          >
            <span className="text-xs">
              {cat.icon}
            </span>

            {cat.name}
          </button>
        ))}

      </div>

      {/* Resources */}
      <div className="space-y-3">

        {filtered.map((r) => (

          <div
            key={r.id}
            className="card overflow-hidden"
          >

            {/* Resource Header */}
            <button
              onClick={() =>
                setOpenResource(
                  openResource?.id === r.id ? null : r
                )
              }
              className="w-full flex items-center justify-between p-4 text-left"
            >

              <div className="flex items-center gap-2 min-w-0">

                <span className="font-semibold text-sm truncate">
                  {r.title}
                </span>

                {r.premium && (
                  <span className="premium-tag shrink-0">
                    Premium
                  </span>
                )}

                {!r.premium && (
                  <span className="shrink-0 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-600">
                    FREE
                  </span>
                )}

              </div>

              <div className="flex items-center gap-3 shrink-0">

                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleSavedResource(r.id)
                  }}
                  className="text-slate-400 hover:text-amber-500"
                  aria-label="Save resource"
                >
                  <i
                    className={`${
                      savedResources.includes(r.id)
                        ? 'fas'
                        : 'far'
                    } fa-bookmark`}
                  />
                </button>

                <i
                  className={`fas fa-chevron-down text-slate-400 text-xs transition-transform ${
                    openResource?.id === r.id
                      ? 'rotate-180'
                      : ''
                  }`}
                />

              </div>

            </button>

            {/* Expanded Preview */}
            {openResource?.id === r.id && (

              <div className="px-4 pb-5 animate-slide-up">

                {r.premium ? (

                  <div className="rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/40 dark:to-purple-950/40 p-5 text-center">

                    <i className="fas fa-lock text-indigo-500 mb-2" />

                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                      This is a premium resource.
                    </p>

                    <button className="btn-primary text-sm">
                      Unlock Premium
                    </button>

                  </div>

                ) : (

                  <div className="space-y-4">

                    {/* Preview */}
                    <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-900/60 p-4">

                      <div className="mb-3 text-xs font-bold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
                        Quick Preview
                      </div>

                      <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">

                        {r.content.slice(0, 4).map((line, i) => (

                          <li
                            key={i}
                            className="flex gap-2"
                          >
                            <span className="text-primary-500 font-bold">
                              •
                            </span>

                            <span>
                              {line}
                            </span>
                          </li>

                        ))}

                      </ul>

                    </div>

                    {/* Detailed Viewer */}
                    <Link
                      to={`/resources/${r.id}`}
                      onClick={() => handleOpenViewer(r)}
                      className="flex items-center justify-center gap-2 w-full rounded-xl bg-primary-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-primary-700"
                    >
                      <i className="fas fa-book-open" />
                      Open Detailed Notes
                    </Link>

                    {/* Save */}
                    <button
                      onClick={() =>
                        toggleSavedResource(r.id)
                      }
                      className="w-full rounded-xl border border-slate-200 dark:border-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-600 dark:text-slate-300"
                    >
                      <i
                        className={`${
                          savedResources.includes(r.id)
                            ? 'fas'
                            : 'far'
                        } fa-bookmark mr-2`}
                      />

                      {savedResources.includes(r.id)
                        ? 'Saved'
                        : 'Save Resource'}
                    </button>

                    {/* External Source */}
                    {r.linkTo && r.linkTo.startsWith('http') && (

                      <a
                        href={r.linkTo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-primary-600 dark:text-primary-400 text-sm font-semibold"
                      >
                        Official / External Source
                        <i className="fas fa-external-link-alt text-xs" />
                      </a>

                    )}

                    {/* Internal Source */}
                    {r.linkTo && !r.linkTo.startsWith('http') && (

                      <Link
                        to={r.linkTo}
                        className="flex items-center justify-center gap-2 text-primary-600 dark:text-primary-400 text-sm font-semibold"
                      >
                        Open Practice
                        <i className="fas fa-arrow-right text-xs" />
                      </Link>

                    )}

                  </div>

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
