function sumOfTwoNumbers(input) {
    let index = 0;
    const firstNum = Number(input[index++]);
    const secondNum = Number(input[index++]);
    const magicNum = Number(input[index]);

    let combinationsCounter = 0;
    let isFoundCombination = false;

    for (let x = firstNum; x <= secondNum; x++) {

        for (let y = firstNum; y <= secondNum; y++) {

            combinationsCounter++;
            let sum = x + y;
            if (sum === magicNum) {
                isFoundCombination = true;
                console.log(`Combination N:${combinationsCounter} (${x} + ${y} = ${magicNum})`);
                break;
            }

        }

        if (isFoundCombination)
            break;
    }
    

    if (isFoundCombination === false) {
        console.log(`${combinationsCounter} combinations - neither equals ${magicNum}`);
    }

}

sumOfTwoNumbers(["1", "10", "5"]);
sumOfTwoNumbers(["23", "24", "20"]);