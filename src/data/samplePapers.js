// StudyPath — Sample Paper Library
// Original practice content. Detailed batches can expand each paper to a full-length exam.

const q = (id, question, options, answer, explanation, difficulty='Hard') => ({ id, question, options, answer, explanation, difficulty })

export const samplePapers = {
  'maths-foundation-1': { id:'maths-foundation-1', title:'Mathematics Foundation Sample Paper 1', subject:'Mathematics', level:'Foundation', duration:30, free:true, questions:[
    q(1,'If 25% of a number is 45, what is the number?',['120','160','180','200'],'C','25% is one-fourth, so the number is 45×4 = 180.','Easy'),
    q(2,'A student scores 72 out of 90. What percentage is this?',['75%','80%','82%','85%'],'B','72/90×100 = 80%.','Easy'),
    q(3,'An item priced at ₹500 is increased by 10%. New price?',['₹510','₹540','₹550','₹600'],'C','10% of ₹500 is ₹50, so the new price is ₹550.','Easy'),
    q(4,'The average of 18, 24, 30, 36 and 42 is:',['28','30','32','34'],'B','Sum = 150; 150/5 = 30.','Easy'),
    q(5,'A can complete a job in 10 days and B in 15 days. Together they take:',['5 days','6 days','7.5 days','8 days'],'B','Combined rate = 1/10 + 1/15 = 1/6, so time = 6 days.','Medium')
  ]},
  'upsc-cse-01': { id:'upsc-cse-01', title:'UPSC CSE Prelims — GS Paper I Mock 01', meta:'100 questions • 200 marks • 2 hours • Advanced GS pattern', free:true, questions:[
    q(1,'Consider: (1) Article 14 is available to citizens and foreigners. (2) Article 19 is available only to citizens. (3) Article 21 is available only to citizens.',['A. 1 and 2 only','B. 2 and 3 only','C. 1 only','D. 1, 2 and 3'],'A','Article 14 and Article 21 use “person”, while Article 19 rights are specifically available to citizens.','Hard'),
    q(2,'The Basic Structure Doctrine primarily limits:',['A. Presidential ordinance power','B. Parliament’s power to amend the Constitution','C. Judicial review','D. State legislative power'],'B','The doctrine prevents constitutional amendments from destroying the Constitution’s basic structure.','Hard'),
    q(3,'The rain-shadow effect is most directly associated with:',['A. Descending air on the leeward side of mountains','B. Ocean currents only','C. Earth’s rotation','D. Polar easterlies'],'A','Air loses moisture on the windward side and descends relatively dry on the leeward side.','Moderate'),
    q(4,'If RBI raises the repo rate, the immediate intended effect is generally to:',['A. Make borrowing costlier and moderate demand','B. Increase bank liquidity','C. Reduce taxation','D. Increase government expenditure'],'A','A higher policy rate can transmit into higher borrowing costs and moderate demand.','Moderate'),
    q(5,'Which ecological pyramid is always upright?',['A. Biomass','B. Energy','C. Numbers','D. None'],'B','Energy is lost at every trophic transfer, so the energy pyramid cannot be inverted.','Moderate')
  ]},
  'ssc-cgl-01': { id:'ssc-cgl-01', title:'SSC CGL Tier I — Mock 01', meta:'Quant • Reasoning • English • General Awareness', free:true, questions:[
    q(1,'A number is increased by 20% and then decreased by 20%. Net change?',['A. 0%','B. 4% decrease','C. 4% increase','D. 2% decrease'],'B','Take 100 → 120 → 96, so the net change is a 4% decrease.','Moderate'),
    q(2,'If A:B = 3:5 and B:C = 10:7, A:C is:',['A. 3:7','B. 6:7','C. 5:7','D. 7:6'],'B','Make B common: 3:5 becomes 6:10; hence A:C = 6:7.','Moderate'),
    q(3,'Choose the correctly spelt word:',['A. Accomodation','B. Accommodation','C. Acommodation','D. Accommadation'],'B','The correct spelling is accommodation.','Easy'),
    q(4,'Which Article abolishes untouchability?',['A. 14','B. 15','C. 17','D. 18'],'C','Article 17 abolishes untouchability.','Easy'),
    q(5,'A train covers 120 km in 2 hours. Its speed is:',['A. 40 km/h','B. 50 km/h','C. 60 km/h','D. 80 km/h'],'C','Speed = distance/time = 120/2 = 60 km/h.','Easy')
  ]},
  'ssc-chsl-01': { id:'ssc-chsl-01', title:'SSC CHSL Tier I — Mock 01', meta:'English • Reasoning • Quant • GA', free:true, questions:[
    q(1,'25% of 240 is:',['A. 50','B. 60','C. 70','D. 80'],'B','25% is one-fourth; 240/4 = 60.','Easy'),
    q(2,'If BOOK is coded as CPPL, PEN is coded as:',['A. QFO','B. QDM','C. OFM','D. QEN'],'A','Each letter moves one position forward.','Easy'),
    q(3,'Antonym of “scarce”:',['A. Rare','B. Limited','C. Abundant','D. Small'],'C','Scarce means limited; abundant is the opposite.','Easy'),
    q(4,'The Constitution was adopted on:',['A. 15 August 1947','B. 26 November 1949','C. 26 January 1950','D. 2 October 1950'],'B','It was adopted on 26 November 1949 and came into force on 26 January 1950.','Easy'),
    q(5,'A train covers 120 km in 2 hours. Speed?',['A. 40','B. 50','C. 60','D. 80'],'C','120/2 = 60 km/h.','Easy')
  ]},
  'ssc-mts-01': { id:'ssc-mts-01', title:'SSC MTS — Mock 01', meta:'Numerical Ability • Reasoning • English • GA', free:true, questions:[
    q(1,'HCF of 18 and 24 is:',['A. 3','B. 6','C. 9','D. 12'],'B','The greatest common factor is 6.','Easy'),
    q(2,'Complete: 2, 6, 12, 20, 30, ?',['A. 36','B. 40','C. 42','D. 44'],'C','Differences are 4,6,8,10; next is 12, giving 42.','Moderate'),
    q(3,'“Rapid” is closest in meaning to:',['A. Slow','B. Quick','C. Weak','D. Late'],'B','Rapid means quick or fast.','Easy'),
    q(4,'Most abundant gas in Earth’s atmosphere:',['A. Oxygen','B. Nitrogen','C. CO₂','D. Hydrogen'],'B','Nitrogen is about 78% of dry air.','Easy'),
    q(5,'Constitutional head of the Union executive:',['A. Prime Minister','B. President','C. Chief Justice','D. Speaker'],'B','The Union executive power is vested in the President.','Easy')
  ]},
  'nda-01': { id:'nda-01', title:'NDA — Mathematics & GAT Mock 01', meta:'Maths • English • Science • History • Geography', free:true, questions:[
    q(1,'If sin θ = 3/5 for acute θ, cos θ equals:',['A. 3/5','B. 4/5','C. 5/4','D. 2/5'],'B','sin²θ + cos²θ = 1 gives cosθ = 4/5.','Moderate'),
    q(2,'Derivative of x² + 3x:',['A. x+3','B. 2x+3','C. 2x²+3','D. x²+3'],'B','Differentiate term by term.','Moderate'),
    q(3,'SI unit of force:',['A. Joule','B. Watt','C. Newton','D. Pascal'],'C','Force is measured in newtons.','Easy'),
    q(4,'Tropic of Cancer passes through how many Indian states?',['A. 6','B. 7','C. 8','D. 9'],'C','It crosses eight Indian states.','Easy'),
    q(5,'Closest meaning of “valiant”:',['A. Cowardly','B. Brave','C. Careless','D. Silent'],'B','Valiant means brave or courageous.','Easy')
  ]},
  'cds-01': { id:'cds-01', title:'CDS — English, GK & Maths Mock 01', meta:'English • General Knowledge • Elementary Mathematics', free:true, questions:[
    q(1,'A train travels 180 km in 3 hours. Average speed?',['A. 50','B. 60','C. 70','D. 80'],'B','180/3 = 60 km/h.','Easy'),
    q(2,'Choose the correct sentence:',['A. He do not know.','B. He does not knows.','C. He does not know.','D. He not know.'],'C','After “does”, use the base verb “know”.','Easy'),
    q(3,'Fundamental Duties are in:',['A. Part III','B. Part IVA','C. Part IV','D. Part V'],'B','They are in Part IVA, Article 51A.','Easy'),
    q(4,'Coriolis force arises primarily because of:',['A. Earth’s rotation','B. Earth’s revolution only','C. Solar radiation','D. Ocean salinity'],'A','It is an apparent deflection caused by Earth’s rotation.','Moderate'),
    q(5,'Which is a greenhouse gas?',['A. Nitrogen','B. Oxygen','C. Carbon dioxide','D. Argon'],'C','CO₂ contributes to the greenhouse effect.','Easy')
  ]},
  'jee-main-01': { id:'jee-main-01', title:'JEE Main — PCM Mock 01', meta:'Physics • Chemistry • Mathematics', free:true, questions:[
    q(1,'A body moving with constant velocity has:',['A. Zero acceleration','B. Constant non-zero acceleration','C. Increasing acceleration','D. Variable mass'],'A','Constant velocity means zero acceleration.','Easy'),
    q(2,'For a first-order reaction, half-life is:',['A. Dependent on initial concentration','B. Independent of initial concentration','C. Always zero','D. Equal to rate constant'],'B','t½ = 0.693/k, independent of initial concentration.','Moderate'),
    q(3,'Derivative of sin x:',['A. cos x','B. -cos x','C. sin x','D. -sin x'],'A','d(sin x)/dx = cos x.','Easy'),
    q(4,'Hybridisation of carbon in methane:',['A. sp','B. sp²','C. sp³','D. dsp²'],'C','Methane has tetrahedral sp³ hybridisation.','Easy'),
    q(5,'Potential due to a point charge varies as:',['A. r','B. 1/r','C. 1/r²','D. r²'],'B','V = kQ/r.','Moderate')
  ]},
  'jee-advanced-01': { id:'jee-advanced-01', title:'JEE Advanced — PCM Challenge Mock 01', meta:'Conceptual multi-step PCM', free:true, questions:[
    q(1,'Projectile range is maximum at what angle when launch and landing heights are equal?',['A. 30°','B. 45°','C. 60°','D. 90°'],'B','R = u²sin2θ/g, maximised at θ=45°.','Moderate'),
    q(2,'In an ideal gas isothermal process, what remains constant?',['A. Pressure','B. Temperature','C. Volume','D. Density'],'B','Isothermal means constant temperature.','Moderate'),
    q(3,'If f(x)=x², f(f(x)) equals:',['A. x²','B. x⁴','C. 2x²','D. x³'],'B','f(f(x)) = f(x²) = x⁴.','Easy'),
    q(4,'A planar cyclic conjugated system with 6 π electrons satisfies:',['A. 4n','B. 4n+2','C. 2n','D. n+2'],'B','Six π electrons satisfy Hückel’s 4n+2 rule for n=1, provided aromaticity conditions hold.','Hard'),
    q(5,'Pentavalent doping of silicon generally gives:',['A. p-type','B. n-type','C. Insulator','D. Superconductor'],'B','Donor impurities contribute an extra electron, producing n-type behaviour.','Moderate')
  ]},
  'neet-ug-01': { id:'neet-ug-01', title:'NEET UG — PCB Mock 01', meta:'Physics • Chemistry • Biology', free:true, questions:[
    q(1,'Functional unit of kidney:',['A. Neuron','B. Nephron','C. Alveolus','D. Villus'],'B','The nephron performs filtration, reabsorption and secretion.','Easy'),
    q(2,'Organelle primarily responsible for ATP production:',['A. Ribosome','B. Mitochondrion','C. Lysosome','D. Golgi apparatus'],'B','Mitochondria generate most cellular ATP.','Easy'),
    q(3,'Neutral water at 25°C has pH approximately:',['A. 0','B. 5','C. 7','D. 14'],'C','Neutral water has equal H⁺ and OH⁻ concentrations at 25°C, giving pH 7.','Easy'),
    q(4,'SI unit of resistance:',['A. Volt','B. Ampere','C. Ohm','D. Coulomb'],'C','Resistance is measured in ohms.','Easy'),
    q(5,'DNA replication is:',['A. Conservative','B. Semiconservative','C. Random','D. Only dispersive'],'B','Each daughter DNA has one parental and one newly synthesised strand.','Moderate')
  ]},
  'cuet-ug-01': { id:'cuet-ug-01', title:'CUET UG — Language, Aptitude & GA Mock 01', meta:'Language • Reasoning • General Awareness', free:true, questions:[
    q(1,'Choose the grammatically correct sentence:',['A. Neither of the boys are ready.','B. Neither of the boys is ready.','C. Neither boys is ready.','D. Neither of boys are ready.'],'B','“Neither” is singular in this construction.','Easy'),
    q(2,'All analysts are readers. Some readers are writers. Which is certain?',['A. All analysts are writers','B. Some analysts are writers','C. No analysts are writers','D. All analysts are readers'],'D','Only the first relationship is guaranteed.','Hard'),
    q(3,'Largest planet:',['A. Earth','B. Saturn','C. Jupiter','D. Neptune'],'C','Jupiter is the largest planet.','Easy'),
    q(4,'20% discount on ₹500 gives:',['A. ₹350','B. ₹400','C. ₹450','D. ₹480'],'B','Discount = ₹100, so price = ₹400.','Easy'),
    q(5,'The Constitution came into force on:',['A. 26 Nov 1949','B. 15 Aug 1947','C. 26 Jan 1950','D. 2 Oct 1950'],'C','It came into force on 26 January 1950.','Easy')
  ]},
  'gate-01': { id:'gate-01', title:'GATE — Engineering Aptitude & Mathematics Mock 01', meta:'Aptitude • Engineering Mathematics • Core concepts', free:true, questions:[
    q(1,'For an LTI system, superposition means:',['A. Output is constant','B. Response to a sum equals the sum of individual responses','C. Input must be sinusoidal','D. Scaling never changes output'],'B','Linearity gives additivity and homogeneity; together these form superposition.','Moderate'),
    q(2,'Determinant of a 2×2 identity matrix:',['A. 0','B. 1','C. 2','D. -1'],'B','The determinant of an identity matrix is 1.','Easy'),
    q(3,'In a series RLC circuit at resonance:',['A. XL and XC cancel','B. Resistance becomes zero','C. Current becomes zero','D. Frequency becomes zero'],'A','At resonance, inductive and capacitive reactances are equal and opposite.','Moderate'),
    q(4,'A stable first-order continuous-time system has its pole in the:',['A. Right half-plane','B. Positive imaginary axis','C. Left half-plane','D. At infinity'],'C','A negative real pole is required for asymptotic stability.','Moderate'),
    q(5,'Derivative of ln x for x>0:',['A. x','B. 1/x','C. ln x','D. e^x'],'B','d(ln x)/dx = 1/x.','Easy')
  ]},
  'cat-01': { id:'cat-01', title:'CAT — VARC, DILR & QA Mock 01', meta:'Verbal Ability • DILR • Quantitative Aptitude', free:true, questions:[
    q(1,'A quantity rises from 200 to 250. Percentage increase?',['A. 20%','B. 25%','C. 30%','D. 50%'],'B','Increase 50 on base 200 gives 25%.','Easy'),
    q(2,'All analysts are readers. Some readers are writers. What is certain?',['A. All analysts are writers','B. Some analysts are writers','C. No analysts are writers','D. All analysts are readers'],'D','Only the stated subset relationship is certain.','Hard'),
    q(3,'Average of 10,20,30,40:',['A. 20','B. 25','C. 30','D. 35'],'B','100/4 = 25.','Easy'),
    q(4,'A counterexample in an argument most likely serves to:',['A. Decorate it','B. Test or qualify the claim','C. Repeat evidence','D. Define a term'],'B','A counterexample challenges the scope or universality of a claim.','Moderate'),
    q(5,'If x+y=10 and xy=21, x²+y² equals:',['A. 42','B. 58','C. 79','D. 100'],'B','(x+y)²−2xy = 100−42 = 58.','Moderate')
  ]},
  'clat-01': { id:'clat-01', title:'CLAT — Legal Reasoning & Language Mock 01', meta:'Legal reasoning • English • Quant', free:true, questions:[
    q(1,'Principle: a person is liable for damage caused by negligence. A person leaves a wet floor without warning and another slips. Best application?',['A. No liability','B. Potential liability for negligence','C. Liability only with intent','D. No liability ever'],'B','The principle focuses on negligence, not necessarily intent; an unmarked foreseeable hazard can satisfy it.','Hard'),
    q(2,'Why is evidence generally preferred to an unsupported assertion?',['A. Evidence is shorter','B. Evidence gives a basis for evaluating a claim','C. Assertions are illegal','D. Evidence ends disagreement'],'B','Evidence permits the reader to assess whether a claim is supported.','Moderate'),
    q(3,'If 5 books cost ₹750, 8 books cost:',['A. ₹900','B. ₹1,000','C. ₹1,200','D. ₹1,500'],'C','Each book costs ₹150; eight cost ₹1,200.','Easy'),
    q(4,'Equality before law is guaranteed by:',['A. Article 12','B. Article 14','C. Article 19','D. Article 32'],'B','Article 14 guarantees equality before law and equal protection of laws.','Easy'),
    q(5,'An assumption in an argument is:',['A. A proved conclusion','B. An unstated premise on which the argument depends','C. A numerical answer','D. A quotation'],'B','An assumption is an unstated proposition necessary to the argument.','Moderate')
  ]},
  'ugc-net-01': { id:'ugc-net-01', title:'UGC NET — Paper I Mock 01', meta:'Teaching • Research • Reasoning • ICT', free:true, questions:[
    q(1,'A good research hypothesis should generally be:',['A. Untestable','B. Testable and connected to the research problem','C. Emotional','D. Identical to the conclusion'],'B','A useful hypothesis makes a proposition that can be investigated.','Moderate'),
    q(2,'Formative assessment is primarily used to:',['A. Provide feedback during learning','B. Replace instruction','C. Rank students only at the end','D. Award degrees'],'A','It provides feedback that can improve learning during instruction.','Easy'),
    q(3,'A correlation coefficient close to zero indicates:',['A. Perfect positive correlation','B. Perfect negative correlation','C. Little or no linear association','D. Causation'],'C','Near-zero Pearson correlation indicates little linear association; it does not establish causation.','Moderate'),
    q(4,'Synchronous online teaching is:',['A. Recorded lecture','B. Live scheduled online class','C. Downloaded PDF','D. Offline textbook'],'B','Synchronous learning happens in real time.','Easy'),
    q(5,'Plagiarism means:',['A. Proper citation','B. Presenting another’s work or ideas as one’s own without appropriate acknowledgement','C. Peer review','D. Data analysis'],'B','Plagiarism is an academic integrity violation involving unacknowledged use of another’s work or ideas.','Easy')
  ]},
  'ibps-po-01': { id:'ibps-po-01', title:'IBPS PO — Prelims Mock 01', meta:'English • Quantitative Aptitude • Reasoning', free:true, questions:[
    q(1,'₹10,000 earns simple interest at 8% p.a. for 2 years. Interest?',['A. ₹800','B. ₹1,200','C. ₹1,600','D. ₹2,000'],'C','SI = PRT/100 = ₹1,600.','Easy'),
    q(2,'If 40% of a number is 120, the number is:',['A. 240','B. 300','C. 360','D. 480'],'B','120/0.40 = 300.','Easy'),
    q(3,'The manager ___ the report yesterday.',['A. approve','B. approved','C. approving','D. approves'],'B','“Yesterday” requires the simple past “approved”.','Easy'),
    q(4,'All managers are graduates. Some graduates are analysts. What is certain?',['A. All managers are analysts','B. Some managers are analysts','C. All managers are graduates','D. No analyst is a manager'],'C','Only the first relationship is guaranteed.','Moderate'),
    q(5,'A deposit rises from ₹8,000 to ₹9,200. Percentage increase?',['A. 10%','B. 12%','C. 15%','D. 20%'],'C','Increase = ₹1,200; 1,200/8,000 ×100 = 15%.','Moderate')
  ]}
}

export const getSamplePapers = (examId) => Object.values(samplePapers).filter(p => p.id.startsWith(`${examId}-`) || p.id === examId)
