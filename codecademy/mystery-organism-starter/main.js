// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const  pAequorFactory = (number, arr) => {
  return {
    speciemenNum: number,
    dna: arr,
   mutate: function() {
     this.dna = mockUpStrand();
   },
   compareDNA: function(anotherPAequor) {
    let similar = 0; 
    for (i = 0; i < 15; i++){
       if (this.dna[i] === anotherPAequor.dna[i]){
         similar ++;
       }
     }
     return `${Math.round((similar * 100) / 15)}%` 
   },
   willLikelySurvive: function(){
    let survivelChance = 0 
    for(i =0; i < 15; i++){
       if(this.dna[i] === 'C' || this.dna[i] === 'G'){
         survivelChance ++;
       }
     }
     let survivelChancePercentage = (survivelChance * 100) / 15
     if (survivelChancePercentage > 30){
       return true;
     } else {
       return false;
     }
   }
  }; 
}

const pAequorZoo = []
function populateZoo(){
  let newNumber = 1;
  do{
    let newPAequor = pAequorFactory(newNumber, mockUpStrand);
    if (newPAequor.willLikelySurvive){
      pAequorZoo.push[newPAequor];
      newNumber ++;
    }
  } while (newNumber <= 3)
}
//populateZoo();
//console.log(pAequorZoo);

let pAequor1 = pAequorFactory(1, mockUpStrand);
if (pAequor1.willLikelySurvive() === false){
  console.log("It work out!")
} else {
  console.log('Bad, bad')
}
