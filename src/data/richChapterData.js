// Original StudyPath teacher-style chapter content.
// This file intentionally keeps the learning content separate from the legacy resource summaries.

const topicPairs = [
  {
    title: 'What is Percentage?',
    intro: 'Percentage is a comparison written on a common scale of 100. The word percent literally means per hundred. Before touching the calculator, identify what is being compared and what the reference quantity is.',
    why: 'Percentage is a base skill behind profit & loss, discount, marks, population, data interpretation, mixture comparisons and many change-based questions.',
    rules: ['x% means x/100.', 'The whole/reference quantity is the denominator.', 'A percentage is a comparison, not an independent quantity.'],
    examples: ['20 out of 40 = 20/40 × 100 = 50%.', '45 is what percent of 60? 45/60 × 100 = 75%.'],
    method: ['Underline the PART.', 'Circle the WHOLE.', 'Write Part/Whole × 100.', 'Simplify before multiplying by 100 when possible.'],
    trap: 'Students often put the numbers in the order they appear in the sentence. That is not a rule. The reference quantity goes below.',
    practice: ['18 out of 72 = ?', '35 is what percent of 70?', '27 out of 45 = ?'],
    answers: ['25%', '50%', '60%'],
    recall: 'PART ÷ WHOLE × 100.'
  },
  {
    title: 'Percentage as a Fraction',
    intro: 'Every percentage can be rewritten as a fraction over 100. This is the fastest route for many mental calculations.',
    why: 'Fraction thinking lets you calculate common percentages without long multiplication.',
    rules: ['25% = 25/100 = 1/4.', '12.5% = 12.5/100 = 1/8.', '75% = 3/4.'],
    examples: ['25% of 320 = 1/4 × 320 = 80.', '12.5% of 640 = 1/8 × 640 = 80.'],
    method: ['Convert percentage to a simple fraction.', 'Apply the fraction to the number.', 'Simplify first if possible.'],
    trap: 'Do not confuse 0.25 with 25. 25% is 0.25 in decimal form.',
    practice: ['50% of 840', '20% of 450', '75% of 360'],
    answers: ['420', '90', '270'],
    recall: 'Common percentages are often easier as fractions.'
  },
  {
    title: 'Finding the Part',
    intro: 'When the percentage and whole are known, the missing quantity is the part. This is the reverse of the basic formula.',
    why: 'This form appears constantly in marks, population, votes, discounts and survey questions.',
    rules: ['Part = Percentage/100 × Whole.', 'Keep the percentage attached to the whole it refers to.'],
    examples: ['15% of 240 = 15/100 × 240 = 36.', '72% of 250 = 180.'],
    method: ['Write the percentage as a fraction.', 'Multiply by the whole.', 'Cancel zeros/factors before multiplying.'],
    trap: 'Do not divide by the percentage when the question asks for the part.',
    practice: ['35% of 260', '18% of 500', '62.5% of 160'],
    answers: ['91', '90', '100'],
    recall: 'Percentage × Whole gives Part.'
  },
  {
    title: 'Finding the Whole',
    intro: 'Sometimes a part is given and we are told what percentage it represents. Then we need to reconstruct the original whole.',
    why: 'Reverse percentage questions test whether you understand the reference quantity instead of just recalling a formula.',
    rules: ['Whole = Part × 100 / Percentage.', 'The given percentage always belongs to the given part.'],
    examples: ['30 is 20% of what? 30×100/20 = 150.', '72 is 60% of what? 72×100/60 = 120.'],
    method: ['Write Part = Percentage/100 × Whole.', 'Move Whole to the other side.', 'Substitute and simplify.'],
    trap: 'Do not multiply the part by the percentage again.',
    practice: ['45 is 15% of what?', '84 is 70% of what?', '18 is 12% of what?'],
    answers: ['300', '120', '150'],
    recall: 'Whole = Part × 100 ÷ Percentage.'
  },
  {
    title: 'Percentage Increase',
    intro: 'An increase is always measured against the original value. The original value is the reference because the question asks how much larger the new value is than where we started.',
    why: 'Price rises, salary hikes, population growth and score improvement are all percentage-increase situations.',
    rules: ['Increase = New − Original.', 'Increase% = Increase/Original × 100.', 'New value = Original × (1 + r/100).'],
    examples: ['₹800 to ₹1000: increase = ₹200; increase% = 200/800×100 = 25%.', '400 increased by 15% becomes 460.'],
    method: ['Find change.', 'Use original as denominator.', 'Convert to percentage.'],
    trap: 'Using the new value as denominator gives the wrong percentage.',
    practice: ['500 to 575: increase%?', '120 increased by 25 = ?', '₹1600 increased by 12.5% = ?'],
    answers: ['15%', '150', '1800'],
    recall: 'Increase is compared with ORIGINAL.'
  },
  {
    title: 'Percentage Decrease',
    intro: 'Decrease is also measured against the original value. The final value is not the reference for percentage decrease.',
    why: 'Discounts, depreciation, population fall and marks lost use this pattern.',
    rules: ['Decrease = Original − New.', 'Decrease% = Decrease/Original × 100.', 'New value = Original × (1 − r/100).'],
    examples: ['₹1000 to ₹800: decrease = ₹200; decrease% = 20%.', '900 decreased by 15% becomes 765.'],
    method: ['Subtract final from original.', 'Divide by original.', 'Multiply by 100.'],
    trap: 'The denominator stays the original value even though the quantity has fallen.',
    practice: ['800 to 680: decrease%?', '₹2400 decreased by 25% = ?', '500 decreased by 8% = ?'],
    answers: ['15%', '1800', '460'],
    recall: 'Decrease is compared with ORIGINAL.'
  },
  {
    title: 'New Value After a Percentage Change',
    intro: 'Instead of calculating the change separately every time, use a multiplier. This is faster and cleaner in timed exams.',
    why: 'Multiplier methods become extremely useful in successive change, profit/loss and data interpretation.',
    rules: ['Increase by r% → multiply by 1 + r/100.', 'Decrease by r% → multiply by 1 − r/100.'],
    examples: ['700 increased 20% = 700×1.20 = 840.', '700 decreased 20% = 700×0.80 = 560.'],
    method: ['Convert percent to multiplier.', 'Multiply original by multiplier.', 'Check direction: increase must be above original; decrease below it.'],
    trap: 'An increase multiplier must be greater than 1; a decrease multiplier must be less than 1.',
    practice: ['240 increased 15%', '640 decreased 12.5%', '1200 increased 5%'],
    answers: ['276', '560', '1260'],
    recall: 'Increase → 1 + r/100; decrease → 1 − r/100.'
  },
  {
    title: 'Percentage Change and Ratio Connection',
    intro: 'Ratios and percentages describe the same relationship in different languages. Converting between them helps you choose the fastest method.',
    why: 'Many exam questions give a ratio but ask for percentage increase/decrease or relative difference.',
    rules: ['A:B means A/B.', 'If B is the reference, percentage of A compared with B = A/B ×100.', 'Percentage change needs the original/reference quantity.'],
    examples: ['If boys:girls = 3:2, boys are 150% of girls.', 'If price ratio old:new = 4:5, increase = 1/4 = 25%.'],
    method: ['Identify the reference side.', 'Find the difference from reference ratio.', 'Convert the ratio change into percentage.'],
    trap: 'A ratio of 4:5 is not automatically a 20% increase or 25% increase; it depends on which side is original.',
    practice: ['Old:new = 5:6 → increase%?', 'A:B=2:5 → A is what % of B?', 'Old:new=8:6 → decrease%?'],
    answers: ['20%', '40%', '25%'],
    recall: 'Ratio tells relationship; percentage needs a reference.'
  },
  {
    title: 'Percentage of a Percentage',
    intro: 'When one percentage is taken of another percentage, multiply them and divide by 100. Think of it as applying one fraction after another.',
    why: 'This appears in layered selection, success rates, survey filtering and nested probability-style arithmetic.',
    rules: ['a% of b% = ab/100%.', 'If the base quantity is given, apply the first percentage, then the second.'],
    examples: ['20% of 50% = 10%.', '30% of 40% of 500 = 60.'],
    method: ['Convert each percentage to a fraction.', 'Multiply the fractions.', 'Apply to the base quantity if one is given.'],
    trap: 'Percentages applied successively multiply; they do not simply add.',
    practice: ['25% of 40%', '10% of 30% of 800', '50% of 24%'],
    answers: ['10%', '24', '12%'],
    recall: 'Nested percentages multiply.'
  },
  {
    title: 'Successive Percentage Increase',
    intro: 'When a value rises twice, the second increase is calculated on the already increased value. That is why simple addition usually fails.',
    why: 'Salary hikes, successive price increases and multi-stage growth questions are common exam traps.',
    rules: ['Two increases a% and b% give net increase = a+b+ab/100.', 'Multiplier method: (1+a/100)(1+b/100).'],
    examples: ['10% then 20% → 10+20+2 = 32%.', '₹1000 → 10% increase → ₹1100 → 20% increase → ₹1320.'],
    method: ['Apply first multiplier.', 'Use the new value for the second change.', 'Compare final value with original.'],
    trap: '10% + 20% is not 30%; it is 32% overall.',
    practice: ['20% then 10%', '25% then 20%', '5% then 5%'],
    answers: ['32%', '50%', '10.25%'],
    recall: 'Second percentage works on the changed value.'
  },
  {
    title: 'Successive Percentage Decrease',
    intro: 'Two decreases also compound because the second decrease acts on the reduced value.',
    why: 'Useful in depreciation, discounts, population decline and repeated reduction questions.',
    rules: ['For two decreases a% and b%, net decrease = a+b−ab/100.', 'Multiplier method is safer for mixed changes.'],
    examples: ['10% then 20% decrease = 10+20−2 = 28% decrease.', '1000 → 900 → 720, so final decrease is 28%.'],
    method: ['Apply first decrease.', 'Apply the second decrease to the new amount.', 'Compare with original.'],
    trap: 'Do not add the two percentages directly.',
    practice: ['20% then 10% decrease', '25% then 20% decrease', '5% then 5% decrease'],
    answers: ['28%', '40%', '9.75%'],
    recall: 'Repeated decrease compounds too.'
  },
  {
    title: 'Increase Then Decrease',
    intro: 'An increase followed by an equal percentage decrease does not return you to the starting value because the second percentage uses a different base.',
    why: 'This is one of the favourite conceptual traps in aptitude exams.',
    rules: ['a% increase then a% decrease gives a net decrease of a²/100%.', 'Example: +20%, −20% → 4% loss.'],
    examples: ['100 → 120 → 96, so net = −4%.', '500 +10% then −10% = 495.'],
    method: ['Use multipliers: (1+a/100)(1−a/100).', 'Expand if needed.', 'Compare with 1.'],
    trap: 'Equal percentages in opposite directions do not cancel.',
    practice: ['+30% then −30%', '+15% then −15%', '+25% then −25%'],
    answers: ['9% decrease', '2.25% decrease', '6.25% decrease'],
    recall: 'Equal opposite % changes leave a loss of a²/100.'
  },
  {
    title: 'Restoring the Original Value',
    intro: 'If a value decreases by a percentage, the later increase needed to restore the original is measured on the smaller value, so it is usually larger.',
    why: 'This appears in recovery, depreciation and loss-and-recovery questions.',
    rules: ['After a decrease d%, recovery increase = d/(100−d) ×100.', 'After an increase i%, required decrease = i/(100+i) ×100.'],
    examples: ['After 20% fall, required rise = 20/80×100 = 25%.', 'After 25% rise, required fall = 25/125×100 = 20%.'],
    method: ['Choose 100 as original.', 'Apply first change.', 'Find how much the new base must rise/fall to return to 100.'],
    trap: 'Do not assume the reverse percentage is the same.',
    practice: ['After 10% fall, recovery?', 'After 40% rise, reduction?', 'After 30% fall, recovery?'],
    answers: ['11 1/9%', '28 4/7%', '42 6/7%'],
    recall: 'Reverse change uses the NEW base.'
  },
  {
    title: 'Marks and Exam Percentage',
    intro: 'Marks questions are direct applications of part-whole percentage, but they often hide the whole inside total marks, subjects or changed marks.',
    why: 'This is an easy place to build speed because the arithmetic is simple once the reference is identified.',
    rules: ['Percentage = marks obtained/total marks ×100.', 'Total marks = obtained×100/percentage.'],
    examples: ['360/450 = 80%.', 'A student gets 72% of 500 = 360 marks.'],
    method: ['Identify total marks as whole.', 'Convert marks to a fraction of total.', 'Simplify.'],
    trap: 'Do not use attempted marks as the whole unless the question explicitly says so.',
    practice: ['420/600 = ?', '72% of 750 = ?', 'A student gets 480 at 80%. Total?'],
    answers: ['70%', '540', '600'],
    recall: 'Total marks = whole.'
  },
  {
    title: 'Population and Growth',
    intro: 'Population questions are percentage-change questions with a story around them. Always identify the population at the start of the change.',
    why: 'Growth and decline are common in word problems and data interpretation.',
    rules: ['Growth at r% uses multiplier 1+r/100.', 'Decline at r% uses multiplier 1−r/100.'],
    examples: ['Population 20,000 grows 5% → 21,000.', 'Population 20,000 falls 8% → 18,400.'],
    method: ['Write initial population.', 'Apply multiplier.', 'Keep units consistent.'],
    trap: 'If growth happens twice, do not apply both percentages to the original number.',
    practice: ['40,000 grows 10%', '18,000 falls 12%', '50,000 grows 5% then 10%'],
    answers: ['44,000', '15,840', '57,750'],
    recall: 'Story changes; multiplier method stays the same.'
  },
  {
    title: 'Income, Expenditure and Savings',
    intro: 'These questions become easy after deciding whether the percentage is a percentage of income, expenditure or savings.',
    why: 'Competitive exams use these problems to test reference-base awareness.',
    rules: ['Savings = Income − Expenditure.', 'A percentage change must always state or imply the base quantity.'],
    examples: ['Income ₹40,000, expense ₹30,000 → savings ₹10,000.', 'If income rises 20% to ₹48,000 while expense stays ₹30,000, savings become ₹18,000.'],
    method: ['Write income and expense separately.', 'Apply changes to the correct base.', 'Recalculate savings at the end.'],
    trap: 'A 20% rise in income is not a 20% rise in savings.',
    practice: ['Income 50k, expense 35k; income +10% → new savings?', 'Income 30k, expense 24k; expense −10% → new savings?'],
    answers: ['20,000', '8,400'],
    recall: 'Always identify what the percentage is applied to.'
  },
  {
    title: 'Price, Discount and Effective Price',
    intro: 'Discount is simply a percentage decrease on the marked price. The final selling price is what remains after the discount.',
    why: 'This bridges percentage directly into profit, loss and commercial arithmetic.',
    rules: ['Discount = Marked Price × discount%.', 'Selling Price = Marked Price × (1−discount%).'],
    examples: ['20% off ₹1500 → selling price ₹1200.', 'Two discounts 10% and 20% give 28% effective discount, not 30%.'],
    method: ['Identify marked price.', 'Apply discount multiplier.', 'For successive discounts, multiply the remaining percentages.'],
    trap: 'Successive discounts are compounded.',
    practice: ['15% off ₹2000', '10% then 20% off ₹5000', '25% off ₹960'],
    answers: ['₹1700', '₹3600', '₹720'],
    recall: 'Discount is a percentage decrease from marked price.'
  },
  {
    title: 'Profit and Loss Connection',
    intro: 'Profit percentage uses cost price as the reference. That reference-base rule is exactly the same idea as percentage change.',
    why: 'Understanding this prevents the classic denominator mistake in commercial maths.',
    rules: ['Profit = SP−CP.', 'Profit% = Profit/CP ×100.', 'Loss% = Loss/CP ×100.'],
    examples: ['CP ₹800, SP ₹1000 → profit ₹200 = 25%.', 'CP ₹1200, SP ₹900 → loss ₹300 = 25%.'],
    method: ['Find gain/loss amount.', 'Use CP as base.', 'Convert to percentage.'],
    trap: 'Profit is not divided by selling price in standard profit%.',
    practice: ['CP 500, SP 650', 'CP 800, SP 720', '25% profit on CP 1600'],
    answers: ['30% profit', '10% loss', 'SP = 2000'],
    recall: 'Commercial percentage → cost price is usually the base.'
  },
  {
    title: 'Comparing Two Quantities',
    intro: '“A is what percent more/less than B?” means B is the reference because the question is comparing A against B.',
    why: 'This exact wording causes many avoidable errors.',
    rules: ['A is x% more than B → (A−B)/B ×100.', 'A is x% less than B → (B−A)/B ×100.'],
    examples: ['60 is what % more than 48? 12/48×100 = 25%.', '48 is what % less than 60? 12/60×100 = 20%.'],
    method: ['Find difference.', 'Use the quantity named after “than” as denominator.', 'Multiply by 100.'],
    trap: 'The two answers are not equal because the reference changes.',
    practice: ['90 is what % more than 72?', '72 is what % less than 90?', '140 vs 100'],
    answers: ['25%', '20%', '40% more / 28.57% less'],
    recall: 'The word “than” tells you the base.'
  },
  {
    title: 'Data Interpretation with Percentages',
    intro: 'DI questions often combine tables or charts with percentage calculations. The safest approach is to translate the chart into a clean fraction before calculating.',
    why: 'This tests both reading accuracy and arithmetic speed.',
    rules: ['Read labels and units first.', 'Identify whether the question asks percentage of total, change, share or ratio.', 'Use approximate calculation only when options are far apart.'],
    examples: ['If a chart shows 240 out of 600 students chose science, share = 40%.', 'If sales rise from 80 to 100, increase = 25%.'],
    method: ['Read axis/category.', 'Write required numbers separately.', 'Choose part/whole or change/original formula.', 'Check whether answer is reasonable.'],
    trap: 'Wrongly reading the chart can produce a mathematically correct answer to the wrong question.',
    practice: ['A category is 180 of 720 → share?', 'Revenue 250 to 300 → change%?', 'Girls 320, boys 480 → girls as % of total?'],
    answers: ['25%', '20%', '40%'],
    recall: 'In DI, reading the data is half the calculation.'
  },
  {
    title: 'Fast Mental Percentage Tricks',
    intro: 'Timed exams reward decomposition. Break awkward percentages into familiar pieces such as 10%, 5%, 1%, 25% and 50%.',
    why: 'You can save several seconds per question and reduce calculator-style arithmetic.',
    rules: ['10% = divide by 10.', '5% = half of 10%.', '1% = divide by 100.', '15% = 10%+5%.', '35% = 30%+5%.'],
    examples: ['35% of 600 = 180+30 = 210.', '17% of 500 = 10% (50)+5% (25)+2% (10) = 85.'],
    method: ['Choose a useful decomposition.', 'Calculate simple chunks.', 'Add the chunks.'],
    trap: 'Mental maths is only useful if your decomposition stays accurate.',
    practice: ['17% of 800', '35% of 240', '62.5% of 320'],
    answers: ['136', '84', '200'],
    recall: 'Build difficult percentages from easy ones.'
  },
  {
    title: 'Exam Mixed Practice and Final Revision',
    intro: 'The final stage is not another formula dump. Mix question types so the brain learns to identify the correct model before calculating.',
    why: 'Real exams do not announce which formula to use. Recognition is the final skill.',
    rules: ['First identify the reference quantity.', 'Second decide: part, whole, increase, decrease, successive change or comparison.', 'Only then calculate.'],
    examples: ['A price goes 800→920: increase = 15%.', 'After 20% discount, ₹960 selling price means marked price ₹1200.'],
    method: ['Read twice.', 'Label known quantities.', 'Select model.', 'Calculate.', 'Check whether the result direction makes sense.'],
    trap: 'Formula hunting before understanding the sentence.',
    practice: ['25 is what % of 200?', 'A number rises 20% then falls 20%: net change?', '₹1500 after 25% discount: marked price?', '60 is 75% of what?', 'A is 20% more than B; B is what % less than A?'],
    answers: ['12.5%', '4% decrease', '₹2000', '80', '16 2/3%'],
    recall: 'Reference first. Formula second. Arithmetic third.'
  }
]

export const richChapterData = {
  'formula-percentage': {
    subject: 'Quantitative Aptitude',
    chapter: 'Percentage — Complete Teacher Book',
    level: 'Foundation → SSC → Banking → Railway → Defence',
    totalPages: 40,
    pages: topicPairs.flatMap((t, index) => {
      const base = index * 2 + 1
      return [
        {
          page: base,
          section: `Concept ${index + 1}`,
          title: t.title,
          intro: t.intro,
          teacherExplanation: t.why,
          keyPoints: t.rules,
          examples: t.examples,
          method: t.method,
          commonMistake: t.trap,
          practice: t.practice.slice(0, 2),
          answers: t.answers.slice(0, 2),
          memory: t.recall,
          teacherTip: 'Teacher rule: understand the reference quantity first. The formula only comes after that.'
        },
        {
          page: base + 1,
          section: `Practice ${index + 1}`,
          title: `${t.title} — Board & Exam Practice`,
          intro: `Now use the idea without looking at the worked examples. ${t.why}`,
          teacherExplanation: 'Try the questions first. Then reveal the answers and explain the method to yourself in one sentence.',
          keyPoints: ['Read the question completely.', 'Underline the reference quantity.', 'Choose the correct percentage model.', 'Estimate the answer before exact calculation.'],
          examples: [t.examples[0], t.examples[1]],
          method: t.method,
          warning: t.trap,
          practice: t.practice,
          answers: t.answers,
          memoryMap: [
            `Model: ${t.title}`,
            `Reference: identify the base quantity`,
            `Speed idea: ${t.recall}`,
            'Final check: does the answer direction make sense?'
          ],
          finalTip: t.recall
        }
      ]
    })
  }
}
