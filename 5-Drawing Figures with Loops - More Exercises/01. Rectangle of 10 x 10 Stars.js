function rectangleOfTenByTenStars(input) {
    //Напишете програма, която чертае на конзолата правоъгълник от 10 x 10 звездички.


    for (let cols = 1; cols <= 10; cols++) {
        let printLine = "";

        for (let rows = 1; rows <= 10; rows++) {
            printLine += "*"
        }

        console.log(printLine);
    }

}
rectangleOfTenByTenStars();