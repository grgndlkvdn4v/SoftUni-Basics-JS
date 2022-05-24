function basketballEquipment(input) {

//        Annual Tax
    const annualTax = Number(input[0]);
//          Equipment
    const shoes = annualTax - (annualTax * 0.4);
    const jersey = shoes - (shoes * 0.2);
    const ball = jersey / 4;
    const accesoaries = ball / 5;
//      Total Cost
    const total = annualTax + shoes + jersey + ball + accesoaries;

    console.log(total);
}

basketballEquipment(["550"]);