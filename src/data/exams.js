// Structured exam data - designed to be easily updated / later moved to a database
export const exams = [
  {
    id: 'ssc-cgl',
    name: 'SSC CGL',
    fullName: 'Staff Selection Commission Combined Graduate Level',
    category: 'SSC',
    color: 'from-indigo-500 to-blue-500',
    icon: 'fa-building-columns',
    tagline: 'Group B & C posts in Central Government ministries & departments',
    popularity: 98,
    eligibility: {
      education: "Bachelor's degree in any discipline from a recognized university. Some posts (e.g. Statistical Investigator) require specific subjects like Statistics/Economics/Maths.",
      nationality: 'Indian citizen (certain relaxations for subjects of Nepal/Bhutan/Tibetan refugees settled before 1962, and persons of Indian origin migrated from specified countries).',
      other: 'Physical standards apply for specific posts like CBI Sub-Inspector.'
    },
    ageLimit: {
      general: '18–32 years (varies by post; some posts require 18–30 or up to 32)',
      relaxation: 'OBC: +3 years, SC/ST: +5 years, PwBD: +10 years, Ex-servicemen: as per rules'
    },
    examPattern: [
      { stage: 'Tier I', mode: 'Online (CBT)', duration: '60 minutes', details: 'General Intelligence & Reasoning (25Q), General Awareness (25Q), Quantitative Aptitude (25Q), English Comprehension (25Q). 100 questions, 200 marks. Negative marking: -0.5 per wrong answer.' },
      { stage: 'Tier II', mode: 'Online (CBT)', duration: 'Varies by paper', details: 'Paper I (all candidates): Mathematical Abilities, Reasoning & General Intelligence, English Language & Comprehension, General Awareness, Computer Knowledge. Paper II & III for specific posts (Statistics, Economics).' },
      { stage: 'Document Verification / Skill Test', mode: 'Offline', duration: 'As applicable', details: 'DEST (Data Entry Speed Test) for some posts, document verification for shortlisted candidates.' }
    ],
    subjects: ['General Intelligence & Reasoning', 'General Awareness', 'Quantitative Aptitude', 'English Comprehension', 'Statistics (optional paper)', 'Computer Knowledge'],
    syllabus: {
      'General Intelligence & Reasoning': ['Analogies', 'Similarities & Differences', 'Space Visualization', 'Problem Solving', 'Analysis & Judgment', 'Decision Making', 'Visual Memory', 'Coding-Decoding', 'Non-verbal series', 'Blood Relations', 'Syllogism'],
      'Quantitative Aptitude': ['Number Systems', 'Percentage', 'Ratio & Proportion', 'Average', 'Profit & Loss', 'Simple & Compound Interest', 'Time, Speed & Distance', 'Time & Work', 'Mensuration', 'Algebra', 'Geometry', 'Trigonometry', 'Data Interpretation'],
      'English Comprehension': ['Reading Comprehension', 'Grammar (Error Spotting, Fill in the Blanks)', 'Vocabulary (Synonyms/Antonyms)', 'Cloze Test', 'Sentence Rearrangement', 'Idioms & Phrases', 'One Word Substitution'],
      'General Awareness': ['Static GK (History, Geography, Polity, Economy)', 'Current Affairs', 'Science', 'Sports', 'Books & Authors', 'Important Days']
    },
    strategy: [
      'Start with NCERT books (6th-10th) for GK & Static GK foundation.',
      'Practice 20-30 quant questions daily focusing on speed & accuracy.',
      'Read a newspaper daily and maintain a current-affairs notebook.',
      'Attempt sectional mock tests weekly, then full-length tests in the last 2 months.',
      'Focus heavily on Tier I since it is a qualifying+scoring stage for many posts.',
      'Revise vocabulary lists and grammar rules every week to retain them.'
    ],
    importantTopics: ['Percentage & Ratio', 'Time & Work', 'Simplification', 'Coding-Decoding', 'Syllogism', 'Reading Comprehension', 'Static GK', 'Current Affairs (last 6 months)'],
    posts: ['Assistant Audit Officer', 'Income Tax Inspector', 'Assistant Section Officer', 'Sub Inspector (CBI/NIA)', 'Auditor', 'Statistical Investigator'],
    officialLink: 'https://ssc.nic.in'
  },
  {
    id: 'ssc-chsl',
    name: 'SSC CHSL',
    fullName: 'Staff Selection Commission Combined Higher Secondary Level',
    category: 'SSC',
    color: 'from-sky-500 to-cyan-500',
    icon: 'fa-graduation-cap',
    tagline: 'LDC/JSA, Postal Assistant & DEO posts for 12th pass candidates',
    popularity: 91,
    eligibility: {
      education: '12th pass (Higher Secondary) from a recognized board. Typing skills required for some posts (DEO requires Science/Maths in 12th).',
      nationality: 'Indian citizen (with same relaxations as CGL).',
      other: 'Typing speed test required for LDC/JSA & DEO posts after written exam.'
    },
    ageLimit: {
      general: '18–27 years',
      relaxation: 'OBC: +3 years, SC/ST: +5 years, PwBD: +10 years'
    },
    examPattern: [
      { stage: 'Tier I', mode: 'Online (CBT)', duration: '60 minutes', details: 'General Intelligence (25Q), General Awareness (25Q), Quantitative Aptitude (25Q), English Language (25Q). 100 questions, 200 marks, -0.5 negative marking.' },
      { stage: 'Tier II', mode: 'Online (CBT)', duration: '~2 hours', details: 'Session 1: Mathematical Abilities & Reasoning, English & General Awareness. Session 2: Skill Test/Typing Test module for DEO/LDC posts.' },
      { stage: 'Skill/Typing Test', mode: 'Offline/Computer based', duration: '10-15 minutes', details: 'Typing test @ 35 wpm (English)/30 wpm (Hindi) for LDC/JSA; DEST @ 8000 key depressions/hour for DEO.' }
    ],
    subjects: ['General Intelligence', 'General Awareness', 'Quantitative Aptitude', 'English Language'],
    syllabus: {
      'General Intelligence': ['Classification', 'Analogy', 'Coding-Decoding', 'Series', 'Puzzle', 'Direction Sense', 'Blood Relations', 'Venn Diagrams', 'Non-verbal Reasoning'],
      'Quantitative Aptitude': ['Number System', 'HCF & LCM', 'Percentage', 'Ratio-Proportion', 'Average', 'Interest', 'Profit-Loss', 'Mensuration', 'Trigonometry', 'Data Interpretation'],
      'English Language': ['Spot the Error', 'Fill in the Blanks', 'Synonyms/Antonyms', 'Spellings', 'Idioms & Phrases', 'One word substitution', 'Sentence Improvement', 'Para jumbles', 'Comprehension passage'],
      'General Awareness': ['History', 'Culture', 'Geography', 'Economics', 'Polity', 'Science', 'Current Affairs']
    },
    strategy: [
      'Focus equally on all four sections since cutoffs are competitive.',
      'Practice typing daily for at least 15-20 minutes if targeting LDC/DEO posts.',
      'Solve previous 5 years papers to understand question patterns.',
      'Build a strong static GK base using NCERT class 6-10 books.',
      'Time management practice is crucial: aim to solve each section in 12-13 minutes.'
    ],
    importantTopics: ['Simplification', 'Percentage', 'Analogy', 'Classification', 'Idioms & Phrases', 'One word substitution', 'Static GK', 'Typing speed practice'],
    posts: ['Lower Divisional Clerk (LDC/JSA)', 'Postal Assistant/Sorting Assistant', 'Data Entry Operator (DEO)', 'Court Clerk'],
    officialLink: 'https://ssc.nic.in'
  },
  {
    id: 'nda',
    name: 'NDA',
    fullName: 'National Defence Academy Examination',
    category: 'Defence',
    color: 'from-emerald-600 to-green-500',
    icon: 'fa-jet-fighter',
    tagline: 'Entry to Army, Navy & Air Force wings via NDA & Naval Academy',
    popularity: 88,
    eligibility: {
      education: '12th pass with Physics & Mathematics for Air Force/Navy wings; 12th pass (any stream) for Army wing.',
      nationality: 'Unmarried male/female Indian citizens (as per latest notifications, female candidates now eligible for specific entries).',
      other: 'Must meet medical fitness standards set by Services Selection Board (SSB).'
    },
    ageLimit: {
      general: '16.5–19.5 years at the time of course commencement',
      relaxation: 'No age relaxation typically; check specific notification for exceptions'
    },
    examPattern: [
      { stage: 'Written Exam', mode: 'Offline (Pen & Paper)', duration: '2.5 hours per paper', details: 'Paper 1: Mathematics (300 marks, 120 questions). Paper 2: General Ability Test - English + General Knowledge (600 marks, 150 questions). Total 900 marks.' },
      { stage: 'SSB Interview', mode: 'In-person, 5 days', duration: '5 days', details: 'Stage 1: Officer Intelligence Rating test + Picture Perception & Description. Stage 2: Psychological tests, Group Testing tasks, Interview, Conference.' },
      { stage: 'Medical Examination', mode: 'In-person', duration: '1-2 days', details: 'Detailed medical fitness check as per Services standards.' }
    ],
    subjects: ['Mathematics', 'English', 'General Knowledge (Physics, Chemistry, General Science, History, Geography, Current Events)'],
    syllabus: {
      'Mathematics': ['Algebra', 'Matrices & Determinants', 'Trigonometry', 'Analytical Geometry (2D & 3D)', 'Differential Calculus', 'Integral Calculus & Differential Equations', 'Vector Algebra', 'Statistics & Probability'],
      'English': ['Grammar & Usage', 'Vocabulary', 'Comprehension', 'Cohesion & Coherence in paragraphs'],
      'General Knowledge': ['Physics', 'Chemistry', 'General Science', 'History & Freedom Movement', 'Geography', 'Current Events of National & International importance']
    },
    strategy: [
      'Master NCERT Maths (9th-12th) thoroughly - it forms the backbone of the maths paper.',
      'Read English grammar guides and practice comprehension passages daily.',
      'Follow current affairs closely for GK, especially defence-related news.',
      'Start SSB preparation early: work on personality development, group discussions and physical fitness.',
      'Solve previous year papers under timed conditions.'
    ],
    importantTopics: ['Trigonometry', 'Calculus', 'Vector Algebra', 'English Grammar', 'Current Affairs (Defence & National)', 'Indian History', 'Physical & Chemical Science basics'],
    posts: ['Indian Army (Wing)', 'Indian Navy (Wing)', 'Indian Air Force (Wing)'],
    officialLink: 'https://upsc.gov.in'
  },
  {
    id: 'cds',
    name: 'CDS',
    fullName: 'Combined Defence Services Examination',
    category: 'Defence',
    color: 'from-lime-600 to-emerald-500',
    icon: 'fa-shield-halved',
    tagline: 'Entry to IMA, INA, AFA & OTA for graduates',
    popularity: 82,
    eligibility: {
      education: "Bachelor's degree for IMA/OTA; Engineering degree for Navy/Air Force wings.",
      nationality: 'Unmarried Indian citizens (male for IMA/INA/AFA; both male & female for OTA).',
      other: 'Physical & medical standards as per specific academy requirements.'
    },
    ageLimit: {
      general: '19–25 years depending on the academy (IMA/INA: 19-24, AFA: 19-24, OTA: 19-25)',
      relaxation: 'Check specific academy-wise notification for relaxations'
    },
    examPattern: [
      { stage: 'Written Exam (IMA/INA/AFA)', mode: 'Offline', duration: '2 hours per paper', details: 'English (100 marks), General Knowledge (100 marks), Elementary Mathematics (100 marks). Total 300 marks.' },
      { stage: 'Written Exam (OTA)', mode: 'Offline', duration: '2 hours per paper', details: 'English (100 marks), General Knowledge (100 marks). Total 200 marks (no Maths paper for OTA).' },
      { stage: 'SSB Interview', mode: 'In-person, 5 days', duration: '5 days', details: 'Same structure as NDA: Screening, Psychological tests, GTO tasks, Interview, Conference.' }
    ],
    subjects: ['English', 'General Knowledge', 'Elementary Mathematics (IMA/INA/AFA only)'],
    syllabus: {
      'English': ['Grammar', 'Vocabulary', 'Synonyms/Antonyms', 'Comprehension', 'Sentence correction & ordering'],
      'General Knowledge': ['Current Affairs', 'History', 'Geography', 'Polity', 'Economics', 'Science & Technology', 'Defence related awareness'],
      'Elementary Mathematics': ['Arithmetic', 'Algebra', 'Trigonometry', 'Geometry', 'Mensuration', 'Statistics']
    },
    strategy: [
      'Focus on GK current affairs, especially defence & international relations news.',
      'Use NCERT 9th-10th Maths for a strong elementary maths base.',
      'Practice English comprehension and grammar rules regularly.',
      'Prepare for SSB alongside written prep - do not leave it for after results.',
      'Maintain physical fitness routine for the medical & SSB stages.'
    ],
    importantTopics: ['Current Affairs', 'Indian Polity', 'Elementary Trigonometry', 'English Comprehension', 'Geography of India', 'History of Modern India'],
    posts: ['Indian Military Academy (IMA)', 'Indian Naval Academy (INA)', 'Air Force Academy (AFA)', 'Officers Training Academy (OTA)'],
    officialLink: 'https://upsc.gov.in'
  },
  {
    id: 'cuet',
    name: 'CUET',
    fullName: 'Common University Entrance Test',
    category: 'University Admission',
    color: 'from-fuchsia-500 to-purple-500',
    icon: 'fa-user-graduate',
    tagline: 'Single entrance test for admission to central & participating universities',
    popularity: 95,
    eligibility: {
      education: '12th pass (or appearing) from any recognized board, any stream.',
      nationality: 'Indian citizens and NRI/foreign nationals as per university-specific rules.',
      other: 'Subject combination should match the intended undergraduate program requirements.'
    },
    ageLimit: {
      general: 'No specific age limit for most UG programs (check individual university criteria)',
      relaxation: 'Not generally applicable; varies by participating university'
    },
    examPattern: [
      { stage: 'Section IA & IB - Languages', mode: 'Computer Based Test (CBT)', duration: '45 minutes per language', details: '13 Indian + 20 foreign languages offered. 40-50 questions, attempt 40. Reading comprehension based.' },
      { stage: 'Section II - Domain Subjects', mode: 'CBT', duration: '45-60 minutes per subject', details: 'Choose up to 6 domain subjects (Physics, Chemistry, Maths, Biology, Economics, Business Studies, Accountancy, History, Political Science, etc.) based on target course.' },
      { stage: 'Section III - General Test', mode: 'CBT', duration: '60 minutes', details: 'General Knowledge, Current Affairs, General Mental Ability, Numerical Ability, Quantitative Reasoning, Logical & Analytical Reasoning. Required by many universities for general programs.' }
    ],
    subjects: ['Languages', 'Domain Subjects (as per stream)', 'General Test (GK, Reasoning, Numerical Ability)'],
    syllabus: {
      'General Test': ['General Knowledge & Current Affairs', 'General Mental Ability', 'Numerical Ability', 'Quantitative Reasoning (Arithmetic, Algebra basics)', 'Logical & Analytical Reasoning'],
      'Domain Subjects': ['Follows NCERT Class 12 syllabus for each chosen subject (e.g. Physics, Chemistry, Maths, Biology, Economics, Accountancy, Business Studies, History, Political Science, Geography, Sociology)'],
      'Languages': ['Reading Comprehension (Factual, Literary, Narrative passages)', 'Vocabulary', 'Verbal Ability']
    },
    strategy: [
      'Thoroughly revise NCERT Class 12 textbooks for chosen domain subjects - most questions map directly.',
      'Practice previous year CUET papers and sample papers released by NTA.',
      'Improve reading speed for comprehension-heavy language sections.',
      'Practice numerical ability and reasoning puzzles daily for the General Test.',
      'Plan section-wise timing since CUET is conducted in a single/multi-shift CBT format.'
    ],
    importantTopics: ['NCERT Class 12 core concepts', 'Reading Comprehension', 'Numerical Ability', 'Logical Reasoning', 'Current Affairs (academic year)'],
    posts: ['Undergraduate Admission (Central & State Universities)'],
    officialLink: 'https://cuet.samarth.ac.in'
  }
]

export const getExamById = (id) => exams.find((e) => e.id === id)

export const examCategories = ['All', 'SSC', 'Defence', 'University Admission']
