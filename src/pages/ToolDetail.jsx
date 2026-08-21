import React from 'react'
import { useParams, Link } from 'react-router-dom'
import NotFound from './NotFound.jsx'
import PercentageCalculator from '../components/tools/PercentageCalculator.jsx'
import AverageCalculator from '../components/tools/AverageCalculator.jsx'
import RatioCalculator from '../components/tools/RatioCalculator.jsx'
import AgeCalculator from '../components/tools/AgeCalculator.jsx'
import MarksCalculator from '../components/tools/MarksCalculator.jsx'
import StudyTimeCalculator from '../components/tools/StudyTimeCalculator.jsx'
import TimetableGeneratorTool from '../components/tools/TimetableGeneratorTool.jsx'
import AdSlot from '../components/AdSlot.jsx'

const toolMeta = {
  percentage: { title: 'Percentage Calculator', icon: 'fa-percent', component: PercentageCalculator },
  average: { title: 'Average Calculator', icon: 'fa-chart-line', component: AverageCalculator },
  ratio: { title: 'Ratio Calculator', icon: 'fa-scale-balanced', component: RatioCalculator },
  age: { title: 'Age Calculator', icon: 'fa-cake-candles', component: AgeCalculator },
  marks: { title: 'Marks Percentage Calculator', icon: 'fa-square-check', component: MarksCalculator },
  'study-time': { title: 'Study Time Calculator', icon: 'fa-hourglass-half', component: StudyTimeCalculator },
  timetable: { title: 'Timetable Generator', icon: 'fa-calendar-days', component: TimetableGeneratorTool },
}

export default function ToolDetail() {
  const { toolId } = useParams()
  const meta = toolMeta[toolId]
  if (!meta) return <NotFound />
  const Component = meta.component

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        <Link to="/tools" className="w-9 h-9 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0">
          <i className="fas fa-arrow-left text-sm"></i>
        </Link>
        <div>
          <h1 className="text-xl font-extrabold flex items-center gap-2">
            <i className={`fas ${meta.icon} text-primary-500`}></i>
            {meta.title}
          </h1>
        </div>
      </div>

      <Component />

      <AdSlot label="Tool Result Ad" />
    </div>
  )
}
