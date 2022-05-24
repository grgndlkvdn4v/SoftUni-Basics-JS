function maxNumber(input) {
    
    let index = 0;
    let inputValue = input[index++];

    let maxNum = -Infinity;
    // maxNum = Number.MIN_SAFE_INTEGER;
    
    while (inputValue !== "Stop") {
        let num = Number(inputValue);

        if (num > maxNum) {
            maxNum = num;
        }

        inputValue = input[index++];

    }

    console.log(maxNum);

}
maxNumber(["100", "99", "80", "70", "Stop"]);