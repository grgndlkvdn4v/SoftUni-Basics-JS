function pets(input) {
//          INPUTS
    const daysAway = Number(input[0]);
    const foodLeft = Number(input[1]);                  //оставена храна в килограми 
    const dogFoodPerDay = Number(input[2]);             //храна на ден за кучето в килогра
    const catFoodPerDay = Number(input[3]);             //на ден за котката в килограми
    const turtleFoodPerDay = Number(input[4]) * 0.001;  // храна на ден за костенурката в KILOGRAMI
//          SOLUTION
    const totalFoodPerDay = dogFoodPerDay + catFoodPerDay + turtleFoodPerDay; // нужна храна за 1 ден
    const totalFoodNeeded = totalFoodPerDay * daysAway; // нужната храна по време на отсъствието
    const difference = foodLeft - totalFoodNeeded;      //разлика

    if (difference >= 0) {
        console.log(`${Math.floor(difference)} kilos of food left.`);
    } else  if (difference < 0) {
        console.log(`${Math.ceil(-difference)} more kilos of food are needed.`);
    }

}

pets(["2", "10", "1", "1", "1200"]);
pets(["5", "10", "2.1", "0.8", "321"]);