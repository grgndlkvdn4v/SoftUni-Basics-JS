function suppliesForSchool(input)
{
    // Prices
    const penPackPice = 5.80;
    const markerPackPice = 7.20;
    const cleaningDetergentPrice = 1.2;

// INPUTS
const penPackQuantity = Number(input[0]);
const markerPackQuantity = Number(input[1]);
const cleaningDetergentQuantity = Number(input[2]);
const discount = Number(input[3]) / 100;

//solution

const penPacksTotal = Number(input[0]) * penPackPice;
const markerPackTotal = Number(input[1]) * markerPackPice;
const detergentTotal = cleaningDetergentPrice * cleaningDetergentQuantity;

const absolutePrice = penPacksTotal + markerPackTotal + detergentTotal;

const totalPrice = absolutePrice - (absolutePrice * discount);

console.log(totalPrice);
}

suppliesForSchool(["2" , "3", "4" , "25"]);