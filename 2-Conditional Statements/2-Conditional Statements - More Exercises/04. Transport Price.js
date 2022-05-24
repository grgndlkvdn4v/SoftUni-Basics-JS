function transportPrice(input) {

    const n = Number(input[0]);
    const dayOrNight = input[1];
    
    const taxiDayFare = (n * 0.79) + 0.70;
    const taxiNightFare = (n * 0.9) + 0.70;
    const busFare = n * 0.09;
    const trainFare = n * 0.06;

    if (n < 20) {
        
        if (dayOrNight === "day") {
            console.log(taxiDayFare.toFixed(2));
        } else if (dayOrNight === "night") {
            console.log(taxiNightFare.toFixed(2));
        }

    } 
    
    else if (n > 20, n < 100) {
        console.log(busFare.toFixed(2));
    }

    else if (n >= 100) {
        console.log(trainFare.toFixed(2));
    }

}

transportPrice(["5", "day"]);
transportPrice(["7", "night"]);
transportPrice(["25", "day"]);
transportPrice(["180", "night"]);