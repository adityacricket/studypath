import React from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home', icon: 'fa-house' },
  { to: '/exams', label: 'Exams', icon: 'fa-building-columns' },
  { to: '/books', label: 'Books', icon: 'fa-book-open' },
  { to: '/quiz', label: 'Quiz', icon: 'fa-brain' },
  { to: '/dashboard', label: 'Progress', icon: 'fa-chart-simple' },
]

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur border-t border-slate-100 dark:border-slate-800 safe-bottom">
      <div className="flex justify-between items-stretch px-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex-1 flex flex-col items-center justify-center gap-0.5 py-2 text-[11px] font-medium transition-colors ${
                isActive ? 'text-primary-600 dark:text-primary-400' : 'text-slate-400 dark:text-slate-500'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <i className={`fas ${item.icon} text-lg ${isActive ? '' : ''}`}></i>
                <span>{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
