function backToThePast(input) {
    index = 0;
    
    const inheritedMoney = Number(input[index]); //0
    index++;

    const deathYear = Number(input[index]); //1
    index++;

    const turnedBackAge = 1800;
    let age = 18;
    let currentYear = turnedBackAge;
    let moneyToSpent = 0;
    let difference = 0;

    for (let i = 0; i <= deathYear - turnedBackAge ; i++) {
        
        if (currentYear % 2 === 0) {
            moneyToSpent += 12000;
        } else {
            moneyToSpent += 12000 + (50 * age);
        }

        age++;
        currentYear++;
        
    }


    difference = Math.abs(inheritedMoney - moneyToSpent);

    if (moneyToSpent <= inheritedMoney) {
    console.log(`Yes! He will live a carefree life and will have ${difference.toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${difference.toFixed(2)} dollars to survive.`);
    }

}
backToThePast(["50000", "1802"]);
backToThePast(["100000.15", "1808"]);