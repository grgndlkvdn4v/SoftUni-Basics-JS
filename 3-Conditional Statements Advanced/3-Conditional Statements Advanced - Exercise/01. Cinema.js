function cinema(input) {
    
    const row = Number(input[2]);
    const col = Number(input[1]);
    const projection = input[0];

    const premiere = 12;
    const normal = 7.5;
    const discount = 5;

    let income = row * col;

    switch (projection) {
        case "Premiere": income *= premiere; break;
        case "Normal": income *= normal; break;
        case "Discount": income *= discount; break;
    }

    console.log(`${income.toFixed(2)} leva`);

}
cinema(["Premiere", "10", "12"]);
// cinema(["Normal", "21", "13"]);
// cinema(["Discount", "12", "30"]);