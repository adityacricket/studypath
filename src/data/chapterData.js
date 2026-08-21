// StudyPath - Detailed Chapter Content
// 40-page teacher-style chapter for Percentage

export const chapterData = {
  "formula-percentage": {
    subject: "Quantitative Aptitude",
    chapter: "Percentage",
    level: "Foundation → Competitive Exams",
    totalPages: 40,

    pages: [
      {
        page: 1,
        section: "Chapter Start",
        title: "Percentage — The Big Picture",
        intro:
          "Percentage means a quantity expressed out of 100. It is one of the most useful ideas in quantitative aptitude because many chapters are built on it.",
        keyPoints: [
          "Percent means 'per hundred'.",
          "The symbol % represents division by 100.",
          "Percentage questions always involve a comparison.",
          "The most important habit is identifying the PART and the WHOLE."
        ],
        example:
          "If 20 students are present out of 40 students, the attendance is 50%.",
        formula: "Percentage = (Part ÷ Whole) × 100",
        teacherTip:
          "Never memorise percentage formulas blindly. First ask: what is being compared with what?"
      },

      {
        page: 2,
        section: "Foundation",
        title: "What Does Percentage Actually Mean?",
        intro:
          "A percentage converts a comparison into a common scale of 100. This makes different quantities easier to compare.",
        keyPoints: [
          "1% means 1 out of 100.",
          "10% means 10 out of 100.",
          "50% means 50 out of 100, which is the same as 1/2.",
          "100% means the complete quantity."
        ],
        example:
          "25 out of 100 = 25%. Therefore 25% = 25/100 = 1/4.",
        formula: "x% = x/100",
        memory:
          "Whenever you see %, mentally say 'out of 100'."
      },

      {
        page: 3,
        section: "Foundation",
        title: "Part, Whole and Percentage",
        intro:
          "Most basic percentage questions can be solved by identifying three quantities: part, whole and percentage.",
        keyPoints: [
          "PART = the quantity being measured.",
          "WHOLE = the total/reference quantity.",
          "PERCENTAGE = the part expressed out of 100."
        ],
        example:
          "10 girls out of 40 students means Part = 10 and Whole = 40.",
        formula: "Percentage = Part/Whole × 100",
        teacherTip:
          "Write PART and WHOLE separately before calculating. This prevents denominator mistakes."
      },

      {
        page: 4,
        section: "Basic Formula",
        title: "The Master Percentage Formula",
        intro:
          "This is the main formula from which most basic percentage questions can be developed.",
        formula: "Percentage = (Part ÷ Whole) × 100",
        keyPoints: [
          "Divide the part by the whole.",
          "Multiply the result by 100.",
          "The answer is expressed with the % sign."
        ],
        example:
          "18 is what percent of 72? 18 ÷ 72 × 100 = 25%.",
        commonMistake:
          "Using 18 as the denominator instead of 72.",
        memory:
          "PART goes on top. WHOLE goes below."
      },

      {
        page: 5,
        section: "Basic Questions",
        title: "Finding the Percentage",
        intro:
          "When both the part and whole are given, direct substitution into the master formula is usually enough.",
        example:
          "A student scores 72 marks out of 90. Percentage = 72/90 × 100 = 80%.",
        formula: "Percentage = Part/Whole × 100",
        practice: [
          "15 out of 60 = ?",
          "42 out of 70 = ?",
          "84 out of 120 = ?"
        ],
        answers: [
          "25%",
          "60%",
          "70%"
        ]
      },

      {
        page: 6,
        section: "Reverse Percentage",
        title: "Finding the Part",
        intro:
          "Sometimes percentage and whole are given and the question asks you to find the actual part.",
        formula: "Part = Percentage/100 × Whole",
        example:
          "25% of 240 = 25/100 × 240 = 60.",
        shortcut:
          "Convert common percentages into fractions first.",
        memory:
          "Percentage × Whole gives the Part."
      },

      {
        page: 7,
        section: "Reverse Percentage",
        title: "Finding the Whole",
        intro:
          "If the part and percentage are known, reverse the master formula to find the total.",
        formula: "Whole = Part × 100 / Percentage",
        example:
          "30 is 20% of what number? Whole = 30 × 100 / 20 = 150.",
        commonMistake:
          "Multiplying by percentage instead of dividing by it."
      },

      {
        page: 8,
        section: "Fast Calculation",
        title: "Common Percentage-Fraction Conversions",
        keyPoints: [
          "10% = 1/10",
          "20% = 1/5",
          "25% = 1/4",
          "50% = 1/2",
          "75% = 3/4",
          "12.5% = 1/8",
          "33.33% ≈ 1/3",
          "66.67% ≈ 2/3"
        ],
        shortcut:
          "Fraction conversion often makes mental calculation much faster.",
        practice: [
          "25% of 800",
          "12.5% of 640",
          "75% of 240"
        ],
        answers: [
          "200",
          "80",
          "180"
        ]
      },

      {
        page: 9,
        section: "Mental Maths",
        title: "Fast 10%, 5% and 1% Calculations",
        intro:
          "Small percentage calculations can be built from 10% and 1%.",
        keyPoints: [
          "10% = divide by 10.",
          "1% = divide by 100.",
          "5% = half of 10%.",
          "15% = 10% + 5%.",
          "25% = one-fourth."
        ],
        example:
          "15% of 800 = 80 + 40 = 120.",
        teacherTip:
          "These mental methods save valuable seconds in timed exams."
      },

      {
        page: 10,
        section: "Percentage of Percentage",
        title: "Percentage of a Percentage",
        intro:
          "When one percentage is applied to another percentage, multiply the percentages and divide by 100.",
        formula: "(a% of b%) = ab/100 %",
        example:
          "20% of 50% = 20 × 50 / 100 = 10%.",
        commonMistake:
          "Adding the percentages instead of multiplying."
      },

      {
        page: 11,
        section: "Increase",
        title: "Percentage Increase",
        intro:
          "Percentage increase measures how much a quantity rises compared with its original value.",
        formula: "Percentage Increase = Increase/Original × 100",
        example:
          "A price rises from ₹800 to ₹1,000. Increase = ₹200. Increase% = 200/800 × 100 = 25%.",
        warning:
          "The original value is the denominator."
      },

      {
        page: 12,
        section: "Decrease",
        title: "Percentage Decrease",
        intro:
          "Percentage decrease measures how much a quantity falls compared with its original value.",
        formula: "Percentage Decrease = Decrease/Original × 100",
        example:
          "A price falls from ₹1,000 to ₹800. Decrease = ₹200. Decrease% = 20%.",
        commonMistake:
          "Using ₹800, the final value, as the denominator."
      },

      {
        page: 13,
        section: "Change",
        title: "Finding the New Value After Increase",
        formula: "New Value = Original × (1 + r/100)",
        example:
          "₹800 increased by 25% = 800 × 1.25 = ₹1,000.",
        shortcut:
          "A 25% increase means the new value is 125% of the original.",
        memory:
          "Increase → add the percentage to 100."
      },

      {
        page: 14,
        section: "Change",
        title: "Finding the New Value After Decrease",
        formula: "New Value = Original × (1 − r/100)",
        example:
          "₹800 decreased by 25% = 800 × 0.75 = ₹600.",
        shortcut:
          "A 25% decrease means the new value is 75% of the original.",
        memory:
          "Decrease → subtract the percentage from 100."
      },

      {
        page: 15,
        section: "Successive Change",
        title: "Two Successive Percentage Changes",
        intro:
          "When a value changes twice, the second percentage is applied to the already changed value.",
        formula:
          "Net change = a + b + ab/100 for two increases.",
        example:
          "10% increase followed by 20% increase gives 10 + 20 + 2 = 32% increase.",
        commonMistake:
          "Simply adding 10% and 20% to get 30%."
      },

      {
        page: 16,
        section: "Successive Change",
        title: "Increase Followed by Decrease",
        intro:
          "Equal percentage increase and decrease do not cancel each other.",
        formula:
          "Net decrease for +x% followed by −x% = x²/100 %",
        example:
          "20% increase followed by 20% decrease produces a net decrease of 4%.",
        memory:
          "Same percentage up and down = loss, not zero."
      },

      {
        page: 17,
        section: "Comparison",
        title: "Percentage Difference vs Percentage Change",
        intro:
          "These two ideas are often confused.",
        keyPoints: [
          "Percentage change compares old and new.",
          "Percentage difference is usually used for comparing two values without treating one as the original.",
          "Always read the wording carefully."
        ],
        teacherTip:
          "In competitive exams, the denominator is often the key clue."
      },

      {
        page: 18,
        section: "Population",
        title: "Percentage Questions on Population",
        intro:
          "Population questions use the same percentage increase and decrease rules.",
        example:
          "A town has 20,000 people. Population grows by 10%. New population = 22,000.",
        formula:
          "New Population = Old Population × (1 + Growth Rate/100)",
        practice:
          "A population of 50,000 decreases by 8%. Find the new population.",
        answer:
          "46,000"
      },

      {
        page: 19,
        section: "Salary",
        title: "Salary Increase Questions",
        intro:
          "Salary questions are usually percentage increase questions with a monthly or annual base.",
        example:
          "Salary ₹30,000 increased by 12%. Increase = ₹3,600. New salary = ₹33,600.",
        shortcut:
          "Find the percentage amount first, then add it to the original.",
        examFocus:
          "Common in aptitude word problems."
      },

      {
        page: 20,
        section: "Marks",
        title: "Marks & Examination Percentage",
        intro:
          "Marks questions are direct applications of part/whole.",
        formula:
          "Percentage = Marks Obtained / Total Marks × 100",
        example:
          "360 out of 500 = 72%.",
        practice:
          "A student scores 420 out of 600. Find percentage.",
        answer:
          "70%"
      },

      {
        page: 21,
        section: "Profit & Loss",
        title: "Percentage as a Foundation for Profit and Loss",
        intro:
          "Profit percentage is simply a percentage increase from cost price to selling price.",
        formula:
          "Profit% = Profit / CP × 100",
        example:
          "CP ₹500, SP ₹600 → profit ₹100 → 20%.",
        teacherTip:
          "This is why percentage is a foundation chapter for profit and loss."
      },

      {
        page: 22,
        section: "Discount",
        title: "Percentage and Discount",
        intro:
          "Discount is calculated on marked price, not cost price.",
        formula:
          "Discount% = Discount / Marked Price × 100",
        example:
          "₹2,000 marked price with 15% discount = ₹300 discount, SP = ₹1,700.",
        commonMistake:
          "Using cost price in the discount denominator."
      },

      {
        page: 23,
        section: "Data Interpretation",
        title: "Percentage in Data Interpretation",
        intro:
          "Pie charts, tables and graphs often ask percentage-based comparisons.",
        method: [
          "Identify the total.",
          "Identify the required part.",
          "Write the formula before calculating.",
          "Estimate the answer before exact calculation."
        ],
        teacherTip:
          "Approximation can help eliminate impossible answer choices quickly."
      },

      {
        page: 24,
        section: "Ratio Connection",
        title: "Relationship Between Percentage and Ratio",
        intro:
          "Percentages and ratios are two different ways of expressing comparison.",
        formula:
          "a:b = a/b = (a/b × 100)%",
        example:
          "1:4 = 1/4 = 25%.",
        memory:
          "A ratio can be converted into percentage by multiplying the fraction by 100."
      },

      {
        page: 25,
        section: "Fraction Connection",
        title: "Fraction to Percentage",
        formula:
          "Fraction × 100 = Percentage",
        example:
          "3/5 × 100 = 60%.",
        practice: [
          "1/8",
          "3/4",
          "7/10"
        ],
        answers: [
          "12.5%",
          "75%",
          "70%"
        ]
      },

      {
        page: 26,
        section: "Decimal Connection",
        title: "Decimal to Percentage",
        formula:
          "Decimal × 100 = Percentage",
        example:
          "0.35 × 100 = 35%.",
        reverse:
          "Percentage ÷ 100 = Decimal.",
        commonMistake:
          "Forgetting to multiply by 100."
      },

      {
        page: 27,
        section: "Reverse Problems",
        title: "Reverse Percentage Problems",
        intro:
          "Some questions give the final value after an increase or decrease and ask for the original.",
        formula:
          "Original = New Value ÷ (1 ± r/100)",
        example:
          "After a 20% increase, price is ₹1,200. Original = 1,200 ÷ 1.20 = ₹1,000.",
        commonMistake:
          "Subtracting 20% directly from ₹1,200."
      },

      {
        page: 28,
        section: "Population",
        title: "Repeated Population Growth",
        formula:
          "Final Population = P(1 + r/100)^n",
        example:
          "If a population grows by 10% every year, the second increase is calculated on the new population.",
        teacherTip:
          "Repeated percentage change is multiplication, not repeated addition."
      },

      {
        page: 29,
        section: "Consumption",
        title: "Price and Consumption Problems",
        intro:
          "When price rises and a person wants expenditure to remain constant, consumption must fall.",
        rule:
          "For fixed expenditure: Price × Quantity = Constant.",
        example:
          "If price rises by 20%, quantity must decrease to keep expenditure unchanged.",
        examFocus:
          "Frequently appears in advanced aptitude questions."
      },

      {
        page: 30,
        section: "Election Problems",
        title: "Election Percentage Questions",
        intro:
          "Election questions combine percentage, votes and sometimes invalid votes.",
        method: [
          "Find total valid votes.",
          "Apply the given percentage.",
          "Calculate the difference if required.",
          "Check whether the percentage refers to valid or total votes."
        ],
        commonMistake:
          "Confusing total votes with valid votes."
      },

      {
        page: 31,
        section: "Expenditure",
        title: "Expenditure and Savings",
        intro:
          "Income-expenditure questions often use percentages for spending and savings.",
        example:
          "If a person spends 70% of income, savings are 30% of income.",
        formula:
          "Savings = Income − Expenditure",
        memory:
          "If expenditure is x%, savings = 100 − x% when there are no other conditions."
      },

      {
        page: 32,
        section: "Population & Gender",
        title: "Percentage Composition Problems",
        intro:
          "Composition questions divide a whole into groups represented by percentages.",
        example:
          "If 60% of 500 students are boys, boys = 300 and girls = 200.",
        shortcut:
          "Once one group is known, the remainder is 100% minus that group."
      },

      {
        page: 33,
        section: "Advanced",
        title: "Finding Original Value After Multiple Changes",
        intro:
          "When a quantity undergoes multiple changes and only the final value is known, reverse each change in reverse order.",
        method: [
          "Undo the last change first.",
          "Then undo the previous change.",
          "Never simply subtract all percentages."
        ],
        example:
          "After two successive percentage changes, recover the original by reversing the multiplication factors."
      },

      {
        page: 34,
        section: "Exam Strategy",
        title: "How to Solve Percentage Questions Faster",
        keyPoints: [
          "Convert common percentages to fractions.",
          "Estimate before exact calculation.",
          "Keep the original value clear.",
          "Use mental 10%, 5% and 1% calculations.",
          "Avoid unnecessary decimal calculations."
        ],
        teacherTip:
          "Speed comes from recognising the structure of the question, not from rushing calculations."
      },

      {
        page: 35,
        section: "Mistakes",
        title: "Top 10 Percentage Mistakes",
        mistakes: [
          "Wrong denominator.",
          "Confusing increase with final percentage.",
          "Treating successive changes as simple addition.",
          "Using marked price instead of cost price or vice versa.",
          "Ignoring units.",
          "Rounding too early.",
          "Ignoring the word 'of'.",
          "Missing the original value.",
          "Using the wrong percentage base.",
          "Skipping answer verification."
        ]
      },

      {
        page: 36,
        section: "Memory",
        title: "Percentage Memory Map",
        memoryMap: [
          "PART → numerator",
          "WHOLE → denominator",
          "% → multiply by 100",
          "Increase → add to 100",
          "Decrease → subtract from 100",
          "Original → base for normal change",
          "Repeated change → multiply factors"
        ],
        memory:
          "Think of percentage as a language for comparison."
      },

      {
        page: 37,
        section: "Practice",
        title: "Practice Set — Level 1",
        questions: [
          "1. 20 is what percentage of 80?",
          "2. Find 15% of 400.",
          "3. 45 out of 60 is what percentage?",
          "4. Find 12.5% of 800.",
          "5. A price of ₹500 rises by 10%. Find the new price."
        ],
        answers: [
          "25%",
          "60",
          "75%",
          "100",
          "₹550"
        ]
      },

      {
        page: 38,
        section: "Practice",
        title: "Practice Set — Level 2",
        questions: [
          "1. A salary rises from ₹25,000 to ₹30,000. Find percentage increase.",
          "2. A number falls from 800 to 680. Find percentage decrease.",
          "3. A product gets 20% discount on ₹2,500. Find selling price.",
          "4. A number increased by 25% becomes 500. Find original.",
          "5. A population increases by 10% twice. Find net percentage increase."
        ],
        answers: [
          "20%",
          "15%",
          "₹2,000",
          "400",
          "21%"
        ]
      },

      {
        page: 39,
        section: "Exam Challenge",
        title: "Mixed Competitive Questions",
        questions: [
          "1. A value is increased by 20% and then decreased by 20%. Find net change.",
          "2. 30% of a number is 72. Find the number.",
          "3. A student's marks improve from 240 to 300. Find percentage increase.",
          "4. A product is sold at 15% profit. If CP is ₹800, find SP.",
          "5. If expenditure is 80% of income, what percentage is saved?"
        ],
        answers: [
          "4% decrease",
          "240",
          "25%",
          "₹920",
          "20%"
        ]
      },

      {
        page: 40,
        section: "Final Revision",
        title: "One-Minute Percentage Revision",
        formula:
          "Percentage = Part/Whole × 100",
        keyPoints: [
          "Increase% = Increase/Original × 100",
          "Decrease% = Decrease/Original × 100",
          "Part = Percentage/100 × Whole",
          "Whole = Part × 100/Percentage",
          "New value after increase = Original × (1+r/100)",
          "New value after decrease = Original × (1−r/100)",
          "Successive changes use multiplication.",
          "Common fractions should be memorised."
        ],
        finalTip:
          "If you can identify PART, WHOLE and ORIGINAL correctly, most percentage questions become straightforward."
      }
    ]
  }
};
