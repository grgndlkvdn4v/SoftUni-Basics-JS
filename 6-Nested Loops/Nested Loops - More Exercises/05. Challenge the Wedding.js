function challengeTheWedding(input) {
        
    const manCount = Number(input[0]);
    const womenCount = Number(input[1]);
    const tablesLimit = Number(input[2]); 

    let printLine = "";
    let tablesCounter = 0;
    let isLimitExceeded = false


    for (let a = 1; a <= manCount ; a++) {
        let firstNum = a;

        for (let b = 1; b <= womenCount; b++) {
            let secondNum = b;

//========================================================================================

                    tablesCounter++;
                    if (tablesCounter > tablesLimit) {
                        isLimitExceeded = true;
                        break;
                    }
                    printLine += `(${firstNum} <-> ${secondNum}) `;

//========================================================================================

        }
    }

    console.log(printLine);
    
}

challengeTheWedding(["2", "2", "3"]);