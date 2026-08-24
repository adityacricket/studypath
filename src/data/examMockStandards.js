// Current exam-specific mock standards used by StudyPath.
// Question sets in examMocks.js are original practice content; this file keeps
// the exam format separate so a mock never silently inherits another exam's timer.

export const examMockStandards = {
  'ssc-cgl': {
    label: 'SSC CGL Tier-I', questions: 100, marks: 200, duration: 60,
    sections: [
      { name: 'General Intelligence & Reasoning', questions: 25, marks: 50, minutes: 15 },
      { name: 'General Awareness', questions: 25, marks: 50, minutes: 15 },
      { name: 'Quantitative Aptitude', questions: 25, marks: 50, minutes: 15 },
      { name: 'English Comprehension', questions: 25, marks: 50, minutes: 15 },
    ],
    scoring: { correct: 2, wrong: -0.5, unattempted: 0 },
    verifiedSource: 'SSC CGL 2026 Notice',
  },

  'ssc-chsl': {
    label: 'SSC CHSL Tier-I', questions: 100, marks: 200, duration: 60,
    sections: [
      { name: 'English Language', questions: 25, marks: 50 },
      { name: 'General Intelligence', questions: 25, marks: 50 },
      { name: 'Quantitative Aptitude', questions: 25, marks: 50 },
      { name: 'General Awareness', questions: 25, marks: 50 },
    ],
    scoring: { correct: 2, wrong: -0.5, unattempted: 0 },
    verifiedSource: 'SSC CHSL current scheme',
  },

  'ssc-mts': {
    label: 'SSC MTS Computer Based Examination', questions: 90, marks: 270, duration: 90,
    sections: [
      { name: 'Session-I: Numerical & Mathematical Ability', questions: 20, marks: 60, minutes: 45 },
      { name: 'Session-I: Reasoning Ability & Problem Solving', questions: 20, marks: 60, minutes: 45 },
      { name: 'Session-II: General Awareness', questions: 25, marks: 75, minutes: 45 },
      { name: 'Session-II: English Language & Comprehension', questions: 25, marks: 75, minutes: 45 },
    ],
    scoring: { session1Wrong: 0, session2Wrong: -1, correct: 3, unattempted: 0 },
    verifiedSource: 'SSC MTS 2025 Notice',
  },

  'nda': {
    label: 'NDA Written Examination', papers: 2, questions: null, marks: 900, duration: 300,
    sections: [
      { name: 'Mathematics', marks: 300, minutes: 150 },
      { name: 'General Ability Test', marks: 600, minutes: 150 },
    ],
    scoring: { mathematicsCorrect: 2.5, mathematicsWrong: -0.833333, gatCorrect: 4, gatWrong: -1.333333, unattempted: 0 },
    verifiedSource: 'UPSC NDA/NA scheme',
  },

  'cds': {
    label: 'CDS Written Examination', papers: 3, questions: null, marks: 300, duration: 360,
    sections: [
      { name: 'English', marks: 100, minutes: 120 },
      { name: 'General Knowledge', marks: 100, minutes: 120 },
      { name: 'Elementary Mathematics', marks: 100, minutes: 120 },
    ],
    scoring: { correct: 1, wrong: -0.333333, unattempted: 0 },
    note: 'OTA uses English + General Knowledge only.',
    verifiedSource: 'UPSC CDS scheme',
  },

  'jee-main': {
    label: 'JEE Main Paper 1 (B.E./B.Tech.)', questions: 75, marks: 300, duration: 180,
    sections: [
      { name: 'Physics', questions: 25 },
      { name: 'Chemistry', questions: 25 },
      { name: 'Mathematics', questions: 25 },
    ],
    scoring: { correct: 4, wrong: -1, unattempted: 0 },
    note: 'Section-wise question-type/attempt rules are represented separately in the full paper builder.',
    verifiedSource: 'NTA JEE Main 2026 information',
  },

  'jee-advanced': {
    label: 'JEE Advanced', papers: 2, questions: null, marks: null, duration: 360,
    sections: [
      { name: 'Paper 1', minutes: 180 },
      { name: 'Paper 2', minutes: 180 },
    ],
    scoring: { variableByQuestionType: true },
    note: 'Question count and marks vary by paper/question type; both papers are compulsory.',
    verifiedSource: 'JEE Advanced 2026 Information Brochure',
  },

  'neet-ug': {
    label: 'NEET UG', questions: 180, marks: 720, duration: 180,
    sections: [
      { name: 'Physics', questions: 45, marks: 180 },
      { name: 'Chemistry', questions: 45, marks: 180 },
      { name: 'Botany', questions: 45, marks: 180 },
      { name: 'Zoology', questions: 45, marks: 180 },
    ],
    scoring: { correct: 4, wrong: -1, unattempted: 0 },
    verifiedSource: 'NTA NEET UG current scheme',
  },

  'cuet-ug': {
    label: 'CUET UG 2026 — single paper', questions: 50, marks: 250, duration: 60,
    sections: [{ name: 'Selected Language / Domain / General Test paper', questions: 50, marks: 250, minutes: 60 }],
    scoring: { correct: 5, wrong: -1, unattempted: 0 },
    note: 'CUET UG is subject-based; each selected paper is separately timed.',
    verifiedSource: 'CUET UG 2026 pattern',
  },

  'gate': {
    label: 'GATE 2026', questions: 65, marks: 100, duration: 180,
    sections: [
      { name: 'General Aptitude', marks: 15 },
      { name: 'Engineering Mathematics / paper-specific component', marks: null },
    ],
    scoring: { variableByQuestionType: true, mcq1Wrong: -0.333333, mcq2Wrong: -0.666667, msqWrong: 0, natWrong: 0 },
    note: 'Question types are MCQ, MSQ and NAT. Section weighting depends on paper code.',
    verifiedSource: 'GATE 2026 question-paper pattern',
  },

  'cat': {
    label: 'CAT', questions: 68, marks: null, duration: 120,
    sections: [
      { name: 'VARC', questions: 24, minutes: 40 },
      { name: 'DILR', questions: 22, minutes: 40 },
      { name: 'QA', questions: 22, minutes: 40 },
    ],
    scoring: { mcqCorrect: 3, mcqWrong: -1, nonMcqWrong: 0 },
    verifiedSource: 'CAT current format',
  },

  'clat': {
    label: 'CLAT UG', questions: 120, marks: 120, duration: 120,
    sections: [
      { name: 'English Language' },
      { name: 'Current Affairs including General Knowledge' },
      { name: 'Legal Reasoning' },
      { name: 'Logical Reasoning' },
      { name: 'Quantitative Techniques' },
    ],
    scoring: { correct: 1, wrong: -0.25, unattempted: 0 },
    verifiedSource: 'CLAT 2026 result/answer-key notices',
  },

  'ugc-net': {
    label: 'UGC NET', questions: 150, marks: 300, duration: 180,
    sections: [
      { name: 'Paper I — Teaching & Research Aptitude', questions: 50, marks: 100 },
      { name: 'Paper II — Selected Subject', questions: 100, marks: 200 },
    ],
    scoring: { correct: 2, wrong: 0, unattempted: 0 },
    verifiedSource: 'NTA UGC NET information bulletin',
  },

  'ibps-po': {
    label: 'IBPS PO/MT Preliminary + Main', questions: null, marks: null, duration: 240,
    sections: [
      { name: 'Prelims: English Language', questions: 30, minutes: 20 },
      { name: 'Prelims: Quantitative Aptitude', questions: 35, minutes: 20 },
      { name: 'Prelims: Reasoning Ability', questions: 35, minutes: 20 },
      { name: 'Mains: Objective Tests', minutes: 180 },
      { name: 'Mains: Descriptive Test', minutes: 30 },
    ],
    scoring: { correct: 1, wrong: -0.25, unattempted: 0 },
    note: 'Prelims and mains are separate stages; mains has section-wise timings.',
    verifiedSource: 'IBPS CRP PO/MT current scheme',
  },

  'ibps-clerk': {
    label: 'IBPS CSA/Clerk', questions: 255, marks: 300, duration: 180,
    sections: [
      { name: 'Prelims: English Language', questions: 30, minutes: 20 },
      { name: 'Prelims: Numerical Ability', questions: 35, minutes: 20 },
      { name: 'Prelims: Reasoning Ability', questions: 35, minutes: 20 },
      { name: 'Mains: General/Financial Awareness', questions: 40, marks: 50, minutes: 20 },
      { name: 'Mains: General English', questions: 40, marks: 40, minutes: 35 },
      { name: 'Mains: Reasoning Ability', questions: 40, marks: 60, minutes: 35 },
      { name: 'Mains: Quantitative Aptitude', questions: 35, marks: 50, minutes: 30 },
    ],
    scoring: { correct: 1, wrong: -0.25, unattempted: 0 },
    note: 'Prelims and mains are separate stages; mains has 155 questions/200 marks.',
    verifiedSource: 'IBPS CRP CSA XV notification',
  },

  'sbi-po': {
    label: 'SBI PO', questions: null, marks: 250, duration: 230,
    sections: [
      { name: 'Prelims', questions: 100, minutes: 60 },
      { name: 'Mains Objective', questions: 170, marks: 200, minutes: 180 },
      { name: 'Mains Descriptive', marks: 50, minutes: 30 },
    ],
    scoring: { objectiveWrong: -0.25, unattempted: 0 },
    note: 'Prelims and mains are separate stages.',
    verifiedSource: 'SBI PO current mains scheme',
  },

  'rrb-ntpc': {
    label: 'RRB NTPC CBT-1', questions: 100, marks: 100, duration: 90,
    sections: [
      { name: 'General Awareness', questions: 40 },
      { name: 'Mathematics', questions: 30 },
      { name: 'General Intelligence & Reasoning', questions: 30 },
    ],
    scoring: { correct: 1, wrong: -0.333333, unattempted: 0 },
    verifiedSource: 'RRB NTPC CBT-1 scheme',
  },

  'rrb-group-d': {
    label: 'RRB Group D CBT', questions: 100, marks: 100, duration: 90,
    sections: [
      { name: 'General Science', questions: 25 },
      { name: 'Mathematics', questions: 25 },
      { name: 'General Intelligence & Reasoning', questions: 30 },
      { name: 'General Awareness & Current Affairs', questions: 20 },
    ],
    scoring: { correct: 1, wrong: -0.333333, unattempted: 0 },
    verifiedSource: 'RRB Group D CBT scheme',
  },

  'ctet': {
    label: 'CTET Paper I / II', questions: 150, marks: 150, duration: 150,
    sections: [
      { name: 'Child Development & Pedagogy', questions: 30 },
      { name: 'Language I', questions: 30 },
      { name: 'Language II', questions: 30 },
      { name: 'Mathematics / Mathematics & Science / Social Studies', questions: 60 },
    ],
    scoring: { correct: 1, wrong: 0, unattempted: 0 },
    note: 'Paper I and Paper II use different subject blocks; the builder selects the correct paper.',
    verifiedSource: 'CTET information bulletin',
  },
}

export function getExamMockStandard(examId) {
  return examMockStandards[examId] || null
}
