function sumPrimeNonPrime(input) {
    // prime
    let index = 0;
    let currentNum = input[index];

    let sumOfPrime = 0;
    let sumOfNonPrime = 0;
    

    while (currentNum !== "stop") {
        
        let isPrime = true;
        currentNum = Number(currentNum);

        if (currentNum < 0) {
            console.log("Number is negative.");
            currentNum = input[++index];
            continue;
        }

        for (let i = 2; i < currentNum; i++) {
            
            if (currentNum % i === 0) 
                isPrime = false;
            
        }

        if (isPrime)
            sumOfPrime += currentNum;
        else 
            sumOfNonPrime += currentNum;


        currentNum = input[++index];
    }

    console.log(`Sum of all prime numbers is: ${sumOfPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumOfNonPrime}`);

}
// sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);

sumPrimeNonPrime(["30","83", "33", "-1", "20", "stop"]);

// sumPrimeNonPrime(["4", "stop"]);
