function uniquePINCodes(input) {

    const firstNumLimit = Number(input[0]);
    const secondNumLimit = Number(input[1]);
    const thirdNumLimit = Number(input[2]);


    for (let i = 1; i <= firstNumLimit; i++) {
        
        for (let j = 2; j <= secondNumLimit; j++) {

            for (let k = 1; k <= thirdNumLimit; k++) {

                if (i % 2 === 0 && k % 2 === 0) {
                
                    let isPrime = true;

                    for (let check = 2; check < j; check++) {
                        if (j % check ===0) {
                            isPrime = false;
                            break;
                        }
                    }

                    if (isPrime) {
                        console.log(`${i} ${j} ${k}`);
                    }

                }
            }

            
        }

    }


}
uniquePINCodes(["8", "2", "9"])