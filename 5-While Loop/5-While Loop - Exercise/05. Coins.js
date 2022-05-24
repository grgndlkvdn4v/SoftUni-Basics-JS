function coins(input) {
    
    const change = Number(input[0]);
    // let currentChange = parseInt(change * 100);
    let currentChange = parseInt((change * 100).toFixed(0));

    let coinsCounter = 0;

    while (currentChange !== 0) {
        
        if (currentChange >= 200) {
            currentChange -= 200;
        } else if (currentChange >= 100) {
            currentChange -= 100;
        } else if (currentChange >= 50) {
            currentChange -= 50;
        } else if (currentChange >= 20) {
            currentChange -= 20;
        } else if (currentChange >= 10) {
            currentChange -= 10;
        } else if (currentChange >= 5) {
            currentChange -= 5;
        } else if (currentChange >= 2) {
            currentChange -= 2;
        } else if (currentChange >= 1) {
            currentChange -= 1;
        }

        coinsCounter++;
    }

    console.log(coinsCounter);
}

coins (["1.23"]);
// coins (["2"]);
// coins (["0.56"]);
// coins (["2.73"]);
// coins(["8.04"]);