function depositCalculator(input)
{
const deposit = Number(input[0]);
const term = Number(input[1]);
const increase = Number(input[2]);

const natrupanaLihva = deposit * (increase * 0.01) ;
const lihvaZa1Mesec = natrupanaLihva / 12 ;
const sum = deposit + term * lihvaZa1Mesec ;

// console.log(natrupanaLihva);
// console.log(lihvaZa1Mesec);

console.log(sum);
}

depositCalculator(["200", "3", "5.7"]);