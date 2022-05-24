function fishingBoat(input) {

    const springRent = 3000;
    const summerAutumnRent = 4200;
    const winterRent = 2600;

    const budget = Number(input[0]);
    const season = input[1];
    const fishermans = Number(input[2]);

    let rent = 0;
    let discount = 0;
    let difference = 0;

    switch (season) {

        case "Summer":
        case "Autumn": rent = summerAutumnRent; break;
        case "Spring": rent = springRent; break;
        case "Winter": rent = winterRent; break;
    }

    if (fishermans <= 6) {
       // discount = 0.1;
       rent = rent - (rent *0.1);
    } else if (fishermans >= 7 && fishermans <= 11) {
        // discount = 0.15;
       rent = rent - (rent *0.15);

    } else {
      //  discount = 0.25;
       rent = rent - (rent *0.25);
    }
    
    if (fishermans % 2 === 0 && season != "Autumn" ) {
        // discount += 0.05;
       rent = rent - (rent *0.05);
        
    }

    // rent -= rent * discount;
    difference = Math.abs(budget - rent);

    if (budget >= rent) {
        console.log(`Yes! You have ${difference.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`);
    }

    
}
fishingBoat(["3000", "Summer", "11"]);
fishingBoat(["3600", "Autumn", "6"]);
fishingBoat(["2000", "Winter", "13"]);
// fishingBoat(["3000", "Spring", "18"]);