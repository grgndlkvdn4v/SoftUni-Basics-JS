function addBags(input) {
    let index = 0;

    const baggageOverTwentyKilo = Number(input[index++]);
    const baggageWeight = Number(input[index++]);
    const daysLeftToFlight = Number(input[index++]);
    const baggageCount = Number(input[index++]);

    let baggageCost = 0;

    if (baggageWeight < 10) {
        baggageCost = baggageOverTwentyKilo * 0.2;
    } else if (baggageWeight >= 10 && baggageWeight <= 20) {
        baggageCost = baggageOverTwentyKilo * 0.5;
    } else {
        baggageCost = baggageOverTwentyKilo;
    }

    let additionalcost = 0;

    if (daysLeftToFlight > 30) {
        baggageCost += baggageCost * 0.1;
    } else if (daysLeftToFlight >= 7 && daysLeftToFlight <= 30) {
        baggageCost += baggageCost * 0.15;
    } else {
        baggageCost += baggageCost * 0.4;
    }

    let totalPrice = baggageCost * baggageCount;

    console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv.`);

}
addBags(["30", "18", "15", "2"])
