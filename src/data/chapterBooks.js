// StudyPath - Original teacher-style chapter books
// Golden-standard book: SSC-style Quantitative Aptitude -> Percentage
// Built as original StudyPath teaching content, not copied from any paid course.

export const chapterBooks = {
  'formula-percentage': {
    subject: 'Quantitative Aptitude',
    chapter: 'Percentage',
    audience: 'SSC • Banking • Railway • NDA • CDS • other aptitude exams',
    level: 'Foundation → Exam Level',
    totalPages: 40,
    pages: [
      {
        page: 1,
        section: 'Start Here',
        title: 'Percentage: What are we actually comparing?',
        explanation: 'Percentage is simply a comparison written on a scale of 100. The important question is never just “what is the formula?”; it is “what quantity is being compared with what base?”',
        board: ['20 students are present out of 40.', 'We are comparing 20 with the total 40.', 'That comparison is 20/40 = 1/2 = 50%.'],
        formula: 'Percentage = (Part ÷ Whole) × 100',
        teacherTip: 'Before touching the calculator, circle the PART and underline the WHOLE. Most mistakes disappear here.',
        examTrap: 'The whole is usually the denominator. Do not automatically put the first number on top.'
      },
      {
        page: 2,
        section: 'Foundation',
        title: 'The language of %',
        explanation: 'Percent literally means “per hundred”. So x% is another way of writing x/100. This is the bridge between percentages, fractions and decimals.',
        board: ['1% = 1/100', '10% = 10/100 = 1/10', '25% = 25/100 = 1/4', '50% = 50/100 = 1/2'],
        formula: 'x% = x/100',
        workedExample: '35% = 35/100 = 7/20.',
        teacherTip: 'Whenever you see %, quietly translate it into “out of 100”.'
      },
      {
        page: 3,
        section: 'Foundation',
        title: 'Part, Whole and Percentage',
        explanation: 'Every basic percentage question contains three roles: the part, the reference total, and the percentage describing the part.',
        board: ['PART = the piece we are measuring.', 'WHOLE = the complete/reference quantity.', 'PERCENTAGE = how large the part is on a scale of 100.'],
        workedExample: '72 marks out of 90: Part = 72, Whole = 90, Percentage = 72/90 × 100 = 80%.',
        teacherTip: 'Write P, W, % in the margin before solving unfamiliar questions.',
        examTrap: 'If the wording says “of” or “out of”, read it carefully; the reference quantity can change.'
      },
      {
        page: 4,
        section: 'Master Formula',
        title: 'Deriving the main formula instead of memorising it',
        explanation: 'Suppose a part is p out of a whole W. As a fraction, the comparison is p/W. To put that comparison on a 100 scale, multiply by 100.',
        board: ['Comparison = Part / Whole', 'Scale it to 100 → (Part / Whole) × 100', 'Therefore Percentage = (Part / Whole) × 100'],
        formula: 'Percentage = (Part ÷ Whole) × 100',
        teacherTip: 'Understanding this derivation means you can rebuild the formula even after forgetting it.',
        quickCheck: 'If 18 is out of 72, which number is the denominator? → 72.'
      },
      {
        page: 5,
        section: 'Basic Question',
        title: 'Finding a percentage from marks',
        explanation: 'Marks questions are usually direct part/whole questions. The total marks are the base.',
        workedExample: 'A student scores 384 out of 480. Percentage = 384/480 × 100 = 80%.',
        steps: ['Identify Part = 384.', 'Identify Whole = 480.', 'Divide: 384/480 = 0.8.', 'Multiply by 100 → 80%.'],
        practice: ['270 out of 360', '315 out of 450', '468 out of 600'],
        answers: ['75%', '70%', '78%'],
        teacherTip: 'Reduce the fraction first whenever possible. It is faster and cleaner.'
      },
      {
        page: 6,
        section: 'Reverse Question',
        title: 'Finding the part when percentage is given',
        explanation: 'If the percentage and the whole are known, we reverse the main relationship.',
        formula: 'Part = (Percentage/100) × Whole',
        workedExample: 'Find 18% of 450. Part = 18/100 × 450 = 81.',
        steps: ['Convert 18% to 18/100.', 'Multiply by the whole 450.', 'Simplify: 450 × 18 = 8100; divide by 100 → 81.'],
        practice: ['15% of 240', '12.5% of 640', '35% of 280'],
        answers: ['36', '80', '98'],
        teacherTip: 'Common fractions such as 25%, 12.5% and 50% can often be solved mentally.'
      },
      {
        page: 7,
        section: 'Reverse Question',
        title: 'Finding the whole',
        explanation: 'When the part is known and the percentage tells us what fraction of the whole it represents, we can work backwards.',
        formula: 'Whole = Part × 100 / Percentage',
        workedExample: '30 is 20% of what number? Whole = 30 × 100 / 20 = 150.',
        steps: ['Write Part = 30.', 'Write Percentage = 20%.', 'Use Whole = Part × 100 / Percentage.', 'Answer = 150.'],
        examTrap: 'Do not multiply the part by 20. The percentage is describing how much of the whole the part is.'
      },
      {
        page: 8,
        section: 'Mental Maths',
        title: 'The percentages you should recognise instantly',
        explanation: 'Competitive exams reward quick recognition. Convert common percentages to fractions once, then reuse the relationship.',
        board: ['10% = 1/10', '20% = 1/5', '25% = 1/4', '50% = 1/2', '75% = 3/4', '12.5% = 1/8', '5% = 1/20', '2.5% = 1/40'],
        workedExample: '12.5% of 960 = 1/8 of 960 = 120.',
        teacherTip: 'This is one of the easiest places to save time without taking shortcuts that are hard to trust.'
      },
      {
        page: 9,
        section: 'Mental Maths',
        title: 'Build any percentage from 10%, 5% and 1%',
        explanation: 'You do not need a separate trick for every percentage. Build awkward percentages from easy building blocks.',
        workedExample: '17% of 500 = 10% + 5% + 1% + 1% = 50 + 25 + 5 + 5 = 85.',
        board: ['10% → divide by 10', '5% → half of 10%', '1% → divide by 100', '15% = 10% + 5%', '17% = 10% + 5% + 1% + 1%'],
        practice: ['13% of 600', '18% of 250', '7% of 900'],
        answers: ['78', '45', '63'],
        teacherTip: 'Mental maths works best when you break the percentage into simple pieces.'
      },
      {
        page: 10,
        section: 'Concept Link',
        title: 'Percentage and fraction are the same comparison in different clothes',
        explanation: 'A fraction tells the comparison directly. Percentage puts the same comparison on a scale of 100.',
        board: ['1/2 = 50%', '3/5 = 60%', '7/10 = 70%', '9/20 = 45%'],
        workedExample: 'If 3 out of every 5 students choose option A, then 3/5 = 60%.',
        formula: 'Fraction × 100 = Percentage',
        teacherTip: 'When a percentage looks ugly, switch to a fraction if the fraction is familiar.'
      },
      {
        page: 11,
        section: 'Concept Link',
        title: 'Percentage and decimal',
        explanation: 'A percentage is a decimal written on a 100 scale. Moving between them is straightforward once the “divide by 100” idea is clear.',
        board: ['0.5 = 50%', '0.08 = 8%', '0.125 = 12.5%', '1.2 = 120%'],
        formula: 'Percentage ÷ 100 = Decimal',
        workedExample: '0.375 × 100 = 37.5%. Conversely, 37.5% ÷ 100 = 0.375.',
        examTrap: 'A value above 1 can still be a valid percentage: 1.15 as a multiplier means 115%.'
      },
      {
        page: 12,
        section: 'Increase',
        title: 'What does a percentage increase mean?',
        explanation: 'If a quantity rises from its original value, the amount of rise is compared against the ORIGINAL value.',
        formula: 'Increase% = (Increase ÷ Original) × 100',
        workedExample: 'Price rises from ₹800 to ₹1,000. Increase = ₹200. Increase% = 200/800 × 100 = 25%.',
        steps: ['Find change = new − original.', 'Use original as denominator.', 'Multiply by 100.'],
        examTrap: 'Do not divide by the final value unless the question explicitly asks for a different comparison.'
      },
      {
        page: 13,
        section: 'Decrease',
        title: 'Percentage decrease',
        explanation: 'The logic is identical to increase: first find the change, then compare it with the original value.',
        formula: 'Decrease% = (Decrease ÷ Original) × 100',
        workedExample: 'Price falls from ₹1,000 to ₹800. Decrease = ₹200. Decrease% = 200/1000 × 100 = 20%.',
        teacherTip: 'A decrease is measured from where you started, not from where you ended.'
      },
      {
        page: 14,
        section: 'Change in Value',
        title: 'Finding the new value after an increase',
        explanation: 'A 20% increase means the new value is not 20% of the old value; it is the old value plus 20% of the old value, i.e. 120% of the old value.',
        formula: 'New = Original × (1 + r/100)',
        workedExample: '₹1,500 increased by 20% → 1,500 × 1.20 = ₹1,800.',
        board: ['100% original + 20% increase = 120% of original.', 'Multiplier = 1.20.'],
        examTrap: '“Increase by 20%” and “becomes 20%” are completely different statements.'
      },
      {
        page: 15,
        section: 'Change in Value',
        title: 'Finding the new value after a decrease',
        explanation: 'A 20% decrease leaves 80% of the original quantity.',
        formula: 'New = Original × (1 − r/100)',
        workedExample: '₹1,500 decreased by 20% → 1,500 × 0.80 = ₹1,200.',
        board: ['100% original − 20% = 80%.', 'Multiplier = 0.80.'],
        teacherTip: 'Thinking in multipliers makes successive-change questions much easier later.'
      },
      {
        page: 16,
        section: 'Successive Change',
        title: 'Why two percentage increases are not added blindly',
        explanation: 'The second change acts on the NEW value, not the starting value. That is why the second percentage creates an extra effect.',
        workedExample: '100 increased by 10% → 110. Then 20% of 110 = 22, so final = 132. Net increase = 32%, not 30%.',
        formula: 'For +a% then +b%: Net% = a + b + ab/100',
        teacherTip: 'Always build the second change on the latest value.'
      },
      {
        page: 17,
        section: 'Successive Change',
        title: 'Increase followed by decrease',
        explanation: 'Equal increase and decrease do not cancel because the second percentage acts on a different base.',
        workedExample: '100 → +20% = 120 → −20% = 96. Final is 4% below original.',
        formula: 'For +x% followed by −x%: Net decrease = x²/100 %',
        examTrap: '“+20% and −20%” is not zero change.'
      },
      {
        page: 18,
        section: 'Reverse Change',
        title: 'Find the original value after an increase',
        explanation: 'If the final value is known after an increase, undo the multiplier rather than subtracting the percentage from the final amount.',
        formula: 'Original = Final ÷ (1 + r/100)',
        workedExample: 'After a 20% increase, a price is ₹1,200. Original = 1,200/1.20 = ₹1,000.',
        examTrap: '₹1,200 − 20% is not the correct reverse operation.'
      },
      {
        page: 19,
        section: 'Reverse Change',
        title: 'Find the original value after a decrease',
        explanation: 'A 25% decrease means the final value is 75% of the original. So divide by 0.75 to recover the original.',
        formula: 'Original = Final ÷ (1 − r/100)',
        workedExample: 'After a 25% decrease, price is ₹900. Original = 900/0.75 = ₹1,200.',
        teacherTip: 'Reverse the multiplier. Do not reverse by subtracting the same percentage.'
      },
      {
        page: 20,
        section: 'Profit & Loss Link',
        title: 'Why percentage is the backbone of profit and loss',
        explanation: 'Profit percentage compares the profit with the cost price. So profit and loss is fundamentally a percentage-on-a-base problem.',
        formula: 'Profit% = Profit ÷ CP × 100',
        workedExample: 'CP ₹800, SP ₹920 → Profit ₹120 → Profit% = 120/800 × 100 = 15%.',
        teacherTip: 'Profit% uses CP as the base. Discount% uses MP as the base. Keep those bases separate.'
      },
      {
        page: 21,
        section: 'Discount Link',
        title: 'Discount questions: the denominator changes',
        explanation: 'Discount is measured from marked price, so the marked price is the reference base.',
        formula: 'Discount% = Discount ÷ Marked Price × 100',
        workedExample: 'MP ₹2,000, discount 15% → discount ₹300 → SP ₹1,700.',
        examTrap: 'Using cost price in the discount calculation.'
      },
      {
        page: 22,
        section: 'Population',
        title: 'Population growth and repeated growth',
        explanation: 'Population growth uses the same multiplier idea. If growth happens repeatedly, the multiplier is applied repeatedly.',
        formula: 'Final = P × (1 + r/100)^n',
        workedExample: 'Population 20,000 grows by 10% each year: after one year 22,000; after two years 24,200.',
        teacherTip: 'Repeated growth is multiplicative, not “add 10% of the original every year”.'
      },
      {
        page: 23,
        section: 'Expenditure',
        title: 'Price rises: how much should consumption change?',
        explanation: 'When total expenditure must remain fixed, price and quantity move inversely because Price × Quantity stays constant.',
        formula: 'New quantity = Old quantity ÷ (1 + rise/100)',
        workedExample: 'Price rises by 25%. To keep spending unchanged, quantity becomes 1/1.25 = 80% of old quantity, so it falls by 20%.',
        examTrap: 'A 25% price rise does not require a 25% quantity reduction.'
      },
      {
        page: 24,
        section: 'Salary',
        title: 'Salary and income questions',
        explanation: 'Salary increases, deductions and bonuses are direct percentage-change questions. Always identify whether the percentage is applied to monthly salary, annual salary, or a stated base.',
        workedExample: 'Monthly salary ₹30,000 gets a 12% raise. Raise = 3,600; new salary = 33,600.',
        board: ['Raise = 12% of 30,000.', 'Then add the raise to the original.'],
        practice: ['A salary of ₹42,000 rises by 8%.', 'A salary of ₹35,000 is cut by 6%.'],
        answers: ['₹45,360', '₹32,900']
      },
      {
        page: 25,
        section: 'Marks',
        title: 'Examination percentage and required marks',
        explanation: 'Marks questions can also be reversed. If the required percentage and total marks are known, find the required score directly.',
        formula: 'Required marks = Target% × Total marks / 100',
        workedExample: 'To score 72% in a 500-mark exam, required marks = 72/100 × 500 = 360.',
        practice: ['What score gives 65% of 800?', 'A student has 270/400. What percentage is that?'],
        answers: ['520', '67.5%']
      },
      {
        page: 26,
        section: 'Ratio Link',
        title: 'Converting ratio into percentage',
        explanation: 'Ratio a:b means a/b. Once the fraction is formed, multiply by 100 to express the first quantity as a percentage of the second or of the total, depending on wording.',
        formula: 'a:b = a/b; percentage = (a/b) × 100%',
        workedExample: 'Boys:girls = 3:2. Boys as a percentage of girls = 3/2 × 100 = 150%. Boys as a percentage of total = 3/5 × 100 = 60%.',
        examTrap: '“% of girls” and “% of total students” are different denominators.'
      },
      {
        page: 27,
        section: 'Data Interpretation',
        title: 'Percentage inside tables and graphs',
        explanation: 'In DI, the first step is often not calculation but identifying the correct total. Once the base is correct, the percentage operation is routine.',
        method: ['Read the heading.', 'Identify the total relevant to the question.', 'Extract the required part.', 'Estimate the expected range.', 'Calculate exactly only after the setup is right.'],
        teacherTip: 'A 10-second setup check can prevent a 60-second wrong calculation.'
      },
      {
        page: 28,
        section: 'Composition',
        title: 'When one percentage is the remainder of another',
        explanation: 'If a group represents x% of the total, everything else represents 100 − x%, provided the categories cover the whole and do not overlap.',
        workedExample: 'If 64% of 500 students are boys, girls = 36% of 500 = 180.',
        formula: 'Remaining% = 100 − Given%',
        examTrap: 'This shortcut fails when categories overlap or when some categories are not included.'
      },
      {
        page: 29,
        section: 'Election Problems',
        title: 'Votes, valid votes and percentage',
        explanation: 'Election problems look complicated because they mix people, invalid votes, winning margins and percentages. The calculation becomes easy once the denominator is identified.',
        method: ['Separate total votes from valid votes.', 'Convert percentage statements into actual votes.', 'Use the difference or margin only after both vote counts are on the same base.'],
        workedExample: 'If 10% of 50,000 votes are invalid, valid votes = 45,000. A candidate receiving 60% of valid votes gets 27,000 votes.',
        examTrap: 'Never use total votes as denominator when the statement says “valid votes”.'
      },
      {
        page: 30,
        section: 'Savings',
        title: 'Income, expenditure and savings',
        explanation: 'When expenditure is stated as a percentage of income, savings is simply the remaining percentage.',
        formula: 'Savings% = 100 − Expenditure%',
        workedExample: 'If expenditure is 72% of income, savings are 28% of income.',
        examTrap: 'If a question introduces debt, tax or multiple spending categories, do not assume a simple remainder without checking the wording.'
      },
      {
        page: 31,
        section: 'Percentage of Percentage',
        title: 'Nested percentages',
        explanation: 'A percentage applied to another percentage means we are taking a fraction of a fraction. Multiply the percentages and divide by 100.',
        formula: '(a% of b%) = ab/100 %',
        workedExample: '20% of 50% = 20 × 50 / 100 = 10%.',
        teacherTip: 'Think “part of a part” → multiplication, not addition.'
      },
      {
        page: 32,
        section: 'Successive Change',
        title: 'Three or more percentage changes',
        explanation: 'For several changes, multiply the corresponding factors. The order matters when the percentages are unequal.',
        workedExample: '₹1,000 → +10% = 1,100 → −10% = 990 → +20% = 1,188.',
        board: ['+10% → ×1.10', '−10% → ×0.90', '+20% → ×1.20', 'Overall multiplier = 1.10 × 0.90 × 1.20 = 1.188'],
        teacherTip: 'Multipliers are the safest method when there are many changes.'
      },
      {
        page: 33,
        section: 'Comparison',
        title: 'Percentage change versus percentage difference',
        explanation: 'Percentage change normally uses the original/reference value. Percentage difference compares two values without automatically declaring one as the original base. Read the requested definition carefully.',
        board: ['Change from 80 to 100 → denominator is 80.', 'A symmetric comparison may use the average of the two values, depending on the convention used in the question.'],
        teacherTip: 'In exams, the denominator is often the hidden test of whether you understood the wording.'
      },
      {
        page: 34,
        section: 'Advanced Reverse',
        title: 'Undo multiple changes in reverse order',
        explanation: 'When the final value is known after several changes, reverse the last change first, then the one before it. This is simply reversing multiplication.',
        workedExample: 'Final ₹1,320 after +10% then +20%. Original = 1,320/(1.20×1.10) = ₹1,000.',
        method: ['Write the final value.', 'Write each change as a multiplier.', 'Divide by the last multiplier first, or divide by the combined multiplier.'],
        examTrap: 'Do not subtract 10% and 20% from the final value.'
      },
      {
        page: 35,
        section: 'Exam Strategy',
        title: 'The 5-second setup method',
        explanation: 'Fast solving is mostly pattern recognition. Use this tiny checklist before calculating.',
        board: ['1. What is the base?', '2. Is the problem asking part, whole or percentage?', '3. Is there an increase/decrease?', '4. Is the change repeated?', '5. Can I convert to a fraction or multiplier?'],
        teacherTip: 'If the setup is right, the arithmetic is usually the easy part.'
      },
      {
        page: 36,
        section: 'Mistakes',
        title: 'Top traps students repeatedly fall into',
        explanation: 'These mistakes are more important than memorising another formula because they cause wrong answers even when the maths is known.',
        board: ['Wrong denominator.', 'Using final value instead of original.', 'Adding successive percentages.', 'Confusing profit%, discount% and change%.', 'Rounding too early.', 'Ignoring whether the percentage is of valid votes, total votes, CP, MP, income, etc.'],
        teacherTip: 'When a question feels easy, spend two seconds checking the base. Easy-looking questions often hide the denominator trap.'
      },
      {
        page: 37,
        section: 'Practice',
        title: 'Practice Set A — Foundation',
        practice: ['1. 36 is what percent of 48?', '2. Find 22% of 450.', '3. 42 is 35% of what number?', '4. A price of ₹900 rises by 15%. Find the new price.', '5. A value falls from 500 to 425. Find percentage decrease.'],
        answers: ['75%', '99', '120', '₹1,035', '15%'],
        teacherTip: 'Solve without looking at the answers. Mark every question where you were unsure of the denominator.'
      },
      {
        page: 38,
        section: 'Practice',
        title: 'Practice Set B — Exam Level',
        practice: ['1. A salary increases by 20% and then decreases by 10%. Find net change.', '2. A product is sold after 25% discount for ₹1,500. Find marked price.', '3. After a 30% decrease, a population is 84,000. Find the original population.', '4. Price rises by 20%. By what percentage should consumption fall to keep expenditure constant?', '5. A student improves from 240 to 300 marks. Find percentage increase.'],
        answers: ['8% increase', '₹2,000', '₹1,20,000', '16 2/3% decrease', '25%'],
        examTrap: 'Questions 2–4 are reverse-base questions. Slow down and identify the reference quantity.'
      },
      {
        page: 39,
        section: 'Boss Battle',
        title: 'Mixed competitive set',
        practice: ['1. A number is increased by 25% and then decreased by 20%. Compare the final value with the original.', '2. 40% of a number exceeds 25% of the same number by 75. Find the number.', '3. A candidate gets 54% of valid votes and wins by 2,400 votes. If the loser gets 46%, find total valid votes.', '4. A marked price is increased by 20% and then a 20% discount is given. What is the net effect on marked price?', '5. A person spends 68% of income, then income rises by 10% while expenditure rises by 5%. Find the new savings as a percentage of old income.'],
        answers: ['No net change', '500', '30,000', '4% decrease', '36.8% of old income'],
        teacherTip: 'Do not rush this page. These are designed to combine two or more ideas from the chapter.'
      },
      {
        page: 40,
        section: 'Final Revision',
        title: 'One-minute recall — close the book and teach it back',
        explanation: 'A chapter is not finished because you read it. It is finished when you can explain the structure without looking.',
        board: ['Percentage = Part/Whole × 100', 'Part = % × Whole', 'Whole = Part × 100/%', 'Increase% and decrease% use the original as base.', 'New value uses a multiplier.', 'Reverse questions undo the multiplier.', 'Successive changes multiply.', 'Common percentages should become mental fractions.'],
        quickCheck: ['What is the denominator in percentage change?', 'Why do +20% and −20% not cancel?', 'How do you reverse a 25% decrease?', 'Which base is used for profit%?', 'Which base is used for discount%?'],
        answers: ['Original value', 'Because the second change acts on a different base', 'Divide final value by 0.75', 'Cost Price', 'Marked Price'],
        finalTip: 'If you can identify the BASE before calculating, percentage questions stop feeling like formula questions and start feeling like comparison questions.'
      }
    ]
  }
}
