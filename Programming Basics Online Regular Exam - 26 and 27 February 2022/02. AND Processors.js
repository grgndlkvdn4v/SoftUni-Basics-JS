function ANDprocessors(input) {
   
   const processorsNeeded = Number(input[0]);
   const employeesCount = Number(input[1]);
   const workingDays = Number(input[2]);

   const housPerDay = 8;
   const manufactureTimePerProcessor = 3;
   const singleProcessorCost = 110.10;

   const totalWorkingHours = employeesCount * workingDays * housPerDay;

   const processorsManufactord = Math.floor(totalWorkingHours / manufactureTimePerProcessor);

   const difference = Math.abs(processorsNeeded - processorsManufactord) * singleProcessorCost;

      if (processorsManufactord < processorsNeeded) {
      console.log(`Losses: -> ${difference.toFixed(2)} BGN`);
   } else {
      console.log(`Profit: -> ${difference.toFixed(2)} BGN`);
   }

}

ANDprocessors(["500", "8", "20"]);
ANDprocessors(["150", "7", "18"]);