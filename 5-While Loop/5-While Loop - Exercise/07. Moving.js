function moving(input) {

    let index = 0;
    const w = Number(input[index++]); //0
    const l = Number(input[index++]); //1
    const h = Number(input[index++]); //2
    
    let currentInput = input[index];

    const roomSpace = w * l * h;
    let roomSpaceLeft = roomSpace;
    let isSpaceOver = false;

    while (currentInput !== "Done") {

        let currentBoxes = Number(currentInput);
        roomSpaceLeft -= currentBoxes;

        if (roomSpaceLeft <= 0) {
            isSpaceOver = true;
            console.log(`No more free space! You need ${Math.abs(roomSpaceLeft)} Cubic meters more.`);
            break;
        } if (isSpaceOver)
            break;

        currentInput = input[++index];

    }


    if (!isSpaceOver) {
        console.log(`${roomSpaceLeft} Cubic meters left.`);
    }

}

moving(["10", "10", "2", "20", "20", "20", "20", "122"]);

// moving(["10", "1", "2", "4", "6", "Done"]);