function lettersCombinations(input) {

    let index = 0;
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let firstLetter = input[0];
    let secondLetter = input[1];
    const forbiddenLetter = input[2];

    let firstIndexCounter = alphabet.indexOf(firstLetter);
    let secondIndexCounter = alphabet.indexOf(firstLetter);
    let thirdIndexCounter = alphabet.indexOf(firstLetter);

    let printLine = "";
    let validCombinationCounter = 0;


    for (let i = alphabet.indexOf(firstLetter); i !== alphabet.indexOf(secondLetter) + 1; i++) { 

        let firstCurrentLetter = alphabet[firstIndexCounter];

        for (let j = alphabet.indexOf(firstLetter); j !== alphabet.indexOf(secondLetter) + 1; j++) {
            let secondCurrentLetter = alphabet[secondIndexCounter];

                for (let k = alphabet.indexOf(firstLetter); k !== alphabet.indexOf(secondLetter) + 1; k++) {
                    let thirdCurrentLetter = alphabet[thirdIndexCounter];

                    if (firstCurrentLetter !== forbiddenLetter && secondCurrentLetter !== forbiddenLetter && thirdCurrentLetter !== forbiddenLetter) {
                        printLine += `${firstCurrentLetter}${secondCurrentLetter}${thirdCurrentLetter} `;
                        validCombinationCounter++
                    }

                    if (thirdCurrentLetter !== secondLetter) {
                        thirdIndexCounter++;
                    }

                }
            
            if (secondCurrentLetter !== secondLetter) {
                secondIndexCounter++;
            }
            thirdIndexCounter = alphabet.indexOf(firstLetter);

        }
        
        if (firstCurrentLetter !== secondLetter) {
            firstIndexCounter++;
        }
        secondIndexCounter = alphabet.indexOf(firstLetter);
    }

    printLine += validCombinationCounter
    console.log(printLine);

}
lettersCombinations(["f", "k", "h"]);