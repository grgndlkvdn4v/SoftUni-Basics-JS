function bikeRace(input) {

    const juniorBikers = Number(input[0]);
    const seniorBikers = Number(input[1]);
    const trace = input[2];

    let juniorsCost = 0;
    let seniorsCost = 0;
    let totalCost = 0;

    switch (trace) {
        case "trail":
            juniorsCost = 5.50;
            seniorsCost = 7;
        break;

        case "cross-country":
            juniorsCost = 8;
            seniorsCost = 9.50;
            if (juniorBikers + seniorBikers >= 50) {
                juniorsCost -= 8 * 0.25;
                seniorsCost -= 9.5 * 0.25;
            }
        break;

        case "downhill":
            juniorsCost = 12.25;
            seniorsCost = 13.75;
        break;

        case "road":
            juniorsCost = 20;
            seniorsCost = 21.50;
        break;

    }

    totalCost = (juniorBikers * juniorsCost) + (seniorBikers * seniorsCost);

    totalCost -= totalCost * 0.05;
    console.log(totalCost.toFixed(2));

}
bikeRace(["10", "20", "trail"]);
bikeRace(["21", "26", "cross-country"]);
bikeRace(["30", "25", "cross-country"]);
bikeRace(["10", "10", "downhill"]);
bikeRace(["3", "40", "road"]);