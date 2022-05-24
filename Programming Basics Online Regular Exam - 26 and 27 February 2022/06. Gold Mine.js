function goldMine(input) {
   let index = 0;

   const totalLocations = Number(input[index++]);

   let expectedAverageGold = Number(input[index++]);
   let daysForCurrentLocation = Number(input[index++]);

   for (let currLocation = 1; currLocation <= totalLocations; currLocation++) {
      let averageGold = 0;

      for (let currDayOnLocation = 1; currDayOnLocation <= daysForCurrentLocation; currDayOnLocation++) {

         const currDayGold = Number(input[index++]);
         averageGold += currDayGold;

      }

      averageGold /= daysForCurrentLocation;

      if (averageGold >= expectedAverageGold) {
         console.log(`Good job! Average gold per day: ${averageGold.toFixed(2)}.`);
      } else {
         const difference = expectedAverageGold - averageGold
         console.log(`You need ${difference.toFixed(2)} gold.`);
      }

      expectedAverageGold = Number(input[index++]);
      daysForCurrentLocation = Number(input[index++]);
   }

}
// goldMine(["2", "10", "3", "10", "10", "11", "20", "2", "20", "10"]);
goldMine(["1", "5", "3", "10", "1", "3"]);