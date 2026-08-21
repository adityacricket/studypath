import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { globalSearch } from '../utils/search.js'
import SearchBar from '../components/SearchBar.jsx'

export default function SearchPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-extrabold mb-1">Search</h1>
      <SearchBar autoFocus />
      <p className="text-sm text-slate-400">Search across exams, tools, quiz topics, resources & career roadmaps.</p>
    </div>
  )
}
