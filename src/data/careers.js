// Career roadmap data - structured for easy updates
export const careerRoadmaps = [
  {
    id: 'government-jobs',
    title: 'Government Jobs',
    icon: 'fa-landmark',
    color: 'from-blue-500 to-indigo-600',
    summary: 'A general pathway to secure central/state government jobs through competitive exams.',
    steps: [
      { title: 'Class 10-12', desc: 'Complete schooling with good academic grades. Start basic GK & current affairs reading habit.' },
      { title: 'Choose Graduation Stream', desc: 'Pursue a Bachelor\'s degree (Arts/Science/Commerce) - most govt exams need only a basic degree.' },
      { title: 'Identify Target Exams', desc: 'Shortlist exams matching your eligibility: SSC CGL/CHSL, State PSC, Railways (RRB), Banking (IBPS/SBI).' },
      { title: 'Structured Preparation', desc: 'Build strong basics in Quant, Reasoning, English & GK. Follow NCERT + standard reference books.' },
      { title: 'Mock Tests & Revision', desc: 'Attempt mock tests regularly, analyze mistakes, and revise weak areas systematically.' },
      { title: 'Apply & Appear for Exams', desc: 'Apply for multiple relevant exams to maximize opportunities; track results and prepare for interviews/DV.' }
    ]
  },
  {
    id: 'defence',
    title: 'Defence Services',
    icon: 'fa-shield-halved',
    color: 'from-emerald-600 to-green-600',
    summary: 'Roadmap to join Indian Armed Forces as an officer through NDA, CDS or other entries.',
    steps: [
      { title: 'Class 10', desc: 'Focus on Maths & Science if targeting technical entries (Navy/Air Force).' },
      { title: 'Class 11-12', desc: 'Choose PCM stream for NDA (Air Force/Navy); any stream fine for Army wing. Maintain fitness.' },
      { title: 'NDA / CDS Exam', desc: 'Appear for NDA (after 12th) or CDS (after graduation) written exam covering Maths, English & GK.' },
      { title: 'SSB Interview', desc: 'Clear the 5-day Services Selection Board process: psychological tests, group tasks, personal interview.' },
      { title: 'Medical Examination', desc: 'Pass the medical fitness test as per Armed Forces standards.' },
      { title: 'Training Academy', desc: 'Join NDA/IMA/INA/AFA/OTA for rigorous training before being commissioned as an officer.' }
    ]
  },
  {
    id: 'ssc',
    title: 'SSC Careers',
    icon: 'fa-building-columns',
    color: 'from-sky-500 to-blue-500',
    summary: 'Pathway into Staff Selection Commission recruited roles across ministries.',
    steps: [
      { title: 'Class 12 / Graduation', desc: 'CHSL requires 12th pass; CGL requires a Bachelor\'s degree.' },
      { title: 'Pick the Right Exam', desc: 'CHSL for LDC/DEO/PA roles; CGL for Inspector/Auditor/Officer level roles.' },
      { title: 'Tier-wise Preparation', desc: 'Prepare for Tier I (CBT) then Tier II with focused practice on Quant, English, Reasoning & GK.' },
      { title: 'Skill/Typing Test', desc: 'Practice typing speed if targeting DEO/LDC-JSA posts.' },
      { title: 'Document Verification', desc: 'Keep certificates ready; DV is the final step before joining.' },
      { title: 'Posting & Growth', desc: 'Get posted to a department; promotions follow department-specific service rules.' }
    ]
  },
  {
    id: 'banking',
    title: 'Banking Sector',
    icon: 'fa-building-columns',
    color: 'from-teal-500 to-cyan-600',
    summary: 'Roadmap for Probationary Officer (PO) & Clerk roles in public/private banks.',
    steps: [
      { title: 'Graduation', desc: 'Any Bachelor\'s degree qualifies for most banking exams (IBPS PO/Clerk, SBI PO/Clerk).' },
      { title: 'Prelims Preparation', desc: 'Practice Quant, Reasoning & English at speed - prelims is time-bound and competitive.' },
      { title: 'Mains Preparation', desc: 'Add General/Banking Awareness, Computer Knowledge and Descriptive Writing to your prep.' },
      { title: 'Interview / Group Exercise', desc: 'For PO roles, prepare for personal interview and group discussion rounds.' },
      { title: 'Selection & Posting', desc: 'Get allotted to a bank branch; POs undergo a probation & training period.' },
      { title: 'Career Growth', desc: 'Progress through Officer grades (Scale I to VII) with experience & internal exams.' }
    ]
  },
  {
    id: 'teaching',
    title: 'Teaching Profession',
    icon: 'fa-chalkboard-user',
    color: 'from-orange-500 to-amber-500',
    summary: 'Pathway to becoming a certified school or college teacher in India.',
    steps: [
      { title: 'Graduation', desc: 'Complete a Bachelor\'s degree in your preferred subject specialization.' },
      { title: 'B.Ed / D.El.Ed', desc: 'Pursue B.Ed (secondary) or D.El.Ed (primary) teacher training program.' },
      { title: 'Teaching Eligibility Test', desc: 'Clear CTET/State-TET to qualify as a teacher for government schools.' },
      { title: 'Apply for Vacancies', desc: 'Apply through state recruitment boards (e.g. KVS, NVS, state education dept) or private schools.' },
      { title: 'Interview / Demo Class', desc: 'Many schools require a demo teaching session as part of selection.' },
      { title: 'Career Growth', desc: 'Progress to senior teacher, HOD, vice-principal roles; pursue M.Ed/NET for college-level teaching.' }
    ]
  },
  {
    id: 'technology',
    title: 'Technology Careers',
    icon: 'fa-laptop-code',
    color: 'from-purple-500 to-fuchsia-500',
    summary: 'Roadmap for a career in Software Development, IT & emerging tech fields.',
    steps: [
      { title: 'Class 11-12 (PCM)', desc: 'Take Physics, Chemistry, Maths stream; build coding basics early (Python/Scratch).' },
      { title: 'Engineering / BCA / B.Sc(CS)', desc: 'Pursue a relevant degree via JEE or state entrance exams, or direct BCA/B.Sc admission.' },
      { title: 'Build Core Skills', desc: 'Learn Data Structures & Algorithms, a programming language (Python/Java/JS), and Git/GitHub.' },
      { title: 'Projects & Internships', desc: 'Build real projects, contribute to open source, and secure internships for practical exposure.' },
      { title: 'Placements / Higher Studies', desc: 'Prepare for campus placements (coding rounds + HR) or pursue M.Tech/MS for specialization.' },
      { title: 'Career Growth', desc: 'Progress from Junior Developer → Senior Engineer → Tech Lead/Architect, or explore Data Science, AI/ML, Cybersecurity.' }
    ]
  },
  {
    id: 'after-10th',
    title: 'Careers After Class 10',
    icon: 'fa-school',
    color: 'from-pink-500 to-rose-500',
    summary: 'Key stream and career pathway choices right after Class 10 board exams.',
    steps: [
      { title: 'Choose a Stream', desc: 'Science (PCM/PCB), Commerce, or Humanities/Arts based on interest & career goal.' },
      { title: 'Alternative: Diploma/ITI', desc: 'Polytechnic diploma or ITI courses offer direct vocational/technical career paths.' },
      { title: 'Alternative: Defence NDA path', desc: 'Strong PCM students can target NDA after 12th for an armed forces career.' },
      { title: 'Build Foundational Skills', desc: 'Strengthen Maths, English & reasoning skills regardless of stream chosen.' },
      { title: 'Class 11-12', desc: 'Focus on board exams + entrance exam prep (JEE/NEET/CUET) relevant to the stream.' },
      { title: 'Next Steps', desc: 'Move to graduation, professional courses, or skill-based diploma employment.' }
    ]
  },
  {
    id: 'after-12th',
    title: 'Careers After Class 12',
    icon: 'fa-graduation-cap',
    color: 'from-indigo-500 to-blue-600',
    summary: 'Major pathways available after completing Class 12 across streams.',
    steps: [
      { title: 'Science Stream', desc: 'Engineering (JEE), Medical (NEET), B.Sc, Defence (NDA already done at 12th entry), or Architecture (NATA).' },
      { title: 'Commerce Stream', desc: 'B.Com, BBA, CA/CS/CMA professional courses, or Banking/SSC exam preparation.' },
      { title: 'Arts/Humanities Stream', desc: 'BA (various specializations), Law (CLAT), Journalism, Design, or Civil Services long-term prep.' },
      { title: 'Common Entrance', desc: 'CUET opens admission to most central universities regardless of stream.' },
      { title: 'Skill/Vocational Path', desc: 'Diploma courses, government ITI-based certifications for direct employability.' },
      { title: 'Long-term Planning', desc: 'Align graduation choice with target career: govt jobs, private sector, or further studies (PG/research).' }
    ]
  },
  {
    id: 'after-graduation',
    title: 'Careers After Graduation',
    icon: 'fa-user-tie',
    color: 'from-cyan-500 to-teal-500',
    summary: 'Options available once you complete your Bachelor\'s degree.',
    steps: [
      { title: 'Government Exams', desc: 'SSC CGL, Banking (IBPS/SBI PO), UPSC Civil Services, State PSC exams.' },
      { title: 'Higher Studies', desc: 'Pursue Master\'s (M.A/M.Sc/M.Tech/MBA) via entrance exams like CAT/CUET-PG/GATE.' },
      { title: 'Private Sector Jobs', desc: 'Apply for campus placements or off-campus opportunities matching your degree specialization.' },
      { title: 'Professional Certifications', desc: 'Add value with certifications (Data Analytics, Digital Marketing, Project Management, etc.).' },
      { title: 'Entrepreneurship', desc: 'Explore startup opportunities, freelancing or family business with structured business planning.' },
      { title: 'Long-Term Career Growth', desc: 'Continue upskilling, target leadership roles, or pursue further specialization / research (PhD).' }
    ]
  }
]

export const careerCategories = ['All', 'government-jobs', 'defence', 'ssc', 'banking', 'teaching', 'technology', 'after-10th', 'after-12th', 'after-graduation']
