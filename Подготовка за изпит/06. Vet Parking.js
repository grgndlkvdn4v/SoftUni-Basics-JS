function vetParking(input) {
    let index = 0;
    const daysCount = Number(input[index++]);
    const hoursPerDay = Number(input[index]);

    let totalSum = 0;

    for (let currDay = 1; currDay <= daysCount; currDay++) {
        let dailySum = 0

        for (let currHour = 1; currHour <= hoursPerDay; currHour++) {

            if (currDay % 2 === 0 && currHour % 2 !== 0) {
                dailySum += 2.50;
            } else if (currDay % 2 !== 0 && currHour % 2 === 0) {
                dailySum += 1.25;
            } else 
                dailySum += 1;
            
        }

        console.log(`Day: ${currDay} - ${dailySum.toFixed(2)} leva`);
        totalSum += dailySum;
    }

    console.log(`Total: ${totalSum.toFixed(2)} leva`);
}
vetParking(["2", "5"]);
// vetParking(["5", "2"]);