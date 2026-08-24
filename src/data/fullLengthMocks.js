// StudyPath — full-length original mock builder.
// The generator creates deterministic, exam-specific original practice papers.
// It does not reproduce official papers or PYQs.

import { examMockStandards } from './examMockStandards.js'

const EXAMS = {
  'ssc-cgl': { count: 100, duration: 60 }, 'ssc-chsl': { count: 100, duration: 60 }, 'ssc-mts': { count: 90, duration: 90 },
  'upsc-cse': { count: 100, duration: 120 }, 'nda': { count: 270, duration: 300 }, 'cds': { count: 120, duration: 360 },
  'jee-main': { count: 75, duration: 180 }, 'jee-advanced': { count: 54, duration: 360 }, 'neet-ug': { count: 180, duration: 180 },
  'cuet-ug': { count: 50, duration: 60 }, 'gate': { count: 65, duration: 180 }, 'cat': { count: 68, duration: 120 },
  'clat': { count: 120, duration: 120 }, 'ugc-net': { count: 150, duration: 180 }, 'ibps-po': { count: 100, duration: 60 },
  'ibps-clerk': { count: 100, duration: 60 }, 'sbi-po': { count: 100, duration: 60 }, 'rrb-ntpc': { count: 100, duration: 90 },
  'rrb-group-d': { count: 100, duration: 90 }, 'ctet': { count: 150, duration: 150 },
}

const FACTS = [
  ['The largest planet in the Solar System is:', ['Earth','Mars','Jupiter','Venus'], 'C', 'Jupiter is the largest planet.'],
  ['The SI unit of force is:', ['Joule','Newton','Watt','Pascal'], 'B', 'Force is measured in newtons.'],
  ['The Constitution of India was adopted on:', ['15 August 1947','26 November 1949','26 January 1950','2 October 1950'], 'B', 'The Constituent Assembly adopted it on 26 November 1949.'],
  ['The Constitution of India came into force on:', ['15 August 1947','26 November 1949','26 January 1950','2 October 1950'], 'C', 'The Constitution came into force on 26 January 1950.'],
  ['The gas most abundant in Earth’s atmosphere is:', ['Oxygen','Nitrogen','Carbon dioxide','Hydrogen'], 'B', 'Nitrogen makes up the largest share of Earth’s atmosphere.'],
  ['Photosynthesis primarily occurs in the:', ['Nucleus','Chloroplast','Ribosome','Golgi apparatus'], 'B', 'Photosynthesis occurs in chloroplasts.'],
  ['The SI unit of frequency is:', ['Hertz','Tesla','Weber','Ohm'], 'A', 'Frequency is measured in hertz.'],
  ['The Battle of Plassey was fought in:', ['1757','1764','1857','1947'], 'A', 'The Battle of Plassey was fought in 1757.'],
  ['The functional unit of the kidney is the:', ['Neuron','Nephron','Alveolus','Villus'], 'B', 'The nephron is the functional unit of the kidney.'],
  ['The atomic number of an element equals its number of:', ['Neutrons','Protons','Nucleons','Shells'], 'B', 'Atomic number is defined by the number of protons.'],
  ['The Supreme Court of India is the:', ['Highest court of the land','Highest tax authority','Election authority','Law commission'], 'A', 'The Supreme Court is the highest judicial court in India.'],
  ['The currency of Japan is:', ['Won','Yuan','Yen','Ringgit'], 'C', 'Japan uses the yen.'],
  ['The Red Planet is:', ['Venus','Mars','Jupiter','Mercury'], 'B', 'Mars is commonly called the Red Planet.'],
  ['Water boils at sea level at approximately:', ['50°C','80°C','100°C','120°C'], 'C', 'At standard atmospheric pressure, water boils at 100°C.'],
]

const ENGLISH = [
  ['Choose the correctly spelt word:', ['Accommodation','Accomodation','Acommodation','Accommadation'], 'A', 'Accommodation is the correct spelling.'],
  ['The synonym of “abundant” is:', ['Scarce','Plentiful','Tiny','Brief'], 'B', 'Abundant means plentiful.'],
  ['The antonym of “ancient” is:', ['Old','Modern','Historic','Former'], 'B', 'Modern is the opposite of ancient.'],
  ['Choose the correct sentence:', ['He go to school.','He goes to school.','He going school.','He gone school.'], 'B', 'A singular third-person subject takes “goes”.'],
  ['“To hit the nail on the head” means:', ['To miss the point','To state something exactly','To work slowly','To avoid a task'], 'B', 'The idiom means to identify or state something exactly.'],
  ['The word closest in meaning to “brief” is:', ['Short','Heavy','Ancient','Loud'], 'A', 'Brief means short in duration or length.'],
  ['The opposite of “expand” is:', ['Extend','Contract','Explain','Multiply'], 'B', 'Contract means to become smaller.'],
  ['Choose the correct article: “He is ___ honest officer.”', ['a','an','the','no article'], 'B', '“Honest” begins with a vowel sound, so “an” is used.'],
  ['Choose the correct preposition: “She is good ___ mathematics.”', ['at','on','for','by'], 'A', 'The standard expression is “good at”.'],
  ['A person who studies stars and planets is an:', ['Archaeologist','Astronomer','Anthropologist','Economist'], 'B', 'An astronomer studies celestial objects.'],
]

const BANKING = [
  ['A bank’s CRR is maintained with:', ['RBI','SEBI','IRDAI','NABARD'], 'A', 'Commercial banks maintain CRR with the RBI.'],
  ['Repo rate is the rate at which:', ['RBI lends to banks','Banks lend to customers','Customers lend to banks','Government lends to RBI'], 'A', 'Repo is the RBI lending rate for eligible short-term transactions.'],
  ['A balance sheet reports:', ['Assets and liabilities','Only sales','Only cash','Only profit'], 'A', 'A balance sheet presents assets, liabilities and equity.'],
  ['If a deposit earns simple interest, interest is calculated on:', ['Principal','Only interest','Tax amount','Penalty'], 'A', 'Simple interest is calculated on the principal.'],
  ['KYC is primarily associated with:', ['Customer identification','Weather forecasting','Railway scheduling','Crop rotation'], 'A', 'KYC means Know Your Customer and supports customer due diligence.'],
]

const SCIENCE = [
  ['The organelle known as the powerhouse of the cell is:', ['Nucleus','Mitochondrion','Ribosome','Vacuole'], 'B', 'Mitochondria generate most cellular ATP.','Biology'],
  ['The pH of a neutral aqueous solution at room temperature is approximately:', ['3','5','7','11'], 'C', 'A neutral aqueous solution has pH about 7.','Chemistry'],
  ['The SI unit of electric charge is:', ['Volt','Ohm','Coulomb','Ampere'], 'C', 'Electric charge is measured in coulombs.','Physics'],
  ['Acceleration due to gravity near Earth is approximately:', ['1.8 m/s²','4.9 m/s²','9.8 m/s²','19.6 m/s²'], 'C', 'The standard near-surface value is about 9.8 m/s².','Physics'],
  ['DNA replication is generally described as:', ['Conservative','Semiconservative','Dispersive only','Random'], 'B', 'Each daughter DNA molecule contains one parental and one new strand.','Biology'],
  ['A catalyst generally:', ['Changes equilibrium constant','Lowers activation energy','Is permanently consumed','Changes atomic number'], 'B', 'A catalyst provides an alternative pathway with lower activation energy.','Chemistry'],
  ['The functional unit of the nervous system is the:', ['Neuron','Nephron','Alveolus','Platelet'], 'A', 'Neurons transmit nerve impulses.','Biology'],
  ['Ohm’s law is represented by:', ['V = IR','P = VI²','F = ma²','Q = It²'], 'A', 'For an ohmic conductor under stated conditions, V = IR.','Physics'],
  ['The molecular formula of glucose is:', ['CO2','C6H12O6','C2H5OH','CH4'], 'B', 'Glucose has molecular formula C6H12O6.','Chemistry'],
  ['The gas released during photosynthesis is mainly:', ['Nitrogen','Oxygen','Methane','Hydrogen'], 'B', 'Oxygen is released during the light reactions of photosynthesis.','Biology'],
]

function rng(seed){let x=(seed>>>0)||1;return()=>{x=Math.imul(1664525,x)+1013904223;return(x>>>0)/4294967296}}
function pick(r,a){return a[Math.floor(r()*a.length)]}
function makeQ(id,question,options,answer,explanation,topic,section,difficulty='Medium'){return{id,question,options,answer,explanation,topic,section,difficulty,source:'StudyPath Original'}}

function numeric(id,r,section,level='Medium'){
 const a=8+Math.floor(r()*92), b=2+Math.floor(r()*18), t=Math.floor(r()*7)
 if(t===0){const ans=a*b;return makeQ(id,`What is ${a} × ${b}?`,[String(ans-b),String(ans),String(ans+b),String(ans+10)],'B',`${a} × ${b} = ${ans}.`,'Arithmetic',section,level)}
 if(t===1){const pct=b*5,base=20+Math.floor(r()*80),part=base*pct/100;return makeQ(id,`${pct}% of ${base} is:`,[String(part+1),String(part),String(part+5),String(part+10)],'B',`${pct}/100 × ${base} = ${part}.`,'Percentage',section,level)}
 if(t===2){const x=a,y=a+2,z=a+4,w=a+6,ans=a+3;return makeQ(id,`The average of ${x}, ${y}, ${z} and ${w} is:`,[String(ans-1),String(ans),String(ans+1),String(ans+2)],'B',`The four numbers sum to ${4*ans}; dividing by 4 gives ${ans}.`,'Average',section,level)}
 if(t===3){const price=a*10,ans=price+a;return makeQ(id,`A price of ₹${price} is increased by 10%. The new price is:`,[`₹${price-10}`,`₹${ans}`,`₹${price+2*a}`,`₹${price+a*2+10}`],'B',`10% of ₹${price} is ₹${a}; the new price is ₹${ans}.`,'Profit & Loss / Percentage',section,level)}
 if(t===4){const n=a*2;return makeQ(id,`The HCF of ${n} and ${a} is:`,[String(a/2),String(a),String(n),String(a+2)],'B',`${a} divides both numbers and is the greatest common factor.`,'Number System',section,level)}
 if(t===5){const rate=5+Math.floor(r()*6),principal=a*100,time=2,ans=principal*rate*time/100;return makeQ(id,`Simple interest on ₹${principal} at ${rate}% per annum for ${time} years is:`,[`₹${ans-rate*10}`,`₹${ans}`,`₹${ans+rate*10}`,`₹${ans+principal/10}`],'B',`SI = P × R × T / 100 = ₹${ans}.`,'Simple Interest',section,level)}
 const speed=20+Math.floor(r()*30),time=2+Math.floor(r()*4),distance=speed*time;return makeQ(id,`A vehicle travels at ${speed} km/h for ${time} hours. Distance covered is:`,[`${distance-5} km`,`${distance} km`,`${distance+5} km`,`${distance+10} km`],'B',`Distance = speed × time = ${speed} × ${time} = ${distance} km.`,'Time, Speed & Distance',section,level)
}

function reasoning(id,r,section){
 const a=2+Math.floor(r()*20), step=2+Math.floor(r()*8), t=Math.floor(r()*4)
 if(t===0){const next=a+step*4;return makeQ(id,`Find the next term: ${a}, ${a+step}, ${a+2*step}, ${a+3*step}, ?`,[String(next-2),String(next),String(next+2),String(next+step)],'B',`The sequence increases by ${step} each time.`,'Series',section)}
 if(t===1){const ch=String.fromCharCode(65+Math.floor(r()*20)),next=String.fromCharCode(ch.charCodeAt(0)+1);return makeQ(id,`If each letter is shifted one place forward, ${ch} becomes:`,[String.fromCharCode(ch.charCodeAt(0)-1),next,ch,String.fromCharCode(ch.charCodeAt(0)+2)],'B',`The next letter after ${ch} is ${next}.`,'Coding-Decoding',section)}
 if(t===2){const n=3+Math.floor(r()*8);return makeQ(id,`A person faces north, turns right ${n%2?90:180}° and then turns right 90°. Which direction can the final facing be?`,['North','East','South','West'],n%2?'C':'W',n%2?'Two right turns give south.':'Three right-angle turns give west.','Direction Sense',section)}
 const x=3+Math.floor(r()*10);return makeQ(id,`If all ${x} cats are animals and all animals need food, which conclusion follows?`,[`Some cats need food`,`No cats need food`,`All food are cats`,`Cats are not animals`],'A','Cats are animals and animals need food, so every cat needs food; therefore some cats do as well.','Syllogism',section)
}

function english(id,r,section){const f=pick(r,ENGLISH);return makeQ(id,f[0],f[1],f[2],f[3],'English',section)}
function banking(id,r,section){const f=pick(r,BANKING);return makeQ(id,f[0],f[1],f[2],f[3],'Banking Awareness',section)}
function science(id,r,section){const f=pick(r,SCIENCE);return makeQ(id,f[0],f[1],f[2],f[3],f[4],section)}
function general(id,r,section){const f=pick(r,FACTS);return makeQ(id,f[0],f[1],f[2],f[3],'General Awareness',section)}

function verbal(id,r,section){
 const f=pick(r,ENGLISH);return makeQ(id,f[0],f[1],f[2],f[3],/varc|verbal|language/i.test(section)?'Verbal Ability':'Language',section)
}
function dilr(id,r,section){
 const n=4+Math.floor(r()*5), step=2+Math.floor(r()*5), total=n*step;return makeQ(id,`A set contains ${n} groups with ${step} items in each group. Total items are:`,[String(total-step),String(total),String(total+step),String(total+2)],'B',`Total = ${n} × ${step} = ${total}.`,'Data Interpretation & Logical Reasoning',section)
}
function physics(id,r,section){
 const mass=2+Math.floor(r()*8),acc=2+Math.floor(r()*6),force=mass*acc;return makeQ(id,`A ${mass} kg body has acceleration ${acc} m/s². Its net force is:`,[`${force-2} N`,`${force} N`,`${force+2} N`,`${mass+acc} N`],'B',`By F = ma, F = ${mass} × ${acc} = ${force} N.`,'Physics',section)
}
function chemistry(id,r,section){return science(id,r,section)}
function biology(id,r,section){return science(id,r,section)}
function legal(id,r,section){
 const f=pick(r,[
  ['A contract requires valid consideration. Which is generally true?',['Consideration is never relevant','Lawful consideration supports enforceability subject to exceptions','Only a witness creates consideration','Consideration must always be money'],'B','A lawful consideration is a basic contractual element, subject to recognised exceptions.'],
  ['A person is presumed innocent until:', ['Conviction','Arrest','Charge sheet','Investigation begins'],'A','The presumption of innocence persists unless guilt is established through the legal process.'],
  ['Natural justice primarily includes:', ['Audi alteram partem','No hearing','Secret punishment','Automatic conviction'],'A','Audi alteram partem means the affected party should have an opportunity to be heard.'],
 ]);return makeQ(id,f[0],f[1],f[2],f[3],'Legal Reasoning',section)
}
function pedagogy(id,r,section){
 const f=pick(r,[
  ['A learner-centred classroom primarily emphasizes:', ['Passive copying','Active participation and understanding','Only memorisation','Punishment'],'B','Learner-centred teaching involves active participation and construction of understanding.'],
  ['Formative assessment is mainly used to:', ['Support learning during instruction','Only rank students at year end','Replace teaching','Award degrees'],'A','Formative assessment provides feedback during learning so instruction can improve.'],
  ['Inclusive education aims to:', ['Exclude learners needing support','Provide meaningful participation for diverse learners','Teach only high achievers','Avoid adaptations'],'B','Inclusion seeks meaningful participation and access for diverse learners.'],
 ]);return makeQ(id,f[0],f[1],f[2],f[3],'Child Development & Pedagogy',section)
}
function upsc(id,r,section){
 if(/polity|history|geography|economy|environment|general/i.test(section))return general(id,r,section)
 return makeQ(id,'Which approach best supports evidence-based public policy?',['Use verified data and transparent evaluation','Ignore outcomes','Use only rumours','Avoid measurement'],'A','Evidence-based policy relies on credible data, evaluation and transparent reasoning.','General Studies',section)
}
function gate(id,r,section){
 if(/aptitude/i.test(section))return numeric(id,r,section)
 const a=2+Math.floor(r()*8),b=3+Math.floor(r()*8);return makeQ(id,`If a system has ${a} inputs and each produces ${b} outputs, total outputs are:`,[String(a+b),String(a*b),String(a*b+1),String(a*b-1)],'B',`Multiplying ${a} inputs by ${b} outputs per input gives ${a*b}.`,'Engineering Aptitude / Mathematics',section)
}
function cuet(id,r,section){return /language/i.test(section)?english(id,r,section):general(id,r,section)}
function ugc(id,r,section){
 if(/paper i|teaching|research|aptitude/i.test(section))return pedagogy(id,r,section)
 return general(id,r,section)
}

function questionFor(id,examId,section,r){
 const s=section.toLowerCase()
 if(/legal/.test(s))return legal(id,r,section)
 if(/pedagogy|child development/.test(s))return pedagogy(id,r,section)
 if(/physics/.test(s))return physics(id,r,section)
 if(/chemistry/.test(s))return chemistry(id,r,section)
 if(/biology|botany|zoology/.test(s))return biology(id,r,section)
 if(/bank|financial/.test(s))return banking(id,r,section)
 if(/dilr|logical reasoning|logical/.test(s) && /cat/.test(examId))return dilr(id,r,section)
 if(/reasoning|logical/.test(s))return reasoning(id,r,section)
 if(/quant|math|numerical|arithmetic|qa|technique/.test(s))return numeric(id,r,section)
 if(/english|varc|language|verbal/.test(s))return verbal(id,r,section)
 if(/gate|engineering/.test(s))return gate(id,r,section)
 if(/cuet/.test(examId))return cuet(id,r,section)
 if(/ugc/.test(examId))return ugc(id,r,section)
 if(/upsc/.test(examId))return upsc(id,r,section)
 return general(id,r,section)
}

function plan(examId){
 const standard=examMockStandards[examId],cfg=EXAMS[examId]
 const known=(standard?.sections||[]).filter(s=>Number.isInteger(s.questions))
 if(known.length){
  const knownCount=known.reduce((n,s)=>n+s.questions,0)
  if(knownCount>=cfg.count)return known.map(s=>({name:s.name,questions:s.questions}))
  const last=known[known.length-1]
  return [...known.slice(0,-1),{name:last.name,questions:last.questions+(cfg.count-knownCount)}]
 }
 const sections=standard?.sections?.length?standard.sections:[{name:'General Awareness'}]
 const each=Math.floor(cfg.count/sections.length),rem=cfg.count%sections.length
 return sections.map((s,i)=>({name:s.name,questions:each+(i<rem?1:0)}))
}

export function buildFullLengthMock(examId,mockNumber){
 const cfg=EXAMS[examId];if(!cfg)return null
 const seed=mockNumber*7919+examId.split('').reduce((n,c)=>n+c.charCodeAt(0),0),r=rng(seed),questions=[];let id=1
 plan(examId).forEach(s=>{for(let i=0;i<s.questions;i++)questions.push(questionFor(id++,examId,s.name,r))})
 return{id:`${examId}-mock-${String(mockNumber).padStart(2,'0')}`,examId,title:`${examId.toUpperCase()} Full-Length Mock ${String(mockNumber).padStart(2,'0')}`,free:true,status:'ready',duration:cfg.duration,questions,generated:true,original:true,standard:examMockStandards[examId]||null}
}

export function getFullLengthMocks(examId){return Array.from({length:10},(_,i)=>buildFullLengthMock(examId,i+1)).filter(Boolean)}
export const fullLengthMockExamIds=Object.keys(EXAMS)
