function squareOfStars(input) {
    
    const num = Number(input[0]);

    for (let cols = 1; cols <= num; cols++) {

        let printLine = "";

        for (let rows = 1; rows <= num; rows++) {
            printLine += "* ";
        }

        console.log(printLine);
    }
}
squareOfStars(["3"]);