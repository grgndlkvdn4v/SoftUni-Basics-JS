function vacation(input) {

    const budget = Number(input[0]);
    const season = input[1];

    let location = "";
    let placeToStay = "";
    let moneyForStay = 0;

    switch (season) {
        case "Summer": location = "Morocco"; break;
        case "Winter": location = "Alaska"; break;
    }

if (budget <= 1000) {
    placeToStay = "Camp";
    switch (season) {
        case "Summer":
            location = "Alaska";
            moneyForStay = budget * 0.65;
        break;

        case "Winter":
            location = "Morocco";
            moneyForStay = budget * 0.45;
            break;
    }

} else if (budget > 1000 && budget <= 3000) {
    placeToStay = "Hut";
    switch (season) {
        case "Summer":
            location = "Alaska";
            moneyForStay = budget * 0.8;
        break;

        case "Winter":
            location = "Morocco";
            moneyForStay = budget * 0.6;
            break;
    }

} else if (budget > 3000) {
    placeToStay = "Hotel";
    moneyForStay = budget * 0.9;
    switch (season) {
        case "Summer":
            location = "Alaska";
        break;

        case "Winter":
            location = "Morocco";
        break;
    }
}

    console.log(`${location} - ${placeToStay} - ${moneyForStay.toFixed(2)}`);

}
vacation(["800", "Summer"]);
vacation(["799.50", "Winter"]);
vacation(["3460", "Summer"]);