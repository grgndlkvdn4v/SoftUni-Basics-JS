function numberPyramid(input) {

    const inputNum = Number(input[0]);

    let currentNum = 1;
    let isEqual = false;

    
    for (let row = 1; row <= inputNum; row++) {
        let printLine = "";
        
        for (let columns = 1; columns <= row; columns++) {
            printLine += `${currentNum} `;
            if (currentNum === inputNum) {
                isEqual = true;
                break;
            }
            currentNum++;
        }

        console.log(printLine);
        if (isEqual) 
        break;
    }

}

numberPyramid(["7"]);