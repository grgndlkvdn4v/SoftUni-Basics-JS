function rhombusOfStars(input) {

    const n = Number(input[0]);

    
    for (let cols = 1; cols <= n - 1; cols++) {
        
        let printLine = "";
    
    for (let rows = cols; rows <= n ; rows++){
        printLine += " ";
        
        for (let j = 1; j <= rows - 1; j++) {
            printLine += " *";
        }


    }
    console.log(printLine + "*");
    // console.log(printLine);
}
    
}
rhombusOfStars(["4"]);