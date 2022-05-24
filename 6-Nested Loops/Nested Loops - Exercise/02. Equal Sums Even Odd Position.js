function equalSumsEvenOddPosition(input) {

    const startNum = Number(input[0]);
    const endNum = Number(input[1]);

    let printLine = "";

    for (let currentNum = startNum; currentNum <= endNum ; currentNum++) {

        let oddsSum = 0;
        let evensSum = 0;
        let currentNumToStr = currentNum.toString();
        
        for (let index = 0; index < currentNumToStr.length; index++) {
        let currentsymbol = currentNumToStr[index];

            if (index % 2 == 0)
                evensSum += Number(currentsymbol);
            else 
                oddsSum += Number(currentsymbol);

        }

        if (evensSum === oddsSum)
            printLine += `${currentNum} `;
        
    }

    console.log(printLine);
}

equalSumsEvenOddPosition(["100010", "100050"]);

// equalSumsEvenOddPosition(["100012", "100050"]);
