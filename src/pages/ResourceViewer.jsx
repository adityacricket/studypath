import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getResourceById } from "../data/resources.js";

export default function ResourceViewer() {
  const { resourceId } = useParams();
  const navigate = useNavigate();

  const resource = getResourceById(resourceId);

  if (!resource) {
    return (
      <div className="min-h-screen bg-slate-50 p-6">
        <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 text-center shadow-sm">
          <h1 className="text-2xl font-extrabold text-slate-900">
            Resource not found
          </h1>
          <button
            onClick={() => navigate("/resources")}
            className="mt-5 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white"
          >
            Back to Resources
          </button>
        </div>
      </div>
    );
  }

  const getSectionStyle = (index) => {
    const styles = [
      {
        border: "border-blue-200",
        bg: "bg-blue-50/70",
        title: "text-blue-700",
        number: "bg-blue-600"
      },
      {
        border: "border-emerald-200",
        bg: "bg-emerald-50/70",
        title: "text-emerald-700",
        number: "bg-emerald-600"
      },
      {
        border: "border-amber-200",
        bg: "bg-amber-50/70",
        title: "text-amber-700",
        number: "bg-amber-500"
      },
      {
        border: "border-rose-200",
        bg: "bg-rose-50/70",
        title: "text-rose-700",
        number: "bg-rose-500"
      },
      {
        border: "border-violet-200",
        bg: "bg-violet-50/70",
        title: "text-violet-700",
        number: "bg-violet-600"
      },
      {
        border: "border-cyan-200",
        bg: "bg-cyan-50/70",
        title: "text-cyan-700",
        number: "bg-cyan-600"
      }
    ];

    return styles[index % styles.length];
  };

  const content = Array.isArray(resource.content)
    ? resource.content
    : [resource.content];

  return (
    <div className="min-h-screen bg-slate-100 px-3 py-4 md:px-6 md:py-8">
      <div
        className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(148,163,184,0.12) 1px, transparent 1px)",
          backgroundSize: "100% 32px"
        }}
      >
        {/* Watermark */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="rotate-[-28deg] select-none text-[58px] font-black tracking-[0.35em] text-slate-900/[0.035] md:text-[90px]">
            STUDYPATH
          </div>
        </div>

        <div className="relative z-10">
          {/* Header */}
          <header className="border-b border-slate-200 bg-white/90 px-5 py-5 backdrop-blur md:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <button
                onClick={() => navigate("/resources")}
                className="w-fit text-sm font-semibold text-slate-600 transition hover:text-indigo-600"
              >
                ← Back to Resources
              </button>

              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-700">
                  {resource.category}
                </span>

                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                  FREE
                </span>
              </div>
            </div>

            <div className="mt-6">
              <div className="mb-2 text-sm font-semibold text-indigo-600">
                STUDYPATH NOTES
              </div>

              <h1 className="max-w-4xl text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
                {resource.title}
              </h1>

              <div className="mt-4 flex flex-wrap gap-2">
                {(resource.tags || []).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-500"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </header>

          {/* Key idea */}
          <section className="px-5 py-6 md:px-8">
            <div className="rounded-2xl border border-amber-200 bg-amber-50/80 p-5">
              <div className="text-sm font-extrabold uppercase tracking-wide text-amber-700">
                💡 Key Idea
              </div>

              <p className="mt-2 text-base font-medium leading-7 text-slate-700">
                Learn the concept first, then use the examples and practice
                points below to lock it into memory.
              </p>
            </div>
          </section>

          {/* Main notes */}
          <main className="space-y-5 px-5 pb-10 md:px-8">
            {content.map((item, index) => {
              const style = getSectionStyle(index);

              return (
                <section
                  key={`${resource.id}-${index}`}
                  className={`rounded-2xl border ${style.border} ${style.bg} p-5`}
                >
                  <div className="flex gap-4">
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-black text-white ${style.number}`}
                    >
                      {index + 1}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div
                        className={`text-sm font-extrabold uppercase tracking-wide ${style.title}`}
                      >
                        Study Point {index + 1}
                      </div>

                      <p className="mt-2 whitespace-pre-line text-[15px] leading-8 text-slate-700">
                        {item}
                      </p>
                    </div>
                  </div>
                </section>
              );
            })}

            {/* Quick revision */}
            <section className="rounded-2xl border border-violet-200 bg-violet-50/80 p-5">
              <div className="text-sm font-extrabold uppercase tracking-wide text-violet-700">
                ⚡ One-Minute Revision
              </div>

              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
                {content.slice(0, 5).map((item, index) => (
                  <li key={`revision-${index}`} className="flex gap-2">
                    <span className="font-bold text-violet-600">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Footer */}
            <section className="rounded-2xl border border-indigo-200 bg-indigo-50/80 p-5 text-center">
              <div className="text-base font-extrabold text-indigo-700">
                🎯 StudyPath Tip
              </div>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Revise this page once today, once tomorrow, and once again
                before your mock test.
              </p>
            </section>
          </main>

          <footer className="border-t border-slate-200 bg-white/90 px-5 py-5 text-center md:px-8">
            <div className="text-xs font-bold tracking-[0.2em] text-slate-400">
              STUDYPATH • FREE LEARNING
            </div>

            <div className="mt-2 text-[11px] text-slate-400">
              Educational content • For study and revision
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
