// Resource library - original content, structured for updates
export const resourceCategories = [
  { id: 'formula-sheets', name: 'Formula Sheets', icon: 'fa-square-root-variable', color: 'bg-indigo-500' },
  { id: 'revision-notes', name: 'Revision Notes', icon: 'fa-note-sticky', color: 'bg-emerald-500' },
  { id: 'vocabulary', name: 'Vocabulary', icon: 'fa-spell-check', color: 'bg-amber-500' },
  { id: 'practice-material', name: 'Practice Material', icon: 'fa-pen-ruler', color: 'bg-rose-500' },
  { id: 'study-pdfs', name: 'Original Study PDFs', icon: 'fa-file-lines', color: 'bg-sky-500' },
  { id: 'checklists', name: 'Checklists', icon: 'fa-list-check', color: 'bg-purple-500' },
]

export const resources = [
  // Formula Sheets
  {
    id: 'formula-percentage',
    category: 'formula-sheets',
    title: 'Percentage & Ratio Formulas',
    tags: ['quant', 'percentage', 'ratio'],
    premium: false,
    content: [
      'x% of y = (x/100) × y',
      'To increase A by x%: A × (1 + x/100)',
      'To decrease A by x%: A × (1 − x/100)',
      'If A is x% more than B: A = B × (1 + x/100)',
      'Percentage change = [(New − Old)/Old] × 100',
      'If a:b = m:n, then a = mk, b = nk for some constant k',
    ]
  },
  {
    id: 'formula-si-ci',
    category: 'formula-sheets',
    title: 'Simple & Compound Interest Formulas',
    tags: ['quant', 'interest'],
    premium: false,
    content: [
      'Simple Interest = (P × R × T) / 100',
      'Amount (SI) = P + SI',
      'Compound Interest Amount = P × (1 + R/100)^T',
      'CI = Amount − P',
      'Difference between CI and SI (2 years) = P × (R/100)²',
    ]
  },
  {
    id: 'formula-mensuration',
    category: 'formula-sheets',
    title: 'Mensuration Formulas (2D & 3D)',
    tags: ['quant', 'geometry'],
    premium: false,
    content: [
      'Area of rectangle = length × breadth',
      'Area of triangle = 1/2 × base × height',
      'Area of circle = πr²; Circumference = 2πr',
      'Volume of cuboid = l × b × h',
      'Volume of cylinder = πr²h',
      'Volume of sphere = 4/3 πr³',
      'Total Surface Area of cube = 6a²',
    ]
  },
  {
    id: 'formula-trigonometry',
    category: 'formula-sheets',
    title: 'Trigonometry Quick Reference',
    tags: ['quant', 'nda', 'cds'],
    premium: false,
    content: [
      'sin²θ + cos²θ = 1',
      '1 + tan²θ = sec²θ',
      '1 + cot²θ = csc²θ',
      'sin(90°−θ) = cosθ; cos(90°−θ) = sinθ',
      'sin2θ = 2sinθcosθ',
      'cos2θ = cos²θ − sin²θ',
    ]
  },

  // Revision Notes
  {
    id: 'notes-indian-polity',
    category: 'revision-notes',
    title: 'Indian Polity: Quick Revision Notes',
    tags: ['gk', 'polity', 'cuet'],
    premium: false,
    content: [
      'The Constitution of India came into force on 26 January 1950.',
      'It is the longest written constitution in the world.',
      'Fundamental Rights: Articles 12–35 (originally 7, now 6 after Right to Property was removed).',
      'Directive Principles of State Policy: Articles 36–51, inspired by the Irish Constitution.',
      'The Parliament consists of Lok Sabha (Lower House) and Rajya Sabha (Upper House).',
      'The President is the constitutional head of state; the Prime Minister is the head of government.',
    ]
  },
  {
    id: 'notes-modern-history',
    category: 'revision-notes',
    title: 'Modern Indian History: Key Events Timeline',
    tags: ['gk', 'history'],
    premium: false,
    content: [
      '1857 – Revolt of 1857 (First War of Independence)',
      '1885 – Formation of Indian National Congress',
      '1919 – Jallianwala Bagh Massacre',
      '1930 – Salt March (Dandi March) led by Gandhi',
      '1942 – Quit India Movement',
      '1947 – India gains Independence (15 August)',
      '1950 – Constitution of India comes into effect (26 January)',
    ]
  },
  {
    id: 'notes-computer-basics',
    category: 'revision-notes',
    title: 'Computer Knowledge Basics',
    tags: ['gk', 'computer', 'ssc'],
    premium: false,
    content: [
      'CPU = Central Processing Unit, the "brain" of the computer.',
      'RAM (volatile) vs ROM (non-volatile) memory.',
      'LAN = Local Area Network; WAN = Wide Area Network.',
      'HTTP = HyperText Transfer Protocol; HTTPS is the secure version.',
      'MS Office suite: Word (documents), Excel (spreadsheets), PowerPoint (presentations).',
    ]
  },

  // Vocabulary
  {
    id: 'vocab-list-1',
    category: 'vocabulary',
    title: 'High-Frequency Vocabulary List — Set 1',
    tags: ['english', 'vocabulary'],
    premium: false,
    content: [
      'Abate (v.) — to reduce in intensity',
      'Candid (adj.) — truthful and straightforward',
      'Diligent (adj.) — showing care in one\'s work',
      'Eloquent (adj.) — fluent and persuasive in speech',
      'Frugal (adj.) — economical, avoiding waste',
      'Gregarious (adj.) — sociable, fond of company',
      'Hostile (adj.) — unfriendly, antagonistic',
      'Impeccable (adj.) — flawless, without fault',
    ]
  },
  {
    id: 'vocab-list-2',
    category: 'vocabulary',
    title: 'High-Frequency Vocabulary List — Set 2',
    tags: ['english', 'vocabulary'],
    premium: false,
    content: [
      'Jubilant (adj.) — feeling great happiness',
      'Kindle (v.) — to light a fire; to arouse an emotion',
      'Lucid (adj.) — clear and easy to understand',
      'Meticulous (adj.) — showing great attention to detail',
      'Novice (n.) — a beginner',
      'Obsolete (adj.) — no longer in use',
      'Pragmatic (adj.) — practical rather than idealistic',
      'Quaint (adj.) — attractively unusual or old-fashioned',
    ]
  },
  {
    id: 'vocab-idioms',
    category: 'vocabulary',
    title: 'Common Idioms & Phrases for Exams',
    tags: ['english', 'idioms'],
    premium: false,
    content: [
      'Break the ice — to initiate conversation in a social setting',
      'Cut corners — to do something the cheapest/easiest way',
      'Hit the nail on the head — to describe exactly what is causing a situation',
      'Once in a blue moon — very rarely',
      'The ball is in your court — it is your decision/responsibility now',
      'Under the weather — feeling unwell',
    ]
  },

  // Practice material
  {
    id: 'practice-quant-set',
    category: 'practice-material',
    title: 'Quant Practice Set — Mixed Topics (20 Questions)',
    tags: ['quant', 'practice'],
    premium: false,
    content: [
      'This is a curated practice set covering percentage, ratio, average, profit-loss and time & work.',
      'Recommended: Attempt within 20 minutes to build speed.',
      'Use the Quiz section for an interactive version with instant scoring!',
    ],
    linkTo: '/quiz?subject=quant'
  },
  {
    id: 'practice-reasoning-set',
    category: 'practice-material',
    title: 'Reasoning Practice Set — Mixed Topics (20 Questions)',
    tags: ['reasoning', 'practice'],
    premium: false,
    content: [
      'Covers coding-decoding, series, blood relations, syllogism and analogy.',
      'Ideal for daily practice — aim for under 15 minutes.',
      'Use the Quiz section for an interactive version with instant scoring!',
    ],
    linkTo: '/quiz?subject=reasoning'
  },

  // Study PDFs (original notes described as downloadable-style content, rendered in-app)
  {
    id: 'pdf-ssc-cgl-overview',
    category: 'study-pdfs',
    title: 'SSC CGL Complete Overview (Original Notes)',
    tags: ['ssc', 'cgl'],
    premium: false,
    content: [
      'A structured original summary covering SSC CGL eligibility, exam pattern, syllabus and preparation strategy.',
      'View the full structured details in the Exam Hub → SSC CGL page.',
    ],
    linkTo: '/exams/ssc-cgl'
  },
  {
    id: 'pdf-nda-cds-overview',
    category: 'study-pdfs',
    title: 'NDA & CDS Preparation Guide (Original Notes)',
    tags: ['defence', 'nda', 'cds'],
    premium: false,
    content: [
      'Covers eligibility, exam pattern, SSB process and preparation strategy for both NDA and CDS.',
      'View full details in the Exam Hub sections for NDA and CDS.',
    ],
    linkTo: '/exams/nda'
  },
  {
    id: 'pdf-premium-mocktest-pack',
    category: 'study-pdfs',
    title: 'Premium Mock Test Analysis Pack',
    tags: ['premium'],
    premium: true,
    content: [
      'Detailed mock test performance analytics, topic-wise weakness mapping and personalized improvement plan.',
      'Unlock with StudyPath Premium.',
    ]
  },

  // Checklists
  {
    id: 'checklist-exam-day',
    category: 'checklists',
    title: 'Exam Day Checklist',
    tags: ['general'],
    premium: false,
    content: [
      '☐ Admit card (printed copy)',
      '☐ Valid photo ID proof',
      '☐ Passport-size photographs (if required)',
      '☐ Reach exam center at least 1 hour early',
      '☐ Carry permitted stationery only',
      '☐ Check dress code / material restrictions in advance',
    ]
  },
  {
    id: 'checklist-daily-study',
    category: 'checklists',
    title: 'Daily Study Routine Checklist',
    tags: ['planning'],
    premium: false,
    content: [
      '☐ Revise previous day\'s topics (15 min)',
      '☐ Study 1-2 new topics with notes',
      '☐ Solve 15-20 practice questions',
      '☐ Read newspaper / current affairs (15 min)',
      '☐ Attempt at least 1 quiz',
      '☐ Note down weak areas for next day\'s revision',
    ]
  },
  {
    id: 'checklist-application',
    category: 'checklists',
    title: 'Exam Application Checklist',
    tags: ['general'],
    premium: false,
    content: [
      '☐ Scanned photograph & signature (as per specifications)',
      '☐ Category certificate (if applicable)',
      '☐ Educational certificates',
      '☐ Valid ID & address proof',
      '☐ Active email ID & mobile number',
      '☐ Application fee payment method ready',
    ]
  },
]

export function getResourcesByCategory(categoryId) {
  return resources.filter((r) => r.category === categoryId)
}

export function searchResources(query) {
  const q = query.toLowerCase()
  return resources.filter(
    (r) => r.title.toLowerCase().includes(q) || r.tags.some((t) => t.toLowerCase().includes(q))
  )
}
