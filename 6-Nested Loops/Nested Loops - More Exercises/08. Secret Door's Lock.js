function secretDoorsLock(input) {
        
    const firstNumLimit = Number(input[0]);
    const secondNumLimit = Number(input[1]);
    const thirdNumLimit = Number(input[2]);

    
    for (let firstNum = 1; firstNum <= firstNumLimit; firstNum++) {
        
        for (let secondNum = 1; secondNum <= secondNumLimit; secondNum++) {
            
            for (let thirdNum = 1; thirdNum <= thirdNumLimit; thirdNum++) {

                const conditionOne = (firstNum % 2 === 0 && thirdNum % 2 === 0);
                const conditionTwo = (secondNum === 2 || secondNum === 3 || secondNum === 5 || secondNum === 7);

                if (conditionOne && conditionTwo)
                    console.log(firstNum, secondNum, thirdNum);

            }
        }
    }

}
secretDoorsLock(["3", "5", "5"])