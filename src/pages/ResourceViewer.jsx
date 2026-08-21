import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getResourceById } from "../data/resources.js";
import { chapterData } from "../data/chapterData.js";

export default function ResourceViewer() {
  const { resourceId } = useParams();
  const navigate = useNavigate();

  const resource = getResourceById(resourceId);
  const chapter = chapterData[resourceId];

  const [page, setPage] = useState(1);

  if (!resource) {
    return (
      <div className="min-h-screen bg-slate-100 p-6">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 text-center shadow">
          <div className="text-5xl">📚</div>

          <h1 className="mt-4 text-2xl font-black text-slate-900">
            Resource not found
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            The requested study resource could not be found.
          </p>

          <button
            onClick={() => navigate("/resources")}
            className="mt-5 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white hover:bg-indigo-700"
          >
            ← Back to Resources
          </button>
        </div>
      </div>
    );
  }

  const fallbackPages = [
    {
      page: 1,
      section: "Study Note",
      title: resource.title,
      intro:
        "This resource is available as a StudyPath learning note.",
      keyPoints: resource.content || []
    }
  ];

  const pages = chapter?.pages?.length
    ? chapter.pages
    : fallbackPages;

  const currentPage = pages[page - 1];

  const progress =
    pages.length > 0
      ? Math.round((page / pages.length) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-slate-100 px-3 py-4 md:px-6 md:py-8">

      <div
        className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(148,163,184,0.10) 1px, transparent 1px)",
          backgroundSize: "100% 34px"
        }}
      >

        {/* Watermark */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="rotate-[-28deg] select-none whitespace-nowrap text-[60px] font-black tracking-[0.35em] text-slate-900/[0.035] md:text-[105px]">
            STUDYPATH
          </div>
        </div>

        <div className="relative z-10">

          {/* TOP HEADER */}
          <header className="border-b border-slate-200 bg-white/90 px-5 py-5 backdrop-blur md:px-10">

            <button
              onClick={() => navigate("/resources")}
              className="text-sm font-bold text-slate-600 transition hover:text-indigo-600"
            >
              ← Back to Resources
            </button>

            <div className="mt-5 flex flex-wrap items-center gap-2">

              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-700">
                {chapter?.subject || "StudyPath"}
              </span>

              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                FREE
              </span>

              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                PAGE {page} / {pages.length}
              </span>

            </div>

            <div className="mt-6">

              <div className="text-sm font-black tracking-wide text-indigo-600">
                🎓 STUDYPATH NOTES
              </div>

              <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
                {chapter?.chapter || resource.title}
              </h1>

              {chapter?.level && (
                <p className="mt-2 text-sm font-semibold text-slate-500">
                  {chapter.level}
                </p>
              )}

              <div className="mt-4 flex flex-wrap gap-2">
                {(resource.tags || []).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-500"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

            </div>
          </header>

          {/* PAGE CONTENT */}
          <main className="min-h-[720px] px-5 py-7 md:px-10">

            <div className="mb-6 flex items-start gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-black text-white shadow">
                {currentPage.page}
              </div>

              <div>
                <div className="text-xs font-black uppercase tracking-wide text-indigo-600">
                  {currentPage.section}
                </div>

                <h2 className="mt-1 text-2xl font-black text-slate-900 md:text-3xl">
                  {currentPage.title}
                </h2>
              </div>

            </div>

            {/* INTRO */}
            {currentPage.intro && (
              <section className="mb-5 rounded-2xl border border-blue-200 bg-blue-50/80 p-5 md:p-6">

                <div className="text-sm font-black uppercase tracking-wide text-blue-700">
                  💡 Learn This First
                </div>

                <p className="mt-3 text-[15px] leading-8 text-slate-700">
                  {currentPage.intro}
                </p>

              </section>
            )}

            {/* FORMULA */}
            {currentPage.formula && (
              <section className="mb-5 rounded-2xl border border-indigo-200 bg-indigo-50/80 p-5 md:p-6">

                <div className="text-sm font-black uppercase tracking-wide text-indigo-700">
                  📐 Master Formula
                </div>

                <div className="mt-4 rounded-2xl border border-indigo-100 bg-white p-5 text-center shadow-sm">
                  <div className="text-lg font-black leading-9 text-indigo-800 md:text-2xl">
                    {currentPage.formula}
                  </div>
                </div>

              </section>
            )}

            {/* KEY POINTS */}
            {currentPage.keyPoints?.length > 0 && (
              <section className="mb-5 rounded-2xl border border-emerald-200 bg-emerald-50/80 p-5 md:p-6">

                <div className="text-sm font-black uppercase tracking-wide text-emerald-700">
                  📌 Core Notes
                </div>

                <div className="mt-4 space-y-3">

                  {currentPage.keyPoints.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-xl bg-white/85 p-4 text-sm leading-7 text-slate-700"
                    >
                      <span className="mr-2 font-black text-emerald-600">
                        ✓
                      </span>

                      {item}
                    </div>
                  ))}

                </div>

              </section>
            )}

            {/* EXAMPLE */}
            {currentPage.example && (
              <section className="mb-5 rounded-2xl border border-orange-200 bg-orange-50/80 p-5 md:p-6">

                <div className="text-sm font-black uppercase tracking-wide text-orange-700">
                  🧩 Worked Example
                </div>

                <div className="mt-4 rounded-xl bg-white/90 p-5 text-[15px] leading-8 text-slate-700 shadow-sm">
                  {currentPage.example}
                </div>

              </section>
            )}

            {/* METHOD */}
            {currentPage.method?.length > 0 && (
              <section className="mb-5 rounded-2xl border border-cyan-200 bg-cyan-50/80 p-5 md:p-6">

                <div className="text-sm font-black uppercase tracking-wide text-cyan-700">
                  📝 Method
                </div>

                <div className="mt-4 space-y-3">

                  {currentPage.method.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-xl bg-white/85 p-4 text-sm leading-7 text-slate-700"
                    >
                      <span className="mr-2 font-black text-cyan-600">
                        {index + 1}.
                      </span>

                      {item}
                    </div>
                  ))}

                </div>

              </section>
            )}

            {/* SHORTCUT */}
            {currentPage.shortcut && (
              <section className="mb-5 rounded-2xl border border-amber-200 bg-amber-50/80 p-5 md:p-6">

                <div className="text-sm font-black uppercase tracking-wide text-amber-700">
                  ⚡ Quick Trick
                </div>

                <p className="mt-3 text-[15px] leading-8 text-slate-700">
                  {currentPage.shortcut}
                </p>

              </section>
            )}

            {/* COMMON MISTAKE */}
            {currentPage.commonMistake && (
              <section className="mb-5 rounded-2xl border border-rose-200 bg-rose-50/80 p-5 md:p-6">

                <div className="text-sm font-black uppercase tracking-wide text-rose-700">
                  🚨 Common Mistake
                </div>

                <p className="mt-3 text-[15px] leading-8 text-slate-700">
                  {currentPage.commonMistake}
                </p>

              </section>
            )}

            {/* WARNING */}
            {currentPage.warning && (
              <section className="mb-5 rounded-2xl border border-red-200 bg-red-50/80 p-5 md:p-6">

                <div className="text-sm font-black uppercase tracking-wide text-red-700">
                  ⚠️ Watch Out
                </div>

                <p className="mt-3 text-[15px] leading-8 text-slate-700">
                  {currentPage.warning}
                </p>

              </section>
            )}

            {/* MEMORY */}
            {currentPage.memory && (
              <section className="mb-5 rounded-2xl border border-pink-200 bg-pink-50/80 p-5 md:p-6">

                <div className="text-sm font-black uppercase tracking-wide text-pink-700">
                  🧠 Memory Trick
                </div>

                <div className="mt-3 rounded-xl bg-white/85 p-4 text-[15px] leading-8 text-slate-700">
                  {currentPage.memory}
                </div>

              </section>
            )}

            {/* EXAM FOCUS */}
            {currentPage.examFocus && (
              <section className="mb-5 rounded-2xl border border-violet-200 bg-violet-50/80 p-5 md:p-6">

                <div className="text-sm font-black uppercase tracking-wide text-violet-700">
                  🎯 Exam Focus
                </div>

                <p className="mt-3 text-[15px] leading-8 text-slate-700">
                  {currentPage.examFocus}
                </p>

              </section>
            )}

            {/* PRACTICE */}
            {currentPage.practice?.length > 0 && (
              <section className="mb-5 rounded-2xl border border-teal-200 bg-teal-50/80 p-5 md:p-6">

                <div className="text-sm font-black uppercase tracking-wide text-teal-700">
                  ✍️ Practice
                </div>

                <div className="mt-4 space-y-3">

                  {currentPage.practice.map((question, index) => (
                    <div
                      key={index}
                      className="rounded-xl bg-white/85 p-4 text-sm leading-7 text-slate-700"
                    >
                      {question}
                    </div>
                  ))}

                </div>

              </section>
            )}

            {/* QUESTIONS */}
            {currentPage.questions?.length > 0 && (
              <section className="mb-5 rounded-2xl border border-teal-200 bg-teal-50/80 p-5 md:p-6">

                <div className="text-sm font-black uppercase tracking-wide text-teal-700">
                  📝 Questions
                </div>

                <div className="mt-4 space-y-3">

                  {currentPage.questions.map((question, index) => (
                    <div
                      key={index}
                      className="rounded-xl bg-white/85 p-4 text-sm leading-7 text-slate-700"
                    >
                      {question}
                    </div>
                  ))}

                </div>

              </section>
            )}

            {/* MISTAKES */}
            {currentPage.mistakes?.length > 0 && (
              <section className="mb-5 rounded-2xl border border-rose-200 bg-rose-50/80 p-5 md:p-6">

                <div className="text-sm font-black uppercase tracking-wide text-rose-700">
                  🚨 Top Mistakes
                </div>

                <div className="mt-4 space-y-3">

                  {currentPage.mistakes.map((mistake, index) => (
                    <div
                      key={index}
                      className="rounded-xl bg-white/85 p-4 text-sm leading-7 text-slate-700"
                    >
                      ✕ {mistake}
                    </div>
                  ))}

                </div>

              </section>
            )}

            {/* ANSWERS */}
            {currentPage.answers?.length > 0 && (
              <section className="mb-5 rounded-2xl border border-green-200 bg-green-50/80 p-5 md:p-6">

                <div className="text-sm font-black uppercase tracking-wide text-green-700">
                  ✅ Answers
                </div>

                <div className="mt-4 space-y-3">

                  {currentPage.answers.map((answer, index) => (
                    <div
                      key={index}
                      className="rounded-xl bg-white/85 p-4 text-sm leading-7 text-slate-700"
                    >
                      {index + 1}. {answer}
                    </div>
                  ))}

                </div>

              </section>
            )}

            {/* MEMORY MAP */}
            {currentPage.memoryMap?.length > 0 && (
              <section className="mb-5 rounded-2xl border border-pink-200 bg-pink-50/80 p-5 md:p-6">

                <div className="text-sm font-black uppercase tracking-wide text-pink-700">
                  🧠 Memory Map
                </div>

                <div className="mt-4 grid gap-3 md:grid-cols-2">

                  {currentPage.memoryMap.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-xl bg-white/85 p-4 text-sm font-semibold leading-7 text-slate-700"
                    >
                      {item}
                    </div>
                  ))}

                </div>

                {currentPage.memory && (
                  <p className="mt-4 rounded-xl bg-white/85 p-4 text-sm leading-7 text-slate-700">
                    {currentPage.memory}
                  </p>
                )}

              </section>
            )}

            {/* FINAL TIP */}
            {currentPage.finalTip && (
              <section className="mb-5 rounded-2xl border border-indigo-200 bg-indigo-50/80 p-5 md:p-6">

                <div className="text-sm font-black uppercase tracking-wide text-indigo-700">
                  ⏱️ Final Revision
                </div>

                <p className="mt-3 text-[15px] leading-8 text-slate-700">
                  {currentPage.finalTip}
                </p>

              </section>
            )}

            {/* REVISION */}
            {currentPage.section === "Final Revision" && (
              <section className="rounded-2xl border border-purple-200 bg-purple-50/80 p-5 md:p-6">

                <div className="text-sm font-black uppercase tracking-wide text-purple-700">
                  🔥 Remember Before the Exam
                </div>

                <p className="mt-3 text-[15px] leading-8 text-slate-700">
                  Review the formulas, solve a few questions without help,
                  and focus on the mistakes you repeatedly make.
                </p>

              </section>
            )}

          </main>

          {/* PAGE NAVIGATION */}
          <footer className="border-t border-slate-200 bg-white/90 px-5 py-5 backdrop-blur md:px-10">

            <div className="mb-4 flex items-center justify-between text-xs font-bold text-slate-500">
              <span>
                Page {page} of {pages.length}
              </span>

              <span>
                {progress}% complete
              </span>
            </div>

            <div className="mb-5 h-2 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-indigo-600 transition-all"
                style={{
                  width: `${progress}%`
                }}
              />
            </div>

            <div className="flex items-center justify-between gap-3">

              <button
                disabled={page === 1}
                onClick={() =>
                  setPage((current) => Math.max(1, current - 1))
                }
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
              >
                ← Previous
              </button>

              <button
                onClick={() => navigate("/resources")}
                className="hidden rounded-xl bg-slate-100 px-4 py-3 text-sm font-bold text-slate-600 md:block"
              >
                Resources
              </button>

              <button
                disabled={page === pages.length}
                onClick={() =>
                  setPage((current) =>
                    Math.min(pages.length, current + 1)
                  )
                }
                className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next Page →
              </button>

            </div>

          </footer>

        </div>
      </div>
    </div>
  );
}
