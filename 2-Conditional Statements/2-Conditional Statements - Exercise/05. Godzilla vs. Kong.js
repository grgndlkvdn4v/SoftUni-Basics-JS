function godzillaVsKong(input) {

    const budget = Number(input[0]);
    const people = Number(input[1]);
    const outfit = Number(input[2]);

    const decor = budget * 0.1;
    let outfitCost = people * outfit;


    if (people > 150) {
        outfitCost *= 0.9
    }

    const total = outfitCost + decor;
    // const difference = Math.abs(budget - total);
    // const difference = budget - total;

    // if (difference < 0) {
    if (budget < total) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${difference.toFixed(2)} leva more.`);
        // console.log(`Wingard needs ${-difference.toFixed(2)} leva more.`);
    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${difference.toFixed(2)} leva left.`);
    }

}
godzillaVsKong(["20000", "120", "55.5"]);
godzillaVsKong(["15437.62", "186", "57.99"]);
godzillaVsKong(["9587.88", "222", "55.68"]);
