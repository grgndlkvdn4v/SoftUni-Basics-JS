function truckDriver(input) {

    const season = input[0];
    const kilometersPerMonth = Number(input[1]);
    const monthsPerSeason = 4;
    const tax = 0.1;

    let sumPerKilometer = 0;
    let totalSum = 0;

    if (kilometersPerMonth <= 5000) {
        switch (season) {
            case "Spring":
            case "Autumn": sumPerKilometer = 0.75;  break;
            case "Summer": sumPerKilometer = 0.90;  break;
            case "Winter": sumPerKilometer = 1.05;  break;
        }
    } else if (kilometersPerMonth > 5000 && kilometersPerMonth <= 10000) {
        switch (season) {
            case "Spring":
            case "Autumn": sumPerKilometer = 0.95;  break;
            case "Summer": sumPerKilometer = 1.1;  break;
            case "Winter": sumPerKilometer = 1.25;  break;
        }
    } else if (kilometersPerMonth > 10000 && kilometersPerMonth <= 20000) {
        switch (season) {
            case "Spring":
            case "Autumn":
            case "Summer":
            case "Winter": sumPerKilometer = 1.45;  break;
        }
    }

    totalSum = kilometersPerMonth * sumPerKilometer;
    totalSum -= totalSum * tax; // - 10%
    totalSum *= monthsPerSeason; // 4 seasons
    totalSum = totalSum.toFixed(2);
    
    console.log(totalSum);

}

truckDriver(["Summer", "3455"]);
truckDriver(["Winter", "4350"]);
truckDriver(["Spring", "1600"]);