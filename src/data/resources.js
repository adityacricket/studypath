// StudyPath - Free Learning Resources
// Structured data for the Resources page.
// All study content below is original summaries/references.
// External source names are listed so the library can be expanded safely.

export const resourceCategories = [
  {
    id: 'formula-sheets',
    name: 'Formula Sheets',
    icon: 'fa-square-root-variable',
    color: 'bg-indigo-500'
  },
  {
    id: 'revision-notes',
    name: 'Revision Notes',
    icon: 'fa-note-sticky',
    color: 'bg-emerald-500'
  },
  {
    id: 'vocabulary',
    name: 'Vocabulary',
    icon: 'fa-spell-check',
    color: 'bg-amber-500'
  },
  {
    id: 'practice-material',
    name: 'Practice Material',
    icon: 'fa-pen-ruler',
    color: 'bg-rose-500'
  },
  {
    id: 'study-pdfs',
    name: 'Study Resources',
    icon: 'fa-file-lines',
    color: 'bg-sky-500'
  },
  {
    id: 'checklists',
    name: 'Checklists',
    icon: 'fa-list-check',
    color: 'bg-purple-500'
  }
]

export const resources = [

  // =========================================================
  // FORMULA SHEETS
  // =========================================================

  {
    id: 'formula-percentage',
    category: 'formula-sheets',
    title: 'Percentage & Ratio Formulas',
    tags: ['quant', 'percentage', 'ratio', 'ssc', 'nda', 'banking'],
    premium: false,
    content: [
      'x% of y = (x/100) × y',
      'Percentage change = [(New − Old) / Old] × 100',
      'Increase by x% = Original × (1 + x/100)',
      'Decrease by x% = Original × (1 − x/100)',
      'If a:b = m:n, then a = mk and b = nk',
      'Successive percentage changes should be calculated one after another.'
    ]
  },

  {
    id: 'formula-profit-loss',
    category: 'formula-sheets',
    title: 'Profit, Loss & Discount',
    tags: ['quant', 'profit', 'loss', 'discount', 'ssc'],
    premium: false,
    content: [
      'Profit = Selling Price − Cost Price',
      'Loss = Cost Price − Selling Price',
      'Profit% = (Profit / Cost Price) × 100',
      'Loss% = (Loss / Cost Price) × 100',
      'Discount = Marked Price − Selling Price',
      'Discount% = (Discount / Marked Price) × 100',
      'Selling Price = Marked Price × (1 − Discount%/100)'
    ]
  },

  {
    id: 'formula-si-ci',
    category: 'formula-sheets',
    title: 'Simple & Compound Interest',
    tags: ['quant', 'interest', 'ssc', 'banking', 'railway'],
    premium: false,
    content: [
      'Simple Interest = (P × R × T) / 100',
      'Amount under SI = P + SI',
      'Compound Amount = P(1 + R/100)^T',
      'Compound Interest = Amount − Principal',
      'For two years, CI − SI = P(R/100)^2',
      'Always keep rate and time in compatible units.'
    ]
  },

  {
    id: 'formula-average',
    category: 'formula-sheets',
    title: 'Average Quick Formulas',
    tags: ['quant', 'average', 'ssc', 'banking'],
    premium: false,
    content: [
      'Average = Sum of observations / Number of observations',
      'Sum = Average × Number of observations',
      'Combined average = Total combined sum / Total observations',
      'If one value changes, change in average = Change in total / Number of observations',
      'Weighted average uses the corresponding weights.'
    ]
  },

  {
    id: 'formula-time-work',
    category: 'formula-sheets',
    title: 'Time & Work',
    tags: ['quant', 'time', 'work', 'ssc', 'railway'],
    premium: false,
    content: [
      'Work = Rate × Time',
      'If A completes work in x days, A’s one-day work = 1/x',
      'Combined rate = Sum of individual rates',
      'Time = Total work / Combined rate',
      'For efficiency comparison, work rate is directly proportional to efficiency.'
    ]
  },

  {
    id: 'formula-time-distance',
    category: 'formula-sheets',
    title: 'Time, Speed & Distance',
    tags: ['quant', 'speed', 'distance', 'ssc', 'nda'],
    premium: false,
    content: [
      'Speed = Distance / Time',
      'Distance = Speed × Time',
      'Time = Distance / Speed',
      'Average speed = Total distance / Total time',
      'Relative speed in opposite directions = Sum of speeds',
      'Relative speed in same direction = Difference of speeds',
      '1 m/s = 18/5 km/h'
    ]
  },

  {
    id: 'formula-mensuration',
    category: 'formula-sheets',
    title: 'Mensuration Formulas 2D & 3D',
    tags: ['geometry', 'mensuration', 'ssc', 'nda', 'railway'],
    premium: false,
    content: [
      'Rectangle area = length × breadth',
      'Square area = side²',
      'Triangle area = 1/2 × base × height',
      'Circle area = πr²',
      'Circle circumference = 2πr',
      'Cuboid volume = l × b × h',
      'Cylinder volume = πr²h',
      'Sphere volume = 4πr³/3'
    ]
  },

  {
    id: 'formula-trigonometry',
    category: 'formula-sheets',
    title: 'Trigonometry Quick Reference',
    tags: ['trigonometry', 'jee', 'neet', 'nda', 'cds'],
    premium: false,
    content: [
      'sin²θ + cos²θ = 1',
      '1 + tan²θ = sec²θ',
      '1 + cot²θ = cosec²θ',
      'sin(90° − θ) = cosθ',
      'cos(90° − θ) = sinθ',
      'sin 2θ = 2sinθcosθ',
      'cos 2θ = cos²θ − sin²θ'
    ]
  },

  {
    id: 'formula-algebra',
    category: 'formula-sheets',
    title: 'Algebraic Identities',
    tags: ['algebra', 'jee', 'nda', 'cds', 'ssc'],
    premium: false,
    content: [
      '(a+b)² = a² + 2ab + b²',
      '(a−b)² = a² − 2ab + b²',
      'a²−b² = (a−b)(a+b)',
      '(a+b)³ = a³ + 3a²b + 3ab² + b³',
      '(a−b)³ = a³ − 3a²b + 3ab² − b³',
      'a³+b³ = (a+b)(a²−ab+b²)',
      'a³−b³ = (a−b)(a²+ab+b²)'
    ]
  },

  // =========================================================
  // REVISION NOTES
  // =========================================================

  {
    id: 'notes-indian-polity',
    category: 'revision-notes',
    title: 'Indian Polity Quick Revision',
    tags: ['polity', 'upsc', 'ssc', 'nda', 'cds', 'cuet'],
    premium: false,
    content: [
      'The Constitution of India came into force on 26 January 1950.',
      'Fundamental Rights are mainly covered under Articles 12–35.',
      'Directive Principles of State Policy are covered under Articles 36–51.',
      'Parliament consists of Lok Sabha and Rajya Sabha.',
      'The President is the constitutional head of the Union.',
      'The Prime Minister heads the Council of Ministers.',
      'The Supreme Court is the highest judicial authority of India.'
    ]
  },

  {
    id: 'notes-modern-history',
    category: 'revision-notes',
    title: 'Modern Indian History Timeline',
    tags: ['history', 'upsc', 'ssc', 'nda', 'cds'],
    premium: false,
    content: [
      '1857 – Revolt of 1857',
      '1885 – Formation of Indian National Congress',
      '1905 – Partition of Bengal',
      '1919 – Jallianwala Bagh incident',
      '1920 – Non-Cooperation Movement',
      '1930 – Civil Disobedience Movement and Dandi March',
      '1942 – Quit India Movement',
      '1947 – Independence of India'
    ]
  },

  {
    id: 'notes-ancient-medieval',
    category: 'revision-notes',
    title: 'Ancient & Medieval India Quick Revision',
    tags: ['history', 'ancient', 'medieval', 'upsc', 'ssc'],
    premium: false,
    content: [
      'Indus Valley Civilization is known for planned urban settlements.',
      'Vedic literature is an important source for early Indian history.',
      'Mauryan Empire reached major expansion under Ashoka.',
      'Gupta period is associated with major developments in science, mathematics and literature.',
      'Delhi Sultanate preceded the Mughal Empire in northern India.',
      'Akbar developed administrative and political systems that shaped the Mughal state.'
    ]
  },

  {
    id: 'notes-indian-geography',
    category: 'revision-notes',
    title: 'Indian Geography Quick Revision',
    tags: ['geography', 'upsc', 'ssc', 'nda', 'cds', 'cuet'],
    premium: false,
    content: [
      'The Himalayas form the major northern mountain system of India.',
      'The Ganga-Brahmaputra system forms a major river basin.',
      'The Peninsular Plateau is one of the oldest geological regions of India.',
      'The Western Ghats and Eastern Ghats are major hill systems of peninsular India.',
      'India has tropical monsoon climate with strong seasonal variation.',
      'Black soil is especially associated with cotton cultivation.'
    ]
  },

  {
    id: 'notes-indian-economy',
    category: 'revision-notes',
    title: 'Indian Economy Basics',
    tags: ['economics', 'upsc', 'ssc', 'banking', 'cuet'],
    premium: false,
    content: [
      'GDP measures the value of final goods and services produced within an economy.',
      'Inflation refers to a sustained increase in the general price level.',
      'RBI is India’s central banking institution.',
      'Fiscal policy concerns government taxation and expenditure.',
      'Monetary policy is conducted by the central bank.',
      'Repo rate is an important monetary policy instrument.'
    ]
  },

  {
    id: 'notes-general-science',
    category: 'revision-notes',
    title: 'General Science Quick Revision',
    tags: ['science', 'ssc', 'railway', 'nda', 'cds'],
    premium: false,
    content: [
      'Force is measured in newtons.',
      'Work is measured in joules.',
      'Power is the rate of doing work.',
      'The basic unit of life is the cell.',
      'Photosynthesis converts light energy into chemical energy.',
      'DNA carries hereditary information.',
      'The SI unit of electric current is ampere.'
    ]
  },

  {
    id: 'notes-computer-basics',
    category: 'revision-notes',
    title: 'Computer Awareness Basics',
    tags: ['computer', 'ssc', 'banking', 'railway'],
    premium: false,
    content: [
      'CPU stands for Central Processing Unit.',
      'RAM is volatile memory.',
      'ROM is non-volatile memory.',
      'LAN stands for Local Area Network.',
      'WAN stands for Wide Area Network.',
      'HTTP is a web communication protocol.',
      'Operating systems manage computer hardware and software resources.'
    ]
  },

  // =========================================================
  // VOCABULARY
  // =========================================================

  {
    id: 'vocab-set-1',
    category: 'vocabulary',
    title: 'High-Frequency Vocabulary — Set 1',
    tags: ['english', 'vocabulary', 'ssc', 'nda', 'cds'],
    premium: false,
    content: [
      'Abate — to reduce',
      'Candid — truthful and straightforward',
      'Diligent — hardworking and careful',
      'Eloquent — fluent and persuasive',
      'Frugal — economical',
      'Hostile — unfriendly',
      'Impeccable — flawless',
      'Lucid — clear and easy to understand'
    ]
  },

  {
    id: 'vocab-set-2',
    category: 'vocabulary',
    title: 'High-Frequency Vocabulary — Set 2',
    tags: ['english', 'vocabulary', 'ssc', 'banking'],
    premium: false,
    content: [
      'Meticulous — very careful about details',
      'Novice — beginner',
      'Obsolete — no longer used',
      'Pragmatic — practical',
      'Reluctant — unwilling',
      'Scarce — insufficient or rare',
      'Vigilant — watchful',
      'Versatile — capable of many different things'
    ]
  },

  {
    id: 'vocab-idioms',
    category: 'vocabulary',
    title: 'Important Idioms & Phrases',
    tags: ['english', 'idioms', 'ssc', 'nda', 'cds'],
    premium: false,
    content: [
      'Break the ice — start a conversation',
      'Hit the nail on the head — describe something exactly',
      'Once in a blue moon — very rarely',
      'Under the weather — feeling unwell',
      'A blessing in disguise — something good that initially appears bad',
      'The ball is in your court — it is your decision',
      'Cut corners — take shortcuts'
    ]
  },

  // =========================================================
  // PRACTICE MATERIAL
  // =========================================================

  {
    id: 'practice-quant',
    category: 'practice-material',
    title: 'Quantitative Aptitude Practice',
    tags: ['quant', 'ssc', 'banking', 'railway'],
    premium: false,
    content: [
      'Practice percentages, ratio, average and profit-loss.',
      'Add time and work, time-speed-distance and simple interest.',
      'Solve questions under a fixed time limit.',
      'Record incorrect questions separately.',
      'Reattempt mistakes after 24 hours.'
    ],
    linkTo: '/quiz?subject=quant'
  },

  {
    id: 'practice-reasoning',
    category: 'practice-material',
    title: 'Reasoning Practice',
    tags: ['reasoning', 'ssc', 'banking', 'railway'],
    premium: false,
    content: [
      'Practice analogy and classification.',
      'Practice number and alphabet series.',
      'Practice coding-decoding.',
      'Practice blood relations and directions.',
      'Practice syllogism and logical deductions.'
    ],
    linkTo: '/quiz?subject=reasoning'
  },

  {
    id: 'practice-english',
    category: 'practice-material',
    title: 'English Practice',
    tags: ['english', 'ssc', 'nda', 'cds', 'banking'],
    premium: false,
    content: [
      'Practice error spotting.',
      'Practice sentence improvement.',
      'Practice cloze tests.',
      'Practice reading comprehension.',
      'Revise vocabulary and idioms regularly.',
      'Maintain an error notebook.'
    ],
    linkTo: '/quiz?subject=english'
  },

  {
    id: 'practice-gk',
    category: 'practice-material',
    title: 'General Knowledge Practice',
    tags: ['gk', 'ssc', 'nda', 'cds', 'railway'],
    premium: false,
    content: [
      'Revise history, geography, polity and economics.',
      'Practice general science questions.',
      'Revise important government schemes and institutions.',
      'Track current affairs separately.',
      'Use previous-year questions to identify repeated areas.'
    ],
    linkTo: '/quiz?subject=gk'
  },

  // =========================================================
  // STUDY RESOURCES / EXAM SOURCES
  // =========================================================

  {
    id: 'source-ncert',
    category: 'study-pdfs',
    title: 'NCERT Textbooks — Classes 1 to 12',
    tags: ['ncert', 'jee', 'neet', 'upsc', 'ssc', 'cuet'],
    premium: false,
    content: [
      'Official source: NCERT textbooks.',
      'Useful for school fundamentals and competitive-exam foundation.',
      'Especially important for JEE, NEET, UPSC, CUET and general studies.',
      'Use the latest officially available editions where applicable.'
    ]
  },

  {
    id: 'source-jee-main',
    category: 'study-pdfs',
    title: 'JEE Main — Official Resources',
    tags: ['jee', 'jee-main', 'engineering'],
    premium: false,
    content: [
      'Official source: National Testing Agency JEE Main portal.',
      'Find official syllabus and examination information.',
      'Use official question papers and answer keys when available.',
      'Check official notices before relying on third-party information.'
    ]
  },

  {
    id: 'source-jee-advanced',
    category: 'study-pdfs',
    title: 'JEE Advanced — Official Resources',
    tags: ['jee', 'jee-advanced', 'engineering'],
    premium: false,
    content: [
      'Official source: JEE Advanced portal.',
      'Use official syllabus and examination information.',
      'Previous-year question papers are valuable practice material.',
      'Always verify examination updates from the official portal.'
    ]
  },

  {
    id: 'source-neet',
    category: 'study-pdfs',
    title: 'NEET UG — Official Resources',
    tags: ['neet', 'medical', 'nmc', 'nta'],
    premium: false,
    content: [
      'Official source: National Testing Agency NEET portal.',
      'Use the official syllabus and notices.',
      'Use official answer keys and examination documents when released.',
      'NCERT Biology, Chemistry and Physics form an important foundation.'
    ]
  },

  {
    id: 'source-upsc',
    category: 'study-pdfs',
    title: 'UPSC — Official Resources',
    tags: ['upsc', 'civil-services', 'ias', 'ips'],
    premium: false,
    content: [
      'Official source: Union Public Service Commission.',
      'Use official examination notifications.',
      'Use official syllabus and previous-year question papers.',
      'Build preparation around the official syllabus rather than random topic lists.'
    ]
  },

  {
    id: 'source-ssc',
    category: 'study-pdfs',
    title: 'SSC CGL & CHSL — Official Resources',
    tags: ['ssc', 'cgl', 'chsl'],
    premium: false,
    content: [
      'Official source: Staff Selection Commission.',
      'Check official notifications and examination calendars.',
      'Use official syllabus and notices.',
      'Practice previous-year questions for pattern familiarity.'
    ]
  },

  {
    id: 'source-nda-cds',
    category: 'study-pdfs',
    title: 'NDA & CDS — Official Resources',
    tags: ['nda', 'cds', 'defence', 'upsc'],
    premium: false,
    content: [
      'Official source: Union Public Service Commission.',
      'Use official notifications and syllabus.',
      'Practice previous-year papers.',
      'For NDA, focus on Mathematics and General Ability Test.',
      'For CDS, focus on English, General Knowledge and Mathematics where applicable.'
    ]
  },

  {
    id: 'source-railway',
    category: 'study-pdfs',
    title: 'Railway Exams — Official Resources',
    tags: ['railway', 'rrb', 'ntpc', 'group-d'],
    premium: false,
    content: [
      'Official source: Railway Recruitment Boards.',
      'Check the relevant regional RRB portal.',
      'Use official notifications, syllabus and exam notices.',
      'Common preparation areas include mathematics, reasoning and general awareness.'
    ]
  },

  {
    id: 'source-banking',
    category: 'study-pdfs',
    title: 'Banking Exams — Official Resources',
    tags: ['banking', 'ibps', 'sbi', 'rbi'],
    premium: false,
    content: [
      'Official sources include IBPS, SBI and RBI.',
      'Check the individual examination notification for the current pattern.',
      'Practice quantitative aptitude, reasoning and English.',
      'Add banking awareness and current affairs where required.'
    ]
  },

  {
    id: 'source-cuet',
    category: 'study-pdfs',
    title: 'CUET UG — Official Resources',
    tags: ['cuet', 'university', 'nta'],
    premium: false,
    content: [
      'Official source: National Testing Agency.',
      'Check the current subject list and syllabus.',
      'Use official examination notices and information bulletins.',
      'NCERT-based preparation is useful for many domain subjects.'
    ]
  },

  {
    id: 'source-ugc-net',
    category: 'study-pdfs',
    title: 'UGC NET & CSIR NET — Official Resources',
    tags: ['ugc-net', 'csir-net', 'nta', 'research'],
    premium: false,
    content: [
      'Official source: National Testing Agency.',
      'Check the official subject-wise syllabus.',
      'Use previous-year papers for exam familiarity.',
      'Prepare Paper 1 teaching/research aptitude where applicable.'
    ]
  },

  {
    id: 'source-ctet',
    category: 'study-pdfs',
    title: 'CTET — Official Resources',
    tags: ['ctet', 'teaching', 'education'],
    premium: false,
    content: [
      'Official source: Central Teacher Eligibility Test portal.',
      'Check the current information bulletin.',
      'Use the official syllabus and previous-year papers.',
      'Child Development and Pedagogy is an important preparation area.'
    ]
  },

  {
    id: 'source-cat',
    category: 'study-pdfs',
    title: 'CAT — Official & Preparation Resources',
    tags: ['cat', 'mba', 'management'],
    premium: false,
    content: [
      'Official source: the current CAT examination portal.',
      'Preparation areas include VARC, DILR and Quantitative Ability.',
      'Use official examination information for the latest pattern.',
      'Practice timed sectional tests regularly.'
    ]
  },

  {
    id: 'source-state-psc',
    category: 'study-pdfs',
    title: 'State PSC Examination Resources',
    tags: ['psc', 'state-psc', 'government-jobs'],
    premium: false,
    content: [
      'Use the official Public Service Commission website of the relevant state.',
      'Download the current notification and syllabus.',
      'Check state-specific history, geography, polity and current affairs.',
      'Always verify eligibility and dates from the official notification.'
    ]
  },

  // =========================================================
  // FREE LEARNING PLATFORMS
  // =========================================================

  {
    id: 'free-swayam',
    category: 'study-pdfs',
    title: 'SWAYAM — Free Online Courses',
    tags: ['free', 'courses', 'college', 'skills'],
    premium: false,
    content: [
      'Government-supported online learning platform.',
      'Courses are available across many academic and skill areas.',
      'Useful for strengthening college subjects and additional skills.',
      'Some certification/examination options may have separate conditions.'
    ]
  },

  {
    id: 'free-nptel',
    category: 'study-pdfs',
    title: 'NPTEL — Engineering & Science Learning',
    tags: ['free', 'nptel', 'engineering', 'science'],
    premium: false,
    content: [
      'Courses from IITs and IISc are available through NPTEL.',
      'Useful for engineering, mathematics, science and technology.',
      'Course availability and certification rules vary by course.'
    ]
  },

  {
    id: 'free-khan-academy',
    category: 'study-pdfs',
    title: 'Khan Academy — Free Concept Learning',
    tags: ['free', 'maths', 'science', 'learning'],
    premium: false,
    content: [
      'Free educational lessons and practice.',
      'Useful for mathematics, science and foundational concepts.',
      'Best used for understanding concepts before exam-specific practice.'
    ]
  },

  {
    id: 'free-diksha',
    category: 'study-pdfs',
    title: 'DIKSHA — Government Learning Platform',
    tags: ['free', 'diksha', 'school', 'ncert'],
    premium: false,
    content: [
      'Government-supported digital learning platform.',
      'Contains educational resources for students and teachers.',
      'Useful for school-level learning and curriculum-linked resources.'
    ]
  },

  // =========================================================
  // CHECKLISTS
  // =========================================================

  {
    id: 'checklist-exam-day',
    category: 'checklists',
    title: 'Exam Day Checklist',
    tags: ['general', 'exam'],
    premium: false,
    content: [
      '☐ Check admit card requirements',
      '☐ Carry valid identification if required',
      '☐ Check reporting time',
      '☐ Check permitted stationery/items',
      '☐ Read centre instructions before leaving',
      '☐ Reach the examination centre with sufficient time'
    ]
  },

  {
    id: 'checklist-daily-study',
    category: 'checklists',
    title: 'Daily Study Checklist',
    tags: ['planning', 'study'],
    premium: false,
    content: [
      '☐ Revise yesterday’s topics',
      '☐ Complete today’s main topic',
      '☐ Solve practice questions',
      '☐ Review mistakes',
      '☐ Revise vocabulary/current affairs',
      '☐ Mark weak topics for later revision'
    ]
  },

  {
    id: 'checklist-mock-test',
    category: 'checklists',
    title: 'Mock Test Analysis Checklist',
    tags: ['mock', 'test', 'analysis'],
    premium: false,
    content: [
      '☐ Record total score',
      '☐ Record attempted questions',
      '☐ Identify silly mistakes',
      '☐ Identify concept mistakes',
      '☐ Identify time-management problems',
      '☐ Reattempt incorrect questions',
      '☐ Add weak topics to revision list'
    ]
  },

  {
    id: 'checklist-application',
    category: 'checklists',
    title: 'Exam Application Checklist',
    tags: ['application', 'exam'],
    premium: false,
    content: [
      '☐ Check eligibility',
      '☐ Read official notification',
      '☐ Prepare required documents',
      '☐ Check photograph/signature specifications',
      '☐ Verify personal details before final submission',
      '☐ Save application/confirmation details'
    ]
  }
]

// =========================================================
// HELPER FUNCTIONS
// =========================================================

export const getResourcesByCategory = (categoryId) =>
  resources.filter((resource) => resource.category === categoryId)

export const searchResources = (query) => {
  const q = query.trim().toLowerCase()

  if (!q) return resources

  return resources.filter((resource) => {
    const titleMatch = resource.title.toLowerCase().includes(q)

    const tagMatch = resource.tags.some((tag) =>
      tag.toLowerCase().includes(q)
    )

    const contentMatch = resource.content.some((line) =>
      line.toLowerCase().includes(q)
    )

    return titleMatch || tagMatch || contentMatch
  })
}
