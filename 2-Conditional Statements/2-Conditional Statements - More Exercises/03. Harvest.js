function harvest(input) {

//              INPUTS
    const grapesArea = Number(input[0]);
    const grapeKiloPerSqMeter = Number(input[1]); // kolko KG grozde na kv.km
    const wineForSale = Number(input[2]); //in liters
    const workersNumber = Number(input[3]);
    // const oneLiterWine = 2.5; 

//          SOLUTION
    const grapesAreaLeft = grapesArea * 0.4;
    const grapesKilos = grapesAreaLeft * grapeKiloPerSqMeter;
    const grapeKilosProduced = grapesKilos / 2.5;  
    const difference = grapeKilosProduced - wineForSale;
    const winePerWorker = difference / workersNumber; // in Liters!

    if (difference < 0) {
      console.log(
        `It will be a tough winter! More ${Math.floor(-difference)} liters wine needed.`
      );
    } else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(grapeKilosProduced)} liters.`);
        console.log(`${Math.ceil(difference)} liters left -> ${Math.ceil(winePerWorker)} liters per person.`);
    }
    // console.log(grapesAreaLeft);
    // console.log(grapesKilos);
    // console.log(grapeKilosProduced);
    // console.log(difference);
}
// harvest(["650", "2", "175", "3"]);
harvest(["1020", "1.5", "425", "4"]);