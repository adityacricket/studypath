import React, { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getResourceById } from '../data/resources.js'
import { chapterData } from '../data/chapterData.js'

const handwriting = 'Kalam, "Segoe Print", "Comic Sans MS", cursive'

const fallbackSteps = [
  'Question ko ek baar calmly padho aur kya find karna hai identify karo.',
  'Given values ko alag likho; units same hain ya nahi check karo.',
  'Concept/formula choose karo aur values ko carefully substitute karo.',
  'Final answer ko estimate se check karo — answer reasonable hai ya nahi?',
]

function PaperCard({ title, emoji = '✦', children, tone = 'blue' }) {
  const tones = {
    blue: 'border-blue-200 bg-blue-50/55',
    green: 'border-emerald-200 bg-emerald-50/55',
    yellow: 'border-amber-200 bg-amber-50/60',
    pink: 'border-pink-200 bg-pink-50/55',
    purple: 'border-violet-200 bg-violet-50/55',
    orange: 'border-orange-200 bg-orange-50/55',
    red: 'border-rose-200 bg-rose-50/55',
    slate: 'border-slate-200 bg-white/65',
  }

  return (
    <section className={`rounded-[18px] border-2 p-5 shadow-[2px_3px_0_rgba(15,23,42,0.035)] ${tones[tone] || tones.blue}`}>
      <div className="mb-3 flex items-center gap-2">
        <span className="text-xl">{emoji}</span>
        <h3 className="text-[18px] font-black text-slate-800" style={{ fontFamily: handwriting }}>
          {title}
        </h3>
      </div>
      {children}
    </section>
  )
}

function BulletList({ items }) {
  return (
    <div className="space-y-2.5">
      {items.map((item, index) => (
        <div key={index} className="flex gap-3 text-[15px] leading-8 text-slate-700">
          <span className="mt-2 text-indigo-500">✦</span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  )
}

function StepList({ items }) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className="flex gap-3 text-[15px] leading-8 text-slate-700">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-violet-300 bg-white text-xs font-black text-violet-700">
            {index + 1}
          </span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  )
}

export default function ResourceViewer() {
  const { resourceId } = useParams()
  const navigate = useNavigate()
  const resource = getResourceById(resourceId)
  const chapter = chapterData[resourceId]
  const [page, setPage] = useState(1)
  const [showAnswers, setShowAnswers] = useState(false)

  const pages = useMemo(() => {
    if (chapter?.pages?.length) return chapter.pages
    return [{
      page: 1,
      section: 'Study Note',
      title: resource?.title || 'Study Note',
      intro: 'This resource is available as a StudyPath learning note.',
      keyPoints: resource?.content || [],
    }]
  }, [chapter, resource])

  if (!resource) {
    return (
      <div className="min-h-screen bg-slate-100 p-6">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 text-center shadow">
          <div className="text-5xl">📚</div>
          <h1 className="mt-4 text-2xl font-black text-slate-900">Resource not found</h1>
          <button onClick={() => navigate('/resources')} className="mt-5 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white">
            ← Back to Resources
          </button>
        </div>
      </div>
    )
  }

  const current = pages[page - 1]
  const progress = Math.round((page / pages.length) * 100)
  const practiceList = current.practice || current.questions || []
  const answerList = current.answers || []
  const method = current.method?.length ? current.method : fallbackSteps

  const teacherTip = current.teacherTip ||
    'Formula yaad karne se pehle uska meaning samjho. Teacher ki tarah socho: given kya hai, find kya karna hai, aur relation kya hai?'

  const examFocus = current.examFocus ||
    `${current.title} se direct concept questions ke saath calculation, shortcut aur trap-based questions aa sakte hain. Is page ko padhne ke baad kam se kam 3 questions bina notes dekhe solve karo.`

  const secondLevelExplanation = current.explanation ||
    `Is topic ko sirf definition ke roop mein mat yaad karo. ${current.intro || 'Concept ko ek simple comparison, example aur exam application ke saath connect karo.'} Phir dekho ki question wording change hone par bhi same idea kaise use hota hai.`

  const quickRecall = current.recall || [
    `One-line meaning: ${current.title}.`,
    current.formula ? `Master relation: ${current.formula}` : 'Main rule ko apni language mein explain karo.',
    'Sabse common denominator / unit / sign mistake identify karo.',
    'Ek fresh example khud solve karo.',
  ]

  const goToPage = (nextPage) => {
    setPage(nextPage)
    setShowAnswers(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-slate-100 px-2 py-3 md:px-6 md:py-6">
      <div
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[30px] border border-slate-200 bg-[#fffef8] shadow-[0_18px_50px_rgba(15,23,42,0.12)]"
        style={{
          backgroundImage: [
            'linear-gradient(to right, rgba(148,163,184,0.065) 1px, transparent 1px)',
            'linear-gradient(to bottom, rgba(148,163,184,0.09) 1px, transparent 1px)',
          ].join(','),
          backgroundSize: '28px 100%, 100% 28px',
        }}
      >
        <div className="pointer-events-none absolute left-0 top-0 h-full w-9 border-r border-red-200/70 bg-red-50/20" />
        <div className="pointer-events-none absolute right-5 top-8 rotate-[-7deg] rounded-lg border-2 border-slate-300/50 px-3 py-1 text-[10px] font-black tracking-[0.26em] text-slate-400/65">
          STUDYPATH • MASTER NOTE
        </div>
        <div className="pointer-events-none absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 rotate-[-24deg] select-none whitespace-nowrap text-[58px] font-black tracking-[0.35em] text-slate-900/[0.023] md:text-[115px]">
          STUDYPATH
        </div>

        <div className="relative z-10 pl-7 md:pl-10">
          <header className="border-b-2 border-slate-200/80 bg-[#fffef8]/95 px-5 py-5 backdrop-blur md:px-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <button onClick={() => navigate('/resources')} className="text-sm font-black text-slate-500 hover:text-indigo-600">
                ← Back to Resources
              </button>

              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-black text-indigo-700">
                  {chapter?.subject || 'StudyPath'}
                </span>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-700">FREE</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">
                  Page {page} / {pages.length}
                </span>
              </div>
            </div>

            <div className="mt-5">
              <div className="text-xs font-black uppercase tracking-[0.22em] text-indigo-600">✦ Teacher's master notes</div>
              <h1 className="mt-1 text-4xl font-black leading-tight text-slate-900 md:text-6xl" style={{ fontFamily: handwriting }}>
                {chapter?.chapter || resource.title}
              </h1>
              <p className="mt-2 max-w-4xl text-sm font-semibold leading-7 text-slate-500">
                Not just a formula sheet. <span className="font-black text-slate-700">Understand → see the method → solve examples → avoid traps → practise → recall.</span>
              </p>
            </div>

            <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full rounded-full bg-indigo-500 transition-all" style={{ width: `${progress}%` }} />
            </div>
          </header>

          <main className="px-5 py-6 md:px-8 md:py-8">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-black uppercase tracking-[0.16em] text-indigo-600">{current.section}</div>
                <h2 className="mt-1 text-3xl font-black leading-tight text-slate-900 md:text-4xl" style={{ fontFamily: handwriting }}>
                  {current.title}
                </h2>
              </div>

              <div className="hidden -rotate-2 rounded-xl border-2 border-dashed border-slate-300 bg-white/85 px-4 py-2 text-center md:block">
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Study Page</div>
                <div className="text-2xl font-black text-slate-800">{current.page}</div>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-[1.5fr_0.9fr]">
              <div className="space-y-5">
                {current.intro && (
                  <PaperCard title="Samjho pehle" emoji="💡" tone="blue">
                    <p className="text-[15px] leading-8 text-slate-700">{current.intro}</p>
                  </PaperCard>
                )}

                <PaperCard title="Teacher Explanation — why this works" emoji="🧑‍🏫" tone="slate">
                  <p className="text-[15px] leading-8 text-slate-700">{secondLevelExplanation}</p>
                  <div className="mt-4 rounded-xl border border-indigo-100 bg-indigo-50/55 p-4 text-sm leading-7 text-slate-700">
                    <span className="font-black text-indigo-700">Teacher's way of thinking: </span>
                    {teacherTip}
                  </div>
                </PaperCard>

                {current.formula && (
                  <PaperCard title="Formula — but understand every part" emoji="📌" tone="purple">
                    <div className="rounded-2xl border-2 border-indigo-200 bg-white/80 p-5 text-center">
                      <div className="text-xs font-black uppercase tracking-[0.22em] text-indigo-600">Core relation</div>
                      <div className="mt-3 text-2xl font-black leading-relaxed text-indigo-900 md:text-3xl" style={{ fontFamily: handwriting }}>
                        {current.formula}
                      </div>
                    </div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      <div className="rounded-xl bg-white/80 p-3 text-sm leading-6 text-slate-700"><b>Given</b><br />Question mein jo values/info diya hai.</div>
                      <div className="rounded-xl bg-white/80 p-3 text-sm leading-6 text-slate-700"><b>Relation</b><br />Formula concept ko connect karta hai.</div>
                      <div className="rounded-xl bg-white/80 p-3 text-sm leading-6 text-slate-700"><b>Check</b><br />Units, sign aur size verify karo.</div>
                    </div>
                  </PaperCard>
                )}

                {current.keyPoints?.length > 0 && (
                  <PaperCard title="Class Notes — jo copy mein likhna chahiye" emoji="📚" tone="green">
                    <BulletList items={current.keyPoints} />
                  </PaperCard>
                )}

                {current.example && (
                  <PaperCard title="Solved Example 1 — teacher style" emoji="✍️" tone="yellow">
                    <div className="rounded-xl bg-white/85 p-4 text-[15px] leading-8 text-slate-700">
                      <div className="mb-2 text-sm font-black text-amber-700">QUESTION</div>
                      {current.example}
                    </div>
                    <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50/60 p-4">
                      <div className="mb-2 text-xs font-black uppercase tracking-widest text-amber-700">Solve it like this</div>
                      <StepList items={method} />
                    </div>
                  </PaperCard>
                )}

                {(current.example2 || current.secondExample) && (
                  <PaperCard title="Solved Example 2 — same concept, different wording" emoji="📝" tone="yellow">
                    <p className="text-[15px] leading-8 text-slate-700">{current.example2 || current.secondExample}</p>
                  </PaperCard>
                )}

                {practiceList.length > 0 && (
                  <PaperCard title="Ab tum karo — without seeing the answer" emoji="✏️" tone="blue">
                    <div className="space-y-3">
                      {practiceList.map((question, index) => (
                        <div key={index} className="rounded-xl border border-slate-200 bg-white/85 p-4 text-[15px] leading-8 text-slate-700">
                          <span className="mr-2 font-black text-indigo-600">Q{index + 1}.</span>{question}
                        </div>
                      ))}
                    </div>
                    {answerList.length > 0 && (
                      <div className="mt-4">
                        <button onClick={() => setShowAnswers((value) => !value)} className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-black text-white">
                          {showAnswers ? 'Hide Answers' : 'Reveal Answers'}
                        </button>
                        {showAnswers && (
                          <div className="mt-3 rounded-xl border border-emerald-300 bg-emerald-50/70 p-4">
                            {answerList.map((answer, index) => (
                              <div key={index} className="py-1.5 text-sm font-semibold text-slate-700">{index + 1}. {answer}</div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </PaperCard>
                )}
              </div>

              <aside className="space-y-5">
                <PaperCard title="Exam Lens" emoji="🎯" tone="purple">
                  <p className="text-[14px] leading-7 text-slate-700">{examFocus}</p>
                </PaperCard>

                {current.shortcut && (
                  <PaperCard title="Smart Shortcut" emoji="⚡" tone="yellow">
                    <p className="text-[15px] leading-8 text-slate-700">{current.shortcut}</p>
                  </PaperCard>
                )}

                {current.memory && (
                  <PaperCard title="Memory Hook" emoji="🧠" tone="pink">
                    <p className="text-xl font-black leading-9 text-slate-800" style={{ fontFamily: handwriting }}>{current.memory}</p>
                  </PaperCard>
                )}

                {current.commonMistake && (
                  <PaperCard title="Students usually make this mistake" emoji="🚨" tone="red">
                    <p className="text-[14px] leading-7 text-slate-700">{current.commonMistake}</p>
                  </PaperCard>
                )}

                {current.warning && (
                  <PaperCard title="Exam Trap" emoji="⚠️" tone="orange">
                    <p className="text-[14px] leading-7 text-slate-700">{current.warning}</p>
                  </PaperCard>
                )}

                <PaperCard title="10-second Recall" emoji="⏱️" tone="green">
                  <div className="space-y-2.5">
                    {quickRecall.map((item, index) => (
                      <div key={index} className="rounded-xl bg-white/85 p-3 text-sm leading-7 text-slate-700">{index + 1}. {item}</div>
                    ))}
                  </div>
                </PaperCard>

                {(current.mistakes?.length > 0) && (
                  <PaperCard title="Mistake Checklist" emoji="✅" tone="green">
                    <div className="space-y-2.5">
                      {current.mistakes.map((item, index) => (
                        <div key={index} className="text-sm leading-7 text-slate-700">☐ {item}</div>
                      ))}
                    </div>
                  </PaperCard>
                )}

                {current.memoryMap?.length > 0 && (
                  <PaperCard title="One-page Memory Map" emoji="🗺️" tone="pink">
                    <div className="space-y-2.5">
                      {current.memoryMap.map((item, index) => (
                        <div key={index} className="rounded-xl border border-pink-200 bg-white/85 p-3 text-sm font-semibold leading-7 text-slate-700">{item}</div>
                      ))}
                    </div>
                  </PaperCard>
                )}

                {current.finalTip && (
                  <PaperCard title="Teacher's Last Advice" emoji="⭐" tone="yellow">
                    <p className="text-xl font-black leading-9 text-slate-800" style={{ fontFamily: handwriting }}>{current.finalTip}</p>
                  </PaperCard>
                )}
              </aside>
            </div>

            <div className="mt-7 rounded-2xl border-2 border-slate-200 bg-white/70 p-4 text-center">
              <div className="text-xs font-black uppercase tracking-[0.22em] text-slate-400">Study loop</div>
              <div className="mt-2 flex flex-wrap justify-center gap-2 text-xs font-black text-slate-500">
                <span>✎ Learn</span><span>→</span><span>Understand</span><span>→</span><span>Practice</span><span>→</span><span>Recall</span><span>→</span><span>Revise</span>
              </div>
            </div>
          </main>

          <footer className="border-t-2 border-slate-200/80 bg-[#fffef8]/95 px-5 py-5 md:px-8">
            <div className="mb-4 flex items-center justify-between text-xs font-black text-slate-400">
              <span>{progress}% chapter complete</span>
              <span>StudyPath Master Notes</span>
            </div>

            <div className="flex items-center justify-between gap-3">
              <button disabled={page === 1} onClick={() => goToPage(Math.max(1, page - 1))} className="rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm font-black text-slate-700 disabled:cursor-not-allowed disabled:opacity-35">
                ← Previous
              </button>

              <div className="hidden text-sm font-black text-slate-400 md:block" style={{ fontFamily: handwriting }}>
                Keep going — page {page}!
              </div>

              <button disabled={page === pages.length} onClick={() => goToPage(Math.min(pages.length, page + 1))} className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-black text-white disabled:cursor-not-allowed disabled:opacity-35">
                Next Page →
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
