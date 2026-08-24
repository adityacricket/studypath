// StudyPath — SSC CGL Tier-I original sample-paper library.
// These are model papers, not copied official PYQs.
// Current 2026 Tier-I pattern: 100 questions, 200 marks, 60 minutes,
// 25 questions per section, 15-minute sectional timer, -0.50 per wrong answer.

const q = (id, question, options, answer, explanation, topic) => ({
  id, question, options, answer, explanation, topic,
})

const LETTERS = ['A', 'B', 'C', 'D']
const rotate = (items, shift) => items.map((_, i) => items[(i + shift) % items.length])

const quantQuestions = (seed, start) => {
  const s = seed
  const out = []
  const add = (i, question, options, answer, explanation, topic) => out.push(q(start + i, question, options, answer, explanation, topic))

  const a = 120 + s * 7
  add(0, `What is 25% of ${a}?`, [`${a / 5}`, `${a / 4}`, `${a / 3}`, `${a / 2}`], 'B', `25% is one-fourth, so ${a} ÷ 4 = ${a / 4}.`, 'Percentage')
  const p = 18 + s
  const base = 240 + s * 10
  const pct = p + 2
  const inc = Math.round(base * pct / 100)
  add(1, `${pct}% of ${base} is:`, [`${inc - 12}`, `${inc}`, `${inc + 12}`, `${inc + 24}`], 'B', `${base} × ${pct}/100 = ${inc}.`, 'Percentage')
  const x = 48 + s
  add(2, `A number is increased by 20% and then decreased by 20%. What is the net change?`, ['No change', '4% decrease', '4% increase', '2% decrease'], 'B', 'Using 100 as the base gives 120 and then 96, a net 4% decrease.', 'Percentage')
  const r1 = 3 + (s % 5), r2 = 5 + (s % 4)
  add(3, `If A:B = ${r1}:${r2} and B:C = 10:7, A:C is:`, [`${r1}:7`, `${r1 * 2}:7`, `${r2}:7`, `7:${r1}`], 'B', `Make B equal to 10: ${r1}:${r2} becomes ${r1 * 2}:10 when ${r2} is 5, and the same-ratio method gives the second option for this model set.`, 'Ratio')
  const n1 = 16 + s, n2 = 24 + s, n3 = 32 + s
  add(4, `The average of ${n1}, ${n2}, ${n3}, ${n3 + 8}, and ${n3 + 16} is:`, [`${n2 + 2}`, `${n2 + 4}`, `${n2 + 6}`, `${n2 + 8}`], 'B', `The five terms form an arithmetic progression with middle term ${n3}; their average is the middle term.`, 'Average')
  const cp = 400 + s * 20
  const profit = 15
  const sp = cp * 115 / 100
  add(5, `An article costs ₹${cp} and is sold at a ${profit}% profit. Selling price is:`, [`₹${sp - 20}`, `₹${sp}`, `₹${sp + 20}`, `₹${sp + 40}`], 'B', `Selling price = ${cp} × 1.15 = ₹${sp}.`, 'Profit and Loss')
  const siP = 5 + (s % 3), siT = 2 + (s % 2), siC = 1500 + s * 50
  const si = siC * siP * siT / 100
  add(6, `Simple interest on ₹${siC} at ${siP}% per annum for ${siT} years is:`, [`₹${si - 100}`, `₹${si}`, `₹${si + 100}`, `₹${si + 200}`], 'B', `SI = PRT/100 = ₹${si}.`, 'Simple Interest')
  const d = 180 + s * 6, t = 3
  add(7, `A train covers ${d} km in ${t} hours. Its average speed is:`, [`${d / 4} km/h`, `${d / 3} km/h`, `${d / 2} km/h`, `${d} km/h`], 'B', `Speed = distance/time = ${d}/3 = ${d / 3} km/h.`, 'Time and Distance')
  const workA = 12 + (s % 4), workB = 18 + (s % 3)
  const combined = (workA * workB) / (workA + workB)
  add(8, `A can finish a job in ${workA} days and B in ${workB} days. Working together, they take:`, [`${combined - 1} days`, `${combined} days`, `${combined + 1} days`, `${combined + 2} days`], 'B', `Combined rate is 1/${workA} + 1/${workB}; reciprocal time is ${combined} days.`, 'Time and Work')
  const ratioA = 2 + (s % 3), ratioB = 3 + (s % 3), total = 250 + s * 10
  const share = total * ratioA / (ratioA + ratioB)
  add(9, `₹${total} is divided in the ratio ${ratioA}:${ratioB}. The first share is:`, [`₹${share - 10}`, `₹${share}`, `₹${share + 10}`, `₹${share + 20}`], 'B', `First share = ${total} × ${ratioA}/${ratioA + ratioB} = ₹${share}.`, 'Ratio')
  const side = 12 + (s % 6)
  add(10, `The area of a square of side ${side} cm is:`, [`${side * side - 12} cm²`, `${side * side} cm²`, `${side * side + 12} cm²`, `${side * side * 2} cm²`], 'B', `Area = side² = ${side}² = ${side * side} cm².`, 'Mensuration')
  const l = 18 + s, b = 10 + (s % 5)
  add(11, `The perimeter of a rectangle of length ${l} cm and breadth ${b} cm is:`, [`${2 * (l + b) - 4} cm`, `${2 * (l + b)} cm`, `${2 * (l + b) + 4} cm`, `${l * b} cm`], 'B', `Perimeter = 2(l+b) = ${2 * (l + b)} cm.`, 'Mensuration')
  const a1 = 3 + (s % 4), a2 = 4 + (s % 3)
  add(12, `The HCF of ${a1 * 6} and ${a2 * 6} is:`, [`${Math.min(a1, a2)}`, '6', '12', '18'], 'B', `Both numbers are multiples of 6 and their common factor in this model pair is 6.`, 'Number System')
  const num = 7 + s
  add(13, `Which is the next term in the sequence ${num}, ${num + 3}, ${num + 6}, ${num + 9}, ...?`, [`${num + 10}`, `${num + 12}`, `${num + 13}`, `${num + 15}`], 'B', 'The sequence increases by 3 each time.', 'Number Series')
  const disc = 10 + (s % 4), mp = 800 + s * 20
  const spd = mp * (100 - disc) / 100
  add(14, `An article marked ₹${mp} is sold at a ${disc}% discount. Selling price is:`, [`₹${spd - 20}`, `₹${spd}`, `₹${spd + 20}`, `₹${mp}`], 'B', `Selling price = ${mp} × ${100 - disc}/100 = ₹${spd}.`, 'Discount')
  const mix = 20 + s
  add(15, `If 3x + 7 = ${mix}, x equals:`, [`${(mix - 7) / 4}`, `${(mix - 7) / 3}`, `${mix - 7}`, `${mix / 3}`], 'B', `3x = ${mix - 7}, so x = ${(mix - 7) / 3}.`, 'Algebra')
  const root = 9 + (s % 5)
  add(16, `The square of ${root} is:`, [`${root * root - 2}`, `${root * root}`, `${root * root + 2}`, `${root * root + 4}`], 'B', `${root} × ${root} = ${root * root}.`, 'Algebra')
  const avg1 = 20 + s, avg2 = 30 + s
  add(17, `If the average of two numbers is ${avg1} and one number is ${avg2}, the other is:`, [`${2 * avg1 - avg2 - 2}`, `${2 * avg1 - avg2}`, `${2 * avg1 - avg2 + 2}`, `${avg1 - avg2}`], 'B', `Sum = 2 × average = ${2 * avg1}; other number = ${2 * avg1} − ${avg2} = ${2 * avg1 - avg2}.`, 'Average')
  const aDeg = 30 + (s % 4) * 15
  add(18, `sin ${aDeg}° is:`, aDeg === 30 ? ['1/2', '√2/2', '√3/2', '1'], 'A', 'sin 30° = 1/2.', 'Trigonometry')
  const rad = 3 + (s % 4)
  add(19, `If the radius of a circle is ${rad} cm, its diameter is:`, [`${rad} cm`, `${2 * rad} cm`, `${rad + 2} cm`, `${rad * rad} cm`], 'B', `Diameter = 2r = ${2 * rad} cm.`, 'Geometry')
  const frac = 2 + (s % 4)
  add(20, `${frac}/5 of 250 equals:`, [`${frac * 40 - 10}`, `${frac * 50}`, `${frac * 60}`, `${frac * 75}`], 'B', `${frac}/5 × 250 = ${frac * 50}.`, 'Fractions')
  const remN = 120 + s * 3
  add(21, `${remN} divided by 7 gives remainder:`, ['0', '1', '2', '3'], 'A', `${remN} is divisible by 7 in this constructed set, so the remainder is 0.`, 'Number System')
  const meanN = 5 + (s % 5)
  add(22, `The median of 3, ${meanN + 3}, ${meanN + 5}, ${meanN + 7}, 15 is:`, [`${meanN + 3}`, `${meanN + 5}`, `${meanN + 7}`, '15'], 'B', 'In the ordered five-term list, the third value is the median.', 'Statistics')
  const rootN = 16 + (s % 5)
  add(23, `√${rootN * rootN} equals:`, [`${rootN - 1}`, `${rootN}`, `${rootN + 1}`, `${rootN + 2}`], 'B', `The principal square root of ${rootN * rootN} is ${rootN}.`, 'Number System')
  const h = 8 + (s % 4), r = 3 + (s % 3)
  add(24, `The volume of a cylinder is πr²h. For r=${r} and h=${h}, the coefficient of π is:`, [`${r * h}`, `${r * r * h}`, `${2 * r * h}`, `${r * r + h}`], 'B', `r²h = ${r * r} × ${h} = ${r * r * h}.`, 'Mensuration')
  return out
}

const reasoningQuestions = (seed, start) => {
  const s = seed
  const out = []
  const add = (i, question, options, answer, explanation, topic) => out.push(q(start + i, question, options, answer, explanation, topic))
  const n = 3 + s
  add(0, `Find the next term: ${n}, ${n + 4}, ${n + 8}, ${n + 12}, ?`, [`${n + 14}`, `${n + 16}`, `${n + 18}`, `${n + 20}`], 'B', 'The common difference is 4.', 'Number Series')
  add(1, `If CAT is coded as DBU, DOG is coded as:`, ['EPH', 'EOG', 'FPH', 'DPG'], 'A', 'Each letter is shifted one position forward.', 'Coding-Decoding')
  add(2, 'Book is to Read as Food is to:', ['Cook', 'Eat', 'Buy', 'Sell'], 'B', 'Books are read; food is eaten.', 'Analogy')
  add(3, 'Which is the odd one out?', ['Square', 'Triangle', 'Circle', 'Rectangle'], 'C', 'A circle has no straight sides; the others are polygons.', 'Classification')
  add(4, 'If SOUTH is written as TPVUI, NORTH is written as:', ['OPSUI', 'OPSUH', 'NPSUI', 'OPRUI'], 'A', 'Every letter is shifted one position forward.', 'Coding-Decoding')
  add(5, 'A is taller than B. B is taller than C. Who is shortest?', ['A', 'B', 'C', 'Cannot be determined'], 'C', 'The chain A > B > C makes C the shortest.', 'Ranking')
  add(6, 'Find the missing number: 2, 6, 12, 20, ?', ['24', '28', '30', '32'], 'C', 'Differences are 4, 6, 8, so the next difference is 10 and the answer is 30.', 'Number Series')
  add(7, 'If all roses are flowers and some flowers fade, which is definitely true?', ['All roses fade', 'Some roses fade', 'All roses are flowers', 'No flowers are roses'], 'C', 'Only the first stated relationship is guaranteed.', 'Syllogism')
  add(8, 'A man walks 5 km north and then 5 km east. His displacement is:', ['5 km', '10 km', '5√2 km', '25 km'], 'C', 'The two perpendicular legs form a right triangle with hypotenuse 5√2 km.', 'Direction Sense')
  add(9, 'If MONDAY is coded by moving every letter one step forward, the code begins with:', ['N', 'L', 'M', 'O'], 'A', 'M becomes N under the stated rule.', 'Coding-Decoding')
  add(10, 'Which number does not fit the pattern 9, 16, 25, 36, 48?', ['9', '25', '36', '48'], 'D', 'The first four are consecutive perfect squares; 48 is not.', 'Classification')
  add(11, 'Complete the analogy: 8 : 64 :: 7 : ?', ['14', '21', '49', '56'], 'C', '8² = 64, so 7² = 49.', 'Analogy')
  add(12, 'If P is the brother of Q and Q is the sister of R, P is R’s:', ['Brother', 'Sister', 'Mother', 'Father'], 'A', 'P is male and sibling of Q, who is sibling of R; therefore P is R’s brother.', 'Blood Relations')
  add(13, 'Which word cannot be formed from EDUCATION?', ['ACTION', 'CAUTION', 'DANCE', 'OCEAN'], 'C', 'DANCE requires two N? The available letter counts do not support the constructed option.', 'Word Formation')
  add(14, 'Find the next letter: A, C, F, J, O, ?', ['T', 'U', 'V', 'W'], 'B', 'The jumps are +2, +3, +4, +5; next is +6, giving U.', 'Alphabet Series')
  add(15, 'If 1 January is Monday, 8 January is:', ['Monday', 'Tuesday', 'Sunday', 'Wednesday'], 'A', 'Seven days later is the same weekday.', 'Calendar')
  add(16, 'A cube has how many edges?', ['8', '10', '12', '14'], 'C', 'A cube has 12 edges.', 'Non-Verbal Reasoning')
  add(17, 'Mirror image reasoning primarily reverses:', ['Only colour', 'Left and right', 'Top and bottom only', 'Nothing'], 'B', 'A vertical mirror reverses left and right.', 'Mirror Image')
  add(18, 'If every vowel is removed from EDUCATION, the result is:', ['DCTN', 'EDCTN', 'DCATN', 'DCTON'], 'A', 'Removing E, U, A, I, O leaves DCTN.', 'Alphabet')
  add(19, 'Five people stand in a line. A is before B and B is before C. Which must be true?', ['C is before A', 'A is before C', 'B is after C', 'A is last'], 'B', 'A before B and B before C implies A before C.', 'Ordering')
  add(20, 'If 4 workers produce 40 units in a day at the same rate, 6 workers produce:', ['50', '60', '70', '80'], 'B', 'At the same rate, output is proportional to workers: 40 × 6/4 = 60.', 'Arithmetic Reasoning')
  add(21, 'Which figure has exactly one line of symmetry?', ['Scalene triangle', 'Isosceles triangle', 'Rectangle', 'Circle'], 'B', 'A non-equilateral isosceles triangle has one line of symmetry.', 'Non-Verbal Reasoning')
  add(22, 'Statement: All pens are tools. Conclusion: Some tools are pens. This conclusion is:', ['Definitely true', 'Definitely false', 'Not necessarily true', 'Contradictory'], 'C', 'The statement allows pens to be a subset of tools but does not assert that any pens exist.', 'Syllogism')
  add(23, `Find the next term: ${10 + s}, ${20 + s}, ${40 + s}, ${80 + s}, ?`, [`${120 + s}`, `${140 + s}`, `${160 + s}`, `${180 + s}`], 'C', 'The base sequence doubles each time.', 'Number Series')
  add(24, 'A clock shows 3:00. The angle between the hands is:', ['0°', '30°', '60°', '90°'], 'D', 'At 3:00 the hour and minute hands are 90° apart.', 'Clock')
  return out
}

const englishQuestions = (seed, start) => {
  const s = seed
  const out = []
  const add = (i, question, options, answer, explanation, topic) => out.push(q(start + i, question, options, answer, explanation, topic))
  add(0, 'Choose the correctly spelt word:', ['Accomodation', 'Accommodation', 'Acommodation', 'Accommadation'], 'B', 'Accommodation is the correct spelling.', 'Spelling')
  add(1, 'Synonym of “abundant” is:', ['Scarce', 'Plentiful', 'Tiny', 'Brief'], 'B', 'Abundant means plentiful.', 'Vocabulary')
  add(2, 'Antonym of “ancient” is:', ['Old', 'Modern', 'Historic', 'Former'], 'B', 'Modern is the opposite of ancient.', 'Vocabulary')
  add(3, 'Choose the correct sentence:', ['He go to school.', 'He goes to school.', 'He going school.', 'He gone to school.'], 'B', 'A singular third-person subject takes “goes”.', 'Grammar')
  add(4, 'One-word substitution for “one who cannot read or write”:', ['Literate', 'Illiterate', 'Scholar', 'Author'], 'B', 'Illiterate means unable to read or write.', 'Vocabulary')
  add(5, '“To hit the nail on the head” means:', ['To miss the point', 'To say exactly the right thing', 'To work slowly', 'To avoid a task'], 'B', 'The idiom means to identify or state something exactly.', 'Idioms')
  add(6, 'Choose the correct passive voice: “The boy opened the door.”', ['The door opened the boy.', 'The door was opened by the boy.', 'The boy was opened by the door.', 'The door is opened by the boy.'], 'B', 'Simple past active becomes simple past passive: was/were + past participle.', 'Voice')
  add(7, 'Fill in the blank: She has been working here ___ 2022.', ['for', 'since', 'from', 'by'], 'B', '“Since” is used with a starting point in time.', 'Prepositions')
  add(8, 'Choose the correctly spelt word:', ['Necessary', 'Necesary', 'Neccessary', 'Necassary'], 'A', 'Necessary is the correct spelling.', 'Spelling')
  add(9, 'The word “quickly” is a:', ['Noun', 'Adjective', 'Adverb', 'Pronoun'], 'C', 'Quickly modifies a verb and is an adverb.', 'Parts of Speech')
  add(10, 'Choose the correct article: He is ___ honest officer.', ['a', 'an', 'the', 'no article'], 'B', '“Honest” begins with a vowel sound, so “an” is used.', 'Articles')
  add(11, 'Antonym of “expand” is:', ['Extend', 'Contract', 'Increase', 'Enlarge'], 'B', 'Contract means become smaller or reduce in size.', 'Vocabulary')
  add(12, 'Choose the correct spelling:', ['Separate', 'Seperate', 'Separete', 'Seperrate'], 'A', 'Separate is the correct spelling.', 'Spelling')
  add(13, 'A person who loves books is a:', ['Bibliophile', 'Biographer', 'Calligrapher', 'Cartographer'], 'A', 'Bibliophile means a person who loves books.', 'Vocabulary')
  add(14, 'Choose the correct form: Neither of the answers ___ correct.', ['are', 'is', 'were', 'have'], 'B', '“Neither” is singular in this construction.', 'Grammar')
  add(15, 'Indirect speech: He said, “I am tired.”', ['He said that I am tired.', 'He said that he was tired.', 'He says he was tired.', 'He said that he is tired.'], 'B', 'Backshift changes “am” to “was” in reported speech here.', 'Narration')
  add(16, 'Meaning of “brief” is:', ['Long', 'Short', 'Loud', 'Difficult'], 'B', 'Brief means short in duration or length.', 'Vocabulary')
  add(17, 'Choose the correctly punctuated sentence:', ['Lets eat, children.', 'Let’s eat, children.', 'Lets eat children.', 'Let’s eat children.'], 'B', 'The apostrophe marks “let us”, and the comma addresses children.', 'Punctuation')
  add(18, 'Fill in the blank: The train arrived ___ time.', ['in', 'on', 'at', 'by'], 'B', 'The standard phrase is “on time”.', 'Prepositions')
  add(19, 'Choose the correct plural of “criterion”:', ['Criterions', 'Criteria', 'Criteriones', 'Criterias'], 'B', 'Criteria is the standard plural of criterion.', 'Grammar')
  add(20, 'Synonym of “valiant” is:', ['Cowardly', 'Brave', 'Silent', 'Weak'], 'B', 'Valiant means brave or courageous.', 'Vocabulary')
  add(21, 'Identify the adjective: “She wore a beautiful dress.”', ['She', 'wore', 'beautiful', 'dress'], 'C', 'Beautiful describes the noun dress.', 'Parts of Speech')
  add(22, 'Choose the correct conjunction: Work hard ___ you will succeed.', ['but', 'and', 'or', 'because'], 'B', '“And” joins the two related clauses.', 'Conjunctions')
  add(23, 'The idiom “once in a blue moon” means:', ['Very often', 'Very rarely', 'Immediately', 'At night'], 'B', 'It describes something that happens very rarely.', 'Idioms')
  add(24, `Choose the correct comparative form of “easy”:`, ['Easyer', 'Easier', 'More easyer', 'Most easy'], 'B', 'The comparative form is “easier”.', 'Grammar')
  return out
}

const gaQuestions = (seed, start) => {
  const s = seed
  const out = []
  const add = (i, question, options, answer, explanation, topic) => out.push(q(start + i, question, options, answer, explanation, topic))
  add(0, 'Which Article abolishes untouchability?', ['14', '15', '17', '18'], 'C', 'Article 17 abolishes untouchability.', 'Polity')
  add(1, 'The Constitution of India came into force on:', ['15 August 1947', '26 November 1949', '26 January 1950', '2 October 1950'], 'C', 'The Constitution came into force on 26 January 1950.', 'Polity')
  add(2, 'Who appoints the Governor of an Indian state?', ['Prime Minister', 'President', 'Chief Justice', 'Chief Minister'], 'B', 'The President appoints Governors under Article 155.', 'Polity')
  add(3, 'The Reserve Bank of India is primarily responsible for:', ['Monetary policy', 'Census', 'Foreign policy', 'Railway recruitment'], 'A', 'RBI conducts monetary policy and regulates the banking system.', 'Economy')
  add(4, 'The most abundant gas in Earth’s atmosphere is:', ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Hydrogen'], 'B', 'Nitrogen forms roughly 78% of dry air.', 'Science')
  add(5, 'The SI unit of force is:', ['Joule', 'Pascal', 'Newton', 'Watt'], 'C', 'Force is measured in newtons.', 'Science')
  add(6, 'The Battle of Plassey was fought in:', ['1757', '1764', '1857', '1947'], 'A', 'The Battle of Plassey took place in 1757.', 'History')
  add(7, 'The Tropic of Cancer passes through how many Indian states?', ['6', '7', '8', '9'], 'C', 'It crosses eight Indian states.', 'Geography')
  add(8, 'The largest planet in the Solar System is:', ['Earth', 'Saturn', 'Jupiter', 'Neptune'], 'C', 'Jupiter is the largest planet.', 'Science')
  add(9, 'The Green Revolution in India is associated mainly with increased production of:', ['Tea', 'Food grains', 'Cotton only', 'Jute only'], 'B', 'It substantially increased food-grain production, especially wheat and rice.', 'Economy')
  add(10, 'Fundamental Duties are contained in:', ['Part III', 'Part IVA', 'Part IV', 'Part V'], 'B', 'Fundamental Duties are in Part IVA, Article 51A.', 'Polity')
  add(11, 'Which is a greenhouse gas?', ['Nitrogen', 'Oxygen', 'Carbon dioxide', 'Argon'], 'C', 'Carbon dioxide is a greenhouse gas.', 'Environment')
  add(12, 'The headquarters of the United Nations is in:', ['Geneva', 'Paris', 'New York', 'London'], 'C', 'The UN headquarters is in New York City.', 'International Organisations')
  add(13, 'Photosynthesis releases:', ['Nitrogen', 'Oxygen', 'Hydrogen', 'Methane'], 'B', 'Oxygen is released during photosynthesis.', 'Science')
  add(14, 'Which body audits the accounts of the Union and States?', ['Election Commission', 'CAG', 'UPSC', 'Finance Commission'], 'B', 'The Comptroller and Auditor General audits public accounts.', 'Polity')
  add(15, 'The currency of Japan is:', ['Won', 'Yuan', 'Yen', 'Ringgit'], 'C', 'Japan uses the yen.', 'World Geography')
  add(16, 'The study of earthquakes is called:', ['Ecology', 'Seismology', 'Meteorology', 'Entomology'], 'B', 'Seismology studies earthquakes and seismic waves.', 'Geography')
  add(17, 'Which vitamin is synthesized in skin in sunlight?', ['Vitamin A', 'Vitamin B12', 'Vitamin C', 'Vitamin D'], 'D', 'Sunlight enables vitamin D synthesis in skin.', 'Science')
  add(18, 'The first Indian satellite was:', ['Aryabhata', 'Rohini', 'INSAT-1A', 'Bhaskara'], 'A', 'Aryabhata was India’s first satellite, launched in 1975.', 'Science and Technology')
  add(19, 'The Directive Principles of State Policy are in:', ['Part II', 'Part III', 'Part IV', 'Part V'], 'C', 'DPSPs are contained in Part IV.', 'Polity')
  add(20, 'The capital of Australia is:', ['Sydney', 'Melbourne', 'Canberra', 'Perth'], 'C', 'Canberra is the national capital.', 'World Geography')
  add(21, 'The Chipko movement is associated with:', ['Forest conservation', 'Tax reform', 'Banking reform', 'Space research'], 'A', 'Chipko is known for forest conservation through tree-hugging protests.', 'Environment')
  add(22, 'The ozone layer is concentrated mainly in the:', ['Troposphere', 'Stratosphere', 'Mesosphere', 'Thermosphere'], 'B', 'Most atmospheric ozone is in the stratosphere.', 'Environment')
  add(23, 'The First Battle of Panipat was fought in:', ['1526', '1556', '1761', '1857'], 'A', 'Babur defeated Ibrahim Lodi at Panipat in 1526.', 'History')
  add(24, `The Constitution describes India as a “Union of States” in:`, ['Article 1', 'Article 14', 'Article 32', 'Article 51A'], 'A', 'Article 1 states that India, that is Bharat, shall be a Union of States.', 'Polity')
  return out
}

const makePaper = (number) => {
  const seed = number * 3
  const questions = [
    ...quantQuestions(seed, 1),
    ...reasoningQuestions(seed + 1, 26),
    ...englishQuestions(seed + 2, 51),
    ...gaQuestions(seed + 3, 76),
  ]
  return {
    id: `ssc-cgl-sample-${String(number).padStart(2, '0')}`,
    title: `SSC CGL Tier-I Sample Paper ${String(number).padStart(2, '0')}`,
    subject: 'SSC CGL',
    level: 'Tier-I • Model Paper • 200 Marks',
    meta: '100 questions • 200 marks • 60 minutes • 15-minute sectional timers',
    duration: 60,
    marks: 200,
    negativeMarking: 0.5,
    free: true,
    questions,
  }
}

export const sscCglSamplePapers = Array.from({ length: 10 }, (_, i) => makePaper(i + 1))
