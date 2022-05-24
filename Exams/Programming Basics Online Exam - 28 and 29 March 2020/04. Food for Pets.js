function foodForPets(input) {
    let index = 0;
    const daysCount = Number(input[index++]);
    const totalFood = Number(input[index++]);

    let dogTotal = 0;
    let catTotal = 0;
    let consumedFood = 0;
    let totalEatenBiscuits = 0;

    for (let currentDay = 1; currentDay <= daysCount; currentDay++) {

        let dogFoodEaten = Number(input[index++]);
        dogTotal += dogFoodEaten;

        let catFoodEaten = Number(input[index++]);
        catTotal += catFoodEaten

        consumedFood += dogFoodEaten + catFoodEaten;

        if (currentDay % 3 === 0 ) {
            let biscuits = (dogFoodEaten + catFoodEaten) * 0.1;
            totalEatenBiscuits += biscuits;
        }

    }

    console.log(`Total eaten biscuits: ${Math.round(totalEatenBiscuits)}gr.`);

    let percentFoodEaten = (consumedFood / totalFood) * 100
    console.log(`${percentFoodEaten.toFixed(2)}% of the food has been eaten.`);

    let percentDogEaten = (dogTotal / consumedFood) * 100;
    console.log(`${percentDogEaten.toFixed(2)}% eaten from the dog.`);

    let percentCatEaten = 100 - percentDogEaten;
    console.log(`${percentCatEaten.toFixed(2)}% eaten from the cat.`);

}

// foodForPets(["3", "1000", "300", "20", "100", "30", "110", "40"]);

foodForPets(["3", "500", "100", "30", "110", "25", "120", "35"]);