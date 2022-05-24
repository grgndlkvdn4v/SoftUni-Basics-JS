function sumNumbers(input) {
    let index = 0;
    const num = Number(input[index++]); //0

    let currentNum = Number(input[index++]); //1
    let sum = 0;

    while (sum < num) {
        sum += currentNum;
        currentNum = Number(input[index++]);
    }
    console.log(sum);
}
sumNumbers(["100", "10", "20", "30", "40"]);
// sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);