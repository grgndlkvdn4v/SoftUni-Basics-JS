function lunchBreak(input) {

    const serialName = input[0];
    const serialDuration = Number(input[1]);
    const breakDuration = Number(input[2]);

    const leisureTime = breakDuration / 4;
    const lunchTime = breakDuration / 8;
    
    const totalBrakeTime = breakDuration - (leisureTime + lunchTime);

    const difference = Math.abs(serialDuration - totalBrakeTime);

    if (totalBrakeTime >= serialDuration) {
        console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(difference)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(difference)} more minutes.`);
    }

}
lunchBreak(["Game of Thrones", "60", "96"]);
lunchBreak(["Teen Wolf", "48", "60"]);
