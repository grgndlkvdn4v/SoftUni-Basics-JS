function divisionWithoutRemainder(input) {

    let index = 0;
    const numbersCount = Number(input[index++]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;


    for (let i = 1; i <= numbersCount; i++) {

        let currentNum = Number(input[index++]);

        if (currentNum % 2 === 0)
            p1++;

        if (currentNum % 3 === 0)
            p2++;

        if (currentNum % 4 === 0)
            p3++;

    }

    console.log(`${((p1 / numbersCount) * 100).toFixed(2)}%`);
    console.log(`${((p2 / numbersCount) * 100).toFixed(2)}%`);
    console.log(`${((p3 / numbersCount) * 100).toFixed(2)}%`);

}
// divisionWithoutRemainder(["10","680","2","600","200","800","799","199","46","128","65"]);
divisionWithoutRemainder(["3", "3","6", "9"]);
