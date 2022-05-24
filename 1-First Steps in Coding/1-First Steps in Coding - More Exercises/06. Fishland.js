function fishland(input) {

//        INPUT
    const skumriq = Number(input[0]);
    const caca = Number(input[1]);
    const palamudWeight = Number(input[2]);
    const safridWeight = Number(input[3]);
    const midiWeight = Number(input[4]);
//        PRICE LIST
    const palamudPrice = skumriq + (skumriq * 0.6) ;
    const safridPrice = caca + caca * 0.8;
    const midiPrice = 7.5;
//          COST - solution
    const palamudCost = palamudPrice * palamudWeight;
    const safridCost = safridPrice * safridWeight;
    const midiCost = midiPrice * midiWeight;

    const total = palamudCost + safridCost + midiCost;

console.log(total.toFixed(2));
}

fishland(["6.9", "4.2", "1.5", "2.5", "1"]);