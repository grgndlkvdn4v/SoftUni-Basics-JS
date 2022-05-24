function puppyCare(input) {
   let index = 0;

   const foodBought = Number(input[index++]); // 0

   let foodLeft = foodBought * 1000;
   let isFoodOver = false;

   let foodPerDay = input[index++]; // 1

   while (foodPerDay !== "Adopted") {

      foodPerDay = Number(foodPerDay);
      foodLeft -= foodPerDay;

      if (foodLeft < 0)
         isFoodOver = true;

      foodPerDay = input[index++];
   }


   if (isFoodOver)
      console.log(`Food is not enough. You need ${-foodLeft} grams more.`);
   else
      console.log(`Food is enough! Leftovers: ${foodLeft} grams.`);

}
// careOfPuppy(["4", "130", "345", "400", "180", "230", "120", "Adopted"]);

careOfPuppy(["3", "1000", "1000", "1000", "Adopted"]);

// careOfPuppy(["2", "999", "456", "999", "999", "123", "456", "Adopted"]);