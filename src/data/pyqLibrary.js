// StudyPath — Previous Year Question (PYQ) coverage index
//
// We index historical papers rather than republishing third-party/copyrighted
// question text. The learner can open the official SSC source/archive for the
// paper. When an official question-paper release is unavailable, the entry is
// clearly marked instead of pretending the paper is present.

const OFFICIAL_SSC = 'https://ssc.gov.in/for-candidates'
const OFFICIAL_ANSWER_KEYS = 'https://ssc.nic.in/Portal/AnswerKey'

const years = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011]

export const sscCglPyqs = years.map((year) => ({
  id: `ssc-cgl-${year}`,
  examId: 'ssc-cgl',
  exam: 'SSC CGL',
  year,
  tiers: [
    { tier: 'Tier I', status: year >= 2021 ? 'official-archive' : 'historical-index' },
    { tier: 'Tier II', status: year >= 2020 ? 'official-archive' : 'historical-index' },
  ],
  sourceUrl: OFFICIAL_SSC,
  answerKeyUrl: OFFICIAL_ANSWER_KEYS,
  sourceNote: year === 2025
    ? 'SSC has confirmed final Tier-I keys were used for evaluation; the question-paper/key release is tied to SSC publication and candidate access.'
    : 'Use the SSC official candidate/answer-key archive to access the paper when SSC has published it.',
}))

export const pyqCoverage = {
  'ssc-cgl': {
    exam: 'SSC CGL',
    firstIndexedYear: 2011,
    lastIndexedYear: 2025,
    years: sscCglPyqs,
    tiers: ['Tier I', 'Tier II'],
    sourceUrl: OFFICIAL_SSC,
    answerKeyUrl: OFFICIAL_ANSWER_KEYS,
    note: 'This is the historical coverage index. Exact shift-wise question text is not copied into StudyPath; official source access is provided instead.',
  },
}

export default pyqCoverage
