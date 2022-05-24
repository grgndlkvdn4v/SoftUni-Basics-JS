function primeNumbersCheck(input) {

let finalNum = Number(input[0]);

    for (let currentNum = 2; currentNum <= finalNum; currentNum++) {
    let isPrime = true;
    
        for (let j = 2; j < currentNum; j++) {
            
            if ( currentNum % j === 0 ) {
                isPrime = false;
                break;
            }
            
        }

        if (isPrime) {
            console.log(currentNum);
        }

    }
}
primeNumbersCheck(["20"]);