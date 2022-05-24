function smallShop(input) {
  //          INPUT
  const product = input[0];
  const city = input[1];
  const quantity = Number(input[2]);
  //          SOFIA
    const SofiaCoffee = 0.5;
    const SofiaWater = 0.8;
    const SofiaBeer = 1.2;
    const SofiaSweets = 1.45;
    const SofiaPeanuts = 1.6;
    //          PLOVDIV
    const PlovdivCoffee = 0.4;
    const PlovdivWater = 0.7;
    const PlovdivBeer = 1.15;
    const PlovdivSweets = 1.30;
    const PlovdivPeanuts = 1.50;
    //          VARNA
    const VarnaCoffee = 0.45;
    const VarnaWater = 0.7;
    const VarnaBeer = 1.1;
    const VarnaSweets = 1.35;
    const VarnaPeanuts = 1.55;


    if (city === "Sofia") {
        switch (product) {
            case "coffee": console.log(); break;
            case "water": console.log(); break;
            case "beer": console.log(); break;
            case "sweets": console.log(); break;
            case "peanuts": console.log(); break;
        }
    } else if (city === "Plovdiv") {
        
    } else if (city === "Varna") {
        
    } else (???????) {

    }


}

smallShop(["coffee", "Varna", "2"]);
// smallShop(["peanuts", "Plovdiv", "1"]);
// smallShop(["water", "Plovdiv", "3"]);
