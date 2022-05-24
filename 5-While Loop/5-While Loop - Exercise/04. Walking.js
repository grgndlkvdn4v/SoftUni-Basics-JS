function walking(input) {
    let index = 0;
    let command = input[index];

    let goal = 10000;
    let totalSteps = 0;

    while(command !== "Going home") {
        let steps = Number(command);
        totalSteps += steps;

        if (totalSteps > goal) {
            break;
        }

        index++;
        command = input[index];
    }


    if (command === "Going home") {
        totalSteps += Number(input[++index]);
    }


    if (totalSteps < goal) {
        console.log(`${goal - totalSteps} more steps to reach goal.`);
    } else {
        console.log("Goal reached! Good job!");
        console.log(`${totalSteps - goal} steps over the goal!`);
    }

}

// walking(["1000", "1500", "2000", "6500"]);

// walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);

// walking(["1500", "300", "2500", "3000", "Going home", "200"]);

walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);