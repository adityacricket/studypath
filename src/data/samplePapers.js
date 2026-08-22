// StudyPath original sample-paper content.
// First review set: Mathematics Foundation Sample Paper 1.

export const mathsFoundation1 = [
  { id:'mfp1', question:'If 25% of a number is 45, what is the number?', options:['120','160','180','200'], answer:2, explanation:'25% = 1/4, so the number is 45 × 4 = 180.', difficulty:'Easy', topic:'Percentage', subject:'quant' },
  { id:'mfp2', question:'A student scores 72 out of 90. What percentage is this?', options:['75%','80%','82%','85%'], answer:1, explanation:'(72 ÷ 90) × 100 = 80%.', difficulty:'Easy', topic:'Percentage', subject:'quant' },
  { id:'mfp3', question:'An item priced at ₹500 is increased by 10%. What is the new price?', options:['₹510','₹540','₹550','₹600'], answer:2, explanation:'10% of ₹500 is ₹50, so the new price is ₹550.', difficulty:'Easy', topic:'Percentage', subject:'quant' },
  { id:'mfp4', question:'The average of 18, 24, 30, 36 and 42 is:', options:['28','30','32','34'], answer:1, explanation:'Sum = 150; 150 ÷ 5 = 30.', difficulty:'Easy', topic:'Average', subject:'quant' },
  { id:'mfp5', question:'The average of 6 numbers is 14. What is their total?', options:['70','78','84','96'], answer:2, explanation:'Total = average × number of values = 14 × 6 = 84.', difficulty:'Easy', topic:'Average', subject:'quant' },
  { id:'mfp6', question:'The ratio of boys to girls is 3:2. If there are 30 boys, how many girls are there?', options:['15','18','20','24'], answer:2, explanation:'3 parts = 30, so 1 part = 10. Girls = 2 × 10 = 20.', difficulty:'Easy', topic:'Ratio & Proportion', subject:'quant' },
  { id:'mfp7', question:'Divide ₹900 in the ratio 4:5. What is the larger share?', options:['₹400','₹450','₹500','₹550'], answer:2, explanation:'Total parts = 9; one part = ₹100. Larger share = 5 × ₹100 = ₹500.', difficulty:'Easy', topic:'Ratio & Proportion', subject:'quant' },
  { id:'mfp8', question:'An article bought for ₹800 is sold for ₹920. What is the profit percentage?', options:['10%','12%','15%','20%'], answer:2, explanation:'Profit = ₹120. Profit% = 120/800 × 100 = 15%.', difficulty:'Medium', topic:'Profit & Loss', subject:'quant' },
  { id:'mfp9', question:'An item is sold for ₹540 at a 10% loss. What was its cost price?', options:['₹580','₹600','₹620','₹640'], answer:1, explanation:'Selling price is 90% of CP. CP = 540 ÷ 0.9 = ₹600.', difficulty:'Medium', topic:'Profit & Loss', subject:'quant' },
  { id:'mfp10', question:'A can complete a job in 10 days and B can complete it in 15 days. How long will they take together?', options:['5 days','6 days','7.5 days','8 days'], answer:1, explanation:'Combined rate = 1/10 + 1/15 = 1/6, so time = 6 days.', difficulty:'Medium', topic:'Time & Work', subject:'quant' },
  { id:'mfp11', question:'A train travels 180 km in 3 hours. What is its average speed?', options:['50 km/h','55 km/h','60 km/h','65 km/h'], answer:2, explanation:'Speed = distance ÷ time = 180 ÷ 3 = 60 km/h.', difficulty:'Easy', topic:'Time, Speed & Distance', subject:'quant' },
  { id:'mfp12', question:'A number is increased by 20% and then decreased by 20%. What is the net change?', options:['No change','4% increase','4% decrease','8% decrease'], answer:2, explanation:'Take 100 → 120 → 96. The final value is 4% below the original.', difficulty:'Medium', topic:'Percentage', subject:'quant' },
  { id:'mfp13', question:'If 8 workers finish a job in 12 days, how many days will 6 workers take at the same rate?', options:['14 days','16 days','18 days','20 days'], answer:1, explanation:'Workers × days stays constant: 8 × 12 = 96; 96 ÷ 6 = 16 days.', difficulty:'Medium', topic:'Time & Work', subject:'quant' },
  { id:'mfp14', question:'The cost price of an item is ₹1,200. If it is sold at a 25% profit, what is the selling price?', options:['₹1,400','₹1,450','₹1,500','₹1,550'], answer:2, explanation:'25% of ₹1,200 = ₹300; selling price = ₹1,500.', difficulty:'Easy', topic:'Profit & Loss', subject:'quant' },
  { id:'mfp15', question:'The ratio 2:3 is equivalent to which ratio?', options:['4:5','6:8','8:12','10:12'], answer:2, explanation:'Multiplying both terms by 4 gives 8:12.', difficulty:'Easy', topic:'Ratio & Proportion', subject:'quant' },
]

export const samplePapers = {
  'maths-foundation-1': { id:'maths-foundation-1', title:'Mathematics Foundation Sample Paper 1', subject:'Mathematics', level:'Foundation', duration:30, questions:mathsFoundation1, free:true }
}
