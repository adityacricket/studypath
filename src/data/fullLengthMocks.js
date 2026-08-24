// StudyPath — full-length original mock builder.
// Generates deterministic original practice papers from exam-specific standards.
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
]

function rng(seed){let x=(seed>>>0)||1;return()=>{x=Math.imul(1664525,x)+1013904223;return(x>>>0)/4294967296}}
function pick(r,a){return a[Math.floor(r()*a.length)]}
function makeQ(id,question,options,answer,explanation,topic,section){return{id,question,options,answer,explanation,topic,section}}

function numeric(id,r,section){
 const a=10+Math.floor(r()*90), b=2+Math.floor(r()*18), t=Math.floor(r()*5)
 if(t===0)return makeQ(id,`What is ${a} × ${b}?`,[String(a*b-b),String(a*b),String(a*b+b),String(a*b+10)],'B',`${a} × ${b} = ${a*b}.`,'Quantitative Aptitude',section)
 if(t===1)return makeQ(id,`If ${b}% of a number is ${b*2}, the number is:`,[String(b),String(b*2),String(200),String(2*b*b)],'C',`${b*2} ÷ (${b}/100) = 200.`,'Quantitative Aptitude',section)
 if(t===2)return makeQ(id,`The average of ${a}, ${a+2}, ${a+4}, ${a+6} is:`,[String(a+2),String(a+3),String(a+4),String(a+5)],'C',`The terms are equally spaced, so the average is ${a+3}.`,'Quantitative Aptitude',section)
 if(t===3)return makeQ(id,`A price of ₹${a*10} is increased by 10%. The new price is:`,[`₹${a*10+5}`,`₹${a*11}`,`₹${a*12}`,`₹${a*9}`],'B',`10% of ₹${a*10} is ₹${a}; the new price is ₹${a*11}.`,'Quantitative Aptitude',section)
 const n=a*2; return makeQ(id,`The HCF of ${n} and ${a} is:`,[String(a/2),String(a),String(n),String(a+2)],'B',`${a} divides both numbers and is the greatest common factor.`,'Quantitative Aptitude',section)
}

function reasoning(id,r,section){
 const a=2+Math.floor(r()*20), step=2+Math.floor(r()*8), ch=String.fromCharCode(65+Math.floor(r()*20))
 if(r()<0.5){const next=a+step*4;return makeQ(id,`Find the next term: ${a}, ${a+step}, ${a+2*step}, ${a+3*step}, ?`,[String(next-2),String(next),String(next+2),String(next+step)],'B',`The sequence increases by ${step} each time.`,'Reasoning',section)}
 const next=String.fromCharCode(ch.charCodeAt(0)+1);return makeQ(id,`If each letter is shifted one place forward, ${ch} becomes:`,[String.fromCharCode(ch.charCodeAt(0)-1),next,ch,String.fromCharCode(ch.charCodeAt(0)+2)],'B',`The next letter after ${ch} is ${next}.`,'Reasoning',section)
}

function science(id,r,section){
 const bank=[
  ['The organelle known as the powerhouse of the cell is:',['Nucleus','Mitochondrion','Ribosome','Vacuole'],'B','Mitochondria generate most cellular ATP.','Biology'],
  ['The pH of a neutral aqueous solution at room temperature is approximately:',['3','5','7','11'],'C','A neutral aqueous solution has pH about 7.','Chemistry'],
  ['The SI unit of electric charge is:',['Volt','Ohm','Coulomb','Ampere'],'C','Electric charge is measured in coulombs.','Physics'],
  ['Acceleration due to gravity near Earth is approximately:',['1.8 m/s²','4.9 m/s²','9.8 m/s²','19.6 m/s²'],'C','The standard near-surface value is about 9.8 m/s².','Physics'],
  ['DNA replication is generally described as:',['Conservative','Semiconservative','Dispersive only','Random'],'B','Each daughter DNA molecule contains one parental and one new strand.','Biology'],
  ['A catalyst generally:', ['Changes equilibrium constant','Lowers activation energy','Is permanently consumed','Changes atomic number'],'B','A catalyst provides an alternative pathway with lower activation energy.','Chemistry'],
 ]
 const f=pick(r,bank);return makeQ(id,f[0],f[1],f[2],f[3],f[4],section)
}

function questionFor(id,examId,section,r){
 const s=section.toLowerCase()
 if(/quant|math|numerical|arithmetic|qa|technique/.test(s))return numeric(id,r,section)
 if(/reason|logical|dilr/.test(s))return reasoning(id,r,section)
 if(/english|varc|language|verbal/.test(s)){const f=pick(r,ENGLISH);return makeQ(id,f[0],f[1],f[2],f[3],'English',section)}
 if(/physics|chemistry|biology|botany|zoology|science/.test(s))return science(id,r,section)
 const f=pick(r,FACTS);return makeQ(id,f[0],f[1],f[2],f[3],'General Awareness',section)
}

function plan(examId){
 const standard=examMockStandards[examId], cfg=EXAMS[examId]
 const known=(standard?.sections||[]).filter(s=>Number.isInteger(s.questions))
 if(known.length){const knownCount=known.reduce((n,s)=>n+s.questions,0);const target=cfg.count; if(knownCount>=target)return known.map(s=>({name:s.name,questions:s.questions}));const last=known[known.length-1];return[...known.slice(0,-1),{name:last.name,questions:last.questions+(target-knownCount)}]}
 const sections=standard?.sections?.length?standard.sections:[{name:'General Awareness'}], each=Math.floor(cfg.count/sections.length), rem=cfg.count%sections.length
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
