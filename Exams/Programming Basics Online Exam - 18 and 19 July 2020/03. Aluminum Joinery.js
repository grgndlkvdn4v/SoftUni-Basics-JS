function aluminumJoinery(input) {
    let index = 0;
    const joineryCount = Number(input[index++]);
    const joineryType = input[index++];
    const delivery = input[index++];

    let totalCost = 0;


    if (joineryCount <= 10) {
        console.log("Invalid order");
    } else {

        switch (joineryType) {

            case "90X130":
                totalCost = joineryCount * 110;
                if (joineryCount > 30 && joineryCount <= 60) {
                    totalCost -= totalCost * 0.05;
                } else if (joineryCount > 60 ) {
                    totalCost -= totalCost * 0.08;
                } break;

            case "100X150":
                totalCost = joineryCount * 140;
                if (joineryCount > 40 && joineryCount <= 80) {
                    totalCost -= totalCost * 0.06;
                } else if (joineryCount > 80 ) {
                    totalCost -= totalCost * 0.1;
                } break;

            case "130X180":
                totalCost = joineryCount * 190;
                if (joineryCount > 20 && joineryCount <= 50) {
                    totalCost -= totalCost * 0.07;
                } else if (joineryCount > 50 ) {
                    totalCost -= totalCost * 0.12;
                } break;

            case "200X300":
                totalCost = joineryCount * 250;
                if (joineryCount > 25 && joineryCount <= 50) {
                    totalCost -= totalCost * 0.09;
                } else if (joineryCount > 50 ) {
                    totalCost -= totalCost * 0.14;
                } break;

        }


        switch (delivery) {
            case "With delivery":
                totalCost += 60;
            break;
        }

        if (joineryCount > 99) {
            totalCost -= totalCost * 0.04;
        }

        console.log(`${totalCost.toFixed(2)} BGN`);

    }

}
aluminumJoinery(["40", "90X130", "Without delivery"]);
aluminumJoinery(["105", "100X150", "With delivery"]);
aluminumJoinery(["2", "130X180", "With delivery"]);