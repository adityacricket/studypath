// Exam-specific enrichment for high-value chapters.
// These are original StudyPath teaching directions and examples.
// The SSC Maths blueprint was informed by the chapter structure visible in the
// reference material shared by the user; published notes remain original.

export const examChapterEnhancements = {
  'ssc-cgl': {
    percentage: {
      titleSuffix: ' — SSC CGL Master Chapter',
      whyThisMatters: 'Percentage is a foundation for Profit & Loss, Discount, SI/CI, DI, salary, population and expenditure questions. In SSC CGL, the marks usually come from recognising the base quickly and calculating without unnecessary steps.',
      examChecklist: [
        'Identify the ORIGINAL / BASE value before writing a percentage-change formula.',
        'Convert common percentages to fractions when it makes mental calculation faster.',
        'For successive changes, multiply factors instead of adding rates blindly.',
        'In word problems, underline what the percentage is taken on.',
        'Use estimation to eliminate impossible options before exact calculation.'
      ],
      solvedPatterns: [
        { label: 'Pattern A · Direct percentage', question: '72 is what percent of 90?', steps: ['Part = 72, Whole = 90', '72 ÷ 90 = 0.8', '0.8 × 100 = 80%'], takeaway: 'PART is compared with WHOLE. The whole is the denominator.' },
        { label: 'Pattern B · Percentage increase', question: 'A price rises from ₹800 to ₹1,000. Find the increase%.', steps: ['Increase = 1,000 − 800 = ₹200', 'Original = ₹800', 'Increase% = 200/800 × 100 = 25%'], takeaway: 'Normal percentage change uses the original value as the base.' },
        { label: 'Pattern C · Successive change', question: 'A value increases by 10% and then by 20%. Find the net increase%.', steps: ['First factor = 1.10', 'Second factor = 1.20', 'Combined factor = 1.10 × 1.20 = 1.32', 'Net increase = 32%'], takeaway: 'Successive percentage changes compound.' }
      ],
      trapBox: ['20% increase + 20% decrease is NOT zero; it is a 4% decrease.', 'A discount percentage is calculated on marked price.', 'A percentage of a percentage requires multiplication, not addition.', 'When the question gives a final value after a change, reverse the factor instead of subtracting the percentage from the final value.'],
      speedDrill: ['25% of 640', '12.5% of 800', '15% of 240', '20 is what percent of 80?', 'A number becomes 360 after a 20% increase. Find the original.'],
      speedAnswers: ['160', '100', '36', '25%', '300']
    },

    'number-system': {
      titleSuffix: ' — SSC CGL Number System Lab',
      whyThisMatters: 'The reference material organises Number System from basic number types and divisibility through factors, remainders, powers and exam-style practice. StudyPath will use that progression as a blueprint while keeping every published explanation and example original.',
      examChecklist: [
        'Separate natural, whole, integer, rational and irrational numbers before solving classification questions.',
        'Know divisibility tests for 2, 3, 4, 5, 6, 8, 9, 10, 11 and 13; use them as speed checks.',
        'For factor questions, use prime factorisation instead of listing factors blindly.',
        'For remainder questions, reduce large powers or expressions before calculating.',
        'For last-digit questions, look for repeating cycles in powers.',
        'For trailing-zero questions, count pairs of 2 and 5 in the prime factorisation.',
        'Treat PYQs as a separate authorised-content layer; this chapter contains only original practice.'
      ],
      solvedPatterns: [
        {
          label: 'Pattern A · Number classification',
          question: 'Which type best describes −7?',
          steps: ['−7 is not natural or whole because it is negative.', 'It is an integer because integers include negative whole values.', 'It is also rational because −7 = −7/1.'],
          takeaway: 'Number sets overlap; choose the most specific type requested by the question.'
        },
        {
          label: 'Pattern B · Divisibility',
          question: 'Is 5,742 divisible by 3?',
          steps: ['Add digits: 5 + 7 + 4 + 2 = 18.', '18 is divisible by 3.', 'Therefore 5,742 is divisible by 3.'],
          takeaway: 'Digit-sum tests can replace long division.'
        },
        {
          label: 'Pattern C · Number of factors',
          question: 'How many positive factors does 360 have?',
          steps: ['360 = 2³ × 3² × 5¹.', 'For each prime exponent, add 1 and multiply: (3+1)(2+1)(1+1).', 'Answer = 4 × 3 × 2 = 24.'],
          takeaway: 'If n = pᵃqᵇrᶜ, the factor count is (a+1)(b+1)(c+1).'
        },
        {
          label: 'Pattern D · Remainder',
          question: 'Find the remainder when 10²³ is divided by 7.',
          steps: ['Powers of 10 modulo 7 repeat because 10 ≡ 3 (mod 7).', 'Compute the short cycle of powers of 3 modulo 7.', 'Reduce exponent 23 using the cycle length, then read the corresponding remainder.'],
          takeaway: 'Large-power remainder problems are usually cycle problems, not multiplication problems.'
        },
        {
          label: 'Pattern E · Last digit',
          question: 'Find the last digit of 7¹²³.',
          steps: ['Last digits of powers of 7 cycle as 7, 9, 3, 1.', 'The cycle length is 4.', '123 leaves remainder 3 on division by 4, so use the third value in the cycle.'],
          takeaway: 'For unit digits, identify the cycle before touching the exponent.'
        }
      ],
      trapBox: [
        '0 is a whole number but is not a positive natural number under the convention used here.',
        'Divisibility by 6 requires divisibility by both 2 and 3.',
        'The number of factors formula uses prime exponents, not the numerical factors themselves.',
        'A remainder must be smaller than the divisor.',
        'Do not confuse number of factors with sum of factors.',
        'For trailing zeros in factorials, count factors of 5 because factors of 2 are more abundant.'
      ],
      speedDrill: [
        'Is 4,536 divisible by 9?',
        'How many positive factors does 72 have?',
        'Find the last digit of 3⁷⁷.',
        'Find the remainder when 2¹⁰ is divided by 7.',
        'How many trailing zeros are in 25!?'
      ],
      speedAnswers: ['Yes', '12', '7', '2', '6'],
      quickRevision: [
        'Prime factorisation → factor count → sum/product of factors.',
        'Divisibility rules are speed tools, not substitutes for understanding.',
        'Remainder of powers → reduce the base and find the cycle.',
        'Unit digit → cycle of last digits.',
        'Trailing zeros → count complete pairs of 2 and 5; in factorials, 5 is the limiting factor.'
      ],
      chapterMap: ['Concepts', 'Number varieties', 'Divisibility', 'Factors', 'HCF/LCM connection', 'Remainders', 'Powers', 'Unit digit', 'Trailing zeros', 'Original practice', 'Revision']
    },

    'hcf-and-lcm': {
      titleSuffix: ' — SSC CGL HCF & LCM Lab',
      whyThisMatters: 'The reference index places HCF and LCM immediately after Number System and connects the chapter with concept questions, variety practice and exam-pattern work. StudyPath will build the same learning progression with original examples.',
      examChecklist: [
        'Use prime factorisation to see HCF as minimum exponents and LCM as maximum exponents.',
        'For two positive integers, HCF × LCM = product of the numbers.',
        'Read word problems for clues such as greatest measure, least common time or repeated occurrence.',
        'Do not apply the product identity blindly when more than two numbers or non-standard conditions are involved.',
        'Keep authorised PYQs separate from original StudyPath practice.'
      ],
      solvedPatterns: [
        {
          label: 'Pattern A · Prime-factor method',
          question: 'Find the HCF and LCM of 24 and 36.',
          steps: ['24 = 2³ × 3; 36 = 2² × 3².', 'HCF uses minimum powers: 2² × 3 = 12.', 'LCM uses maximum powers: 2³ × 3² = 72.'],
          takeaway: 'HCF takes minimum prime exponents; LCM takes maximum prime exponents.'
        },
        {
          label: 'Pattern B · Product relation',
          question: 'Two numbers have HCF 6 and LCM 180. If one number is 30, find the other.',
          steps: ['For two positive integers, HCF × LCM = product.', 'Other number = (6 × 180) ÷ 30.', 'Other number = 36.'],
          takeaway: 'The product identity is a fast route for two-number questions.'
        }
      ],
      trapBox: [
        'HCF uses smaller prime exponents; LCM uses larger ones.',
        'Do not swap the HCF and LCM roles in word problems.',
        'The two-number product identity has conditions; check the setup before using it.',
        'In schedule/repetition questions, the phrase “together again” often points toward LCM.'
      ],
      speedDrill: ['HCF of 48 and 72', 'LCM of 12 and 18', 'If HCF=5, LCM=60 and one number=15, find the other.', 'Find the least number divisible by 6, 8 and 15.'],
      speedAnswers: ['24', '36', '20', '120'],
      quickRevision: ['Prime factorise first.', 'HCF = minimum exponents.', 'LCM = maximum exponents.', 'For two numbers: HCF × LCM = product.', 'Translate “greatest” and “least common/repeated” clues carefully.']
    }
  }
}

export const getChapterEnhancement = (examId, chapterSlug) =>
  examChapterEnhancements[examId]?.[chapterSlug] || null

export default examChapterEnhancements
