function passwordGenerator(input) {

    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    const n = Number(input[0]);
    const l = Number(input[1]);
    let printLine = "";


    for (let firstNum = 1; firstNum <= n; firstNum++) {

        for (let secondNum = 1; secondNum <= n; secondNum++) {

            for (let firstLetter = 0; firstLetter < l; firstLetter++) {

                for (let secondLetter = 0; secondLetter < l; secondLetter++) {

                    for (let thirdNum = 1; thirdNum <= n; thirdNum++) {

                        if (thirdNum > Math.max(firstNum, secondNum)) {
                            printLine += `${firstNum}${secondNum}${alphabet[firstLetter]}${alphabet[secondLetter]}${thirdNum} `;
                        }

                    }
                }
            }
        }
    }

    console.log(printLine);

}
passwordGenerator(["2", "4"])