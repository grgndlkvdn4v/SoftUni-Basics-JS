function catWalking(input) {

    const minsWalkingPerDay = Number(input[0]);
    const walkingsCountPerDay = Number(input[1]);
    const caloriesForTheDay = Number(input[2]);

    const caloriesBurnedPerWalk = minsWalkingPerDay * 5;
    const totalCaloriesBurned = caloriesBurnedPerWalk * walkingsCountPerDay;


    if (totalCaloriesBurned < caloriesForTheDay / 2) {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalCaloriesBurned}.`);
    } else {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalCaloriesBurned}.`);
    }

}
catWalking(["30", "3", "600"]);
catWalking(["15", "2", "500"]);
catWalking(["40", "2", "300"]);