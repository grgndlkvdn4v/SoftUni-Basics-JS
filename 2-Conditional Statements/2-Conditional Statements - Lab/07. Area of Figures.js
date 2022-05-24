function areaOfFigures(input) {

    const figure = input[0];
    const a = Number(input[1]);
    const b = Number(input[2]);
    let result = "" ;

    if (figure === "square") {
        result = a * a;
        console.log( (result).toFixed(3) );
    } else if (figure === "rectangle") {
        result = a * b;
        console.log( (result).toFixed(3) );
    } else if (figure === "circle") {
        result = Math.PI * Math.pow(a, 2);
        console.log( (result).toFixed(3) );
    } else if (figure === "triangle") {
        result = (a * b) / 2;
        console.log( (result).toFixed(3) );
    }

}

// areaOfFigures(["triangle", "4.5", "20"]);
areaOfFigures(["circle", "6", "2.5"]);
// areaOfFigures(["rectangle", "7", "2.5"]);
// areaOfFigures(["square", "7", "2.5"]);
