// StudyPath - Complete Exam Database
// Easy to expand later with more exams and resources.

export const exams = [
  {
    id: 'ssc-cgl',
    name: 'SSC CGL',
    fullName: 'Staff Selection Commission Combined Graduate Level',
    category: 'SSC',
    color: 'from-indigo-500 to-blue-500',
    icon: 'fa-building-columns',
    tagline: 'Graduate-level recruitment for central government posts',
    popularity: 98,
    eligibility: {
      education: "Bachelor's degree from a recognized university",
      nationality: 'Indian citizen as per SSC rules',
      other: 'Post-specific requirements may apply'
    },
    ageLimit: {
      general: 'Usually 18–32 years depending on post',
      relaxation: 'As per government rules'
    },
    examPattern: [
      { stage: 'Tier I', mode: 'Computer Based Test', duration: '60 minutes', details: 'Reasoning, General Awareness, Quantitative Aptitude and English' },
      { stage: 'Tier II', mode: 'Computer Based Test', duration: 'Varies', details: 'Mathematical Abilities, Reasoning, English, General Awareness and Computer Knowledge' }
    ],
    subjects: ['Reasoning', 'General Awareness', 'Quantitative Aptitude', 'English', 'Computer'],
    syllabus: {
      'Quantitative Aptitude': ['Number System', 'Percentage', 'Ratio', 'Average', 'Profit & Loss', 'Time & Work', 'Algebra', 'Geometry', 'Trigonometry', 'DI'],
      'Reasoning': ['Analogy', 'Series', 'Coding-Decoding', 'Syllogism', 'Blood Relations', 'Venn Diagram', 'Puzzles'],
      'English': ['Grammar', 'Vocabulary', 'Comprehension', 'Cloze Test', 'Error Detection', 'Idioms'],
      'General Awareness': ['History', 'Geography', 'Polity', 'Economics', 'Science', 'Current Affairs']
    },
    strategy: ['Build concepts', 'Practice PYQs', 'Take sectional tests', 'Take full mocks', 'Revise regularly'],
    importantTopics: ['Percentage', 'Ratio', 'Algebra', 'Geometry', 'Reasoning', 'English Grammar', 'Static GK'],
    posts: ['Assistant Section Officer', 'Income Tax Inspector', 'Auditor', 'Tax Assistant', 'Sub Inspector'],
    officialLink: 'https://ssc.gov.in'
  },

  {
    id: 'ssc-chsl',
    name: 'SSC CHSL',
    fullName: 'Staff Selection Commission Combined Higher Secondary Level',
    category: 'SSC',
    color: 'from-sky-500 to-cyan-500',
    icon: 'fa-graduation-cap',
    tagline: 'Government jobs for 12th-pass candidates',
    popularity: 94,
    eligibility: {
      education: '12th pass from a recognized board',
      nationality: 'Indian citizen as per SSC rules',
      other: 'Skill or typing tests may apply'
    },
    ageLimit: {
      general: 'Usually 18–27 years',
      relaxation: 'As per government rules'
    },
    examPattern: [
      { stage: 'Tier I', mode: 'Computer Based Test', duration: '60 minutes', details: 'English, Reasoning, Quantitative Aptitude and General Awareness' },
      { stage: 'Tier II', mode: 'Computer Based Test', duration: 'Varies', details: 'Mathematics, Reasoning, English, General Awareness and skill modules' }
    ],
    subjects: ['English', 'Reasoning', 'Quantitative Aptitude', 'General Awareness'],
    syllabus: {
      'Quantitative Aptitude': ['Arithmetic', 'Percentage', 'Ratio', 'Average', 'Profit & Loss', 'Geometry', 'Mensuration', 'DI'],
      'Reasoning': ['Analogy', 'Series', 'Coding-Decoding', 'Classification', 'Directions', 'Blood Relations'],
      'English': ['Grammar', 'Vocabulary', 'Comprehension', 'Cloze Test', 'Sentence Improvement'],
      'General Awareness': ['History', 'Geography', 'Polity', 'Science', 'Economics', 'Current Affairs']
    },
    strategy: ['Complete basics', 'Solve PYQs', 'Practice speed', 'Take mocks', 'Revise'],
    importantTopics: ['Arithmetic', 'Reasoning', 'English', 'Static GK', 'Current Affairs'],
    posts: ['LDC', 'JSA', 'Postal Assistant', 'Sorting Assistant', 'DEO'],
    officialLink: 'https://ssc.gov.in'
  },

  {
    id: 'ssc-mts',
    name: 'SSC MTS',
    fullName: 'Staff Selection Commission Multi-Tasking Staff',
    category: 'SSC',
    color: 'from-blue-500 to-indigo-500',
    icon: 'fa-briefcase',
    tagline: 'Entry-level central government recruitment',
    popularity: 89,
    eligibility: {
      education: '10th pass from a recognized board',
      nationality: 'Indian citizen as per SSC rules',
      other: 'Requirements may vary by notification'
    },
    ageLimit: {
      general: 'Usually 18–25 or 18–27 years depending on post',
      relaxation: 'As per government rules'
    },
    examPattern: [
      { stage: 'Computer Based Examination', mode: 'CBT', duration: 'Varies', details: 'Numerical Ability, Reasoning, General Awareness and English' }
    ],
    subjects: ['Numerical Ability', 'Reasoning', 'General Awareness', 'English'],
    syllabus: {
      'Numerical Ability': ['Number System', 'Percentage', 'Ratio', 'Average', 'Profit & Loss', 'Time & Work'],
      'Reasoning': ['Series', 'Coding', 'Analogy', 'Classification', 'Directions'],
      'English': ['Grammar', 'Vocabulary', 'Comprehension'],
      'General Awareness': ['History', 'Geography', 'Science', 'Polity', 'Current Affairs']
    },
    strategy: ['Strengthen basics', 'Practice daily', 'Solve PYQs', 'Take mocks'],
    importantTopics: ['Arithmetic', 'Reasoning', 'English', 'GK'],
    posts: ['Multi-Tasking Staff', 'Havaldar'],
    officialLink: 'https://ssc.gov.in'
  },

  {
    id: 'upsc-cse',
    name: 'UPSC CSE',
    fullName: 'Civil Services Examination',
    category: 'UPSC',
    color: 'from-orange-500 to-red-500',
    icon: 'fa-landmark',
    tagline: 'India’s premier civil services examination',
    popularity: 100,
    eligibility: {
      education: "Bachelor's degree from a recognized university",
      nationality: 'Indian citizenship requirements vary by service',
      other: 'Detailed eligibility is specified in the UPSC notification'
    },
    ageLimit: {
      general: 'Generally 21–32 years',
      relaxation: 'Category-based relaxation as per rules'
    },
    examPattern: [
      { stage: 'Prelims', mode: 'Offline', duration: 'Two papers', details: 'General Studies Paper I and CSAT' },
      { stage: 'Mains', mode: 'Written', duration: 'Multiple papers', details: 'Essay, General Studies, Optional Subject and qualifying papers' },
      { stage: 'Interview', mode: 'In-person', duration: 'As scheduled', details: 'Personality Test' }
    ],
    subjects: ['History', 'Geography', 'Polity', 'Economy', 'Environment', 'Science & Technology', 'Current Affairs', 'Essay'],
    syllabus: {
      'General Studies': ['History', 'Geography', 'Polity', 'Economy', 'Environment', 'Science & Technology', 'Current Affairs'],
      'CSAT': ['Comprehension', 'Reasoning', 'Numerical Ability', 'Data Interpretation'],
      'Mains': ['Essay', 'General Studies Papers', 'Optional Subject']
    },
    strategy: ['Read NCERTs', 'Build standard sources', 'Follow current affairs', 'Solve PYQs', 'Write answers regularly'],
    importantTopics: ['Indian Polity', 'Modern History', 'Geography', 'Economy', 'Environment', 'Current Affairs'],
    posts: ['IAS', 'IPS', 'IFS', 'IRS', 'Other Group A & B Services'],
    officialLink: 'https://upsc.gov.in'
  },

  {
    id: 'nda',
    name: 'NDA',
    fullName: 'National Defence Academy Examination',
    category: 'Defence',
    color: 'from-emerald-600 to-green-500',
    icon: 'fa-jet-fighter',
    tagline: 'Defence academy entry after Class 12',
    popularity: 96,
    eligibility: {
      education: '12th pass; Physics and Mathematics required for specified wings',
      nationality: 'As specified by UPSC notification',
      other: 'Medical and physical standards apply'
    },
    ageLimit: {
      general: 'Notification-specific age window',
      relaxation: 'Check the official notification'
    },
    examPattern: [
      { stage: 'Written Exam', mode: 'Offline', duration: 'Two papers', details: 'Mathematics and General Ability Test' },
      { stage: 'SSB', mode: 'In-person', duration: 'Multi-day', details: 'Selection and personality assessment' }
    ],
    subjects: ['Mathematics', 'English', 'Physics', 'Chemistry', 'History', 'Geography', 'Current Affairs'],
    syllabus: {
      'Mathematics': ['Algebra', 'Matrices', 'Trigonometry', 'Coordinate Geometry', 'Calculus', 'Statistics', 'Probability'],
      'GAT': ['English', 'Physics', 'Chemistry', 'History', 'Geography', 'Current Affairs']
    },
    strategy: ['Build NCERT foundation', 'Practice PYQs', 'Improve speed', 'Take mocks', 'Revise'],
    importantTopics: ['Algebra', 'Trigonometry', 'Calculus', 'English', 'Science', 'History', 'Geography'],
    posts: ['Army Wing', 'Naval Academy', 'Air Force Wing'],
    officialLink: 'https://upsc.gov.in'
  },

  {
    id: 'cds',
    name: 'CDS',
    fullName: 'Combined Defence Services Examination',
    category: 'Defence',
    color: 'from-lime-600 to-emerald-500',
    icon: 'fa-shield-halved',
    tagline: 'Graduate-level entry into the Indian Armed Forces',
    popularity: 92,
    eligibility: {
      education: "Bachelor's degree; specific degree requirements vary by academy",
      nationality: 'As specified by UPSC notification',
      other: 'Physical and medical standards apply'
    },
    ageLimit: {
      general: 'Academy-specific age limits',
      relaxation: 'Check the official notification'
    },
    examPattern: [
      { stage: 'Written Exam', mode: 'Offline', duration: 'Paper-specific', details: 'English, General Knowledge and Mathematics for IMA/INA/AFA; English and GK for OTA' },
      { stage: 'SSB', mode: 'In-person', duration: 'Multi-day', details: 'Selection and personality assessment' }
    ],
    subjects: ['English', 'General Knowledge', 'Elementary Mathematics'],
    syllabus: {
      'English': ['Grammar', 'Vocabulary', 'Comprehension', 'Sentence Ordering'],
      'General Knowledge': ['History', 'Geography', 'Polity', 'Economics', 'Science', 'Current Affairs'],
      'Mathematics': ['Arithmetic', 'Algebra', 'Geometry', 'Trigonometry', 'Mensuration', 'Statistics']
    },
    strategy: ['Study NCERT foundation', 'Solve PYQs', 'Practice English daily', 'Revise GK', 'Take mocks'],
    importantTopics: ['English', 'Current Affairs', 'Polity', 'History', 'Geography', 'Arithmetic'],
    posts: ['IMA', 'INA', 'AFA', 'OTA'],
    officialLink: 'https://upsc.gov.in'
  },

  {
    id: 'jee-main',
    name: 'JEE Main',
    fullName: 'Joint Entrance Examination Main',
    category: 'Engineering',
    color: 'from-purple-500 to-indigo-500',
    icon: 'fa-atom',
    tagline: 'Major national engineering entrance examination',
    popularity: 99,
    eligibility: {
      education: 'Class 12 or equivalent with required subjects',
      nationality: 'As per NTA rules',
      other: 'Institute-specific eligibility may apply'
    },
    ageLimit: {
      general: 'No fixed upper age limit for JEE Main, subject to current rules',
      relaxation: 'Check current NTA information bulletin'
    },
    examPattern: [
      { stage: 'JEE Main', mode: 'Computer Based Test', duration: 'As per paper', details: 'Physics, Chemistry and Mathematics for Paper 1' }
    ],
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    syllabus: {
      'Physics': ['Mechanics', 'Thermodynamics', 'Electrodynamics', 'Optics', 'Modern Physics'],
      'Chemistry': ['Physical Chemistry', 'Organic Chemistry', 'Inorganic Chemistry'],
      'Mathematics': ['Algebra', 'Calculus', 'Coordinate Geometry', 'Trigonometry', 'Vectors']
    },
    strategy: ['Complete NCERT Chemistry', 'Build concepts', 'Practice problems', 'Solve PYQs', 'Take timed mocks'],
    importantTopics: ['Calculus', 'Algebra', 'Mechanics', 'Electrostatics', 'Organic Chemistry'],
    posts: ['Engineering Admissions'],
    officialLink: 'https://jeemain.nta.nic.in'
  },

  {
    id: 'jee-advanced',
    name: 'JEE Advanced',
    fullName: 'Joint Entrance Examination Advanced',
    category: 'Engineering',
    color: 'from-red-500 to-orange-500',
    icon: 'fa-microscope',
    tagline: 'Entrance examination for IIT undergraduate programmes',
    popularity: 97,
    eligibility: {
      education: 'Eligibility depends on JEE Advanced rules and qualifying examination',
      nationality: 'As specified by JEE Advanced authorities',
      other: 'JEE Main qualification requirements may apply'
    },
    ageLimit: {
      general: 'Notification-specific',
      relaxation: 'As per official rules'
    },
    examPattern: [
      { stage: 'Paper 1', mode: 'Computer Based Test', duration: 'As notified', details: 'Physics, Chemistry and Mathematics' },
      { stage: 'Paper 2', mode: 'Computer Based Test', duration: 'As notified', details: 'Physics, Chemistry and Mathematics' }
    ],
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    syllabus: {
      'Physics': ['Mechanics', 'Electricity', 'Magnetism', 'Optics', 'Modern Physics'],
      'Chemistry': ['Physical', 'Organic', 'Inorganic Chemistry'],
      'Mathematics': ['Algebra', 'Calculus', 'Coordinate Geometry', 'Vectors', 'Probability']
    },
    strategy: ['Master concepts', 'Solve advanced problems', 'Analyse PYQs', 'Take full mocks'],
    importantTopics: ['Calculus', 'Mechanics', 'Electromagnetism', 'Organic Chemistry', 'Algebra'],
    posts: ['IIT Undergraduate Programmes'],
    officialLink: 'https://jeeadv.ac.in'
  },

  {
    id: 'neet-ug',
    name: 'NEET UG',
    fullName: 'National Eligibility cum Entrance Test Undergraduate',
    category: 'Medical',
    color: 'from-green-500 to-teal-500',
    icon: 'fa-heart-pulse',
    tagline: 'National medical entrance examination',
    popularity: 100,
    eligibility: {
      education: 'Class 12/equivalent with required subjects',
      nationality: 'As per NTA rules',
      other: 'Subject and qualifying requirements apply'
    },
    ageLimit: {
      general: 'As per current NTA rules',
      relaxation: 'Check current information bulletin'
    },
    examPattern: [
      { stage: 'NEET UG', mode: 'Pen and Paper', duration: 'As notified', details: 'Physics, Chemistry and Biology' }
    ],
    subjects: ['Physics', 'Chemistry', 'Biology'],
    syllabus: {
      'Physics': ['Mechanics', 'Thermodynamics', 'Electricity', 'Magnetism', 'Optics', 'Modern Physics'],
      'Chemistry': ['Physical Chemistry', 'Organic Chemistry', 'Inorganic Chemistry'],
      'Biology': ['Cell Biology', 'Genetics', 'Human Physiology', 'Ecology', 'Plant Biology', 'Human Health']
    },
    strategy: ['Master NCERT Biology', 'Build Physics concepts', 'Revise Chemistry', 'Solve PYQs', 'Take mocks'],
    importantTopics: ['NCERT Biology', 'Human Physiology', 'Genetics', 'Organic Chemistry', 'Mechanics'],
    posts: ['MBBS', 'BDS', 'AYUSH and other participating programmes'],
    officialLink: 'https://neet.nta.nic.in'
  },

  {
    id: 'cuet-ug',
    name: 'CUET UG',
    fullName: 'Common University Entrance Test Undergraduate',
    category: 'University Admission',
    color: 'from-fuchsia-500 to-purple-500',
    icon: 'fa-user-graduate',
    tagline: 'Entrance route for undergraduate university admissions',
    popularity: 96,
    eligibility: {
      education: 'Class 12 or equivalent',
      nationality: 'As per NTA and university rules',
      other: 'Programme-specific requirements apply'
    },
    ageLimit: {
      general: 'Generally no fixed upper age limit, subject to university rules',
      relaxation: 'As per participating university'
    },
    examPattern: [
      { stage: 'CUET UG', mode: 'Computer Based Test', duration: 'Subject-specific', details: 'Language, domain subjects and General Aptitude components as selected' }
    ],
    subjects: ['Languages', 'Domain Subjects', 'General Aptitude'],
    syllabus: {
      'Languages': ['Reading Comprehension', 'Vocabulary', 'Grammar'],
      'General Aptitude': ['Reasoning', 'Numerical Ability', 'General Knowledge', 'Current Affairs'],
      'Domain Subjects': ['Based on selected Class 12 subjects']
    },
    strategy: ['Follow NCERT', 'Practice domain questions', 'Improve reading speed', 'Solve mocks'],
    importantTopics: ['NCERT Concepts', 'English', 'Reasoning', 'Current Affairs'],
    posts: ['Undergraduate Admission'],
    officialLink: 'https://cuet.nta.nic.in'
  },

  {
    id: 'gate',
    name: 'GATE',
    fullName: 'Graduate Aptitude Test in Engineering',
    category: 'Higher Education',
    color: 'from-cyan-500 to-blue-600',
    icon: 'fa-gears',
    tagline: 'Graduate-level examination for higher studies and recruitment',
    popularity: 91,
    eligibility: {
      education: 'Eligible undergraduate degree students/graduates as per GATE rules',
      nationality: 'Indian and eligible international candidates',
      other: 'Paper-specific requirements may apply'
    },
    ageLimit: {
      general: 'No general age limit',
      relaxation: 'Not generally applicable'
    },
    examPattern: [
      { stage: 'GATE', mode: 'Computer Based Test', duration: '3 hours', details: 'General Aptitude plus selected subject paper' }
    ],
    subjects: ['General Aptitude', 'Engineering/Science Subject'],
    syllabus: {
      'General Aptitude': ['Verbal Ability', 'Numerical Ability', 'Reasoning'],
      'Core Subject': ['Paper-specific syllabus']
    },
    strategy: ['Understand concepts', 'Solve PYQs', 'Make formula notes', 'Take full mocks'],
    importantTopics: ['Core Subject', 'Engineering Mathematics', 'General Aptitude'],
    posts: ['M.Tech/M.E./PhD Admissions', 'PSU Recruitment where applicable'],
    officialLink: 'https://gate2026.iitg.ac.in'
  },

  {
    id: 'cat',
    name: 'CAT',
    fullName: 'Common Admission Test',
    category: 'Management',
    color: 'from-yellow-500 to-orange-500',
    icon: 'fa-chart-line',
    tagline: 'Major entrance examination for MBA programmes',
    popularity: 94,
    eligibility: {
      education: "Bachelor's degree with required marks as per current rules",
      nationality: 'As per CAT rules',
      other: 'Institute-specific eligibility may apply'
    },
    ageLimit: {
      general: 'No general upper age limit',
      relaxation: 'Not generally applicable'
    },
    examPattern: [
      { stage: 'CAT', mode: 'Computer Based Test', duration: 'As notified', details: 'VARC, DILR and Quantitative Ability' }
    ],
    subjects: ['Verbal Ability', 'Reading Comprehension', 'DILR', 'Quantitative Ability'],
    syllabus: {
      'VARC': ['Reading Comprehension', 'Para Jumbles', 'Para Summary', 'Odd Sentence'],
      'DILR': ['Tables', 'Graphs', 'Puzzles', 'Arrangements', 'Data Sets'],
      'Quantitative Ability': ['Arithmetic', 'Algebra', 'Geometry', 'Number System']
    },
    strategy: ['Build fundamentals', 'Read daily', 'Practice DILR sets', 'Analyse mocks'],
    importantTopics: ['Arithmetic', 'Algebra', 'RC', 'DILR'],
    posts: ['MBA/PGDM Admissions'],
    officialLink: 'https://iimcat.ac.in'
  },

  {
    id: 'clat',
    name: 'CLAT',
    fullName: 'Common Law Admission Test',
    category: 'Law',
    color: 'from-rose-500 to-pink-500',
    icon: 'fa-scale-balanced',
    tagline: 'National entrance examination for law programmes',
    popularity: 90,
    eligibility: {
      education: '10+2 for undergraduate law programmes',
      nationality: 'As per Consortium rules',
      other: 'Programme-specific eligibility applies'
    },
    ageLimit: {
      general: 'As per current CLAT rules',
      relaxation: 'Check official notification'
    },
    examPattern: [
      { stage: 'CLAT UG', mode: 'Offline', duration: 'As notified', details: 'English, Current Affairs, Legal Reasoning, Logical Reasoning and Quantitative Techniques' }
    ],
    subjects: ['English', 'Current Affairs', 'Legal Reasoning', 'Logical Reasoning', 'Quantitative Techniques'],
    syllabus: {
      'English': ['Reading Comprehension', 'Vocabulary', 'Inference'],
      'Legal Reasoning': ['Legal Principles', 'Current Legal Issues', 'Passage-based Reasoning'],
      'Logical Reasoning': ['Arguments', 'Inference', 'Critical Reasoning'],
      'Quantitative Techniques': ['Arithmetic', 'Data Interpretation']
    },
    strategy: ['Read newspapers', 'Improve comprehension', 'Practice passages', 'Solve mocks'],
    importantTopics: ['Legal Reasoning', 'Current Affairs', 'Reading Comprehension', 'Logical Reasoning'],
    posts: ['BA LLB', 'BBA LLB and participating law programmes'],
    officialLink: 'https://consortiumofnlus.ac.in'
  },

  {
    id: 'ugc-net',
    name: 'UGC NET',
    fullName: 'University Grants Commission National Eligibility Test',
    category: 'Higher Education',
    color: 'from-violet-500 to-purple-600',
    icon: 'fa-book-open',
    tagline: 'Eligibility test for Assistant Professor and JRF',
    popularity: 88,
    eligibility: {
      education: "Master's degree or equivalent as per UGC rules",
      nationality: 'Indian and eligible candidates',
      other: 'Subject-specific eligibility may apply'
    },
    ageLimit: {
      general: 'Age limits depend on JRF eligibility; Assistant Professor has different rules',
      relaxation: 'As per UGC/NTA rules'
    },
    examPattern: [
      { stage: 'Paper I', mode: 'Computer Based Test', duration: 'As notified', details: 'Teaching and Research Aptitude' },
      { stage: 'Paper II', mode: 'Computer Based Test', duration: 'As notified', details: 'Subject-specific paper' }
    ],
    subjects: ['Teaching Aptitude', 'Research Aptitude', 'Subject-specific Paper'],
    syllabus: {
      'Paper I': ['Teaching Aptitude', 'Research', 'Communication', 'Reasoning', 'Data Interpretation', 'ICT', 'Higher Education'],
      'Paper II': ['Selected Subject']
    },
    strategy: ['Understand Paper I', 'Master subject syllabus', 'Solve PYQs', 'Take mocks'],
    importantTopics: ['Teaching Aptitude', 'Research Aptitude', 'Reasoning', 'Subject Paper'],
    posts: ['Assistant Professor Eligibility', 'Junior Research Fellowship'],
    officialLink: 'https://ugcnet.nta.nic.in'
  },

  {
    id: 'ibps-po',
    name: 'IBPS PO',
    fullName: 'Institute of Banking Personnel Selection Probationary Officer',
    category: 'Banking',
    color: 'from-blue-600 to-indigo-600',
    icon: 'fa-building-columns',
    tagline: 'Banking recruitment examination for Probationary Officers',
    popularity: 93,
    eligibility: {
      education: "Bachelor's degree",
      nationality: 'As per IBPS rules',
      other: 'Computer knowledge and language requirements may apply'
    },
    ageLimit: {
      general: 'Usually 20–30 years',
      relaxation: 'As per banking recruitment rules'
    },
    examPattern: [
      { stage: 'Prelims', mode: 'Online', duration: 'As notified', details: 'English, Quantitative Aptitude and Reasoning' },
      { stage: 'Mains', mode: 'Online', duration: 'As notified', details: 'Reasoning, English, Data Analysis, General/Economy Awareness and descriptive section' },
      { stage: 'Interview', mode: 'In-person', duration: 'As scheduled', details: 'Personality and banking awareness assessment' }
    ],
    subjects: ['Reasoning', 'Quantitative Aptitude', 'English', 'Banking Awareness'],
    syllabus: {
      'Reasoning': ['Puzzles', 'Seating Arrangement', 'Syllogism', 'Inequality', 'Coding'],
      'Quantitative Aptitude': ['Arithmetic', 'DI', 'Simplification', 'Number Series'],
      'English': ['RC', 'Grammar', 'Cloze Test', 'Vocabulary'],
      'Awareness': ['Banking', 'Economy', 'Current Affairs']
    },
    strategy: ['Practice calculations', 'Build reasoning speed', 'Read banking news', 'Analyse mocks'],
    importantTopics: ['Puzzles', 'DI', 'Arithmetic', 'RC', 'Banking Awareness'],
    posts: ['Probationary Officer/Management Trainee'],
    officialLink: 'https://www.ibps.in'
  },

  {
    id: 'ibps-clerk',
    name: 'IBPS Clerk',
    fullName: 'Institute of Banking Personnel Selection Customer Service Associate',
    category: 'Banking',
    color: 'from-teal-500 to-cyan-600',
    icon: 'fa-money-check-dollar',
    tagline: 'Bank clerical recruitment examination',
    popularity: 91,
    eligibility: {
      education: "Bachelor's degree",
      nationality: 'As per IBPS rules',
      other: 'State/UT language requirements may apply'
    },
    ageLimit: {
      general: 'Usually 20–28 years',
      relaxation: 'As per rules'
    },
    examPattern: [
      { stage: 'Prelims', mode: 'Online', duration: 'As notified', details: 'English, Numerical Ability and Reasoning' },
      { stage: 'Mains', mode: 'Online', duration: 'As notified', details: 'General/Financial Awareness, English, Reasoning and Quantitative Aptitude' }
    ],
    subjects: ['English', 'Numerical Ability', 'Reasoning', 'General Awareness'],
    syllabus: {
      'Reasoning': ['Puzzles', 'Syllogism', 'Coding', 'Inequality'],
      'Numerical Ability': ['Arithmetic', 'Simplification', 'DI', 'Number Series'],
      'English': ['RC', 'Grammar', 'Vocabulary'],
      'Awareness': ['Banking', 'Economy', 'Current Affairs']
    },
    strategy: ['Build speed', 'Practice sectional tests', 'Solve PYQs', 'Take mocks'],
    importantTopics: ['Arithmetic', 'Puzzles', 'DI', 'English', 'Banking Awareness'],
    posts: ['Customer Service Associate/Clerk'],
    officialLink: 'https://www.ibps.in'
  },

  {
    id: 'sbi-po',
    name: 'SBI PO',
    fullName: 'State Bank of India Probationary Officer',
    category: 'Banking',
    color: 'from-blue-500 to-sky-500',
    icon: 'fa-landmark',
    tagline: 'Probationary Officer recruitment by State Bank of India',
    popularity: 94,
    eligibility: {
      education: "Bachelor's degree",
      nationality: 'As per SBI rules',
      other: 'Check current recruitment notification'
    },
    ageLimit: {
      general: 'Usually 21–30 years',
      relaxation: 'As per SBI rules'
    },
    examPattern: [
      { stage: 'Prelims', mode: 'Online', duration: 'As notified', details: 'English, Quantitative Aptitude and Reasoning' },
      { stage: 'Mains', mode: 'Online', duration: 'As notified', details: 'Reasoning, Data Analysis, English, Economy/Banking Awareness and descriptive test' },
      { stage: 'Group Exercise/Interview', mode: 'In-person', duration: 'As notified', details: 'Final selection stage' }
    ],
    subjects: ['Reasoning', 'Quantitative Aptitude', 'English', 'Data Analysis', 'Banking Awareness'],
    syllabus: {
      'Reasoning': ['Puzzles', 'Logical Reasoning', 'Syllogism', 'Coding'],
      'Quantitative Aptitude': ['Arithmetic', 'DI', 'Data Sufficiency'],
      'English': ['RC', 'Grammar', 'Vocabulary'],
      'Awareness': ['Banking', 'Economy', 'Current Affairs']
    },
    strategy: ['Build concepts', 'Practice speed', 'Study banking awareness', 'Analyse mocks'],
    importantTopics: ['Puzzles', 'DI', 'Arithmetic', 'RC', 'Banking Awareness'],
    posts: ['Probationary Officer'],
    officialLink: 'https://sbi.co.in'
  },

  {
    id: 'rrb-ntpc',
    name: 'RRB NTPC',
    fullName: 'Railway Recruitment Board Non-Technical Popular Categories',
    category: 'Railways',
    color: 'from-red-500 to-rose-500',
    icon: 'fa-train',
    tagline: 'Major railway recruitment examination',
    popularity: 95,
    eligibility: {
      education: '12th or graduation depending on post',
      nationality: 'As per RRB rules',
      other: 'Post-specific requirements apply'
    },
    ageLimit: {
      general: 'Notification-specific',
      relaxation: 'As per railway recruitment rules'
    },
    examPattern: [
      { stage: 'CBT 1', mode: 'Computer Based Test', duration: 'As notified', details: 'General Awareness, Mathematics and General Intelligence & Reasoning' },
      { stage: 'CBT 2', mode: 'Computer Based Test', duration: 'As notified', details: 'Higher-level questions from core sections' }
    ],
    subjects: ['General Awareness', 'Mathematics', 'Reasoning'],
    syllabus: {
      'Mathematics': ['Arithmetic', 'Percentage', 'Ratio', 'Time & Work', 'Algebra', 'Geometry', 'DI'],
      'Reasoning': ['Series', 'Coding', 'Puzzles', 'Syllogism', 'Analogy'],
      'General Awareness': ['History', 'Geography', 'Polity', 'Science', 'Current Affairs', 'Railways']
    },
    strategy: ['Build arithmetic speed', 'Practice reasoning', 'Study static GK', 'Solve railway PYQs'],
    importantTopics: ['Arithmetic', 'Reasoning', 'General Awareness', 'Current Affairs'],
    posts: ['Station Master', 'Goods Train Manager', 'Junior Clerk', 'Senior Clerk', 'Other NTPC Posts'],
    officialLink: 'https://www.rrbcdg.gov.in'
  },

  {
    id: 'rrb-group-d',
    name: 'RRB Group D',
    fullName: 'Railway Recruitment Board Level 1',
    category: 'Railways',
    color: 'from-orange-500 to-red-500',
    icon: 'fa-train-subway',
    tagline: 'Railway Level-1 recruitment examination',
    popularity: 94,
    eligibility: {
      education: 'As specified in the current RRB notification',
      nationality: 'As per RRB rules',
      other: 'Physical efficiency requirements may apply'
    },
    ageLimit: {
      general: 'Notification-specific',
      relaxation: 'As per rules'
    },
    examPattern: [
      { stage: 'CBT', mode: 'Computer Based Test', duration: 'As notified', details: 'Mathematics, General Intelligence & Reasoning, General Science and General Awareness' },
      { stage: 'PET', mode: 'Physical Test', duration: 'As notified', details: 'Physical efficiency assessment for eligible candidates' }
    ],
    subjects: ['Mathematics', 'Reasoning', 'General Science', 'General Awareness'],
    syllabus: {
      'Mathematics': ['Number System', 'Percentage', 'Ratio', 'Average', 'Time & Work', 'Mensuration'],
      'Reasoning': ['Series', 'Coding', 'Analogy', 'Directions', 'Syllogism'],
      'Science': ['Physics', 'Chemistry', 'Biology'],
      'General Awareness': ['Current Affairs', 'History', 'Geography', 'Polity']
    },
    strategy: ['Study basics', 'Solve PYQs', 'Practice speed', 'Take mocks'],
    importantTopics: ['Arithmetic', 'Reasoning', 'Science', 'Current Affairs'],
    posts: ['Track Maintainer', 'Assistant Pointsman', 'Assistant in various railway departments'],
    officialLink: 'https://www.rrbcdg.gov.in'
  },

  {
    id: 'ctet',
    name: 'CTET',
    fullName: 'Central Teacher Eligibility Test',
    category: 'Teaching',
    color: 'from-green-500 to-emerald-500',
    icon: 'fa-chalkboard-user',
    tagline: 'Teacher eligibility examination conducted nationally',
    popularity: 89,
    eligibility: {
      education: 'Depends on paper and teaching level',
      nationality: 'As per CBSE/CTET rules',
      other: 'Required teacher education qualification applies'
    },
    ageLimit: {
      general: 'No general upper age limit for CTET',
      relaxation: 'As per applicable rules'
    },
    examPattern: [
      { stage: 'Paper I', mode: 'Offline/CBT as notified', duration: 'As notified', details: 'For teaching Classes I–V' },
      { stage: 'Paper II', mode: 'Offline/CBT as notified', duration: 'As notified', details: 'For teaching Classes VI–VIII' }
    ],
    subjects: ['Child Development & Pedagogy', 'Language', 'Mathematics', 'EVS/Science/Social Studies'],
    syllabus: {
      'Pedagogy': ['Child Development', 'Learning', 'Inclusive Education', 'Assessment'],
      'Languages': ['Comprehension', 'Language Pedagogy'],
      'Mathematics': ['Number', 'Geometry', 'Arithmetic', 'Pedagogy'],
      'EVS/Science/Social Studies': ['Subject concepts', 'Pedagogy']
    },
    strategy: ['Understand pedagogy', 'Study NCERT', 'Solve PYQs', 'Practice mocks'],
    importantTopics: ['Pedagogy', 'NCERT', 'Comprehension', 'Subject Knowledge'],
    posts: ['Teacher Eligibility'],
    officialLink: 'https://ctet.nic.in'
  }
];

export const getExamById = (id) => exams.find((e) => e.id === id);

export const examCategories = [
  'All',
  'SSC',
  'UPSC',
  'Defence',
  'Engineering',
  'Medical',
  'University Admission',
  'Higher Education',
  'Management',
  'Law',
  'Banking',
  'Railways',
  'Teaching'
];
