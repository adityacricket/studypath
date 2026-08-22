// StudyPath original premium-style Percentage book.
// Written from first principles for SSC-style aptitude learning.
// This content is original StudyPath material; no third-party notes are reproduced.

export const percentagePremiumBook = {
  subject: 'Quantitative Aptitude',
  chapter: 'Percentage',
  audience: 'SSC CGL • CHSL • MTS • Railway • NDA • CDS • Banking aptitude',
  level: 'Foundation → Exam Level',
  totalPages: 40,
  pages: [
    {
      page: 1,
      section: 'Chapter Opening',
      title: 'Percentage — learn the idea before the formula',
      concept: 'A percentage is simply a comparison written on a scale of 100. The real skill is choosing the correct base for that comparison.',
      teacherBoard: ['PART = what we are measuring', 'BASE / WHOLE = what we are comparing it with', 'PERCENTAGE = comparison × 100'],
      formula: 'Percentage = (Part ÷ Whole) × 100',
      workedExample: '20 students are present out of 40. We compare 20 with 40, so 20/40 × 100 = 50%.',
      teacherTip: 'Before calculating anything, say aloud: “What is my part, and what is my base?”',
      examTrap: 'The first number in a question is not automatically the denominator.',
      quickCheck: ['In “18 is what percent of 72?”, identify Part and Whole.']
    },
    {
      page: 2,
      section: 'Chapter Map',
      title: 'What you will be able to solve after this chapter',
      concept: 'We will build percentage in layers so the later topics—profit, discount, population, DI and successive change—feel like applications of one idea.',
      teacherBoard: ['Level 1: basic percentage', 'Level 2: reverse percentage', 'Level 3: increase/decrease', 'Level 4: successive change', 'Level 5: exam applications', 'Level 6: traps + speed'],
      teacherTip: 'Do not jump to shortcuts until Levels 1–3 feel automatic.',
      practice: ['Write one percentage question you already know how to solve.', 'Write one percentage question that usually confuses you.']
    },
    {
      page: 3,
      section: 'Foundation',
      title: 'What does “percent” actually mean?',
      concept: 'Percent means “per hundred”. So x% is exactly x out of 100.',
      teacherBoard: ['1% = 1/100', '10% = 10/100 = 1/10', '25% = 25/100 = 1/4', '50% = 50/100 = 1/2', '100% = the entire base'],
      formula: 'x% = x/100',
      workedExample: '35% = 35/100 = 7/20.',
      teacherTip: 'Whenever you see %, mentally translate it to “out of 100”.',
      practice: ['Convert 8% to a fraction.', 'Convert 62.5% to a fraction.'],
      answers: ['2/25', '5/8']
    },
    {
      page: 4,
      section: 'Foundation',
      title: 'Part, whole and base — the three roles',
      concept: 'Most basic percentage questions contain three quantities. Once you label them, the calculation becomes mechanical.',
      teacherBoard: ['PART → the quantity being measured', 'WHOLE / BASE → the reference quantity', 'PERCENTAGE → part expressed out of 100'],
      workedExample: '72 students out of 90: Part = 72, Whole = 90, Percentage = 72/90 × 100 = 80%.',
      steps: ['Circle the part.', 'Underline the base.', 'Write the fraction part/base.', 'Multiply by 100.'],
      teacherTip: 'Writing PART and BASE in the margin is a tiny habit that prevents many denominator mistakes.',
      examTrap: 'In comparison questions, the word “than” often changes the base.'
    },
    {
      page: 5,
      section: 'Foundation',
      title: 'Percentage, fraction and decimal are one idea',
      concept: 'The same comparison can be written as a fraction, a decimal, or a percentage. Strong exam solvers move between them freely.',
      teacherBoard: ['1/2 = 0.5 = 50%', '1/4 = 0.25 = 25%', '3/5 = 0.6 = 60%', '7/20 = 0.35 = 35%'],
      formula: 'Fraction × 100 = Percentage',
      workedExample: '3/8 = 0.375 = 37.5%.',
      teacherTip: 'If the fraction is familiar, use it to calculate mentally instead of using a long decimal.',
      practice: ['Convert 0.72 to percentage.', 'Convert 45% to decimal.', 'Convert 0.125 to percentage.'],
      answers: ['72%', '0.45', '12.5%']
    },
    {
      page: 6,
      section: 'Master Formula',
      title: 'Derive the master formula',
      concept: 'Suppose a part p belongs to a whole W. The comparison is p/W. To express that comparison out of 100, multiply by 100.',
      teacherBoard: ['Comparison = Part / Whole', 'Scale to 100 → (Part / Whole) × 100', 'Therefore → Percentage = (Part / Whole) × 100'],
      formula: 'Percentage = (Part ÷ Whole) × 100',
      workedExample: '18 is what percent of 72? 18/72 × 100 = 25%.',
      teacherTip: 'If you forget the formula in an exam, rebuild it from the meaning instead of guessing.',
      quickCheck: ['Which number belongs in the denominator in “24 is what percent of 60?”']
    },
    {
      page: 7,
      section: 'Basic Questions',
      title: 'Finding the percentage when part and whole are known',
      concept: 'When both values are directly given, use part ÷ base × 100.',
      workedExample: 'A student scores 384 out of 480. 384/480 × 100 = 80%.',
      steps: ['Part = 384', 'Whole = 480', '384/480 = 0.8', '0.8 × 100 = 80%'],
      practice: ['270 out of 360', '315 out of 450', '468 out of 600'],
      answers: ['75%', '70%', '78%'],
      examTrap: 'Do not use maximum marks plus some other number as the base unless the question explicitly says so.'
    },
    {
      page: 8,
      section: 'Reverse Percentage',
      title: 'Finding the part',
      concept: 'If a percentage of a known whole is required, convert the percentage into a fraction and multiply by the whole.',
      formula: 'Part = (Percentage/100) × Whole',
      workedExample: '18% of 450 = 18/100 × 450 = 81.',
      steps: ['Write the percentage as a fraction.', 'Multiply by the whole.', 'Cancel zeros or reduce before multiplying when possible.'],
      practice: ['15% of 240', '12.5% of 640', '35% of 280'],
      answers: ['36', '80', '98'],
      teacherTip: '25%, 12.5%, 20% and 50% are fraction-friendly percentages. Learn them cold.'
    },
    {
      page: 9,
      section: 'Reverse Percentage',
      title: 'Finding the whole',
      concept: 'If a known part represents a known percentage, divide the part by the corresponding fraction of the whole.',
      formula: 'Whole = Part × 100 / Percentage',
      workedExample: '30 is 20% of what number? 30 × 100 / 20 = 150.',
      steps: ['Part = 30', 'Percentage = 20%', 'Whole = 30 × 100 / 20', 'Whole = 150'],
      examTrap: 'Do not multiply the part by the percentage. The question asks for the original base.',
      practice: ['48 is 30% of what number?', '72 is 60% of what number?'],
      answers: ['160', '120']
    },
    {
      page: 10,
      section: 'Speed Maths',
      title: 'Common percentages you should recognise instantly',
      concept: 'Timed exams reward quick fraction recognition. These conversions save calculation time without sacrificing reliability.',
      teacherBoard: ['10% = 1/10', '20% = 1/5', '25% = 1/4', '50% = 1/2', '75% = 3/4', '12.5% = 1/8', '5% = 1/20', '2.5% = 1/40'],
      workedExample: '12.5% of 960 = 1/8 of 960 = 120.',
      teacherTip: 'Use a shortcut only after you know why it works.',
      practice: ['25% of 760', '75% of 360', '2.5% of 800'],
      answers: ['190', '270', '20']
    },
    {
      page: 11,
      section: 'Speed Maths',
      title: 'Build awkward percentages from easy ones',
      concept: 'Instead of memorising every percentage, compose it from 10%, 5%, 1%, 25% and similar anchors.',
      teacherBoard: ['15% = 10% + 5%', '17% = 10% + 5% + 1% + 1%', '35% = 25% + 10%', '45% = 50% − 5%'],
      workedExample: '17% of 500 = 50 + 25 + 5 + 5 = 85.',
      practice: ['13% of 600', '18% of 250', '7% of 900'],
      answers: ['78', '45', '63'],
      teacherTip: 'Look for the easiest decomposition, not the fanciest trick.'
    },
    {
      page: 12,
      section: 'Concept Link',
      title: 'Percentage of a percentage',
      concept: 'When one percentage is taken of another percentage, multiply the numerical percentages and divide by 100.',
      formula: '(a% of b%) = (ab/100)%',
      workedExample: '20% of 50% = (20 × 50)/100 % = 10%.',
      examTrap: 'This is multiplication, not addition.',
      practice: ['30% of 40%', '25% of 80%', '12.5% of 40%'],
      answers: ['12%', '20%', '5%']
    },
    {
      page: 13,
      section: 'Language Trap',
      title: '“A is what percent of B?” vs “A is what percent more than B?”',
      concept: 'The comparison base changes with the wording. “A is what percent of B?” uses B as base. “A is what percent more than B?” still uses B as base, but the numerator becomes the excess A − B.',
      workedExample: '60 is 50% more than 40 because excess = 20 and 20/40 × 100 = 50%.',
      teacherBoard: ['Percent of B → A/B × 100', 'Percent more than B → (A−B)/B × 100'],
      teacherTip: 'Underline the words “of”, “more than”, “less than”, and “compared with”.',
      quickCheck: ['50 is what percent more than 40?']
    },
    {
      page: 14,
      section: 'Increase',
      title: 'Percentage increase',
      concept: 'Percentage increase compares the amount gained with the original value, not the final value.',
      formula: 'Increase% = (Increase ÷ Original) × 100',
      workedExample: '₹800 becomes ₹1,000. Increase = ₹200. 200/800 × 100 = 25%.',
      steps: ['Find increase = new − old.', 'Use original as the base.', 'Convert to percentage.'],
      examTrap: 'The denominator is the original value.',
      practice: ['A score rises from 240 to 300.', 'A quantity rises from 150 to 180.'],
      answers: ['25%', '20%']
    },
    {
      page: 15,
      section: 'Decrease',
      title: 'Percentage decrease',
      concept: 'Percentage decrease compares the loss with the original value.',
      formula: 'Decrease% = (Decrease ÷ Original) × 100',
      workedExample: '₹1,000 becomes ₹800. Decrease = ₹200. 200/1000 × 100 = 20%.',
      teacherTip: 'The direction changed, but the base rule did not: compare with the original.',
      practice: ['500 becomes 425.', '800 becomes 680.'],
      answers: ['15%', '15%']
    },
    {
      page: 16,
      section: 'Change in Value',
      title: 'New value after an increase',
      concept: 'A 20% increase means the final value is 120% of the original.',
      formula: 'New = Original × (1 + r/100)',
      workedExample: '₹1,500 increased by 20% = 1,500 × 1.20 = ₹1,800.',
      teacherBoard: ['Original = 100%', 'Increase = 20%', 'Final = 120%', 'Multiplier = 1.20'],
      teacherTip: 'Thinking in multipliers is the cleanest route to successive-change problems.',
      practice: ['800 increased by 15%', '2,400 increased by 12.5%'],
      answers: ['920', '2700']
    },
    {
      page: 17,
      section: 'Change in Value',
      title: 'New value after a decrease',
      concept: 'A 20% decrease leaves 80% of the original amount.',
      formula: 'New = Original × (1 − r/100)',
      workedExample: '₹1,500 decreased by 20% = 1,500 × 0.80 = ₹1,200.',
      teacherBoard: ['Original = 100%', 'Decrease = 20%', 'Final = 80%', 'Multiplier = 0.80'],
      practice: ['900 decreased by 15%', '1,600 decreased by 12.5%'],
      answers: ['765', '1400']
    },
    {
      page: 18,
      section: 'Successive Change',
      title: 'Two increases: why percentages are multiplied',
      concept: 'The second increase acts on the new value, so it is not simply another percentage of the starting value.',
      formula: 'For +a% then +b%: Net% = a + b + ab/100',
      workedExample: '100 → +10% = 110 → +20% = 132. Net increase = 32%.',
      steps: ['Apply the first multiplier.', 'Use that new value as the second base.', 'Compare final value with original.'],
      examTrap: '10% + 20% = 30% is not correct here.',
      practice: ['100 increased by 20% then 10%', '500 increased by 10% then 10%'],
      answers: ['32% increase', '21% increase']
    },
    {
      page: 19,
      section: 'Successive Change',
      title: 'Equal increase and decrease do not cancel',
      concept: 'The bases are different after the first change, so +x% followed by −x% produces a net decrease.',
      formula: 'For +x% then −x%: Net decrease = x²/100 %',
      workedExample: '100 → +20% = 120 → −20% = 96. Net = 4% decrease.',
      teacherTip: 'Use the formula when the percentages are equal; otherwise use multipliers.',
      practice: ['100 → +10% → −10%', '200 → +30% → −30%'],
      answers: ['1% decrease', '9% decrease']
    },
    {
      page: 20,
      section: 'Reverse Change',
      title: 'Recovering the original after an increase',
      concept: 'Reverse percentage questions require undoing the multiplier, not repeating the same percentage operation.',
      formula: 'Original = Final ÷ (1 + r/100)',
      workedExample: 'Final price ₹1,200 after a 20% rise. Original = 1,200/1.20 = ₹1,000.',
      examTrap: '1,200 − 20% is not the original price.',
      practice: ['₹1,500 is after a 25% increase.', '₹2,420 is after a 10% increase.'],
      answers: ['₹1,200', '₹2,200']
    },
    {
      page: 21,
      section: 'Reverse Change',
      title: 'Recovering the original after a decrease',
      concept: 'After a decrease, divide by the percentage that remains.',
      formula: 'Original = Final ÷ (1 − r/100)',
      workedExample: 'Final price ₹900 after a 25% decrease. Original = 900/0.75 = ₹1,200.',
      teacherTip: 'A 25% decrease means 75% remains. Reverse by dividing by 0.75.',
      practice: ['₹680 after a 15% decrease.', '₹1,020 after a 15% decrease.'],
      answers: ['₹800', '₹1,200']
    },
    {
      page: 22,
      section: 'Applications',
      title: 'Price–consumption and fixed expenditure',
      concept: 'If expenditure stays fixed, price and quantity move inversely. A price rise therefore requires a compensating fall in consumption.',
      formula: 'New quantity = Old quantity ÷ (1 + rise/100)',
      workedExample: 'Price rises by 25%. To keep spending unchanged, consumption must become 1/1.25 = 80% of old consumption.',
      teacherTip: 'The decrease in consumption is 20%, not 25%.',
      practice: ['Price rises 20%. What % fall in consumption keeps expenditure fixed?'],
      answers: ['16 2/3% decrease']
    },
    {
      page: 23,
      section: 'Applications',
      title: 'Population growth and repeated percentage change',
      concept: 'Repeated annual growth uses the same multiplication principle as successive increases.',
      formula: 'Final = Initial × (1 + r/100)^n',
      workedExample: 'Population 20,000 grows 10% per year. After two years: 20,000 × 1.1² = 24,200.',
      examTrap: 'Do not add 10% + 10% and stop at 22,000.',
      practice: ['Population 50,000 grows 20% for one year.', 'Population 40,000 grows 10% for two years.'],
      answers: ['60,000', '48,400']
    },
    {
      page: 24,
      section: 'Applications',
      title: 'Marks and pass-percentage questions',
      concept: 'Marks questions are percentage questions with a clear base: maximum marks or required marks, depending on the wording.',
      workedExample: 'A candidate scores 264 out of 330. Percentage = 264/330 × 100 = 80%.',
      teacherTip: 'In pass-mark questions, translate the percentage into actual marks first.',
      practice: ['Pass mark is 40% of 500. Find pass marks.', 'A student scores 315/450. Find percentage.'],
      answers: ['200', '70%']
    },
    {
      page: 25,
      section: 'Applications',
      title: 'Election and vote questions',
      concept: 'Election questions often hide percentage inside total votes, valid votes, or vote difference. Label the base before calculating.',
      workedExample: 'A candidate gets 56% of 25,000 valid votes = 14,000 votes.',
      steps: ['Identify the relevant total.', 'Convert percentage to fraction.', 'Multiply by total.', 'If margin is asked, subtract vote counts.'],
      examTrap: 'Valid votes and total votes may not be the same quantity.',
      practice: ['58% of 30,000 votes', 'Difference between 62% and 38% of 25,000 votes'],
      answers: ['17,400', '6,000']
    },
    {
      page: 26,
      section: 'Applications',
      title: 'Income, expenditure and savings',
      concept: 'When income is used as a base, savings can be expressed as the remaining percentage after expenditure.',
      workedExample: 'If expenditure is 80% of income, saving is 20% of income.',
      teacherBoard: ['Income = 100%', 'Expenditure = 80%', 'Saving = 20%'],
      teacherTip: '“What percentage is saved?” often becomes a complement problem: 100% − expenditure%.',
      practice: ['Expenditure is 72% of income. Find saving%.', 'Saving is 18% of income. Find expenditure%.'],
      answers: ['28%', '82%']
    },
    {
      page: 27,
      section: 'Applications',
      title: 'Profit and loss: identify the base',
      concept: 'Profit percentage is measured on cost price; loss percentage is also measured on cost price.',
      formula: 'Profit% = Profit/CP × 100',
      workedExample: 'CP ₹800, SP ₹920. Profit = ₹120, so profit% = 120/800 × 100 = 15%.',
      examTrap: 'Profit is not divided by selling price in the standard profit-percentage definition.',
      practice: ['CP ₹500, SP ₹575.', 'CP ₹800, SP ₹720.'],
      answers: ['15% profit', '10% loss']
    },
    {
      page: 28,
      section: 'Applications',
      title: 'Discount: marked price is the base',
      concept: 'Discount is the reduction from marked price, so marked price is the reference base.',
      formula: 'Discount% = Discount/MP × 100',
      workedExample: 'MP ₹2,000, discount 15% → discount ₹300 → SP ₹1,700.',
      teacherTip: 'Keep three values separate: MP, discount, SP.',
      practice: ['MP ₹1,600 with 25% discount.', 'MP ₹2,500 with 12% discount.'],
      answers: ['SP ₹1,200', 'SP ₹2,200']
    },
    {
      page: 29,
      section: 'Data Interpretation',
      title: 'Percentage inside tables and charts',
      concept: 'DI questions often ask for percentage change, percentage share or percentage comparison. The same base rule applies.',
      workedExample: 'Sales rise from 8,000 to 10,000. Percentage increase = 2,000/8,000 × 100 = 25%.',
      teacherTip: 'Read the row/column labels before touching the numbers.',
      examTrap: 'Comparing two categories without checking whether the question asks for share or change.',
      practice: ['A value rises 12,500 → 15,000. Find increase%.', 'A category is 240 out of total 1,200. Find share%.'],
      answers: ['20%', '20%']
    },
    {
      page: 30,
      section: 'Question Reading',
      title: 'The denominator decides the story',
      concept: 'The same two numbers can produce different percentages depending on which one is the base.',
      workedExample: '60 is 150% of 40, but 40 is only 66 2/3% of 60. Nothing is “wrong”; the base changed.',
      teacherBoard: ['A as % of B → A/B × 100', 'B as % of A → B/A × 100'],
      teacherTip: 'Before every calculation ask: “Percentage of what?”',
      quickCheck: ['40 is what percent less than 60?', '60 is what percent more than 40?']
    },
    {
      page: 31,
      section: 'Exam Traps',
      title: 'Five traps that look innocent',
      concept: 'Most percentage errors are reading errors, not arithmetic errors.',
      teacherBoard: ['1. Wrong base', '2. Final value used instead of original', '3. Equal increase/decrease assumed to cancel', '4. Percent of percent added instead of multiplied', '5. Reverse question solved in the same direction'],
      teacherTip: 'Circle the base before calculating. This takes one second and saves marks.',
      practice: ['A value rises 25% and falls 25%. Net change?', '40 is what percent more than 32?'],
      answers: ['6.25% decrease', '25%']
    },
    {
      page: 32,
      section: 'SSC Speed Desk',
      title: 'How to think in a timed SSC question',
      concept: 'SSC-style aptitude rewards correct base selection first, then efficient arithmetic. Do not chase a shortcut that makes you uncertain.',
      teacherBoard: ['Read → identify base → choose representation → calculate → sanity-check', 'Use fractions for 25%, 12.5%, 50%, 75%', 'Use multipliers for successive change'],
      workedExample: '15% of 800 = 10% (80) + 5% (40) = 120. Faster than 800 × 15 ÷ 100.',
      teacherTip: 'Speed comes from recognition, not from skipping reasoning.',
      practice: ['18% of 250', '25% of 960', '40% increase on 750'],
      answers: ['45', '240', '1050']
    },
    {
      page: 33,
      section: 'SSC Mixed Practice',
      title: 'Exam-style set A',
      concept: 'These mix direct percentage, reverse percentage and comparison wording—the patterns most likely to test whether you understood the chapter.',
      practice: ['1. 28 is what percent of 140?', '2. 45 is 15% of what number?', '3. A score rises 250 → 300. Increase%?', '4. A price falls 1,200 → 1,020. Decrease%?', '5. 30% of 70% = ?'],
      answers: ['20%', '300', '20%', '15%', '21%'],
      examTrap: 'Do not look at the answer before writing the base for each question.'
    },
    {
      page: 34,
      section: 'SSC Mixed Practice',
      title: 'Exam-style set B',
      concept: 'Now the questions require two steps or a reverse operation.',
      practice: ['1. After a 25% increase, a value is 1,250. Find original.', '2. After a 20% decrease, a value is 640. Find original.', '3. A quantity increases 10% then 20%. Net increase?', '4. A value increases 30% then decreases 30%. Net change?', '5. Expenditure is 78% of income. Find saving%.'],
      answers: ['1000', '800', '32%', '9% decrease', '22%'],
      teacherTip: 'Notice how reverse questions use division by the multiplier.'
    },
    {
      page: 35,
      section: 'Challenge Desk',
      title: 'Can you solve without writing the master formula?',
      concept: 'The final stage is flexible thinking: choose the representation that makes the arithmetic easiest.',
      practice: ['1. A number is first increased by 25% and then reduced by 20%. Net change?', '2. 72 is 60% of a number. Find 25% of that number.', '3. A price is reduced by 20%. By what % must it be increased to return to the original?', '4. A population increases by 10% and then by 10%. What % more than original?', '5. A student gets 72% and is short of pass by 24 marks if pass mark is 80%. Find maximum marks.'],
      answers: ['0% (no change)', '30', '25%', '21%', '300'],
      teacherTip: 'The question often becomes easy after choosing a convenient base such as 100.'
    },
    {
      page: 36,
      section: 'Answer Clinic',
      title: 'Why common wrong approaches fail',
      concept: 'Knowing the wrong method is useful because it helps you detect the same mistake under time pressure.',
      teacherBoard: ['Wrong: +20% and −20% = 0%.', 'Correct: apply the second change to the new base.', 'Wrong: reverse 25% decrease by adding 25%.', 'Correct: divide by 0.75.', 'Wrong: use final value as increase denominator.', 'Correct: use original value.'],
      teacherTip: 'Every repeated mistake should become a personal “trap card” in your revision notes.'
    },
    {
      page: 37,
      section: 'Formula Map',
      title: 'All essential percentage formulas on one page',
      teacherBoard: ['Percentage = Part/Whole × 100', 'Part = Percentage/100 × Whole', 'Whole = Part × 100/Percentage', 'Increase% = Increase/Original × 100', 'Decrease% = Decrease/Original × 100', 'New after increase = Original(1+r/100)', 'New after decrease = Original(1−r/100)', 'Successive +a,+b → a+b+ab/100', 'Successive +x,−x → x²/100 decrease'],
      teacherTip: 'Do not memorise all nine at once. Master the first three, then derive the rest.',
      quickCheck: ['Which formula would you use when the final value after a 20% increase is known?']
    },
    {
      page: 38,
      section: 'Five-Minute Revision',
      title: 'The chapter in one sitting',
      concept: 'A good revision page should trigger memory, not replace understanding.',
      teacherBoard: ['Base first.', 'Part/base gives the comparison.', 'Percent = comparison × 100.', 'Increase/decrease uses original base.', 'Successive changes use the latest value.', 'Reverse change means undo the multiplier.', 'Applications are the same idea with different names.'],
      practice: ['State the master formula from memory.', 'State the reverse formula for a 20% increase.', 'Give 25%, 12.5% and 75% as fractions.'],
      answers: ['Part/Whole × 100', 'Original = Final/1.20', '1/4, 1/8, 3/4']
    },
    {
      page: 39,
      section: 'Mastery Test',
      title: '10 questions — no notes',
      concept: 'Close the book. You are now testing retrieval, not recognition.',
      practice: ['1. 54 is what percent of 90?', '2. 35% of 240?', '3. 84 is 28% of what number?', '4. 400 → 460. Increase%?', '5. 900 → 765. Decrease%?', '6. +10% then +20% = ?', '7. +20% then −20% = ?', '8. Final 1,500 after 25% increase. Original?', '9. Final 960 after 20% decrease. Original?', '10. 45% of 60% = ?'],
      answers: ['60%', '84', '300', '15%', '15%', '32% increase', '4% decrease', '1200', '1200', '27%'],
      teacherTip: 'Aim for accuracy first. Speed comes after the method is stable.'
    },
    {
      page: 40,
      section: 'Final Page',
      title: 'Percentage — what should stay in your head?',
      concept: 'If you remember the base, the rest of percentage is mostly a matter of representation and clean arithmetic.',
      teacherBoard: ['1. Identify the base.', '2. Decide what is being compared.', '3. Use a fraction, decimal or multiplier.', '4. Check whether the question is direct, reverse or successive.', '5. Sanity-check the size of the answer.'],
      formula: 'Percentage = (Part ÷ Whole) × 100',
      teacherTip: 'The best shortcut is not a trick. It is recognising the question pattern quickly.',
      quickCheck: ['Explain to yourself why +20% then −20% is a decrease.', 'Explain why the base matters more than the formula.', 'Name three percentage-to-fraction conversions you can do instantly.'],
      finalTip: 'Understand → recognise → calculate → check. That is the StudyPath way to solve percentage questions.'
    }
  ]
}

export default percentagePremiumBook
