import React from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home', icon: 'fa-house' },
  { to: '/coach', label: 'Study Coach', icon: 'fa-compass' },
  { to: '/exams', label: 'Exam Hub', icon: 'fa-building-columns' },
  { to: '/resources', label: 'Resources', icon: 'fa-book' },
  { to: '/quiz', label: 'Quiz & Mock', icon: 'fa-brain' },
  { to: '/planner', label: 'Planner', icon: 'fa-calendar-days' },
  { to: '/tools', label: 'Study Tools', icon: 'fa-calculator' },
  { to: '/dashboard', label: 'Dashboard', icon: 'fa-chart-simple' },
  { to: '/premium', label: 'Premium', icon: 'fa-crown' },
  { to: '/careers', label: 'Careers', icon: 'fa-route' },
  { to: '/account', label: 'Account', icon: 'fa-user' },
  { to: '/settings', label: 'Settings', icon: 'fa-gear' },
]

export default function SideNav() {
  return (
    <aside className="hidden md:flex md:flex-col fixed left-0 top-0 h-full w-20 lg:w-56 bg-white dark:bg-slate-900 border-r border-slate-100 dark:border-slate-800 z-40 py-4">
      <div className="flex items-center gap-2 px-4 mb-6 justify-center lg:justify-start">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-indigo-600 flex items-center justify-center text-white shadow-sm">
          <i className="fas fa-graduation-cap"></i>
        </div>
        <span className="hidden lg:block font-extrabold text-lg text-slate-800 dark:text-slate-100">StudyPath</span>
      </div>

      <nav className="flex-1 flex flex-col gap-1 px-2 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium justify-center lg:justify-start transition-colors ${
                isActive
                  ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300'
                  : 'text-slate-500 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800'
              }`
            }
            title={item.label}
          >
            <i className={`fas ${item.icon} text-base w-5 text-center`}></i>
            <span className="hidden lg:block">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
