import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center gap-3">
      <div className="w-16 h-16 rounded-full bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-2xl text-primary-500">
        <i className="fas fa-map-signs"></i>
      </div>
      <h2 className="text-lg font-bold">Page not found</h2>
      <p className="text-sm text-slate-400 max-w-xs">The page you're looking for doesn't exist or was moved.</p>
      <Link to="/" className="btn-primary mt-2">
        <i className="fas fa-house"></i> Go Home
      </Link>
    </div>
  )
}
