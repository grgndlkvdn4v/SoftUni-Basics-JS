function multiplyTable(input) {
    let index = 0;
    const inputNum = input[index];


    for (let firstNum = 1; firstNum <= Number(inputNum[2]); firstNum++) {

        for (let secondNum = 1; secondNum <= Number(inputNum[1]); secondNum++) {

            for (let thirdNum = 1; thirdNum <= Number(inputNum[0]); thirdNum++) {

            let sum = firstNum * secondNum * thirdNum;

            console.log(`${firstNum} * ${secondNum} * ${thirdNum} = ${sum};`);

            }
        }
    }


}
multiplyTable(["324"]);