function fishTank(input) {
//        INPUTS
    const lenght = Number(input[0]);
    const width = Number(input[1]);
    const height = Number(input[2]);
    const percent = Number(input[3]) / 100;
//         Solution
    const dimensions = lenght * width * height;
    const dimensionsTotal = dimensions - (dimensions * percent);
    const waterNeeded = dimensionsTotal / 1000;

//   console.log(`${dimensions} cub. sm`);
    console.log(waterNeeded);
}

fishTank(["105 ", "77 ", "89 ", "18.5 "]);