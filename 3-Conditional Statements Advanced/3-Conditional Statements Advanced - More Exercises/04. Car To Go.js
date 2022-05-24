function carToGo(input) {

    const budget = Number(input[0]);
    const season = input[1];

    let carClass = '';
    let carType = '';
    let carCost = 0;


    if (budget <= 100 && season === "Summer") {
        carClass = "Economy class";
        carType = "Cabrio";
        carCost = budget * 0.35;
    } else if (budget <= 100 && season === "Winter"){
        carClass = "Economy class";
        carType = "Jeep";
        carCost = budget * 0.65;
    } else if (budget > 100 && budget <= 500 && season === "Summer") {
        carClass = "Compact class"
        carType = "Cabrio";
        carCost = budget * 0.45;
    } else if (budget > 100 && budget <= 500 && season === "Winter") {
        carClass = "Compact class"
        carType = "Jeep";
        carCost = budget * 0.8;
    } else if (budget > 500) {
        carClass = "Luxury class";
        carType = "Jeep";
        carCost = budget * 0.9;
    }

console.log(carClass);
console.log(`${carType} - ${carCost.toFixed(2)}`);

}

carToGo(["450", "Summer"]);
carToGo(["450", "Winter"]);
carToGo(["1010", "Summer"]);