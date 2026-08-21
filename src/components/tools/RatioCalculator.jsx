import React, { useState } from 'react'
import { Field, ResultBox } from './PercentageCalculator.jsx'

function gcd(a, b) {
  a = Math.abs(a); b = Math.abs(b)
  while (b) { [a, b] = [b, a % b] }
  return a || 1
}

export default function RatioCalculator() {
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [total, setTotal] = useState('')

  const numA = parseFloat(a)
  const numB = parseFloat(b)
  const validRatio = !isNaN(numA) && !isNaN(numB) && numA > 0 && numB > 0

  let simplified = null
  if (validRatio) {
    const divisor = gcd(numA, numB)
    simplified = `${numA / divisor} : ${numB / divisor}`
  }

  let partA = null, partB = null
  if (validRatio && total && !isNaN(parseFloat(total))) {
    const t = parseFloat(total)
    partA = ((numA / (numA + numB)) * t).toFixed(2)
    partB = ((numB / (numA + numB)) * t).toFixed(2)
  }

  return (
    <div className="space-y-4">
      <div className="card p-4 space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <Field label="First value (A)" value={a} onChange={setA} placeholder="e.g. 3" />
          <Field label="Second value (B)" value={b} onChange={setB} placeholder="e.g. 5" />
        </div>
        <ResultBox label="Simplified Ratio (A:B)" value={simplified} />
      </div>

      <div className="card p-4 space-y-3">
        <p className="text-sm font-semibold">Divide a total amount in this ratio</p>
        <Field label="Total amount to divide" value={total} onChange={setTotal} placeholder="e.g. 1200" />
        <div className="grid grid-cols-2 gap-3">
          <ResultBox label="Share of A" value={partA} />
          <ResultBox label="Share of B" value={partB} />
        </div>
      </div>

      <div className="card p-4">
        <p className="text-xs font-semibold text-slate-400 mb-2">FORMULA USED</p>
        <p className="text-sm text-slate-600 dark:text-slate-300 font-mono">Share of A = [A / (A+B)] × Total</p>
      </div>
    </div>
  )
}
