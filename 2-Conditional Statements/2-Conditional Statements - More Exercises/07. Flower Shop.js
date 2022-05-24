function flowerShop(input) {
//              PRICES
    const cenaMagnolii = 3.25;
    const cenaZiumbiuli = 4;
    const cenaRozi = 3.5;
    const cenaKaktusi = 8;

//              INPUTS 
    const broiMagnolii = Number(input[0]);
    const broiZiumbiuli = Number(input[1]);
    const broiRozi = Number(input[2]);
    const broiKaktusi = Number(input[3]);

    const cenaNaPodaruka = Number(input[4]);
//              MATH
    const totalMagnolii = cenaMagnolii * broiMagnolii;
    const totalZiumbiuli = cenaZiumbiuli * broiZiumbiuli ;
    const totalRozi = cenaRozi * broiRozi;
    const totalKaktusi = cenaKaktusi * broiKaktusi;

    const total = (totalMagnolii + totalZiumbiuli + totalRozi + totalKaktusi) * 0.95;
    const difference = total - cenaNaPodaruka;

    if (difference >= 0) {
        console.log(`She is left with ${Math.floor(difference)} leva.`);
    } else if (difference < 0) {
        console.log(`She will have to borrow ${Math.ceil(-difference)} leva.`);
    }


    // console.log(`She is left with ${останали} leva.`);
    // console.log(`She will have to borrow ${останали} leva.`);

}

flowerShop(["2", "3", "5", "1", "50"]);
flowerShop(["15", "7", "5", "10", "100"]);