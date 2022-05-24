function SequenceTwoKplusOne(input) {
    let index = 0;
    const inputNumber = Number(input[index]); //0

    let sum = 1;
    
    while (sum <= inputNumber) {
        console.log(sum);
        sum = (2 * sum) + 1
    }

}
SequenceTwoKplusOne(["31"])