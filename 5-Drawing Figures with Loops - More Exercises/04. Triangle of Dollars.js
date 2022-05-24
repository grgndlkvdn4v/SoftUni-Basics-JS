function triangleOfDollars(input) {
        
    const num = Number(input[0]);
    
    for (let cols = 1; cols <= num; cols++) {
        let printLine = "";


        for (let rows = 1; rows <= cols; rows++) {
            printLine += "$ ";
        }

        console.log(printLine.trim());
    }
}
triangleOfDollars(["4"]);