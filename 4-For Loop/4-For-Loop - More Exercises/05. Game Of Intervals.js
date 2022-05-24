function gameOfIntervals(input) {
    
    index = 0;
    const turnsCount = Number(input[index]); //
    index++;

    let zeroToNine = 0;
    let tenToNineteen = 0;
    let twentyToTwentynine = 0;
    let thirtyToThirtyninine = 0;
    let fourtyToFifty = 0;
    let invalidNumber = 0;

    let result = 0;

    for (let i = 1; i <= turnsCount; i++) {

        let currentNumber = Number(input[index]);

        if (currentNumber >= 0 && currentNumber <= 9) {
            result += currentNumber * 0.2;
            zeroToNine++;
        } else if (currentNumber >= 10 && currentNumber <= 19) {
            result += currentNumber * 0.3;
            tenToNineteen++;
        } else if (currentNumber >= 20 && currentNumber <= 29) {
            result += currentNumber * 0.4;
            twentyToTwentynine++;
        } else if (currentNumber >= 30 && currentNumber <= 39) {
            result += 50;
            thirtyToThirtyninine++;
        } else if (currentNumber >= 40 && currentNumber <= 50) {
            result += 100;
            fourtyToFifty++;
        } else {
            result = result / 2;
            invalidNumber++;
        }
        
        index++;
    }

    const zeroToNinePercent = zeroToNine / turnsCount * 100;
    const tenToNineteenPercent = tenToNineteen / turnsCount * 100;
    const twentyToTwentyninePercent = twentyToTwentynine / turnsCount * 100;
    const thirtyToThirtynininePercent = thirtyToThirtyninine / turnsCount * 100;
    const fourtyToFiftyPercent = fourtyToFifty / turnsCount * 100;
    const invalidNumberPercent = invalidNumber / turnsCount * 100;

    console.log(result.toFixed(2));
    console.log(`From 0 to 9: ${zeroToNinePercent.toFixed(2)}%`);
    console.log(`From 10 to 19: ${tenToNineteenPercent.toFixed(2)}%`);
    console.log(`From 20 to 29: ${twentyToTwentyninePercent.toFixed(2)}%`);
    console.log(`From 30 to 39: ${thirtyToThirtynininePercent.toFixed(2)}%`);
    console.log(`From 40 to 50: ${fourtyToFiftyPercent.toFixed(2)}%`);
    console.log(`Invalid numbers: ${invalidNumberPercent.toFixed(2)}%`);

}
gameOfIntervals(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"]);
// gameOfIntervals(["6", "5", "15", "25", "35", "45", "-3"]);