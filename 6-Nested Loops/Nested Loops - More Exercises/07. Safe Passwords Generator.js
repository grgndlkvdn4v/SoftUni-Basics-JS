function safePasswordsGenerator(input) {

    const firstNumLimit = Number(input[0]);
    const secondNumLimit = Number(input[1]);
    const maxGeneratedPasswors = Number(input[2]);
    
    let printLine = "";
    let firstNum = 35;
    let secondNum = 64;
    let firstDigit =  String.fromCharCode(firstNum);
    let secondDigit =  String.fromCharCode(secondNum);
    let passwordsCounter = 0;
    let isMaxReached = false;


    for (let x = 1; x <= firstNumLimit; x++) {
        
        for (let y = 1; y <= secondNumLimit; y++) {
            printLine += `${firstDigit}${secondDigit}${x}${y}${secondDigit}${firstDigit}|`;
            passwordsCounter++;
            if (passwordsCounter >= maxGeneratedPasswors) {
                isMaxReached = true;
                break;
            }
            firstNum++;
            if (firstNum > 55)
                firstNum = 35;
            secondNum++;
            if (secondNum > 96) 
                secondNum = 64;
            firstDigit =  String.fromCharCode(firstNum);
            secondDigit =  String.fromCharCode(secondNum);
        }
    if (isMaxReached)
        break;
    
    }

    console.log(printLine);

}

// safePasswordsGenerator(["2", "3", "10"]);

safePasswordsGenerator(["20", "50", "10"])
