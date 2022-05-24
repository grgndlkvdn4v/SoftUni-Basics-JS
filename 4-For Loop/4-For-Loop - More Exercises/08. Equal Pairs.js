function equalPairs(input) {
    
    index = 0;
    const totalPairs = Number(input[index]); //0
    index++;
    let firstNum = Number(input[index]); //1
    index++;
    let secondNum = Number(input[index]); //2
    index++;

    let sum = firstNum + secondNum;
    let diff = 0;
    let maxdiff = 0;

    for (let i = 1; i < totalPairs; i++) {
        
        let currentFirstNum = Number(input[index]); //3
        index++;
        let currentSecondNum = Number(input[index]); //4
        index++;
        let currentSum = currentFirstNum + currentSecondNum;
        
        if (sum != currentSum) {
            diff = Math.abs(sum - currentSum)
        }
        if (diff > maxdiff ) {
            maxdiff = diff;
        }
        sum = currentSum;
        
    }

    if (totalPairs !== 1 && maxdiff !== 0) {
        console.log(`No, maxdiff=${maxdiff}`);
    } else if (totalPairs !== 1 && maxdiff === 0){
        console.log(`Yes, value=${sum}`);
    }else if (totalPairs === 1) {
        console.log(`Yes, value=${sum}`);
    }

}
// equalPairs(["2",   "1", "2",   "2", "2"]);
// equalPairs(["4",   "1", "1",   "3", "1",   "2", "2",   "0", "0"]);
equalPairs(["1",   "2", "2",]);
// equalPairs(["3",   "1", "2",   "0", "3",   "4", "-1"])

