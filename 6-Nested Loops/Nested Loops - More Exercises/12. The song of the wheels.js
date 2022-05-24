function theSongOfTheWheels(input) {
    
    const ControlNum = Number(input[0]);

    let printLine = "";
    let passwordCounter = 0;
    let password = "";
    let isPassFound = false;


    for (let a = 1; a <= 9 ; a++) {
        for (let b = 1; b <= 9 ; b++) {
            for (let c = 1; c <= 9 ; c++) {
                for (let d = 1; d <= 9 ; d++) {

                    let firstCondition = ( ControlNum === (a * b) + (c * d) );
                    let secondCondition = ( a < b );
                    let thirdCondition = ( c > d );

                    if (firstCondition && secondCondition && thirdCondition) {
                        printLine += `${a}${b}${c}${d} `;
                        passwordCounter++;

                        if (passwordCounter === 4) {
                            isPassFound = true;
                            password = `${a}${b}${c}${d}`;
                        }
                    }

                }
            }
        }
    }

    console.log(printLine);

    if (isPassFound) {
        console.log(`Password: ${password}`);
    } else {
        console.log(`No!`);
    }

}
theSongOfTheWheels(["11"])