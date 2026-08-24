// StudyPath — Previous Year Question (PYQ) coverage index
//
// PYQs are opened through StudyPath's own viewer route. The actual paper assets
// must be licensed/provided for hosting before they are placed under public/pyqs.

const sscYears = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011]
const ndaYears = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016]

export const sscCglPyqs = sscYears.map((year) => ({
  id: `ssc-cgl-${year}`,
  examId: 'ssc-cgl',
  exam: 'SSC CGL',
  year,
  tiers: [
    { tier: 'Tier I', status: year >= 2021 ? 'official-archive' : 'historical-index', viewerPath: `/pyq/ssc-cgl-${year}/tier-1` },
    { tier: 'Tier II', status: year >= 2020 ? 'official-archive' : 'historical-index', viewerPath: `/pyq/ssc-cgl-${year}/tier-2` },
  ],
  sourceNote: 'Open the paper inside StudyPath. The hosted paper asset must be an authorized/licensed copy or a paper supplied for hosting.',
}))

export const ndaPyqs = ndaYears.map((year) => ({
  id: `nda-${year}`,
  examId: 'nda',
  exam: 'NDA',
  year,
  papers: [
    { paper: 'Mathematics', status: 'awaiting-authorized-asset', viewerPath: `/pyq/nda-${year}/mathematics` },
    { paper: 'GAT', status: 'awaiting-authorized-asset', viewerPath: `/pyq/nda-${year}/gat` },
  ],
  sourceNote: 'NDA PYQ section is ready. StudyPath will host the actual paper only after an authorized paper asset is supplied.',
}))

export const pyqCoverage = {
  'ssc-cgl': {
    exam: 'SSC CGL',
    firstIndexedYear: 2011,
    lastIndexedYear: 2025,
    years: sscCglPyqs,
    tiers: ['Tier I', 'Tier II'],
    note: 'Every paper has its own StudyPath viewer route. No external website is used by the learner-facing paper action.',
  },
  nda: {
    exam: 'NDA',
    firstIndexedYear: 2016,
    lastIndexedYear: 2025,
    years: ndaPyqs,
    papers: ['Mathematics', 'GAT'],
    note: 'The NDA PYQ section is intentionally prepared without hosting any paper yet. Authorized PDFs can be added later.',
  },
}

export default pyqCoverage
