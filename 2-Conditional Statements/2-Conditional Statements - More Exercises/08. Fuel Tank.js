function fuelTank(input) {

    const fuel = input[0];
    const liters = Number(input[1]);

    const difference = 25 - liters;

    if (fuel === "Diesel" || fuel === "Gas" || fuel === "Gasoline") {

        if (liters >= 25) {
            console.log(`You have enough ${fuel.toLowerCase()}.`);    
        } else {
            console.log(`Fill your tank with ${fuel.toLowerCase()}!`);
        }

     }  else {
    console.log("Invalid fuel!");
     }

}

fuelTank(["Diesel", "10"]);
fuelTank(["Gasoline", "40"]);
fuelTank(["Gas", "25"]);
fuelTank(["Kerosene", "200"]);