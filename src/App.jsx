import React from 'react'
import { Routes, Route } from 'react-router-dom'

import SideNav from './components/SideNav.jsx'
import BottomNav from './components/BottomNav.jsx'
import Header from './components/Header.jsx'

import Home from './pages/Home.jsx'
import ExamHub from './pages/ExamHub.jsx'
import ExamDetails from './pages/ExamDetails.jsx'
import Tools from './pages/Tools.jsx'
import ToolDetail from './pages/ToolDetail.jsx'
import Quiz from './pages/Quiz.jsx'
import QuizPlay from './pages/QuizPlay.jsx'
import QuizResult from './pages/QuizResult.jsx'
import Planner from './pages/Planner.jsx'
import StudyCoach from './pages/StudyCoach.jsx'
import Careers from './pages/Careers.jsx'
import CareerDetail from './pages/CareerDetail.jsx'
import Resources from './pages/Resources.jsx'
import ResourceViewer from './pages/ResourceViewer.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Profile from './pages/Profile.jsx'
import Account from './pages/Account.jsx'
import Premium from './pages/Premium.jsx'
import Settings from './pages/Settings.jsx'
import SearchPage from './pages/SearchPage.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <div className="min-h-screen">
      <SideNav />
      <Header />

      <main className="page-container animate-fade-in">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coach" element={<StudyCoach />} />

          <Route path="/exams" element={<ExamHub />} />
          <Route path="/exams/:examId" element={<ExamDetails />} />

          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/:toolId" element={<ToolDetail />} />

          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quiz/play" element={<QuizPlay />} />
          <Route path="/quiz/result" element={<QuizResult />} />

          <Route path="/planner" element={<Planner />} />

          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:careerId" element={<CareerDetail />} />

          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:resourceId" element={<ResourceViewer />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/account" element={<Account />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/settings" element={<Settings />} />

          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <BottomNav />
    </div>
  )
}
