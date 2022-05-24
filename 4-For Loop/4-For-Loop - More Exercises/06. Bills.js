function bills(input) {

    index = 0;
    const months = Number(input[index]);
    index++;

    const water = 20;
    const internet = 15;

    let other = 0;
    let total = 0;
    let average = 0;
    
    const waterTotal = water * months;
    const internetTotal = internet * months;
    let electricityTotal = 0;
    let otherTotal = 0;
    

    for (let i = 1; i <= months; i++) {

        let electricity = Number(input[index]);

        electricityTotal += electricity;

        other = electricity + water + internet;
        other += other * 0.2;
        otherTotal += other;

        total += electricity + water + internet + other;

        index++;
    }

    average = total / months;

    console.log(`Electricity: ${electricityTotal.toFixed(2)} lv`);
    console.log(`Water: ${waterTotal.toFixed(2)} lv`);
    console.log(`Internet: ${internetTotal.toFixed(2)} lv`);
    console.log(`Other: ${otherTotal.toFixed(2)} lv`);
    console.log(`Average: ${average.toFixed(2)} lv`);

//     console.log(`Electricity: 447.16 lv`);
// Water: 100.00 lv
// Internet: 75.00 lv
// Other: 746.59 lv
// Average: 273.75 lv

}
bills(["5", "68.63", "89.25", "132.53", "93.53", "63.22"]);