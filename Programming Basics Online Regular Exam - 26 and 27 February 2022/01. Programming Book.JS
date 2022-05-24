function programmingBook(input) {
   
   const pagePrintPrice = Number(input[0]);
   const printCoverPrice = Number(input[1]);
   const paperPrintDiscount = Number(input[2]);
   const designerCost = Number(input[3]);
   const procentHelp = Number(input[4]);

   const pages = 899;
   const covers = 2;
   
   
   const initialPrintCost = (pagePrintPrice * pages) + (printCoverPrice * covers);
   let totalCost = initialPrintCost;
   
   totalCost -= (initialPrintCost * paperPrintDiscount) / 100;

   totalCost += designerCost;

   totalCost -= (totalCost * procentHelp) / 100;

   console.log(`Avtonom should pay ${totalCost.toFixed(2)} BGN.`);

}
programmingBook(["0.01", "1", "10", "20", "20"]);
// programmingBook(["0.05", "1.20", "40", "19.99", "20"]);
// programmingBook(["0.02", "0.50", "18", "21", "50"]);