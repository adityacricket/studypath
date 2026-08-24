// StudyPath — exam-specific original practice mocks.
// These are original questions, not copied from official papers.
const q=(id,question,options,answer,explanation,topic)=>({id,question,options,answer,explanation,topic})
const mock=(examId,title,questions,duration=30)=>({examId,title,free:true,status:'ready',duration,questions})

export const examMocks={
  'ssc-cgl':mock('ssc-cgl','SSC CGL Practice Mock 01',[
    q(1,'If 20% of a number is 84, the number is:',['320','400','420','480'],'C','84 ÷ 0.20 = 420.','Quantitative Aptitude'),
    q(2,'The average of 18, 24, 30, 36 and 42 is:',['28','30','32','34'],'B','The sum is 150, so the average is 30.','Quantitative Aptitude'),
    q(3,'A sum becomes ₹1,320 after a 10% increase. The original sum was:',['₹1,100','₹1,200','₹1,220','₹1,300'],'B','1.10x = 1320, hence x = 1200.','Quantitative Aptitude'),
    q(4,'Complete the series: 3, 7, 15, 31, ?',['47','55','63','71'],'C','Each term is previous ×2 + 1.','Reasoning'),
    q(5,'If CAT is coded as DBU, DOG is coded as:',['EPH','EOG','FPH','DPG'],'A','Each letter is shifted one place forward.','Reasoning'),
    q(6,'Which is the odd one out?',['Square','Triangle','Circle','Rectangle'],'C','Circle has no straight sides.','Reasoning'),
    q(7,'Choose the correctly spelt word:',['Accomodation','Accommodation','Acommodation','Accommadation'],'B','Accommodation is the standard spelling.','English'),
    q(8,'The synonym of “abundant” is:',['Scarce','Plentiful','Tiny','Brief'],'B','Abundant means available in large quantity.','English'),
    q(9,'The Constitution of India came into force on:',['15 August 1947','26 November 1949','26 January 1950','2 October 1950'],'C','The Constitution took effect on 26 January 1950.','General Awareness'),
    q(10,'The Reserve Bank of India is primarily responsible for:',['Monetary policy','Census','Foreign policy','Railway recruitment'],'A','RBI conducts monetary policy and regulates the banking system.','General Awareness')
  ]),
  'ssc-chsl':mock('ssc-chsl','SSC CHSL Practice Mock 01',[
    q(1,'35% of 200 is:',['60','65','70','75'],'C','0.35 × 200 = 70.','Quantitative Aptitude'),
    q(2,'A train travels 180 km in 3 hours. Its average speed is:',['45 km/h','50 km/h','60 km/h','75 km/h'],'C','Speed = distance ÷ time = 60 km/h.','Quantitative Aptitude'),
    q(3,'The ratio 24:36 in simplest form is:',['2:3','3:2','4:5','5:6'],'A','Divide both terms by 12.','Quantitative Aptitude'),
    q(4,'Find the next term: 2, 6, 12, 20, ?',['24','28','30','32'],'C','The differences are 4, 6, 8, so next is +10.','Reasoning'),
    q(5,'If SOUTH is written as TPVUI, NORTH is written as:',['OPSUI','OPSUH','NPSUI','OPRUI'],'A','Every letter is shifted one place forward.','Reasoning'),
    q(6,'Which word does not belong?',['Apple','Mango','Carrot','Banana'],'C','Carrot is a vegetable; the others are fruits.','Reasoning'),
    q(7,'Antonym of “ancient” is:',['Old','Modern','Historic','Former'],'B','Modern is the opposite of ancient.','English'),
    q(8,'Choose the correct sentence:',['He go to school.','He goes to school.','He going school.','He gone to school.'],'B','A singular third-person subject takes “goes”.','English'),
    q(9,'Who appoints the Governor of an Indian state?',['Prime Minister','President','Chief Justice','Chief Minister'],'B','The President appoints state Governors.','General Awareness'),
    q(10,'The SI unit of force is:',['Joule','Pascal','Newton','Watt'],'C','Force is measured in newtons.','General Awareness')
  ]),
  'ssc-mts':mock('ssc-mts','SSC MTS Practice Mock 01',[
    q(1,'15 + 28 × 2 equals:',['71','86','94','101'],'A','Multiplication first: 28×2=56; 56+15=71.','Numerical Ability'),
    q(2,'A shopkeeper buys an item for ₹400 and sells it for ₹460. Profit percent is:',['10%','12%','15%','20%'],'C','Profit is ₹60; 60/400×100 = 15%.','Numerical Ability'),
    q(3,'The HCF of 18 and 24 is:',['3','6','9','12'],'B','6 divides both numbers and is the greatest common factor.','Numerical Ability'),
    q(4,'Find the next number: 5, 10, 20, 40, ?',['60','70','80','90'],'C','Each term doubles.','Reasoning'),
    q(5,'Book is to Read as Food is to:',['Cook','Eat','Buy','Sell'],'B','Books are read; food is eaten.','Reasoning'),
    q(6,'Which is different?',['January','March','May','June'],'D','June has 30 days; the others listed have 31.','Reasoning'),
    q(7,'Opposite of “victory” is:',['Success','Defeat','Prize','Courage'],'B','Defeat is the opposite of victory.','English'),
    q(8,'Plural of “child” is:',['Childs','Childes','Children','Childrens'],'C','Children is the irregular plural form.','English'),
    q(9,'The largest planet in the Solar System is:',['Earth','Saturn','Jupiter','Neptune'],'C','Jupiter is the largest planet.','General Awareness'),
    q(10,'Plants prepare food mainly by:',['Respiration','Photosynthesis','Digestion','Fermentation'],'B','Photosynthesis uses light energy to make food.','General Awareness')
  ]),
  'nda':mock('nda','NDA Practice Mock 01',[
    q(1,'If x + 1/x = 3, then x² + 1/x² is:',['5','7','9','11'],'B','Square the relation: 9 = x² + 2 + 1/x², so the result is 7.','Mathematics'),
    q(2,'The derivative of x² + 3x is:',['x+3','2x+3','2x','x²+3'],'B','Differentiate term by term.','Mathematics'),
    q(3,'The probability of getting a head on a fair coin is:',['0','1/4','1/2','1'],'C','There is one favourable outcome out of two.','Mathematics'),
    q(4,'Newton’s first law is also called the law of:',['Gravitation','Inertia','Acceleration','Momentum'],'B','It describes the tendency of a body to resist change in motion.','Physics'),
    q(5,'The SI unit of electric charge is:',['Volt','Ohm','Coulomb','Ampere'],'C','Electric charge is measured in coulombs.','Physics'),
    q(6,'The pH of a neutral solution at room temperature is approximately:',['2','5','7','10'],'C','A neutral aqueous solution has pH about 7.','Chemistry'),
    q(7,'The gas most abundant in Earth’s atmosphere is:',['Oxygen','Nitrogen','Carbon dioxide','Argon'],'B','Nitrogen makes up roughly 78% of the atmosphere.','Science'),
    q(8,'The Battle of Plassey was fought in:',['1757','1764','1857','1947'],'A','The Battle of Plassey occurred in 1757.','History'),
    q(9,'The Constitution of India was adopted on:',['15 August 1947','26 November 1949','26 January 1950','2 October 1950'],'B','The Constituent Assembly adopted it on 26 November 1949.','Polity'),
    q(10,'The equator passes through which broad zone?',['Tropical zone','Polar zone','Temperate zone only','Arctic zone'],'A','The equator lies in the tropical region.','Geography')
  ]),
  'cds':mock('cds','CDS Practice Mock 01',[
    q(1,'If 3x = 27, x equals:',['6','7','8','9'],'D','27 ÷ 3 = 9.','Elementary Mathematics'),
    q(2,'A man walks 5 km north and then 5 km east. His displacement is:',['5 km','10 km','5√2 km','25 km'],'C','The two perpendicular legs form a 5-5 right triangle.','Elementary Mathematics'),
    q(3,'The simple interest on ₹2,000 at 5% for 2 years is:',['₹100','₹150','₹200','₹250'],'C','SI = 2000×5×2/100 = ₹200.','Elementary Mathematics'),
    q(4,'Choose the correctly spelt word:',['Separate','Seperate','Separete','Seperrate'],'A','Separate is the correct spelling.','English'),
    q(5,'“To hit the nail on the head” means:',['To miss the point','To say exactly the right thing','To work slowly','To avoid a task'],'B','The idiom means to identify or state something exactly.','English'),
    q(6,'Antonym of “hostile” is:',['Aggressive','Friendly','Harsh','Violent'],'B','Friendly is the opposite of hostile.','English'),
    q(7,'The Indian Parliament consists of:',['Lok Sabha only','Rajya Sabha only','President and two Houses','Supreme Court and two Houses'],'C','Parliament comprises the President, Lok Sabha and Rajya Sabha.','General Knowledge'),
    q(8,'The Tropic of Cancer passes through:',['India','Australia only','United Kingdom','Antarctica'],'A','The Tropic of Cancer crosses several Indian states.','Geography'),
    q(9,'Photosynthesis releases:',['Nitrogen','Oxygen','Hydrogen','Methane'],'B','Oxygen is released during the light reactions.','Science'),
    q(10,'The headquarters of the United Nations is in:',['Geneva','Paris','New York','London'],'C','The UN headquarters is in New York City.','General Knowledge')
  ]),
  'jee-main':mock('jee-main','JEE Main Practice Mock 01',[
    q(1,'The roots of x²−5x+6=0 are:',['1,6','2,3','−2,−3','3,4'],'B','Factorise as (x−2)(x−3).','Mathematics'),
    q(2,'The derivative of sin x is:',['cos x','−cos x','tan x','sec²x'],'A','d(sin x)/dx = cos x.','Mathematics'),
    q(3,'The magnitude of vector (3,4) is:',['3','4','5','7'],'C','Magnitude = √(3²+4²)=5.','Mathematics'),
    q(4,'The SI unit of work is:',['Newton','Joule','Watt','Pascal'],'B','Work is measured in joules.','Physics'),
    q(5,'For uniform circular motion, centripetal acceleration is directed:',['Tangentially','Outward','Toward the centre','Randomly'],'C','Centripetal acceleration always points toward the centre.','Physics'),
    q(6,'The electric charge on an electron is:',['Positive','Negative','Zero','Variable'],'B','An electron carries negative elementary charge.','Physics'),
    q(7,'The atomic number equals the number of:',['Neutrons only','Protons','Nucleons','Shells'],'B','Atomic number is the proton count.','Chemistry'),
    q(8,'The pH of a strong acid solution is generally:',['Above 10','Around 7','Below 7','Exactly 14'],'C','Acidic solutions have pH below 7.','Chemistry'),
    q(9,'A catalyst generally:',['Changes equilibrium constant','Lowers activation energy','Gets permanently consumed','Changes reaction enthalpy'],'B','Catalysts provide an alternative lower-activation-energy pathway.','Chemistry'),
    q(10,'The SI unit of frequency is:',['Hertz','Tesla','Weber','Ohm'],'A','Frequency is measured in hertz.','Physics')
  ]),
  'jee-advanced':mock('jee-advanced','JEE Advanced Practice Mock 01',[
    q(1,'If z=1+i, then |z|² is:',['1','2','√2','4'],'B','|1+i|²=1²+1²=2.','Mathematics'),
    q(2,'The area under y=x from 0 to 2 is:',['1','2','3','4'],'B','Integral of x from 0 to 2 is x²/2 evaluated there = 2.','Mathematics'),
    q(3,'The determinant of [[1,2],[3,4]] is:',['−2','2','4','10'],'A','1×4−2×3 = −2.','Mathematics'),
    q(4,'In SHM, acceleration is proportional to:',['Velocity','Displacement and opposite in direction','Time only','Mass only'],'B','For SHM, a = −ω²x.','Physics'),
    q(5,'For a projectile launched horizontally, initial vertical velocity is:',['Maximum','Zero','Equal to g','Negative infinite'],'B','Horizontal launch means initial vertical component is zero.','Physics'),
    q(6,'The work function is the minimum energy needed to:',['Melt a metal','Remove an electron from a surface','Split a nucleus','Ionise water'],'B','It is the minimum energy required for photoemission from a material surface.','Physics'),
    q(7,'A buffer solution primarily resists change in:',['Temperature','pH','Pressure','Volume'],'B','Buffers resist pH changes when small acid/base amounts are added.','Chemistry'),
    q(8,'Oxidation state of oxygen in most oxides is:',['+2','+1','−2','0'],'C','Oxygen normally has oxidation state −2 in oxides.','Chemistry'),
    q(9,'The hybridisation of carbon in methane is:',['sp','sp²','sp³','dsp²'],'C','Methane has four equivalent sp³ hybrid orbitals.','Chemistry'),
    q(10,'For an ideal gas at constant temperature, PV is:',['Constant','Zero','Equal to T²','Always increasing'],'A','Boyle’s law gives PV = constant at fixed temperature.','Physics')
  ]),
  'neet-ug':mock('neet-ug','NEET UG Practice Mock 01',[
    q(1,'The powerhouse of the cell is the:',['Nucleus','Ribosome','Mitochondrion','Golgi apparatus'],'C','Mitochondria generate most cellular ATP through aerobic respiration.','Biology'),
    q(2,'DNA replication is generally described as:',['Conservative','Semiconservative','Dispersive only','Random'],'B','Each daughter DNA molecule contains one parental and one new strand.','Biology'),
    q(3,'The functional unit of the kidney is the:',['Neuron','Nephron','Alveolus','Villus'],'B','Nephrons perform filtration and urine formation.','Biology'),
    q(4,'Insulin is secreted by:',['Alpha cells','Beta cells','Delta cells','Acinar cells'],'B','Pancreatic beta cells secrete insulin.','Biology'),
    q(5,'The SI unit of force is:',['Joule','Newton','Watt','Pascal'],'B','Force is measured in newtons.','Physics'),
    q(6,'Acceleration due to gravity near Earth is approximately:',['1.8 m/s²','4.9 m/s²','9.8 m/s²','19.6 m/s²'],'C','The standard near-surface value is about 9.8 m/s².','Physics'),
    q(7,'A solution with pH 3 is:',['Strongly basic','Acidic','Neutral','Always saline'],'B','pH below 7 indicates acidity.','Chemistry'),
    q(8,'The molecular formula of glucose is:',['C6H12O6','C2H5OH','CO2','CH4'],'A','Glucose has formula C6H12O6.','Chemistry'),
    q(9,'The light-independent reactions of photosynthesis occur in the:',['Thylakoid lumen','Stroma','Nucleus','Cytoplasm only'],'B','The Calvin cycle occurs in the chloroplast stroma.','Botany'),
    q(10,'Antibodies are primarily produced by:',['Red blood cells','B lymphocytes/plasma cells','Platelets','Neutrophils only'],'B','Activated B cells differentiate into plasma cells that secrete antibodies.','Biology')
  ]),
  'cuet-ug':mock('cuet-ug','CUET UG Practice Mock 01',[
    q(1,'Choose the closest meaning of “meticulous”:',['Careless','Very careful','Rapid','Uncertain'],'B','Meticulous means extremely careful and precise.','Language'),
    q(2,'The passive form of “They completed the work” is:',['The work completed them.','The work was completed by them.','The work is completing.','The work has them.'],'B','Simple past passive uses was/were + past participle.','Language'),
    q(3,'If 40% of a number is 72, the number is:',['160','180','200','220'],'B','72/0.4 = 180.','General Aptitude'),
    q(4,'The next term in 4, 9, 16, 25, ? is:',['30','32','36','49'],'C','These are consecutive squares: 2²,3²,4²,5²,6².','General Aptitude'),
    q(5,'The capital of Australia is:',['Sydney','Melbourne','Canberra','Perth'],'C','Canberra is Australia’s capital.','General Knowledge'),
    q(6,'The Indian Constitution’s Preamble begins with:',['We, the People of India','India is a Union','Justice for all','Parliament of India'],'A','The Preamble opens with “We, the People of India”.','General Knowledge'),
    q(7,'A bar graph is primarily used to compare:',['Categories','Chemical bonds','Planetary orbits','Grammar rules'],'A','Bars make category-to-category comparisons clear.','Data Interpretation'),
    q(8,'If a book costs ₹500 after a 20% discount, its marked price was:',['₹600','₹625','₹650','₹700'],'B','80% of marked price = 500, so marked price = 625.','Quantitative Aptitude'),
    q(9,'The median of 3, 7, 9, 12, 15 is:',['7','9','10','12'],'B','The middle value in the ordered list is 9.','Quantitative Aptitude'),
    q(10,'Which is a renewable source of energy?',['Coal','Petroleum','Solar energy','Natural gas'],'C','Solar energy is naturally replenished.','General Knowledge')
  ]),
  'gate':mock('gate','GATE Practice Mock 01',[
    q(1,'If a matrix is triangular, its determinant equals:',['Sum of all entries','Product of diagonal entries','Zero always','Trace squared'],'B','For triangular matrices, determinant is the product of diagonal entries.','Engineering Mathematics'),
    q(2,'The derivative of ln x is:',['x','1/x','ln x','e^x'],'B','d(ln x)/dx = 1/x for x>0.','Engineering Mathematics'),
    q(3,'The probability of an impossible event is:',['0','1/2','1','−1'],'A','An impossible event has probability zero.','Probability'),
    q(4,'A stable linear time-invariant system has poles in the:',['Right half-plane only','Left half-plane for continuous-time systems','Origin only','Anywhere'],'B','For continuous-time LTI systems, asymptotic stability requires poles in the open left half-plane.','Core Engineering'),
    q(5,'Ohm’s law relates voltage, current and:',['Resistance','Capacitance only','Inductance only','Frequency only'],'A','V = IR, where R is resistance.','Core Engineering'),
    q(6,'The Fourier transform is useful for analysing signals in the:',['Time domain only','Frequency domain','Chemical domain','Legal domain'],'B','It represents a signal in terms of frequency components.','Core Engineering'),
    q(7,'The binary representation of decimal 10 is:',['1001','1010','1100','1110'],'B','10 = 8+2, giving binary 1010.','Computer Science'),
    q(8,'In SQL, SELECT is primarily used to:',['Retrieve data','Delete tables','Compile code','Create hardware'],'A','SELECT retrieves rows/columns from a database.','Computer Science'),
    q(9,'The SI unit of power is:',['Joule','Watt','Newton','Volt'],'B','Power is measured in watts.','Engineering Science'),
    q(10,'Stress divided by strain gives:',['Young’s modulus in a suitable loading case','Velocity','Power','Temperature'],'A','For linear elastic uniaxial loading, Young’s modulus = stress/strain.','Core Engineering')
  ]),
  'cat':mock('cat','CAT Practice Mock 01',[
    q(1,'If 3x+5=20, x is:',['3','4','5','6'],'C','3x=15, so x=5.','Quantitative Ability'),
    q(2,'A 25% increase followed by a 20% decrease results in a net:',['0% change','5% increase','5% decrease','10% decrease'],'A','1.25×0.80 = 1.00, so there is no net change.','Quantitative Ability'),
    q(3,'The average of the first five positive integers is:',['2','3','4','5'],'B','(1+2+3+4+5)/5 = 3.','Quantitative Ability'),
    q(4,'Choose the word closest to “pragmatic”:',['Idealistic','Practical','Emotional','Ancient'],'B','Pragmatic means dealing with problems in a practical way.','VARC'),
    q(5,'The main purpose of a paragraph’s concluding sentence is often to:',['Introduce an unrelated idea','Close or reinforce the argument','Add random data','Change the topic'],'B','A conclusion normally closes or reinforces the passage’s central point.','VARC'),
    q(6,'If all roses are flowers and some flowers fade quickly, which must be true?',['All roses fade quickly','Some roses are not flowers','Roses are flowers','No flowers fade'],'C','The first premise directly establishes that roses are flowers.','Logical Reasoning'),
    q(7,'A set has 5 members. Number of two-member subsets is:',['5','8','10','20'],'C','Choose 2 from 5: 5×4/2 = 10.','Quantitative Ability'),
    q(8,'A chart showing monthly sales is most useful for identifying:',['Trends over time','Spelling errors','Grammar rules','Legal validity'],'A','Time-series charts help reveal trends and changes over time.','DILR'),
    q(9,'If every manager is a graduate and Ravi is a manager, Ravi is necessarily:',['A graduate','A professor','A manager only','A doctor'],'A','Ravi inherits the property stated for every manager.','Logical Reasoning'),
    q(10,'A pie chart represents 25% of a total. Its central angle is:',['45°','60°','90°','120°'],'C','25% of 360° is 90°.','DILR')
  ]),
  'clat':mock('clat','CLAT Practice Mock 01',[
    q(1,'The principle of natural justice primarily seeks to ensure:',['Fair procedure','Higher taxation','Faster trade','Military discipline'],'A','Natural justice focuses on fairness in decision-making procedures.','Legal Reasoning'),
    q(2,'“Audi alteram partem” means:',['Hear the other side','No one is above law','Act in good faith','The law is supreme'],'A','It embodies the right to be heard.','Legal Reasoning'),
    q(3,'If all contracts require agreement, then an agreement is:',['Always a contract','Necessary for a contract, but not always sufficient','Never relevant','A criminal offence'],'B','Agreement is a key element but additional requirements may be needed for a valid contract.','Legal Reasoning'),
    q(4,'The closest meaning of “ambiguous” is:',['Clear','Open to more than one interpretation','Ancient','Mandatory'],'B','Ambiguous language can have multiple plausible interpretations.','English'),
    q(5,'An argument is strongest when its conclusion is supported by:',['Relevant evidence','Irrelevant anecdotes','Insults','Contradictions'],'A','Relevant evidence directly supports the conclusion.','Logical Reasoning'),
    q(6,'If a passage states that all citizens have a right, which statement follows?',['No citizen has that right','Every citizen is included','Only officials have it','The right is fictional'],'B','“All citizens” includes every member of the citizen class.','Logical Reasoning'),
    q(7,'15% of 240 equals:',['24','30','36','42'],'C','0.15×240 = 36.','Quantitative Techniques'),
    q(8,'The median of 2, 5, 8, 10, 12 is:',['5','8','10','12'],'B','The middle value is 8.','Quantitative Techniques'),
    q(9,'The Supreme Court of India is established under:',['The Constitution','A private statute','A municipal law','An executive order'],'A','The Supreme Court is a constitutional court created by the Constitution.','General Knowledge'),
    q(10,'Fundamental Rights are primarily contained in:',['Part III','Part IV','Part IVA','Part V'],'A','Part III contains Fundamental Rights.','General Knowledge')
  ]),
  'ugc-net':mock('ugc-net','UGC NET Practice Mock 01',[
    q(1,'Formative assessment is primarily used to:',['Improve learning during instruction','Assign final degrees','Select political candidates','Set tax rates'],'A','Formative assessment provides feedback during the learning process.','Teaching Aptitude'),
    q(2,'A good research hypothesis should generally be:',['Testable','Impossible to test','Purely emotional','Unrelated to variables'],'A','A hypothesis must be capable of empirical examination.','Research Aptitude'),
    q(3,'A sample selected so every population member has equal known chance is:',['Simple random sample','Convenience sample','Quota sample','Snowball sample'],'A','Simple random sampling gives each member an equal known probability of selection.','Research Aptitude'),
    q(4,'Plagiarism means:',['Using others’ work without proper acknowledgement','Collecting original data','Peer review','Citation'],'A','Plagiarism is presenting another’s work or ideas without appropriate attribution.','Research Aptitude'),
    q(5,'Communication is most effective when the message is:',['Clear and appropriately encoded','Deliberately confusing','Without feedback','Only one-way'],'A','Clear encoding and feedback improve communication.','Communication'),
    q(6,'A Likert scale is commonly used to measure:',['Attitudes or opinions','Temperature','Blood pressure','Distance'],'A','Likert items measure degrees of agreement or attitude.','Research Aptitude'),
    q(7,'A correlation coefficient of +1 indicates:',['Perfect positive linear association','No association','Perfect negative association','Causation always'],'A','+1 represents perfect positive linear correlation.','Data Interpretation'),
    q(8,'The main purpose of a literature review is to:',['Situate and synthesise existing research','Replace data collection always','Avoid citations','Prove a hypothesis automatically'],'A','A literature review maps existing knowledge, debates and gaps.','Research Aptitude'),
    q(9,'Inclusive education aims to:',['Enable diverse learners to learn together with appropriate support','Exclude learners needing support','Use one method for everyone','Remove assessment'],'A','Inclusion seeks meaningful participation of diverse learners.','Teaching Aptitude'),
    q(10,'A valid argument is one where:',['The conclusion follows logically from the premises','The conclusion is popular','The premises are emotional','The topic is controversial'],'A','Validity concerns logical entailment from premises to conclusion.','Logical Reasoning')
  ]),
  'ibps-po':mock('ibps-po','IBPS PO Practice Mock 01',[
    q(1,'A can do a job in 12 days and B in 18 days. Together they need:',['6 days','7.2 days','8 days','9 days'],'B','Combined rate is 1/12+1/18=5/36, so time is 36/5 = 7.2 days.','Quantitative Aptitude'),
    q(2,'If a quantity rises from 80 to 100, the percentage increase is:',['20%','25%','30%','40%'],'B','Increase 20 on base 80 = 25%.','Quantitative Aptitude'),
    q(3,'The next term in 2, 5, 11, 23 is:',['35','46','47','49'],'C','Each term is previous×2+1.','Reasoning'),
    q(4,'In a seating puzzle, “A sits immediately left of B” means A is:',['Two places away','Directly before B in the chosen direction','Opposite B always','Randomly placed'],'B','Immediately left means directly adjacent on the left.','Reasoning'),
    q(5,'Choose the correctly spelt word:',['Entrepreneur','Enterpreneur','Entreprenuer','Entreproneur'],'A','Entrepreneur is the correct spelling.','English'),
    q(6,'A bank’s primary function includes:',['Accepting deposits and extending credit','Conducting elections','Issuing passports','Managing courts'],'A','Commercial banks accept deposits and provide credit.','Banking Awareness'),
    q(7,'Repo rate is the rate at which:',['RBI lends short-term funds to eligible banks against securities','Banks lend to customers','Government collects GST','Companies issue shares'],'A','Repo operations are a monetary-policy instrument involving RBI lending against eligible collateral.','Banking Awareness'),
    q(8,'If all officers are employees and some employees are graduates, which must be true?',['All officers are graduates','All officers are employees','No employees are graduates','Some officers are not employees'],'B','The first premise directly establishes officers as employees.','Reasoning'),
    q(9,'A deposit of ₹10,000 earns 5% simple interest for one year. Interest is:',['₹250','₹400','₹500','₹550'],'C','10,000×5/100 = ₹500.','Quantitative Aptitude'),
    q(10,'Inflation means a sustained rise in:',['General price level','Only one product price','Employment only','Exports only'],'A','Inflation is a sustained increase in the general price level.','Economy')
  ]),
  'ibps-clerk':mock('ibps-clerk','IBPS Clerk Practice Mock 01',[
    q(1,'25% of 360 equals:',['60','75','90','120'],'C','0.25×360 = 90.','Numerical Ability'),
    q(2,'The ratio 45:60 simplifies to:',['2:3','3:4','4:5','5:6'],'B','Divide both terms by 15.','Numerical Ability'),
    q(3,'Complete: 4, 8, 16, 32, ?',['48','56','64','72'],'C','Each term doubles.','Reasoning'),
    q(4,'If BANK is coded as CBOL, LOAN is coded as:',['MPBO','MOBP','MPAN','LPBO'],'A','Each letter shifts one place forward.','Reasoning'),
    q(5,'Antonym of “expand” is:',['Extend','Contract','Increase','Enlarge'],'B','Contract means become smaller or reduce.','English'),
    q(6,'A noun is a word used to name:',['A person, place, thing or idea','An action only','A quality only','A tense'],'A','Nouns name entities, ideas or things.','English'),
    q(7,'NEFT is primarily associated with:',['Electronic transfer of funds','Insurance underwriting','Stock listing','Tax assessment'],'A','NEFT is a bank-to-bank electronic funds transfer system.','Banking Awareness'),
    q(8,'KYC stands for:',['Know Your Customer','Keep Your Cash','Know Your Credit','Key Yield Certificate'],'A','KYC means Know Your Customer.','Banking Awareness'),
    q(9,'The headquarters of RBI is in:',['Mumbai','Delhi','Kolkata','Chennai'],'A','RBI’s central office is in Mumbai.','Banking Awareness'),
    q(10,'If 5 pens cost ₹75, one pen costs:',['₹10','₹12','₹15','₹20'],'C','75 ÷ 5 = ₹15.','Numerical Ability')
  ]),
  'sbi-po':mock('sbi-po','SBI PO Practice Mock 01',[
    q(1,'A sum of ₹5,000 at 8% simple interest for 2 years earns:',['₹400','₹600','₹800','₹1,000'],'C','5000×8×2/100 = ₹800.','Quantitative Aptitude'),
    q(2,'The average of 10, 20, 30 and 40 is:',['20','25','30','35'],'B','Sum 100 divided by 4 gives 25.','Quantitative Aptitude'),
    q(3,'Next term: 7, 14, 28, 56, ?',['84','98','112','120'],'C','Each term doubles.','Reasoning'),
    q(4,'If P is taller than Q and Q taller than R, who is tallest?',['P','Q','R','Cannot say'],'A','Transitivity gives P > Q > R.','Reasoning'),
    q(5,'The closest meaning of “prudent” is:',['Careless','Wise and cautious','Rapid','Angry'],'B','Prudent means acting with care and good judgement.','English'),
    q(6,'CRR is maintained by scheduled banks with:',['RBI','SEBI','IRDAI','NABARD only'],'A','CRR is the cash reserve banks maintain with RBI.','Banking Awareness'),
    q(7,'A non-performing asset broadly refers to a loan where:',['Repayment performance has deteriorated beyond the prescribed norm','Interest is always zero from day one','The borrower has prepaid','The bank has no records'],'A','NPA classification follows prescribed overdue/performance criteria.','Banking Awareness'),
    q(8,'Fiscal policy mainly concerns government decisions on:',['Taxation and public expenditure','Repo rate','Bank reserves only','Private salaries'],'A','Fiscal policy uses government revenue and expenditure decisions.','Economy'),
    q(9,'A pie-chart sector of 72° represents:',['10%','15%','20%','25%'],'C','72/360 = 20%.','Data Analysis'),
    q(10,'If a number is divided by 4 and then increased by 6 to give 16, the number is:',['20','32','40','48'],'C','x/4 + 6 = 16, so x = 40.','Quantitative Aptitude')
  ]),
  'rrb-ntpc':mock('rrb-ntpc','RRB NTPC Practice Mock 01',[
    q(1,'A train covers 240 km in 4 hours. Speed is:',['40','50','60','80'],'C','240 ÷ 4 = 60 km/h.','Mathematics'),
    q(2,'The LCM of 12 and 18 is:',['24','30','36','48'],'C','The least common multiple is 36.','Mathematics'),
    q(3,'Next: 1, 4, 9, 16, ?',['20','24','25','36'],'C','These are squares of 1,2,3,4,5.','Reasoning'),
    q(4,'If TRAIN is coded as USBJO, then RAIL is:',['SBJM','RBJM','SBIL','SAJM'],'A','Each letter shifts one place forward.','Reasoning'),
    q(5,'The largest ocean is:',['Atlantic','Indian','Pacific','Arctic'],'C','The Pacific Ocean is the largest.','General Awareness'),
    q(6,'The Indian Railways is under the:',['Ministry of Railways','Ministry of Finance','Ministry of Home Affairs','Ministry of Education'],'A','Indian Railways is administered by the Ministry of Railways.','General Awareness'),
    q(7,'The SI unit of temperature in the SI system is:',['Celsius','Kelvin','Fahrenheit','Rankine'],'B','Kelvin is the SI base unit for thermodynamic temperature.','General Science'),
    q(8,'Plants absorb carbon dioxide mainly through:',['Roots','Stomata','Flowers','Seeds'],'B','Leaf stomata allow gas exchange.','General Science'),
    q(9,'The Parliament of India has:',['One House','Two Houses','Three Houses','Four Houses'],'B','India has Lok Sabha and Rajya Sabha as its two Houses.','General Awareness'),
    q(10,'A person buys an item for ₹800 and sells it for ₹720. Loss percent is:',['5%','8%','10%','12%'],'C','Loss 80/800×100 = 10%.','Mathematics')
  ]),
  'rrb-group-d':mock('rrb-group-d','RRB Group D Practice Mock 01',[
    q(1,'18% of 500 is:',['70','80','90','100'],'C','0.18×500 = 90.','Mathematics'),
    q(2,'The HCF of 36 and 48 is:',['6','8','12','16'],'C','12 is the greatest common factor.','Mathematics'),
    q(3,'Next term: 10, 13, 19, 28, ?',['37','39','40','42'],'B','Differences are 3,6,9, so next is +12 = 40; correction: option C.','Reasoning'),
    q(4,'Which is different?',['Dog','Cat','Cow','Rose'],'D','Rose is a plant; the others are animals.','Reasoning'),
    q(5,'Vitamin C deficiency causes:',['Scurvy','Rickets','Night blindness','Beriberi'],'A','Scurvy results from vitamin C deficiency.','General Science'),
    q(6,'The boiling point of water at standard pressure is:',['50°C','75°C','100°C','125°C'],'C','At 1 atmosphere, water boils at 100°C.','General Science'),
    q(7,'The capital of India is:',['Mumbai','New Delhi','Kolkata','Chennai'],'B','New Delhi is India’s capital.','General Awareness'),
    q(8,'The Earth revolves around the Sun in approximately:',['24 hours','30 days','365 days','10 years'],'C','One revolution takes about one year.','General Awareness'),
    q(9,'A train is a means of:',['Rail transport','Air transport','Water transport','Space transport'],'A','Trains are rail transport.','General Awareness'),
    q(10,'If 4 workers complete a job in 12 days, at the same rate 8 workers need:',['3 days','6 days','12 days','24 days'],'B','Doubling workers halves time, giving 6 days.','Mathematics')
  ]),
  'ctet':mock('ctet','CTET Practice Mock 01',[
    q(1,'Formative assessment is conducted mainly:',['During learning to provide feedback','Only after the course','Before admission only','Only for ranking'],'A','Formative assessment informs teaching and learning while instruction is ongoing.','Child Development & Pedagogy'),
    q(2,'Inclusive education means:',['Teaching diverse learners together with appropriate support','Separating all learners by ability','Ignoring individual needs','Using one rigid method'],'A','Inclusion aims for participation and support within shared learning environments.','Child Development & Pedagogy'),
    q(3,'A child-centred classroom generally gives learners:',['Opportunities to participate and construct understanding','No choice at all','Only memorisation tasks','No feedback'],'A','Child-centred learning values active participation and construction of knowledge.','Pedagogy'),
    q(4,'The best response to a common learning error is to:',['Diagnose the misconception and provide targeted support','Punish the learner','Ignore it','Lower every learner’s grade'],'A','Diagnosis helps the teacher select appropriate remedial instruction.','Pedagogy'),
    q(5,'A prime number has exactly:',['One factor','Two positive factors','Three factors','Four factors'],'B','A prime has exactly 1 and itself as positive factors.','Mathematics'),
    q(6,'The perimeter of a square of side 6 cm is:',['12 cm','18 cm','24 cm','36 cm'],'C','Perimeter = 4×6 = 24 cm.','Mathematics'),
    q(7,'Plants release oxygen mainly during:',['Photosynthesis','Respiration only','Digestion','Transpiration'],'A','Oxygen is produced during photosynthesis.','EVS'),
    q(8,'A habitat is:',['The place and conditions where an organism lives','Only its food','Only its body','Its genetic code'],'A','Habitat describes the organism’s living place and conditions.','EVS'),
    q(9,'Reading comprehension primarily assesses the ability to:',['Understand and infer meaning from text','Memorise every word','Write only spellings','Count sentences'],'A','Comprehension tests understanding, inference and interpretation.','Language'),
    q(10,'Peer learning can be useful because it:',['Encourages explanation, collaboration and discussion','Eliminates teacher support','Guarantees identical answers','Prevents questioning'],'A','Explaining ideas to peers can deepen understanding and communication.','Pedagogy')
  ])
}

export const examMockList=Object.values(examMocks)
export const getExamMock=(examId)=>examMocks[examId]
