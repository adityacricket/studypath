// StudyPath - exam-specific content standards
// Sources inform curriculum and difficulty; student-facing notes remain original.

export const examContentStandards = {
  'ssc-cgl': {
    teachingFocus: 'Speed + accuracy + pattern recognition',
    structure: ['concept from zero', 'fast method', 'standard SSC example', 'tricky trap', 'timed practice', 'PYQ-style practice', 'revision'],
    questionMix: 'Foundation → SSC level → tricky → timed mixed',
    noteVoice: 'compact classroom explanation with frequent exam tips',
    avoid: ['long theoretical digressions', 'JEE-level abstraction unless directly useful'],
  },
  'ssc-chsl': {
    teachingFocus: 'Clear basics + speed building',
    structure: ['concept', 'guided examples', 'speed technique', 'common mistake', 'practice', 'revision'],
    questionMix: 'Basic → CHSL level → speed round',
    noteVoice: 'simple and highly approachable',
    avoid: ['unnecessary advanced methods'],
  },
  'ssc-mts': {
    teachingFocus: 'Strong foundations + confidence + accuracy',
    structure: ['basic concept', 'small examples', 'guided practice', 'common traps', 'quick revision'],
    questionMix: 'Foundation → MTS level → speed practice',
    noteVoice: 'very clear, beginner-friendly classroom notes',
    avoid: ['overly difficult questions'],
  },
  'upsc-cse': {
    teachingFocus: 'Conceptual depth + analysis + retention + answer application',
    structure: ['core idea', 'background', 'causes/effects', 'interconnections', 'examples', 'PYQ themes', 'mains perspective', 'revision'],
    questionMix: 'Prelims MCQ → analytical prompts → mains-style prompts',
    noteVoice: 'explanatory, analytical and structured',
    avoid: ['formula-only summaries for conceptual subjects'],
  },
  'nda': {
    teachingFocus: 'Concept clarity + speed + broad coverage',
    structure: ['foundation', 'formula/rule', 'worked example', 'shortcut', 'NDA-style MCQ', 'speed drill', 'recall'],
    questionMix: 'Basic → NDA level → timed challenge',
    noteVoice: 'energetic classroom notebook with fast-solving cues',
    avoid: ['excessive depth outside the NDA scope'],
  },
  'cds': {
    teachingFocus: 'Accuracy + fundamentals + exam-speed application',
    structure: ['concept', 'standard example', 'exam pattern', 'trap', 'practice', 'timed revision'],
    questionMix: 'Foundation → CDS level → mixed timed set',
    noteVoice: 'concise but sufficiently explanatory',
    avoid: ['advanced material unrelated to the exam'],
  },
  'jee-main': {
    teachingFocus: 'Conceptual strength + multi-step problem solving + speed',
    structure: ['concept', 'derivation', 'visual intuition', 'worked examples', 'multi-concept problems', 'PYQ-style questions', 'advanced practice', 'revision'],
    questionMix: 'Foundation → JEE Main → multi-concept → time-pressure set',
    noteVoice: 'board-style explanation with mathematical depth',
    avoid: ['oversimplifying derivations that students need to understand'],
  },
  'jee-advanced': {
    teachingFocus: 'Deep reasoning + non-routine problem solving',
    structure: ['first principles', 'derivation', 'multiple representations', 'non-routine examples', 'trap analysis', 'mixed-concept challenge', 'revision'],
    questionMix: 'Concept → JEE Advanced reasoning → challenge',
    noteVoice: 'deep, rigorous and solution-oriented',
    avoid: ['shortcut-first teaching'],
  },
  'neet-ug': {
    teachingFocus: 'NCERT-aligned conceptual recall + application + accuracy',
    structure: ['concept', 'diagram', 'NCERT-aligned fact pattern', 'common confusion', 'MCQs', 'assertion/reasoning where relevant', 'revision'],
    questionMix: 'Recall → application → tricky MCQ → timed mixed set',
    noteVoice: 'visual, memory-friendly and precise',
    avoid: ['unnecessary mathematical derivations outside syllabus'],
  },
}

export const getExamContentStandard = (examId) =>
  examContentStandards[examId] || {
    teachingFocus: 'Concept clarity + exam-specific practice',
    structure: ['concept', 'examples', 'exam traps', 'practice', 'revision'],
    questionMix: 'Foundation → exam level → challenge',
    noteVoice: 'teacher-style study notes',
    avoid: [],
  }

export default examContentStandards
