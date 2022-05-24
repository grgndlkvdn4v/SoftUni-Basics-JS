function happyCatParking(input) {

    const daysCount = Number(input[0]);
    const hoursPerDay = Number(input[1]);

    let totalSum = 0;
    let daysCounter = 0;
    
    for (let currentDay = 1; currentDay <= daysCount; currentDay++) {
        
        let dailyCharge = 0;
        
        for (let currentHour = 1; currentHour <= hoursPerDay; currentHour++){
            let currentHourCharge = 0;

// четен ден и нечетен час, паркингът таксува 2.50 лева. 
// Във всеки нечетен ден и четен час таксата е 1.25 лева
// във всички останали случаи се заплаща 1 лев

            if (currentDay % 2 === 0 && currentHour % 2 !== 0) {
                currentHourCharge = 2.50;
                daysCounter++;
            } else if (currentDay % 2 !== 0 && currentHour % 2 === 0) {
                currentHourCharge = 1.25;
                daysCounter++;
            } else {
                currentHourCharge = 1;
                daysCounter++;
            }

            dailyCharge += currentHourCharge;

        }

        console.log(`Day: ${currentDay} - ${dailyCharge.toFixed(2)} leva`);

        totalSum += dailyCharge;
    }

    console.log(`Total: ${totalSum.toFixed(2)} leva  `);

}
happyCatParking(["2", "5"]);