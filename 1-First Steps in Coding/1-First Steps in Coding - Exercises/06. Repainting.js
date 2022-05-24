function Repainting(input) {
//    PRICE LIST
  const nylonPerSqrtMeter = 1.5;
  const paintPerLiter = 14.5;
  const thinnerPerLiter = 5;
  const bag = 0.4;
//    INPUTS
  const nylonNeeded = Number(input[0]);
  const paintNeeded = Number(input[1]);
  const thinnerNeeded = Number(input[2]);
  const workingHours = Number(input[3]);
//    COST
  const nylonPrice = (nylonNeeded + 2) * nylonPerSqrtMeter;
  const paintPrice = paintPerLiter * (paintNeeded + paintNeeded * 0.1);
  const thinnerPrice = thinnerNeeded * thinnerPerLiter;
  const workersPrice = (nylonPrice + paintPrice + thinnerPrice + bag) * 0.3 * workingHours;
//    TOTAL
  const total = bag + nylonPrice + paintPrice + thinnerPrice + workersPrice;

  console.log(total);
}

Repainting(["5 ", "10 ", "10 ", "1 "]);