function vegetableMarket(input) {

//          INPUTS
    const vegetablesCostPerKilo = Number(input[0]);
    const fruitsCostPerKilo = Number(input[1]);
    const vegetablesWeigth = Number(input[2]);
    const fruitWeight = Number(input[3]);
//          SOLUTIONS
    const vegetablesTotalCost = vegetablesCostPerKilo * vegetablesWeigth;
    const fuitsTotalCost = fruitsCostPerKilo * fruitWeight ;
    const totalCost = vegetablesTotalCost + fuitsTotalCost;
    const totalCostInEuro = totalCost / 1.94;

    console.log(totalCostInEuro.toFixed(2));
}

vegetableMarket(["0.194", "19.4","10","10"]);