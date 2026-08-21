// StudyPath - Free Resources Database

export const resourceCategories = [
  {
    id: "formula-sheets",
    name: "Formula Sheets",
    icon: "🧮",
    color: "indigo"
  },
  {
    id: "revision-notes",
    name: "Revision Notes",
    icon: "📝",
    color: "emerald"
  },
  {
    id: "vocabulary",
    name: "Vocabulary",
    icon: "📖",
    color: "amber"
  },
  {
    id: "practice-material",
    name: "Practice Material",
    icon: "✏️",
    color: "rose"
  },
  {
    id: "official-sources",
    name: "Official Sources",
    icon: "🏛️",
    color: "blue"
  },
  {
    id: "free-learning",
    name: "Free Learning",
    icon: "🎓",
    color: "purple"
  },
  {
    id: "checklists",
    name: "Checklists",
    icon: "✅",
    color: "cyan"
  }
];

export const resources = [

  // ==============================
  // FORMULA SHEETS
  // ==============================

  {
    id: "formula-percentage",
    category: "formula-sheets",
    title: "Percentage & Ratio Formulas",
    tags: ["percentage", "ratio", "quant", "ssc", "banking", "railway"],
    premium: false,
    content: [
      "Percentage = (Part / Whole) × 100",
      "Percentage change = (Change / Original) × 100",
      "New value after increase = Original × (1 + rate/100)",
      "New value after decrease = Original × (1 - rate/100)",
      "Ratio compares two quantities using the same unit."
    ]
  },

  {
    id: "formula-profit-loss",
    category: "formula-sheets",
    title: "Profit, Loss & Discount",
    tags: ["profit", "loss", "discount", "ssc", "banking"],
    premium: false,
    content: [
      "Profit = Selling Price - Cost Price",
      "Loss = Cost Price - Selling Price",
      "Profit% = Profit / Cost Price × 100",
      "Loss% = Loss / Cost Price × 100",
      "Discount = Marked Price - Selling Price",
      "Discount% = Discount / Marked Price × 100"
    ]
  },

  {
    id: "formula-interest",
    category: "formula-sheets",
    title: "Simple & Compound Interest",
    tags: ["interest", "si", "ci", "ssc", "banking"],
    premium: false,
    content: [
      "Simple Interest = P × R × T / 100",
      "Amount under SI = Principal + Simple Interest",
      "Compound Amount = P(1 + R/100)^T",
      "Compound Interest = Amount - Principal"
    ]
  },

  {
    id: "formula-average",
    category: "formula-sheets",
    title: "Average Formulas",
    tags: ["average", "quant", "ssc", "banking"],
    premium: false,
    content: [
      "Average = Sum of observations / Number of observations",
      "Sum = Average × Number of observations",
      "Combined Average = Total Sum / Total Number of observations"
    ]
  },

  {
    id: "formula-time-work",
    category: "formula-sheets",
    title: "Time & Work",
    tags: ["time", "work", "quant", "ssc", "railway"],
    premium: false,
    content: [
      "If A completes a work in x days, A's one-day work is 1/x.",
      "Combined work rate is the sum of individual work rates.",
      "Time = Work / Rate.",
      "Efficiency and work rate are directly proportional."
    ]
  },

  {
    id: "formula-speed",
    category: "formula-sheets",
    title: "Time, Speed & Distance",
    tags: ["speed", "distance", "time", "ssc", "nda", "railway"],
    premium: false,
    content: [
      "Speed = Distance / Time",
      "Distance = Speed × Time",
      "Time = Distance / Speed",
      "Average Speed = Total Distance / Total Time",
      "1 m/s = 18/5 km/h"
    ]
  },

  {
    id: "formula-mensuration",
    category: "formula-sheets",
    title: "Mensuration Formula Sheet",
    tags: ["mensuration", "geometry", "ssc", "nda", "railway"],
    premium: false,
    content: [
      "Rectangle Area = Length × Breadth",
      "Square Area = Side²",
      "Triangle Area = 1/2 × Base × Height",
      "Circle Area = πr²",
      "Circle Circumference = 2πr",
      "Cuboid Volume = l × b × h",
      "Cylinder Volume = πr²h",
      "Sphere Volume = 4πr³/3"
    ]
  },

  {
    id: "formula-trigonometry",
    category: "formula-sheets",
    title: "Trigonometry Quick Revision",
    tags: ["trigonometry", "jee", "nda", "cds"],
    premium: false,
    content: [
      "sin²θ + cos²θ = 1",
      "1 + tan²θ = sec²θ",
      "1 + cot²θ = cosec²θ",
      "sin 2θ = 2sinθcosθ",
      "cos 2θ = cos²θ - sin²θ"
    ]
  },

  {
    id: "formula-algebra",
    category: "formula-sheets",
    title: "Algebraic Identities",
    tags: ["algebra", "jee", "nda", "ssc"],
    premium: false,
    content: [
      "(a+b)² = a² + 2ab + b²",
      "(a-b)² = a² - 2ab + b²",
      "a²-b² = (a-b)(a+b)",
      "(a+b)³ = a³ + 3a²b + 3ab² + b³",
      "(a-b)³ = a³ - 3a²b + 3ab² - b³"
    ]
  },

  // ==============================
  // REVISION NOTES
  // ==============================

  {
    id: "revision-polity",
    category: "revision-notes",
    title: "Indian Polity Quick Revision",
    tags: ["polity", "upsc", "ssc", "nda", "cds", "cuet"],
    premium: false,
    content: [
      "The Constitution of India came into force on 26 January 1950.",
      "Fundamental Rights are mainly covered under Articles 12–35.",
      "Directive Principles are covered under Articles 36–51.",
      "Parliament consists of Lok Sabha and Rajya Sabha.",
      "The President is the constitutional head of the Union.",
      "The Prime Minister heads the Council of Ministers.",
      "The Supreme Court is the highest court of India."
    ]
  },

  {
    id: "revision-history",
    category: "revision-notes",
    title: "Modern Indian History",
    tags: ["history", "upsc", "ssc", "nda", "cds"],
    premium: false,
    content: [
      "1857 - Revolt of 1857",
      "1885 - Formation of Indian National Congress",
      "1905 - Partition of Bengal",
      "1919 - Jallianwala Bagh",
      "1920 - Non-Cooperation Movement",
      "1930 - Civil Disobedience Movement",
      "1942 - Quit India Movement",
      "1947 - Independence"
    ]
  },

  {
    id: "revision-geography",
    category: "revision-notes",
    title: "Indian Geography Quick Revision",
    tags: ["geography", "upsc", "ssc", "nda", "cds"],
    premium: false,
    content: [
      "The Himalayas form India's major northern mountain system.",
      "The Ganga-Brahmaputra system forms a major river basin.",
      "The Peninsular Plateau is one of India's oldest geological regions.",
      "Western Ghats and Eastern Ghats are major peninsular hill systems.",
      "India has a tropical monsoon climate."
    ]
  },

  {
    id: "revision-economy",
    category: "revision-notes",
    title: "Indian Economy Basics",
    tags: ["economy", "upsc", "ssc", "banking", "cuet"],
    premium: false,
    content: [
      "GDP measures the value of final goods and services produced within an economy.",
      "Inflation is a sustained increase in the general price level.",
      "RBI is India's central banking institution.",
      "Fiscal policy deals with government revenue and expenditure.",
      "Monetary policy deals with money and credit conditions."
    ]
  },

  {
    id: "revision-science",
    category: "revision-notes",
    title: "General Science Revision",
    tags: ["science", "ssc", "railway", "nda", "cds"],
    premium: false,
    content: [
      "Force is measured in newtons.",
      "Work is measured in joules.",
      "Power is the rate of doing work.",
      "The cell is the basic unit of life.",
      "DNA carries hereditary information.",
      "The SI unit of electric current is ampere."
    ]
  },

  {
    id: "revision-computer",
    category: "revision-notes",
    title: "Computer Awareness",
    tags: ["computer", "ssc", "banking", "railway"],
    premium: false,
    content: [
      "CPU stands for Central Processing Unit.",
      "RAM is volatile memory.",
      "ROM is non-volatile memory.",
      "LAN stands for Local Area Network.",
      "WAN stands for Wide Area Network.",
      "An operating system manages hardware and software resources."
    ]
  },

  // ==============================
  // VOCABULARY
  // ==============================

  {
    id: "vocabulary-basic",
    category: "vocabulary",
    title: "High Frequency Vocabulary",
    tags: ["english", "vocabulary", "ssc", "nda", "cds", "banking"],
    premium: false,
    content: [
      "Abate - to reduce",
      "Candid - truthful and straightforward",
      "Diligent - hardworking and careful",
      "Eloquent - fluent and persuasive",
      "Frugal - economical",
      "Hostile - unfriendly",
      "Impeccable - flawless",
      "Lucid - clear and understandable",
      "Meticulous - very careful",
      "Pragmatic - practical",
      "Reluctant - unwilling",
      "Vigilant - watchful"
    ]
  },

  {
    id: "vocabulary-idioms",
    category: "vocabulary",
    title: "Important Idioms & Phrases",
    tags: ["idioms", "english", "ssc", "nda", "cds"],
    premium: false,
    content: [
      "Break the ice - start a conversation",
      "Hit the nail on the head - describe something exactly",
      "Once in a blue moon - very rarely",
      "Under the weather - feeling unwell",
      "Blessing in disguise - something good that initially appears bad",
      "The ball is in your court - it is your decision",
      "Cut corners - take shortcuts"
    ]
  },

  // ==============================
  // PRACTICE MATERIAL
  // ==============================

  {
    id: "practice-quant",
    category: "practice-material",
    title: "Quantitative Aptitude Practice",
    tags: ["quant", "ssc", "banking", "railway"],
    premium: false,
    content: [
      "Practice percentage and ratio questions.",
      "Practice average and profit-loss questions.",
      "Practice time-work and time-distance.",
      "Practice simple and compound interest.",
      "Record mistakes and reattempt them."
    ],
    linkTo: "/quiz"
  },

  {
    id: "practice-reasoning",
    category: "practice-material",
    title: "Reasoning Practice",
    tags: ["reasoning", "ssc", "banking", "railway"],
    premium: false,
    content: [
      "Analogy",
      "Classification",
      "Number series",
      "Coding-decoding",
      "Blood relations",
      "Directions",
      "Syllogism",
      "Puzzles"
    ],
    linkTo: "/quiz"
  },

  {
    id: "practice-english",
    category: "practice-material",
    title: "English Practice",
    tags: ["english", "ssc", "nda", "cds", "banking"],
    premium: false,
    content: [
      "Error spotting",
      "Sentence improvement",
      "Cloze test",
      "Reading comprehension",
      "Vocabulary",
      "Idioms and phrases"
    ],
    linkTo: "/quiz"
  },

  {
    id: "practice-gk",
    category: "practice-material",
    title: "General Knowledge Practice",
    tags: ["gk", "ssc", "nda", "cds", "railway"],
    premium: false,
    content: [
      "History",
      "Geography",
      "Polity",
      "Economics",
      "General Science",
      "Static GK",
      "Current Affairs"
    ],
    linkTo: "/quiz"
  },

  // ==============================
  // OFFICIAL SOURCES
  // ==============================

  {
    id: "official-upsc",
    category: "official-sources",
    title: "UPSC Official Website",
    tags: ["upsc", "cse", "nda", "cds", "ias"],
    premium: false,
    content: [
      "Official UPSC portal for notifications, examination information, syllabus and other official updates.",
      "Always verify dates and eligibility from the current notification."
    ],
    linkTo: "https://upsc.gov.in/"
  },

  {
    id: "official-ssc",
    category: "official-sources",
    title: "SSC Official Website",
    tags: ["ssc", "cgl", "chsl", "mts", "gd"],
    premium: false,
    content: [
      "Official Staff Selection Commission portal.",
      "Use it for notifications, examination information and official updates."
    ],
    linkTo: "https://ssc.gov.in/"
  },

  {
    id: "official-jee-main",
    category: "official-sources",
    title: "JEE Main Official Website",
    tags: ["jee", "jee-main", "engineering"],
    premium: false,
    content: [
      "Official JEE Main portal.",
      "Use it for current notices, information bulletins and examination updates."
    ],
    linkTo: "https://jeemain.nta.nic.in/"
  },

  {
    id: "official-jee-advanced",
    category: "official-sources",
    title: "JEE Advanced Official Website",
    tags: ["jee", "jee-advanced", "iit"],
    premium: false,
    content: [
      "Official JEE Advanced portal.",
      "Use it for syllabus, examination information and official papers."
    ],
    linkTo: "https://jeeadv.ac.in/"
  },

  {
    id: "official-neet",
    category: "official-sources",
    title: "NEET UG Official Website",
    tags: ["neet", "medical", "nta"],
    premium: false,
    content: [
      "Official NEET UG portal.",
      "Use it for current information, notices and examination documents."
    ],
    linkTo: "https://neet.nta.nic.in/"
  },

  {
    id: "official-cuet",
    category: "official-sources",
    title: "CUET Official Website",
    tags: ["cuet", "nta", "university"],
    premium: false,
    content: [
      "Official CUET portal.",
      "Use it for current information, notices and examination updates."
    ],
    linkTo: "https://cuet.nta.nic.in/"
  },

  {
    id: "official-ugc-net",
    category: "official-sources",
    title: "UGC NET Official Website",
    tags: ["ugc-net", "nta", "research", "teaching"],
    premium: false,
    content: [
      "Official UGC NET portal.",
      "Use it for examination notices and current information."
    ],
    linkTo: "https://ugcnet.nta.nic.in/"
  },

  {
    id: "official-ctet",
    category: "official-sources",
    title: "CTET Official Website",
    tags: ["ctet", "teaching", "education"],
    premium: false,
    content: [
      "Official CTET portal.",
      "Use it for current notifications, syllabus and examination information."
    ],
    linkTo: "https://ctet.nic.in/"
  },

  {
    id: "official-ibps",
    category: "official-sources",
    title: "IBPS Official Website",
    tags: ["ibps", "banking", "po", "clerk"],
    premium: false,
    content: [
      "Official IBPS recruitment portal.",
      "Use it for banking recruitment notifications and examination information."
    ],
    linkTo: "https://www.ibps.in/"
  },

  {
    id: "official-sbi",
    category: "official-sources",
    title: "SBI Careers",
    tags: ["sbi", "banking", "po", "clerk"],
    premium: false,
    content: [
      "Official State Bank of India careers portal.",
      "Use it for SBI recruitment notifications."
    ],
    linkTo: "https://sbi.co.in/web/careers"
  },

  {
    id: "official-rrb",
    category: "official-sources",
    title: "Railway Recruitment",
    tags: ["rrb", "railway", "ntpc", "group-d"],
    premium: false,
    content: [
      "Use the relevant official Railway Recruitment Board regional portal.",
      "Always verify recruitment information from the official notification."
    ],
    linkTo: "https://indianrailways.gov.in/"
  },

  {
    id: "official-cat",
    category: "official-sources",
    title: "CAT Official Website",
    tags: ["cat", "mba", "management", "iim"],
    premium: false,
    content: [
      "Official CAT examination portal.",
      "Use it for current examination information and notices."
    ],
    linkTo: "https://iimcat.ac.in/"
  },

  // ==============================
  // FREE LEARNING
  // ==============================

  {
    id: "free-ncert",
    category: "free-learning",
    title: "NCERT Textbooks",
    tags: ["ncert", "books", "jee", "neet", "upsc", "cuet"],
    premium: false,
    content: [
      "Official NCERT textbooks are available online.",
      "Useful for school fundamentals and competitive examination preparation."
    ],
    linkTo: "https://ncert.nic.in/textbook.php"
  },

  {
    id: "free-diksha",
    category: "free-learning",
    title: "DIKSHA",
    tags: ["diksha", "education", "school", "free"],
    premium: false,
    content: [
      "Government-supported digital learning platform.",
      "Provides educational resources for students and teachers."
    ],
    linkTo: "https://diksha.gov.in/"
  },

  {
    id: "free-swayam",
    category: "free-learning",
    title: "SWAYAM",
    tags: ["swayam", "courses", "free", "university"],
    premium: false,
    content: [
      "Free online courses from Indian institutions and universities.",
      "Useful for academic and skill development."
    ],
    linkTo: "https://swayam.gov.in/"
  },

  {
    id: "free-nptel",
    category: "free-learning",
    title: "NPTEL",
    tags: ["nptel", "iit", "engineering", "science"],
    premium: false,
    content: [
      "Courses and lectures from IITs and IISc.",
      "Useful for engineering, science and technology."
    ],
    linkTo: "https://nptel.ac.in/"
  },

  {
    id: "free-khan",
    category: "free-learning",
    title: "Khan Academy",
    tags: ["maths", "science", "free", "practice"],
    premium: false,
    content: [
      "Free concept-learning lessons and practice.",
      "Useful especially for mathematics and science fundamentals."
    ],
    linkTo: "https://www.khanacademy.org/"
  },

  // ==============================
  // CHECKLISTS
  // ==============================

  {
    id: "checklist-daily",
    category: "checklists",
    title: "Daily Study Checklist",
    tags: ["study", "routine", "planning"],
    premium: false,
    content: [
      "Revise yesterday's topic",
      "Complete today's main topic",
      "Solve practice questions",
      "Review mistakes",
      "Revise vocabulary/current affairs",
      "Mark weak topics"
    ]
  },

  {
    id: "checklist-mock",
    category: "checklists",
    title: "Mock Test Analysis Checklist",
    tags: ["mock", "test", "analysis"],
    premium: false,
    content: [
      "Record your score",
      "Check attempted questions",
      "Identify silly mistakes",
      "Identify concept mistakes",
      "Check time management",
      "Reattempt incorrect questions",
      "Add weak topics to revision"
    ]
  },

  {
    id: "checklist-exam-day",
    category: "checklists",
    title: "Exam Day Checklist",
    tags: ["exam", "admit-card", "preparation"],
    premium: false,
    content: [
      "Check the official admit-card instructions",
      "Carry required identification",
      "Check reporting time",
      "Check permitted items",
      "Plan your route",
      "Reach the centre with enough time"
    ]
  }
];

// =====================================================
// HELPER FUNCTIONS
// =====================================================

export const getResourcesByCategory = (categoryId) =>
  resources.filter((resource) => resource.category === categoryId);

export const searchResources = (query) => {
  const q = query.trim().toLowerCase();

  if (!q) return resources;

  return resources.filter((resource) => {
    const titleMatch = resource.title
      .toLowerCase()
      .includes(q);

    const tagMatch = resource.tags?.some((tag) =>
      tag.toLowerCase().includes(q)
    );

    const contentMatch = resource.content?.some((item) =>
      item.toLowerCase().includes(q)
    );

    return titleMatch || tagMatch || contentMatch;
  });
};

export const getResourceById = (id) =>
  resources.find((resource) => resource.id === id);
