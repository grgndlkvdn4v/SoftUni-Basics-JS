function squareFrame(input) {
    
    const num = Number(input[0]);

    for (let cols = 1; cols <= num; cols++) {
        let printTopBottomLine = "";
        let middle = "";;

        for (let rows = 1; rows <= num - 2; rows++) {
            
            if (rows !== 1 || rows !== num)
            middle += "- "

        }

        if (cols === 1 || cols === num)
            console.log(`+ ${middle}+`);
        else
            console.log(`| ${middle}|`);
    }

}
squareFrame(["4"]);