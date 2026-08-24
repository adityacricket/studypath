// Corrected SSC CGL Tier-I model-paper dataset.
// Original practice content; not official PYQs.
const q=(id,question,options,answer,explanation,topic)=>({id,question,options,answer,explanation,topic})

const quant=(seed,offset)=>Array.from({length:25},(_,i)=>{
  const n=seed+i
  const type=i%5
  if(type===0){const x=100+n*4; const ans=x/4; return q(offset+i,`25% of ${x} is:`,[String(ans-10),String(ans),String(ans+10),String(ans+20)],'B',`25% means one-fourth: ${x} ÷ 4 = ${ans}.`,'Percentage')}
  if(type===1){const cp=200+n*5; const ans=cp*115/100; return q(offset+i,`An item costs ₹${cp} and is sold at 15% profit. Selling price is:`,[`₹${ans-20}`,`₹${ans}`,`₹${ans+20}`,`₹${cp}`],'B',`Selling price = ${cp} × 1.15 = ₹${ans}.`,'Profit and Loss')}
  if(type===2){const a=10+(n%8),b=15+(n%6); const t=(a*b)/(a+b); return q(offset+i,`A can finish a job in ${a} days and B in ${b} days. Together they take:`,[`${t-1} days`,`${t} days`,`${t+1} days`,`${t+2} days`],'B',`Combined rate is 1/${a}+1/${b}; the reciprocal is ${t} days.`,'Time and Work')}
  if(type===3){const d=120+n*3; const ans=d/2; return q(offset+i,`A vehicle covers ${d} km in 2 hours. Its average speed is:`,[`${ans-10} km/h`,`${ans} km/h`,`${ans+10} km/h`,`${d} km/h`],'B',`Speed = distance ÷ time = ${d}/2 = ${ans} km/h.`,'Time and Distance')}
  const r=5+(n%6); return q(offset+i,`The area of a square of side ${r} cm is:`,[`${r*r-4} cm²`,`${r*r} cm²`,`${r*r+4} cm²`,`${2*r*r} cm²`],'B',`Area = side² = ${r}² = ${r*r} cm².`,'Mensuration')
})

const reasoning=(seed,offset)=>Array.from({length:25},(_,i)=>{
  const n=seed+i
  const type=i%5
  if(type===0){const a=3+n%9; return q(offset+i,`Find the next term: ${a}, ${a+4}, ${a+8}, ${a+12}, ?`,[String(a+14),String(a+16),String(a+18),String(a+20)],'B','The sequence increases by 4 each time.','Number Series')}
  if(type===1)return q(offset+i,'If CAT is coded as DBU, DOG is coded as:',['EPH','EOG','FPH','DPG'],'A','Each letter is shifted one position forward.','Coding-Decoding')
  if(type===2)return q(offset+i,'Book is to Read as Food is to:',['Cook','Eat','Buy','Sell'],'B','Books are read; food is eaten.','Analogy')
  if(type===3)return q(offset+i,'Which is the odd one out?',['Square','Triangle','Circle','Rectangle'],'C','A circle has no straight sides; the others are polygons.','Classification')
  return q(offset+i,'A is taller than B, and B is taller than C. Who is shortest?',['A','B','C','Cannot be determined'],'C','A > B > C, so C is shortest.','Ranking')
})

const english=(seed,offset)=>Array.from({length:25},(_,i)=>{
  const bank=[
    ['Choose the correctly spelt word:',['Accomodation','Accommodation','Acommodation','Accommadation'],'B','Accommodation is the correct spelling.','Spelling'],
    ['Synonym of “abundant” is:',['Scarce','Plentiful','Tiny','Brief'],'B','Abundant means plentiful.','Vocabulary'],
    ['Antonym of “ancient” is:',['Old','Modern','Historic','Former'],'B','Modern is the opposite of ancient.','Vocabulary'],
    ['Choose the correct sentence:',['He go to school.','He goes to school.','He going school.','He gone to school.'],'B','A singular third-person subject takes “goes”.','Grammar'],
    ['One-word substitution for “one who cannot read or write”:',['Literate','Illiterate','Scholar','Author'],'B','Illiterate means unable to read or write.','Vocabulary'],
    ['“To hit the nail on the head” means:',['To miss the point','To say exactly the right thing','To work slowly','To avoid a task'],'B','The idiom means to state something exactly.','Idioms'],
    ['Choose the passive voice of “The boy opened the door.”',['The door opened the boy.','The door was opened by the boy.','The boy was opened by the door.','The door is opened by the boy.'],'B','Simple past active becomes was/were + past participle.','Voice'],
    ['She has been working here ___ 2022.',['for','since','from','by'],'B','“Since” is used with a starting point in time.','Prepositions'],
    ['Choose the correctly spelt word:',['Necessary','Necesary','Neccessary','Necassary'],'A','Necessary is the correct spelling.','Spelling'],
    ['The word “quickly” is a:',['Noun','Adjective','Adverb','Pronoun'],'C','Quickly modifies a verb and is an adverb.','Parts of Speech'],
  ]
  const item=bank[(i+seed)%bank.length]; return q(offset+i,item[0],item[1],item[2],item[3],item[4])
})

const ga=(seed,offset)=>Array.from({length:25},(_,i)=>{
  const bank=[
    ['Which Article abolishes untouchability?',['14','15','17','18'],'C','Article 17 abolishes untouchability.','Polity'],
    ['The Constitution of India came into force on:',['15 August 1947','26 November 1949','26 January 1950','2 October 1950'],'C','It came into force on 26 January 1950.','Polity'],
    ['Who appoints the Governor of an Indian state?',['Prime Minister','President','Chief Justice','Chief Minister'],'B','The President appoints Governors.','Polity'],
    ['The most abundant gas in Earth’s atmosphere is:',['Oxygen','Nitrogen','Carbon dioxide','Hydrogen'],'B','Nitrogen forms roughly 78% of dry air.','Science'],
    ['The SI unit of force is:',['Joule','Pascal','Newton','Watt'],'C','Force is measured in newtons.','Science'],
    ['The Battle of Plassey was fought in:',['1757','1764','1857','1947'],'A','The Battle of Plassey occurred in 1757.','History'],
    ['The Tropic of Cancer passes through how many Indian states?',['6','7','8','9'],'C','It crosses eight Indian states.','Geography'],
    ['The largest planet in the Solar System is:',['Earth','Saturn','Jupiter','Neptune'],'C','Jupiter is the largest planet.','Science'],
    ['Fundamental Duties are contained in:',['Part III','Part IVA','Part IV','Part V'],'B','They are in Part IVA, Article 51A.','Polity'],
    ['Which is a greenhouse gas?',['Nitrogen','Oxygen','Carbon dioxide','Argon'],'C','Carbon dioxide is a greenhouse gas.','Environment'],
  ]
  const item=bank[(i+seed)%bank.length]; return q(offset+i,item[0],item[1],item[2],item[3],item[4])
})

const makePaper=(number)=>{
  const seed=number*11
  return {
    id:`ssc-cgl-sample-${String(number).padStart(2,'0')}`,
    title:`SSC CGL Tier-I Sample Paper ${String(number).padStart(2,'0')}`,
    subject:'SSC CGL',
    level:'Tier-I • 200 Marks',
    meta:'100 questions • 200 marks • 60 minutes • 15-minute sectional timer',
    duration:60,
    marks:200,
    negativeMarking:0.5,
    sectionTimers:[
      {name:'General Intelligence & Reasoning',questions:25,minutes:15},
      {name:'General Awareness',questions:25,minutes:15},
      {name:'Quantitative Aptitude',questions:25,minutes:15},
      {name:'English Comprehension',questions:25,minutes:15},
    ],
    free:true,
    questions:[...reasoning(seed,1),...ga(seed+1,26),...quant(seed+2,51),...english(seed+3,76)],
  }
}

export const sscCglSamplePapersV2=Array.from({length:10},(_,i)=>makePaper(i+1))
