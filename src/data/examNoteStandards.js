// StudyPath - exam-specific note production standards
// Source material is used internally for syllabus/fact verification and only
// reused when the individual license permits it. Published notes are original.

export const examNoteStandards = {
  'ssc-cgl': {
    teachingMode: 'speed-and-accuracy',
    contentBias: ['arithmetic', 'reasoning patterns', 'grammar rules', 'static awareness', 'current affairs awareness'],
    questionMix: ['foundation', 'SSC-level', 'tricky', 'time-saving'],
    mustInclude: ['shortcut after concept', 'common denominator traps', 'calculation speed', 'PYQ-style practice', 'time-management cues'],
    notesVoice: 'concise teacher explanation followed by worked calculation',
    assessment: 'topic practice + sectional-style + timed mastery'
  },
  'ssc-chsl': {
    teachingMode: 'foundation-and-speed',
    contentBias: ['arithmetic basics', 'reasoning fundamentals', 'grammar and vocabulary', 'general awareness'],
    questionMix: ['foundation', 'standard', 'speed drill', 'tricky'],
    mustInclude: ['step-by-step basics', 'common traps', 'speed drills', 'PYQ-style practice'],
    notesVoice: 'clear board-style teaching with frequent quick checks',
    assessment: 'topic practice + timed drills'
  },
  'ssc-mts': {
    teachingMode: 'simple-and-practical',
    contentBias: ['core arithmetic', 'basic reasoning', 'general awareness', 'functional English'],
    questionMix: ['basic', 'standard', 'exam-level'],
    mustInclude: ['zero-assumption explanation', 'worked examples', 'memory cues', 'short practice blocks'],
    notesVoice: 'very simple teacher explanation with visual memory aids',
    assessment: 'short practice + recall'
  },
  'upsc-cse': {
    teachingMode: 'concept-and-answer-writing',
    contentBias: ['conceptual depth', 'interlinking', 'current affairs context', 'analytical reasoning', 'mains writing'],
    questionMix: ['prelims-objective', 'conceptual', 'statement-based', 'mains analytical'],
    mustInclude: ['why/how explanation', 'inter-topic links', 'prelims traps', 'mains answer frameworks', 'examples/case studies', 'revision maps'],
    notesVoice: 'deep teacher lecture notes with analytical margins',
    assessment: 'prelims practice + mains prompts + answer review'
  },
  'nda': {
    teachingMode: 'concept-speed-discipline',
    contentBias: ['school foundation', 'calculation speed', 'applied science', 'English', 'GAT awareness'],
    questionMix: ['foundation', 'NDA-level', 'speed drill', 'tricky'],
    mustInclude: ['formula derivation where useful', 'speed shortcuts', 'diagram-based science', 'timed practice'],
    notesVoice: 'classroom notes with quick military-exam style checks',
    assessment: 'timed topic sets + mixed GAT review'
  },
  'cds': {
    teachingMode: 'concept-and-speed',
    contentBias: ['English accuracy', 'GK retention', 'arithmetic fundamentals'],
    questionMix: ['foundation', 'CDS-level', 'tricky', 'speed drill'],
    mustInclude: ['rules + exceptions', 'memory hooks', 'exam traps', 'timed practice'],
    notesVoice: 'compact but explanatory classroom notes',
    assessment: 'sectional practice + timed mastery'
  },
  'jee-main': {
    teachingMode: 'concept-problem-solving',
    contentBias: ['NCERT-aligned foundations', 'problem solving', 'formula relationships', 'numerical practice'],
    questionMix: ['foundation', 'JEE Main', 'multi-concept', 'speed'],
    mustInclude: ['concept derivation', 'multiple solved problems', 'units/sign checks', 'common traps', 'mixed numericals'],
    notesVoice: 'deep coaching notes with equations and worked derivations',
    assessment: 'topic problems + mixed chapter test'
  },
  'jee-advanced': {
    teachingMode: 'deep-concept-and-application',
    contentBias: ['first principles', 'multi-concept reasoning', 'edge cases', 'creative problem solving'],
    questionMix: ['advanced', 'multi-step', 'multiple representation', 'challenge'],
    mustInclude: ['derivation', 'alternative approaches', 'why distractors fail', 'advanced problem patterns'],
    notesVoice: 'advanced classroom notebook with rigorous reasoning',
    assessment: 'multi-concept challenge sets'
  },
  'neet-ug': {
    teachingMode: 'concept-memory-application',
    contentBias: ['NCERT-aligned facts', 'concept clarity', 'diagrams', 'terminology', 'MCQ recall'],
    questionMix: ['NCERT-foundation', 'NEET-level', 'statement-based', 'tricky'],
    mustInclude: ['labelled diagrams', 'exception boxes', 'NCERT fact recall', 'common MCQ traps', 'rapid revision'],
    notesVoice: 'visual teacher notebook with memory cues and compact explanations',
    assessment: 'topic MCQs + rapid recall'
  }
}

export const getExamNoteStandard = (examId) =>
  examNoteStandards[examId] || {
    teachingMode: 'concept-and-practice',
    contentBias: ['syllabus concepts', 'exam pattern', 'revision'],
    questionMix: ['foundation', 'standard', 'exam-level', 'tricky'],
    mustInclude: ['concept explanation', 'worked examples', 'exam traps', 'practice', 'revision'],
    notesVoice: 'clear teacher notebook',
    assessment: 'topic practice + mastery test'
  }

export default examNoteStandards
