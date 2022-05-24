function housePainting(input) {
  //          INPUTS
  const x = Number(input[0]);
  const y = Number(input[1]);
  const h = Number(input[2]);
  const window = Math.pow(1.5, 2);
  const door = 1.2 * 2;

  //
  const frontAndBackWalls = 2 * (Math.pow(x, 2)) - door;
  const sideWalls = 2 * ( (x * y) - window);
  const wallsTotal = frontAndBackWalls + sideWalls;
  const greenPaint = wallsTotal / 3.4;

  const roofTriangles = 2 * ((x * h) / 2);
  const roofRectangle = 2 * (x * y);
  const roofTotal = roofTriangles + roofRectangle;
  const redPaint = roofTotal / 4.3;

  const total = wallsTotal + roofTotal;

    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));
}

housePainting(["6", "10", "5.2"]);
