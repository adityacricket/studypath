// Original sample quiz question bank, organized by subject -> topic
// Each question: { id, question, options[4], answer(index), explanation, difficulty }

export const subjects = [
  { id: 'quant', name: 'Quantitative Aptitude', icon: 'fa-calculator', color: 'bg-indigo-500' },
  { id: 'reasoning', name: 'Reasoning', icon: 'fa-puzzle-piece', color: 'bg-emerald-500' },
  { id: 'english', name: 'English Language', icon: 'fa-book-open', color: 'bg-amber-500' },
  { id: 'gk', name: 'General Knowledge', icon: 'fa-globe', color: 'bg-rose-500' },
]

export const topicsBySubject = {
  quant: ['Percentage', 'Average', 'Ratio & Proportion', 'Profit & Loss', 'Time & Work'],
  reasoning: ['Coding-Decoding', 'Series', 'Blood Relations', 'Syllogism', 'Analogy'],
  english: ['Synonyms & Antonyms', 'Grammar', 'One Word Substitution', 'Reading Comprehension', 'Idioms & Phrases'],
  gk: ['Indian History', 'Geography', 'Polity', 'Current Affairs', 'Science'],
}

function q(id, question, options, answer, explanation, difficulty, topic, subject) {
  return { id, question, options, answer, explanation, difficulty, topic, subject }
}

export const questionBank = [
  // ---------------- QUANT: Percentage ----------------
  q('qp1', 'If 40% of a number is 80, what is the number?', ['160', '200', '180', '220'], 1, '40% of x = 80 → x = 80 × 100/40 = 200.', 'Easy', 'Percentage', 'quant'),
  q('qp2', 'A student scored 462 marks out of 700. What percentage did they score?', ['66%', '60%', '64%', '70%'], 0, '(462/700) × 100 = 66%.', 'Easy', 'Percentage', 'quant'),
  q('qp3', 'The price of an item increases by 20% and then decreases by 20%. Net change is:', ['No change', '4% decrease', '4% increase', '2% decrease'], 1, 'Net % change = 20 − 20 − (20×20)/100 = −4%, i.e., 4% decrease.', 'Medium', 'Percentage', 'quant'),
  q('qp4', "If a number is increased by 25% and then decreased by 20%, the net effect is:", ['No change', '5% increase', '5% decrease', '10% increase'], 0, 'Net effect = 25 − 20 − (25×20)/100 = 0%. No change.', 'Medium', 'Percentage', 'quant'),
  q('qp5', 'In an exam, 70% passed in Maths, 65% passed in Science, and 40% passed in both. What % failed in both?', ['5%', '10%', '15%', '25%'], 0, 'Passed at least one = 70+65−40 = 95%. Failed both = 100−95 = 5%.', 'Hard', 'Percentage', 'quant'),

  // ---------------- QUANT: Average ----------------
  q('qa1', 'Find the average of 12, 15, 18, 21, and 24.', ['16', '17', '18', '19'], 2, 'Sum = 90, Average = 90/5 = 18.', 'Easy', 'Average', 'quant'),
  q('qa2', 'The average age of 5 friends is 20 years. If a new friend aged 26 joins, the new average is:', ['21 years', '22 years', '20.5 years', '21.5 years'], 0, 'Total age = 100 + 26 = 126; new average = 126/6 = 21.', 'Medium', 'Average', 'quant'),
  q('qa3', 'The average of first 10 natural numbers is:', ['5', '5.5', '6', '4.5'], 1, 'Sum of first 10 natural numbers = 55, average = 55/10 = 5.5.', 'Easy', 'Average', 'quant'),
  q('qa4', 'Average of 3 numbers is 45. If one number is excluded, average becomes 40. The excluded number is:', ['55', '60', '50', '65'], 0, 'Sum of 3 numbers = 135; sum of 2 numbers = 80; excluded number = 135−80 = 55.', 'Medium', 'Average', 'quant'),

  // ---------------- QUANT: Ratio & Proportion ----------------
  q('qr1', 'The ratio of 2 numbers is 3:5 and their sum is 96. Find the smaller number.', ['32', '36', '40', '44'], 0, 'Parts = 3+5 = 8; each part = 12; smaller = 3×12 = 36... check: 96/8=12, 3×12=36.', 'Easy', 'Ratio & Proportion', 'quant'),
  q('qr2', 'If a:b = 2:3 and b:c = 4:5, then a:b:c is:', ['8:12:15', '2:3:5', '4:6:15', '8:6:15'], 0, 'a:b = 2:3 = 8:12 (multiply by 4); b:c = 4:5 = 12:15 (multiply by 3); so a:b:c = 8:12:15.', 'Medium', 'Ratio & Proportion', 'quant'),
  q('qr3', 'Divide ₹1200 between A and B in the ratio 5:7. B\'s share is:', ['500', '700', '600', '750'], 1, 'Total parts = 12; each part = 100; B = 7×100 = 700.', 'Easy', 'Ratio & Proportion', 'quant'),

  // ---------------- QUANT: Profit & Loss ----------------
  q('qpl1', 'A shopkeeper buys an item for ₹400 and sells it for ₹460. Find the profit percentage.', ['10%', '15%', '12%', '20%'], 1, 'Profit = 60; Profit% = (60/400)×100 = 15%.', 'Easy', 'Profit & Loss', 'quant'),
  q('qpl2', 'A trader marks goods 40% above cost price and gives a discount of 10%. Find his profit%.', ['30%', '26%', '28%', '24%'], 1, 'Let CP=100, MP=140, SP=140×0.9=126; Profit% = 26%.', 'Medium', 'Profit & Loss', 'quant'),
  q('qpl3', 'If selling price is ₹690 and loss is 8%, find the cost price.', ['₹750', '₹740', '₹760', '₹730'], 0, 'CP = SP/(1 − loss%) = 690/0.92 = 750.', 'Medium', 'Profit & Loss', 'quant'),

  // ---------------- QUANT: Time & Work ----------------
  q('qtw1', 'A can do a work in 12 days and B in 18 days. Working together, how many days will they take?', ['7.2 days', '6.5 days', '8 days', '7.5 days'], 0, 'Combined rate = 1/12+1/18 = 5/36; Time = 36/5 = 7.2 days.', 'Medium', 'Time & Work', 'quant'),
  q('qtw2', 'If 8 men can complete a task in 15 days, how many days will 12 men take?', ['12 days', '10 days', '9 days', '8 days'], 1, 'Men × Days is constant: 8×15 = 12×x → x = 10.', 'Easy', 'Time & Work', 'quant'),

  // ---------------- REASONING: Coding-Decoding ----------------
  q('rc1', 'If CAT is coded as 24-2-42, how is DOG coded (same pattern: letter position doubled)?', ['8-30-14', '4-15-7', '8-15-7', '4-30-14'], 0, "D=4→8, O=15→30, G=7→14. Pattern doubles alphabet position.", 'Medium', 'Coding-Decoding', 'reasoning'),
  q('rc2', 'In a code, "GOOD" is written as "HPPE". How is "BEST" written?', ['CFTU', 'CFUT', 'DFTU', 'CFTV'], 0, 'Each letter is shifted +1: B→C, E→F, S→T, T→U = CFTU.', 'Easy', 'Coding-Decoding', 'reasoning'),

  // ---------------- REASONING: Series ----------------
  q('rs1', 'Find the missing number: 2, 6, 12, 20, 30, ?', ['40', '42', '44', '38'], 1, 'Differences: 4,6,8,10,12 → 30+12=42.', 'Medium', 'Series', 'reasoning'),
  q('rs2', 'Find the next term: 3, 9, 27, 81, ?', ['162', '243', '324', '234'], 1, 'Each term ×3: 81×3 = 243.', 'Easy', 'Series', 'reasoning'),
  q('rs3', 'Find the odd one out: 4, 9, 16, 26, 36', ['9', '16', '26', '36'], 2, '4,9,16,36 are perfect squares (2²,3²,4²,6²); 26 is not a perfect square.', 'Medium', 'Series', 'reasoning'),

  // ---------------- REASONING: Blood Relations ----------------
  q('rb1', "Pointing to a photo, Ravi said, 'She is the daughter of my grandfather's only son.' How is she related to Ravi?", ['Sister', 'Cousin', 'Aunt', 'Niece'], 0, "Grandfather's only son = Ravi's father. His daughter = Ravi's sister.", 'Medium', 'Blood Relations', 'reasoning'),
  q('rb2', "A is B's brother. C is B's mother. D is C's father. How is A related to D?", ['Grandson', 'Son', 'Grandfather', 'Nephew'], 0, "C is D's daughter and B's mother. A is B's brother, so A is also C's son, making A the grandson of D.", 'Medium', 'Blood Relations', 'reasoning'),

  // ---------------- REASONING: Syllogism ----------------
  q('rsy1', "Statements: All pens are books. All books are pencils. Conclusion: All pens are pencils.", ['True', 'False', 'Cannot be determined', 'None'], 0, 'By transitive logic: Pens⊆Books⊆Pencils, so All pens are pencils is valid.', 'Medium', 'Syllogism', 'reasoning'),

  // ---------------- REASONING: Analogy ----------------
  q('ran1', 'Doctor : Hospital :: Teacher : ?', ['School', 'Book', 'Student', 'Class'], 0, 'A Doctor works in a Hospital, similarly a Teacher works in a School.', 'Easy', 'Analogy', 'reasoning'),
  q('ran2', 'Pen : Write :: Knife : ?', ['Cut', 'Sharp', 'Kitchen', 'Blade'], 0, 'A Pen is used to Write; a Knife is used to Cut.', 'Easy', 'Analogy', 'reasoning'),

  // ---------------- ENGLISH: Synonyms & Antonyms ----------------
  q('es1', 'Choose the synonym of "ABUNDANT":', ['Scarce', 'Plentiful', 'Rare', 'Limited'], 1, '"Abundant" means existing in large quantities, i.e., plentiful.', 'Easy', 'Synonyms & Antonyms', 'english'),
  q('es2', 'Choose the antonym of "OPTIMISTIC":', ['Hopeful', 'Positive', 'Pessimistic', 'Cheerful'], 2, '"Optimistic" means hopeful; its opposite is "pessimistic".', 'Easy', 'Synonyms & Antonyms', 'english'),
  q('es3', 'Choose the synonym of "CANDID":', ['Frank', 'Secretive', 'Confused', 'Angry'], 0, '"Candid" means truthful and straightforward, similar to "frank".', 'Medium', 'Synonyms & Antonyms', 'english'),

  // ---------------- ENGLISH: Grammar ----------------
  q('eg1', 'Choose the correctly spelled/grammatically correct sentence:', ['He don\'t like tea.', 'He doesn\'t likes tea.', 'He doesn\'t like tea.', 'He not like tea.'], 2, 'Subject "He" (third person singular) takes "doesn\'t" + base verb "like".', 'Easy', 'Grammar', 'english'),
  q('eg2', 'Identify the error: "Each of the students have submitted their assignment."', ['Each of the students', 'have submitted', 'their assignment', 'No error'], 1, '"Each" is singular, so it should be "has submitted", not "have submitted".', 'Medium', 'Grammar', 'english'),

  // ---------------- ENGLISH: One Word Substitution ----------------
  q('eo1', 'A person who can speak two languages is called:', ['Linguist', 'Bilingual', 'Polyglot', 'Translator'], 1, 'A person fluent in two languages is called "bilingual".', 'Easy', 'One Word Substitution', 'english'),
  q('eo2', 'One who loves books is called:', ['Bibliophile', 'Bibliography', 'Philanthropist', 'Bibliophobe'], 0, 'A "bibliophile" is a person who loves or collects books.', 'Medium', 'One Word Substitution', 'english'),

  // ---------------- ENGLISH: Reading Comprehension ----------------
  q('erc1', 'Passage: "Education is the most powerful weapon which you can use to change the world." What does the author emphasize?', ['Money is powerful', 'Weapons change the world', 'Education can transform society', 'War changes the world'], 2, 'The author emphasizes that education has the power to bring change in the world/society.', 'Easy', 'Reading Comprehension', 'english'),

  // ---------------- ENGLISH: Idioms & Phrases ----------------
  q('ei1', 'What does the idiom "Burn the midnight oil" mean?', ['To waste time', 'To work/study late into the night', 'To start a fire', 'To relax'], 1, '"Burn the midnight oil" means to study or work late at night.', 'Easy', 'Idioms & Phrases', 'english'),
  q('ei2', 'What does "A blessing in disguise" mean?', ['A curse', 'Something good that seemed bad at first', 'A hidden gift', 'A religious blessing'], 1, 'It refers to something that initially seems bad but turns out to be beneficial.', 'Medium', 'Idioms & Phrases', 'english'),

  // ---------------- GK: Indian History ----------------
  q('gh1', 'Who was the first Governor-General of independent India?', ['C. Rajagopalachari', 'Lord Mountbatten', 'Jawaharlal Nehru', 'Rajendra Prasad'], 1, 'Lord Mountbatten served as the first Governor-General of independent India (1947-48).', 'Medium', 'Indian History', 'gk'),
  q('gh2', 'The Quit India Movement was launched in which year?', ['1940', '1942', '1945', '1939'], 1, 'The Quit India Movement was launched in August 1942.', 'Easy', 'Indian History', 'gk'),
  q('gh3', 'Who founded the Indian National Congress in 1885?', ['Mahatma Gandhi', 'Bal Gangadhar Tilak', 'A.O. Hume', 'Subhas Chandra Bose'], 2, 'The Indian National Congress was founded by Allan Octavian Hume in 1885.', 'Medium', 'Indian History', 'gk'),

  // ---------------- GK: Geography ----------------
  q('gg1', 'Which is the longest river in India?', ['Yamuna', 'Godavari', 'Ganga', 'Brahmaputra'], 2, 'The Ganga is the longest river in India, flowing about 2,525 km.', 'Easy', 'Geography', 'gk'),
  q('gg2', 'Which state has the longest coastline in India?', ['Tamil Nadu', 'Gujarat', 'Andhra Pradesh', 'Maharashtra'], 1, 'Gujarat has the longest coastline among Indian states (~1,600 km).', 'Medium', 'Geography', 'gk'),
  q('gg3', 'Mount Everest is located in which mountain range?', ['Karakoram', 'Himalayas', 'Andes', 'Alps'], 1, 'Mount Everest is part of the Himalayan mountain range.', 'Easy', 'Geography', 'gk'),

  // ---------------- GK: Polity ----------------
  q('gp1', 'How many fundamental rights are guaranteed by the Indian Constitution?', ['5', '6', '7', '8'], 1, 'The Indian Constitution guarantees 6 fundamental rights (Right to Equality, Freedom, against Exploitation, Freedom of Religion, Cultural & Educational Rights, Constitutional Remedies).', 'Medium', 'Polity', 'gk'),
  q('gp2', 'Who is known as the "Father of the Indian Constitution"?', ['Mahatma Gandhi', 'Jawaharlal Nehru', 'B.R. Ambedkar', 'Sardar Patel'], 2, 'Dr. B.R. Ambedkar chaired the Drafting Committee and is called the Father of the Indian Constitution.', 'Easy', 'Polity', 'gk'),
  q('gp3', 'The Indian Constitution came into effect on:', ['15 August 1947', '26 January 1950', '26 November 1949', '2 October 1950'], 1, 'The Constitution of India came into effect on 26 January 1950, celebrated as Republic Day.', 'Easy', 'Polity', 'gk'),

  // ---------------- GK: Current Affairs (sample, evergreen style) ----------------
  q('gc1', 'Which Indian mission successfully achieved a soft landing near the Moon\'s south pole in 2023?', ['Chandrayaan-2', 'Chandrayaan-3', 'Mangalyaan', 'Gaganyaan'], 1, 'Chandrayaan-3 achieved a successful soft landing near the Moon\'s south pole region in August 2023.', 'Easy', 'Current Affairs', 'gk'),
  q('gc2', 'India\'s Digital Public Infrastructure model for payments is known as:', ['NEFT', 'UPI', 'RTGS', 'IMPS'], 1, 'UPI (Unified Payments Interface) is India\'s widely adopted instant payment system.', 'Easy', 'Current Affairs', 'gk'),

  // ---------------- GK: Science ----------------
  q('gs1', 'What is the SI unit of electric current?', ['Volt', 'Ampere', 'Ohm', 'Watt'], 1, 'The SI unit of electric current is the Ampere (A).', 'Easy', 'Science', 'gk'),
  q('gs2', 'Which gas is most abundant in Earth\'s atmosphere?', ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Argon'], 2, 'Nitrogen makes up about 78% of Earth\'s atmosphere.', 'Easy', 'Science', 'gk'),
  q('gs3', 'The powerhouse of the cell is:', ['Nucleus', 'Ribosome', 'Mitochondria', 'Golgi body'], 2, 'Mitochondria produce ATP (energy), earning the nickname "powerhouse of the cell".', 'Easy', 'Science', 'gk'),
]

export function getQuestionsBySubject(subjectId) {
  return questionBank.filter((q) => q.subject === subjectId)
}

export function getQuestionsByTopic(subjectId, topic) {
  return questionBank.filter((q) => q.subject === subjectId && q.topic === topic)
}

export function getQuestionsByDifficulty(difficulty) {
  return questionBank.filter((q) => q.difficulty === difficulty)
}

// Deterministic "daily quiz" - picks 5 questions based on the day of year so it's consistent all day
export function getDailyQuiz() {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now - start
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24))
  const total = questionBank.length
  const picks = []
  for (let i = 0; i < 5; i++) {
    const idx = (dayOfYear * 7 + i * 13) % total
    picks.push(questionBank[idx])
  }
  // de-duplicate just in case
  const seen = new Set()
  const unique = []
  for (const p of picks) {
    if (!seen.has(p.id)) {
      seen.add(p.id)
      unique.push(p)
    }
  }
  let idx = 0
  while (unique.length < 5 && idx < total) {
    if (!seen.has(questionBank[idx].id)) {
      unique.push(questionBank[idx])
      seen.add(questionBank[idx].id)
    }
    idx++
  }
  return unique
}

export function shuffleArray(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
