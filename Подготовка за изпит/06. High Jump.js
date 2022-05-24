function highJump(input) {
    let index = 0;
    const targetHigh = Number(input[index++]);

    let isJumpSuccees = false;

    let currentAttempt = Number(input[index++]);
    let jumpsCounter = 0;

    for (let currentHigh = targetHigh - 30; currentHigh <= targetHigh; currentHigh += 5) {

        isJumpSuccees = false;

        for (let attempts = 1; attempts <= 3; attempts++) {
            jumpsCounter++;

            if (currentAttempt > currentHigh) {
                isJumpSuccees = true;
                break;
            }

            currentAttempt = Number(input[index++]);
        }


        if (!isJumpSuccees) {
            console.log(`Tihomir failed at ${currentHigh}cm after ${jumpsCounter} jumps.`);
            break;
        }

        currentAttempt = Number(input[index++]);
    }

    if (isJumpSuccees) {
        console.log(`Tihomir succeeded, he jumped over ${targetHigh}cm after ${jumpsCounter} jumps.`);
    }

}
highJump(["231", "205", "212", "213", "228", "229", "230", "235"]);

highJump(["250", "225", "224", "225", "228", "231", "235",  "234", "235"]);

// highJump(["231", "220", "230", "200", "200", "200", "200"]);