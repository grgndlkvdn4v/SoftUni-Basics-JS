function sumOfTwoNumbers(input) {
    
    const firstNum = Number(input[0]);
    const secondNum = Number(input[1]);
    const magicNum = Number(input[2]);

    let combinationsCounter = 0;
    let isCombinationFound = false

    
    for (let i = firstNum; i <= secondNum; i++) {
        
        for (let j = firstNum; j <= secondNum; j++) {
            combinationsCounter++;

            if ((i + j) === magicNum) {
                isCombinationFound = true
                console.log(`Combination N:${combinationsCounter} (${i} + ${j} = ${magicNum})`);
                break;
            }

        }
        
        if (isCombinationFound)
            break;
    }

    if (!isCombinationFound)
        console.log(`${combinationsCounter} combinations - neither equals ${magicNum}`);

}
sumOfTwoNumbers(["1", "10", "5"]);
// sumOfTwoNumbers(["23", "24", "20"]);