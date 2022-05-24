function barcodeGenerator(input) {
  let index = 0;

  let startNum = Number(input[index++]);
  const endNum = Number(input[index]);

  let printLine = "";

  for (let i = startNum; i <= endNum; i++) {

      let currentNum = i.toString();
      // startNum = startNum.toString();

      const firstCondition = (
          currentNum[0] % 2 != 0 && 
          currentNum[1] % 2 != 0 && 
          currentNum[2] % 2 != 0 && 
          currentNum[3] % 2 != 0 )

      // const secondCondiion = (
      //     currentNum[0] >= startNum[0] &&
      //     currentNum[1] >= startNum[1] &&
      //     currentNum[2] >= startNum[2] &&
      //     currentNum[3] >= startNum[3] )
          
      if (firstCondition) // && secondCondiion)
          printLine += currentNum + " ";

  }

  console.log(printLine);
}
barcodeGenerator(["2345", "6789"]);
// barcodeGenerator(["3256", "6579"]);
// barcodeGenerator(["1365", "5877"]);