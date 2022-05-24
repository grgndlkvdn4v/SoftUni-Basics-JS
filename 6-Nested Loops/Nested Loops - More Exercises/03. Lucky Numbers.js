function luckyNumbers(input) {

    const inputNum = Number(input[0]);

    let printLine ="";


    for (let a = 1; a <= 9 ; a++) {
        let firstNum = a;

        for (let b = 1; b <= 9; b++) {
            let secondNum = b;

            for (let c = 1; c <= 9; c++) {
                let thirdNum = c;      

                for (let d = 1; d <= 9; d++) {
                    let fourthNum = d

//========================================================================================
                    const firstCondition = firstNum + secondNum === thirdNum + fourthNum;
                    const secondCondition = inputNum % (firstNum + secondNum) === 0 ;
                    const thirdCondition = firstNum + secondNum != 1;

                    if (firstCondition && secondCondition && thirdCondition) 
                    printLine += `${firstNum}${secondNum}${thirdNum}${fourthNum} `;
//========================================================================================

                }
            }
        }
    }

    console.log(printLine);

}

luckyNumbers(["3"]);