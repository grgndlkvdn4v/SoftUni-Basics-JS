function bonusScore(input) {
    
    const number = Number(input[0]);

    let bonus = 0;
    let result = 0;


    if (number <= 100) {
        bonus = 5;
    } else if (number > 1000) {
        bonus = number * 0.1;
    } else {
        bonus = number * 0.2;
    }

    
    if (number % 2 === 0) {
        bonus += 1
    } else if (number % 5 === 0) {
        bonus += 2;
    }

    result = number + bonus;
    
    console.log(bonus);
    console.log(result);

    // if (number <= 100) {

    //     if (number % 2 === 0) {
    //         bonus = 5 + 1;
    //         result = bonus + number;
    //         console.log(bonus);
    //         console.log(result);
    //     } else if (number % 5 === 0) {
    //         bonus = 5 + 2;
    //         result = bonus + number;
    //         console.log(bonus);
    //         console.log(result);
    //     } else {
    //         bonus = 5;
    //         result = bonus + number;
    //         console.log(bonus);
    //         console.log(result);
    //     }

    // } else if (number <= 1000) {

    //     if (number % 2 === 0) {
    //         bonus = (number * 0.2) + 1;
    //         result = bonus + number;
    //         console.log(bonus);
    //         console.log(result);
    //     } else if (number % 5 === 0) {
    //         bonus = (number * 0.2) + 2;
    //         result = bonus + number;
    //         console.log(bonus);
    //         console.log(result);
    //     } else {
    //             bonus = number * 0.2;
    //             result = bonus + number;
    //             console.log(bonus);
    //             console.log(result);
    //     }

    // } else {

    //     if (number % 2 === 0) {
    //         bonus = (number * 0.1) + 1;
    //         result = bonus + number;
    //         console.log(bonus);
    //         console.log(result);
    //     } else if (number % 5 === 0) {
    //         bonus = (number * 0.1) + 2;
    //         result = bonus + number;
    //         console.log(bonus);
    //         console.log(result);
    //     } else {
    //         bonus = number * 0.1;
    //         result = bonus + number;
    //         console.log(bonus);
    //         console.log(result);
    //     }

    // }


}

// bonusScore(["20"]);
// bonusScore(["25"]);
// bonusScore(["175"]);
// bonusScore(["174"]);
// bonusScore(["2703"]);
bonusScore(["17"]);
// bonusScore(["15875"]);