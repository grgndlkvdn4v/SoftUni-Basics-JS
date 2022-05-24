function shopping(input) {
//          INPUTS

    const budget = Number(input[0]);
    const videocardPieces = Number(input[1]);
    const processorPieces = Number(input[2]);
    const RAMpieces = Number(input[3]);

    const videocard = 250;
    const videocardCosts = videocard * videocardPieces;

    const processor = videocardCosts * 0.35;
    const RAM = videocardCosts * 0.1;

    const processorCosts = processor * processorPieces;
    const RAMcosts = RAM * RAMpieces;

    let total = processorCosts + videocardCosts + RAMcosts;
     if (videocardPieces > processorPieces) {
         total -= total * 0.15;
     }

    // let difference = Math.abs(budget - total);
    // difference = difference.toFixed(2);
    let difference = budget - total;


    if (difference >= 0) {
        console.log(`You have ${difference.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(-difference).toFixed(2)} leva more!`);
    }
    
}

shopping(["900", "2", "1", "3"]);
shopping(["920.45", "3", "1", "1"]);
