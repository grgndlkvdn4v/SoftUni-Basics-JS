function cake(input) {

    let index = 0;
    const w = Number(input[index++]); //0 index -> 1
    const h = Number(input[index++]); //2 index -> 2
    let totalPieces = w * h;

    let isOver = false;

    let currentInput = input[index];

    while(currentInput !== "STOP") {
        let currentPieces = Number(currentInput);
        totalPieces -= currentPieces;

        if (totalPieces <= 0 ) {
            isOver = true;
            console.log(`No more cake left! You need ${Math.abs(totalPieces)} pieces more.`);
            break;
        }
        if (isOver) {
            break;
        }
        currentInput = input[++index];
    }


    if (!isOver) { // isOver === false
        console.log(`${totalPieces} pieces are left.`);
    }

}

// cake(["10", "10", "20", "20", "20", "20", "20"]);

// cake(["10", "2", "2", "4", "6", "STOP"]);

// cake(["10", "10", "80", "21"]);
