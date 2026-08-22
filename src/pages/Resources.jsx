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
    if (!openId) return
    const resource = resources.find((item) => item.id === openId)
    if (resource) {
      setActiveCategory(resource.category)
      setOpenResource(resource)
    }
  }, [searchParams])

  const filtered = resources.filter((resource) => resource.category === activeCategory)

  return (
    <div className="space-y-6 pb-6">
      <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-white to-indigo-50/60 p-5 shadow-sm dark:border-slate-700 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950/30 md:p-7">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-2 text-[10px] font-black uppercase tracking-[0.22em] text-indigo-600 dark:text-indigo-400">StudyPath Library</div>
            <h1 className="text-3xl font-black tracking-tight text-slate-950 dark:text-white md:text-4xl">Resources</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">Detailed notes, formula sheets, revision material and useful sources — organised by what you need to study next.</p>
          </div>
          <div className="rounded-2xl border border-indigo-100 bg-white/80 px-4 py-3 text-center dark:border-indigo-900 dark:bg-slate-900/70">
            <div className="text-2xl font-black text-indigo-600 dark:text-indigo-400">{filtered.length}</div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">In this section</div>
          </div>
        </div>
      </section>

      <div className="-mx-4 overflow-x-auto px-4 pb-1 md:mx-0 md:px-0">
        <div className="flex min-w-max gap-2">
          {resourceCategories.map((cat) => (
            <button key={cat.id} onClick={() => { setActiveCategory(cat.id); setOpenResource(null) }} className={`flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm font-bold transition ${activeCategory === cat.id ? 'border-indigo-600 bg-indigo-600 text-white shadow-md' : 'border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300'}`}>
              <span>{cat.icon}</span><span>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {filtered.map((r) => {
          const isOpen = openResource?.id === r.id
          const isSaved = savedResources.includes(r.id)
          return (
            <article key={r.id} className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition dark:bg-slate-900 ${isOpen ? 'border-indigo-300 shadow-md dark:border-indigo-700' : 'border-slate-200 dark:border-slate-700'}`}>
              <div className="flex items-center gap-3 p-4 md:p-5">
                <button onClick={() => setOpenResource(isOpen ? null : r)} className="flex min-w-0 flex-1 items-center gap-3 text-left">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-lg dark:bg-indigo-950/50">{r.icon || '📚'}</span>
                  <span className="min-w-0">
                    <span className="flex flex-wrap items-center gap-2">
                      <span className="truncate text-sm font-extrabold text-slate-900 dark:text-white md:text-base">{r.title}</span>
                      <span className={`rounded-full px-2 py-0.5 text-[9px] font-black uppercase ${r.premium ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>{r.premium ? 'Premium' : 'Free'}</span>
                    </span>
                    {r.description && <span className="mt-1 block truncate text-xs text-slate-400">{r.description}</span>}
                  </span>
                </button>

                <button onClick={() => toggleSavedResource(r.id)} className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition ${isSaved ? 'bg-amber-50 text-amber-500 dark:bg-amber-950/40' : 'text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`} aria-label={isSaved ? 'Remove saved resource' : 'Save resource'}>
                  <i className={`${isSaved ? 'fas' : 'far'} fa-bookmark`} />
                </button>
                <button onClick={() => setOpenResource(isOpen ? null : r)} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Toggle resource details">
                  <i className={`fas fa-chevron-down text-xs transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {isOpen && (
                <div className="border-t border-slate-100 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-950/40 md:p-5">
                  {r.premium ? (
                    <div className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-indigo-50 p-6 text-center dark:border-amber-900 dark:from-amber-950/30 dark:to-indigo-950/30">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-amber-500 shadow-sm dark:bg-slate-900"><i className="fas fa-lock" /></div>
                      <h3 className="mt-3 text-base font-black text-slate-900 dark:text-white">Premium resource</h3>
                      <p className="mx-auto mt-1 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">This resource will be available inside the premium study library.</p>
                      <Link to="/premium" className="mt-4 inline-flex rounded-xl bg-indigo-600 px-5 py-3 text-sm font-black text-white hover:bg-indigo-700">View Premium</Link>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="rounded-2xl border border-indigo-100 bg-white p-4 dark:border-indigo-900 dark:bg-slate-900">
                        <div className="mb-3 flex items-center justify-between"><span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">Quick Preview</span><span className="text-[10px] font-bold text-slate-400">StudyPath original</span></div>
                        <div className="space-y-2">
                          {(r.content || []).slice(0, 4).map((line, i) => <div key={i} className="flex gap-3 text-sm leading-7 text-slate-600 dark:text-slate-300"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />{line}</div>)}
                        </div>
                      </div>

                      <Link to={`/resources/${r.id}`} onClick={() => setOpenResource(null)} className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3.5 text-sm font-black text-white shadow-sm transition hover:bg-indigo-700">
                        <i className="fas fa-book-open" /> Open Detailed Notes <i className="fas fa-arrow-right text-xs" />
                      </Link>

                      <div className="grid gap-2 sm:grid-cols-2">
                        <button onClick={() => toggleSavedResource(r.id)} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"><i className={`${isSaved ? 'fas' : 'far'} fa-bookmark mr-2`} />{isSaved ? 'Saved' : 'Save Resource'}</button>
                        {r.linkTo && (r.linkTo.startsWith('http') ? <a href={r.linkTo} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-bold text-indigo-600 dark:border-slate-700 dark:bg-slate-900 dark:text-indigo-400">Official / External Source <i className="fas fa-external-link-alt ml-1 text-[10px]" /></a> : <Link to={r.linkTo} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-bold text-indigo-600 dark:border-slate-700 dark:bg-slate-900 dark:text-indigo-400">Open Practice <i className="fas fa-arrow-right ml-1 text-[10px]" /></Link>)}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </article>
          )
        })}
      </div>

      <PremiumBanner />
      <AdSlot label="Resources Ad" />
    </div>
  )
}
