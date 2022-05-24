function fuelTank(input) {

    const fuelType = input[0];
    const fuelQuantity = Number(input[1]);
    const clubCard = input[2];

    let gasoline = 2.22;
    let diesel = 2.33;
    let gas = 0.93;

    let gasolineCost = ""; 
    let dieselCost = "";
    let gasCost = "";

    if (clubCard === "Yes") {
        gasoline = gasoline - 0.18;
        diesel = diesel - 0.12;
        gas = gas - 0.08;
    }

    if (fuelQuantity >= 20 && fuelQuantity <= 25) {
        gasoline -= gasoline * 0.08;
        diesel -= diesel * 0.08;
        gas -= diesel * 0.08;
    } else if (fuelQuantity > 25) {
        gasoline -= gasoline * 0.1;
        diesel -= diesel * 0.1;
        gas -= gas * 0.1;
    }

    if (fuelType === "Gasoline" ) {
        gasolineCost = (fuelQuantity * gasoline).toFixed(2);
        console.log(`${gasolineCost} lv.`);
    } else if (fuelType === "Diesel" ) {
        dieselCost = (fuelQuantity * diesel).toFixed(2);
        console.log(`${dieselCost} lv.`);
    } else if (fuelType === "Gas" ) {
        gasCost = (fuelQuantity * gas).toFixed(2);
        console.log(`${gasCost} lv.`);
    }

}

fuelTank(["Gas", "30", "Yes"]);
fuelTank(["Gasoline", "25", "No"]);
fuelTank(["Diesel", "19", "No"]);