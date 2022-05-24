function journey(input) {
   
    const budget = Number(input[0]);
    const season = input[1];

    let moneySpent = 0;
    let destination = "";
    let placeOfStay = "";

    switch (season) {
        case "summer": placeOfStay = "Camp"; break;
        case "winter": placeOfStay = "Hotel"; break;
    }


    if (budget <= 100) {
        destination = "Bulgaria";
        switch (season) {
            case "summer": moneySpent = budget * 0.3; break;
            case "winter": moneySpent = budget * 0.7; break;
        }

    } else if (budget > 100 && budget <= 1000) {
        destination = "Balkans";
        switch (season) {
            case "summer": moneySpent = budget * 0.4; break;
            case "winter": moneySpent = budget * 0.8; break;
        }

    } else {
        destination = "Europe";
        placeOfStay = "Hotel"
        moneySpent = budget * 0.9;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${placeOfStay} - ${moneySpent.toFixed(2)}`);
//–
}
journey(["50", "summer"]);
journey(["75", "winter"]);
journey(["312", "summer"]);
journey(["678.53", "winter"]);
journey(["1500", "summer"]);

