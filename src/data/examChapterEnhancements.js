// Exam-specific enrichment for high-value chapters.
// These are original StudyPath teaching directions and examples.

export const examChapterEnhancements = {
  'ssc-cgl': {
    percentage: {
      titleSuffix: ' — SSC CGL Master Chapter',
      whyThisMatters: 'Percentage is a foundation for Profit & Loss, Discount, SI/CI, DI, salary, population and expenditure questions. In SSC CGL, the marks usually come from recognising the base quickly and calculating without unnecessary steps.',
      examChecklist: [
        'Identify the ORIGINAL / BASE value before writing a percentage-change formula.',
        'Convert common percentages to fractions when it makes mental calculation faster.',
        'For successive changes, multiply factors instead of adding rates blindly.',
        'In word problems, underline what the percentage is taken on.',
        'Use estimation to eliminate impossible options before exact calculation.'
      ],
      solvedPatterns: [
        {
          label: 'Pattern A · Direct percentage',
          question: '72 is what percent of 90?',
          steps: ['Part = 72, Whole = 90', '72 ÷ 90 = 0.8', '0.8 × 100 = 80%'],
          takeaway: 'PART is compared with WHOLE. The whole is the denominator.'
        },
        {
          label: 'Pattern B · Percentage increase',
          question: 'A price rises from ₹800 to ₹1,000. Find the increase%.',
          steps: ['Increase = 1,000 − 800 = ₹200', 'Original = ₹800', 'Increase% = 200/800 × 100 = 25%'],
          takeaway: 'Normal percentage change uses the original value as the base.'
        },
        {
          label: 'Pattern C · Successive change',
          question: 'A value increases by 10% and then by 20%. Find the net increase%.',
          steps: ['First factor = 1.10', 'Second factor = 1.20', 'Combined factor = 1.10 × 1.20 = 1.32', 'Net increase = 32%'],
          takeaway: 'Successive percentage changes compound.'
        }
      ],
      trapBox: [
        '20% increase + 20% decrease is NOT zero; it is a 4% decrease.',
        'A discount percentage is calculated on marked price.',
        'A percentage of a percentage requires multiplication, not addition.',
        'When the question gives a final value after a change, reverse the factor instead of subtracting the percentage from the final value.'
      ],
      speedDrill: [
        '25% of 640',
        '12.5% of 800',
        '15% of 240',
        '20 is what percent of 80?',
        'A number becomes 360 after a 20% increase. Find the original.'
      ],
      speedAnswers: ['160', '100', '36', '25%', '300']
    }
  }
}

export const getChapterEnhancement = (examId, chapterSlug) =>
  examChapterEnhancements[examId]?.[chapterSlug] || null

export default examChapterEnhancements
