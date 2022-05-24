function touristShop(input) {

    let index = 0;

    const budget = Number(input[index++]);
    let totalSpend = 0;

    let isBudgetEnough = true
    let productsCounter = 0;

    let produtName = input[index++];
    let productCost = Number(input[index++]);

    while (produtName !== "Stop") {

        productsCounter++;
        if (productsCounter % 3 === 0)
            productCost = productCost / 2;
        
        totalSpend += productCost;

        if (totalSpend > budget) {
            console.log("You don't have enough money!");
            isBudgetEnough = false;
            break;
        }

        produtName = input[index++];
        productCost = Number(input[index++]);

    }


    if (isBudgetEnough) {
        console.log(`You bought ${productsCounter} products for ${totalSpend.toFixed(2)} leva.`);
    } else {
        console.log(`You need ${(totalSpend - budget).toFixed(2)} leva!`);
    }

}
touristShop(["153.20","Backpack","25.20","Shoes","54","Sunglasses","30","Stop"]);
// touristShop(["54", "Thermal underwear", "24", "Sunscreen", "45"]);