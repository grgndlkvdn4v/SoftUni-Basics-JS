function energyBooster(input) {
    const flavor = input[0];
    const size = input[1];
    const setsOrdered = Number(input[2]);

    let cost = 0;

    switch (flavor) {

        case "Watermelon":

            switch (size) {
                case "small":
                    cost = 2 * 56;
                    break;

                case "big":
                    cost = 5 * 28.70;
                    break;
            }
            break;
    
        case "Mango":

            switch (size) {
                case "small":
                    cost = 2 * 36.66;
                    break;

                case "big":
                    cost = 5 * 19.60;
                    break;
            }
            break;
    
        case "Pineapple":

            switch (size) {
                case "small":
                    cost = 2 * 42.10;
                    break;

                case "big":
                    cost = 5 * 24.80;
                    break;
            }
            break;
    
        case "Raspberry":

            switch (size) {
                case "small":
                    cost = 2 * 20;
                    break;

                case "big":
                    cost = 5 * 15.20;
                    break;
            }
            break;

    }


    cost = cost * setsOrdered;

    if (cost >= 400 && cost <= 1000) {
        cost -= cost * 0.15;
    } else if (cost > 1000) {
        cost -= cost * 0.5;
    }

console.log(`${cost.toFixed(2)} lv.`);
}
energyBooster(["Watermelon", "big", "4"]);
// energyBooster(["Pineapple", "small", "1"]);
// energyBooster(["Raspberry", "small", "50"]);