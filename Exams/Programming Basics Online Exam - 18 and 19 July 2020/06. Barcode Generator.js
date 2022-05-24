function barcodeGenerator(input) {
    let index = 0;
    const startNum =input[index++]; // 0
    const endNum = input[index++];   // 1

    let printLine = "";

    for (let i = Number(startNum[0]); i <= Number(endNum[0]); i++) {

        for (let j = Number(startNum[1]); j <= Number(endNum[1]); j++) {

            for (let k = Number(startNum[2]); k <= Number(endNum[2]); k++) {

                for (let m = Number(startNum[3]); m <= Number(endNum[3]); m++) {

                    if (i % 2 !== 0 && j % 2 !== 0 && k % 2 !== 0 && m % 2 !== 0)
                        printLine += `${i}${j}${k}${m} `

                }
            }
        }
    }

    console.log(printLine);

}
barcodeGenerator(["2345", "6789"]);
// barcodeGenerator(["3256", "6579"]);
// barcodeGenerator(["1365", "5877"]);