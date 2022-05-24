function logistics(input) {
    
    index = 0;

    const transportsCount = Number(input[index]); //0
    index++;

    let bus = 0;
    let busCost = 200;

    let truck = 0;
    let truckCost = 175;

    let train = 0;
    let trainCost = 120;

    let totalCost = 0;
    let totalWeight = 0;


    for (let i = 1; i <= transportsCount; i++) {
        
        let currentTransport = Number(input[index]);
        
        if (currentTransport <= 3) {
            bus += currentTransport;
            totalCost += currentTransport * busCost;
        } else if (currentTransport >= 4 && currentTransport <= 11) {
            truck += currentTransport;
            totalCost += currentTransport * truckCost;
        } else {
            train += currentTransport;
            totalCost += currentTransport * trainCost;
        }

        totalWeight += currentTransport;
        index++;

    }

    console.log((totalCost / totalWeight).toFixed(2));
    console.log(`${(bus / totalWeight * 100).toFixed(2)}%`);
    console.log(`${(truck / totalWeight * 100).toFixed(2)}%`);
    console.log(`${(train / totalWeight * 100).toFixed(2)}%`);

}
logistics(["4", "1", "5", "16", "3"]);
// logistics(["3", "1", "5", "12"]);
