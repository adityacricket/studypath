import React from 'react'

// Monetization-ready placeholder component.
// Swap the inner content with real Google AdSense <ins> tags or affiliate banners later.
export default function AdSlot({ label = 'Advertisement', size = 'banner' }) {
  const sizeClass = size === 'banner' ? 'h-20' : size === 'square' ? 'h-40' : 'h-16'
  return (
    <div className={`ad-slot ${sizeClass} rounded-2xl animate-fade-in`}>
      <i className="fas fa-rectangle-ad text-lg mb-1"></i>
      <span>{label} space</span>
      <span className="text-[10px] opacity-70">Google AdSense / Sponsored slot</span>
    </div>
  )
}

export function SponsoredCard({ title, description, cta = 'Learn more', href = '#' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="card card-hover p-4 flex items-center gap-3 animate-fade-in"
    >
      <div className="w-11 h-11 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
        <i className="fas fa-star"></i>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <p className="font-semibold text-sm truncate">{title}</p>
          <span className="sponsored-tag shrink-0">Sponsored</span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{description}</p>
      </div>
      <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 shrink-0">{cta}</span>
    </a>
  )
}

export function AffiliateBanner({ title, description, cta = 'Explore', href = '#' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="card card-hover p-4 flex items-center justify-between gap-3 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/40 dark:to-purple-950/40 animate-fade-in"
    >
      <div className="min-w-0">
        <p className="font-semibold text-sm">{title}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400">{description}</p>
      </div>
      <span className="btn-secondary text-xs px-3 py-1.5 shrink-0">{cta}</span>
    </a>
  )
}

export function PremiumBanner({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full card card-hover p-4 flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-left animate-fade-in"
    >
      <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
        <i className="fas fa-crown"></i>
      </div>
      <div className="flex-1">
        <p className="font-semibold text-sm">Unlock StudyPath Premium</p>
        <p className="text-xs text-white/80">Ad-free experience, premium mock tests & personalized analytics</p>
      </div>
      <i className="fas fa-chevron-right"></i>
    </button>
  )
}
