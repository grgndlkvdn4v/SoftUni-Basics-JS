function carNumber(input) {
    
    const startNum = Number(input[0]);
    const endNum = Number(input[1]);

    let printLine ="";


    for (let a = startNum; a <= endNum ; a++) {
        let firstNum = a;

        for (let b = startNum; b <= endNum; b++) {
            let secondNum = b;

            for (let c = startNum; c <= endNum; c++) {
                let thirdNum = c;      

                for (let d = startNum; d <= endNum; d++) {
                    let fourthNum = d

//========================================================================================

//  Първата цифра от номера е по-голяма от последната
//  Сумата от втората и третата цифра трябва да е четно число
//  Ако номерът започва с четна цифра, то той трябва да завършва на нечетна цифра и обратното – ако започва с нечетна,  завършва на четна

                    const firstCondition = (firstNum % 2 === 0 && fourthNum % 2 !== 0) || (firstNum % 2 !== 0 && fourthNum % 2 === 0)
                    const secondCondition = (firstNum > fourthNum);
                    const thirdCondition = (secondNum + thirdNum) % 2 === 0;

                    if (firstCondition && secondCondition && thirdCondition) 
                    printLine += `${firstNum}${secondNum}${thirdNum}${fourthNum} `;

//========================================================================================

                }
            }
        }
    }

    console.log(printLine);
    
}
carNumber (["2", "3"])