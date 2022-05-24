function sumSeconds(input) {

    const firstSeconds = Number(input[0]);
    const secondSeconds = Number(input[1]);
    const thirdSeconds = Number(input[2]);

    const sum = firstSeconds + secondSeconds + thirdSeconds;
    const minutes = Math.trunc(sum / 60); 
    const seconds = sum % 60;

    if (sum >= 60) { 
        if (seconds >= 10) {
            console.log(`${minutes}:${seconds}`);
        } else {
            console.log(`${minutes}:0${seconds}`);
        }
    } else { 
        if (seconds >= 10) {
            console.log(`0:${seconds}`);
        } else {
            console.log(`0:0${seconds}`);
        }
    }

}

sumSeconds(["35", "45", "44"]);