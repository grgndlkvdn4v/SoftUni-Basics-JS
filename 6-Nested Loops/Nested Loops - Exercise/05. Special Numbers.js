function specialNumbers(input) {
    const specialNum = Number(input[0]);

    let printLine = "";

    for (let i = 1111; i <= 9999; i++) {
        i = i.toString();
        let index = 0;
        let trueCounter = 0;

        for (let j = 0; j < i.length; j++) { 
            let currentDigit = Number(i[index]);

            if (specialNum % currentDigit === 0)
                trueCounter++;
                index++;
        }

        if (trueCounter === 4) {
            printLine += `${Number(i)} `;
        }

    }

console.log(printLine);
}

specialNumbers(["3"]);