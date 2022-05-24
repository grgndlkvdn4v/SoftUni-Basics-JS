function primePairs(input) {
    
    const firstNumStart = Number(input[0]);
    const secondNumStart = Number(input[1]);
    const firstPairDifference = Number(input[2]);
    const secondPairDifference = Number(input[3]);

    for (let firstPair = firstNumStart; firstPair <= firstNumStart + firstPairDifference; firstPair++) {
        let isFirstPairPrime = true;

        for (let i = 2; i < firstPair; i++) {
            if ( firstPair % i === 0 ) {
                isFirstPairPrime = false;
                break;
            }
        }

        if (isFirstPairPrime) {
// ===================================================
            for (let secondPair = secondNumStart; secondPair <= secondNumStart + secondPairDifference; secondPair++) {
                let isSecondPairPrime = true;

                for (let j = 2; j < secondPair; j++) {
                    if ( secondPair % j === 0 ) {
                        isSecondPairPrime = false;
                        break;
                    }
                }

                if (isSecondPairPrime) {
                    console.log(`${firstPair}${secondPair}`);
                }

            }
// ===================================================
        }
    }

}
primePairs(["10", "20", "5", "5"]);