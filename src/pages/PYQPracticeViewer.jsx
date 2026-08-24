import React, { useMemo, useState } from 'react'
import { sscCglOriginalPractice2024Tier1 } from '../data/sscCglPyqPractice.js'

export default function PYQPracticeViewer() {
  const paper = sscCglOriginalPractice2024Tier1
  const [index, setIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const question = paper.questions[index]
  const sections = useMemo(() => [...new Set(paper.questions.map((q) => q.section))], [paper.questions])

  const go = (next) => {
    setIndex(Math.max(0, Math.min(paper.questions.length - 1, next)))
    setShowAnswer(false)
  }

  return (
    <div className="space-y-5 pb-8">
      <section className="card p-5 md:p-7">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-500">StudyPath Original Paper</p>
        <h1 className="mt-2 text-2xl font-black text-slate-900 dark:text-white">{paper.title}</h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{paper.note}</p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold">
          <span className="rounded-full bg-indigo-50 px-3 py-1 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">{paper.durationMinutes} min</span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600 dark:bg-slate-800 dark:text-slate-300">{paper.marks} marks</span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600 dark:bg-slate-800 dark:text-slate-300">−{paper.negativeMark} wrong</span>
        </div>
      </section>

      <section className="card p-5">
        <div className="flex flex-wrap gap-2 mb-5">
          {sections.map((section) => <span key={section} className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-black text-slate-600 dark:bg-slate-800 dark:text-slate-300">{section}</span>)}
        </div>
        <div className="flex items-center justify-between text-xs font-bold text-slate-400">
          <span>Question {index + 1} of {paper.questions.length}</span>
          <span>{question.section}</span>
        </div>
        <h2 className="mt-4 text-lg font-black leading-7 text-slate-900 dark:text-white">{question.question}</h2>
        <div className="mt-5 grid gap-3">
          {question.options.map((option, optionIndex) => (
            <div key={option} className={`rounded-xl border p-4 text-sm font-semibold ${showAnswer && optionIndex === question.answer ? 'border-emerald-400 bg-emerald-50 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300' : 'border-slate-200 text-slate-700 dark:border-slate-700 dark:text-slate-300'}`}>
              <span className="mr-2 font-black">{String.fromCharCode(65 + optionIndex)}.</span>{option}
            </div>
          ))}
        </div>
        <button onClick={() => setShowAnswer(!showAnswer)} className="mt-5 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-black text-white hover:bg-indigo-700">{showAnswer ? 'Hide Solution' : 'Show Solution'}</button>
        {showAnswer && <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-900 dark:border-emerald-900/50 dark:bg-emerald-950/20 dark:text-emerald-200"><strong>Answer: {String.fromCharCode(65 + question.answer)}</strong><br />{question.explanation}</div>}
        <div className="mt-6 flex justify-between gap-3">
          <button disabled={index === 0} onClick={() => go(index - 1)} className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-black disabled:opacity-40 dark:border-slate-700">Previous</button>
          <button disabled={index === paper.questions.length - 1} onClick={() => go(index + 1)} className="rounded-xl bg-indigo-600 px-4 py-3 text-sm font-black text-white disabled:opacity-40">Next</button>
        </div>
      </section>
    </div>
  )
}
