function giftsFromSanta(input) {
   let index = 0;

   const startNum = Number(input[index++]);
   const endNum = Number(input[index++]);
   const forbiddenNum = Number(input[index++]);

   let printLine = "";

   for (let currNum = endNum; currNum >= startNum; currNum--) {

      const conditionOne = currNum !== forbiddenNum;
      const conditionTwo = currNum % 2 === 0;
      const conditionThree = currNum % 3 === 0;


      if (conditionTwo && conditionThree) {

         if (currNum === forbiddenNum) {
            break;
         } else if (conditionOne) {
            printLine += currNum + " ";
         }

      }
   }

   console.log(printLine);
}
giftsFromSanta(["1", "30", "15"]);
giftsFromSanta(["1", "36", "12"]);
// giftsFromSanta(["20", "1000", "36"]);