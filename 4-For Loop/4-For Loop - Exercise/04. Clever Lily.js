function cleverLily(input) {

    const lilyAge = Number(input[0]);
    const washingMachinePrice = Number(input[1]); 
    const priceForToy = Number(input[2]);

    let evenBirthdays = 0; //четните
    let oddBirthdays = 0; 
    let totalMoneyCollected = 0;
    let toysSoldMoney = 0;
    let difference = 0; 

    // Брояч на четните и нечетни рожденни дни
    for (let i = 1; i <= lilyAge; i++) {

        if (i % 2 === 0) {
            evenBirthdays++;
            totalMoneyCollected += (i / 2) * 10; 
            totalMoneyCollected -= 1; //брат и тафи по 1 лев на РД
        } else { //(i % 2 !== 0) {
            oddBirthdays++;
        }
        
    }

    toysSoldMoney = oddBirthdays * priceForToy;
    totalMoneyCollected += toysSoldMoney;
    difference = Math.abs(totalMoneyCollected - washingMachinePrice);


    if (totalMoneyCollected >= washingMachinePrice) {
        console.log(`Yes! ${difference.toFixed(2)}`);
    } else {
        console.log(`No! ${difference.toFixed(2)}`);
    }

}
// cleverLily(["8", "170.00", "6"]);
cleverLily(["10", "170.00", "6"]);
cleverLily(["21", "1570.98", "3"]);