function vacation(input) {

    const moneyNeededForExcursion = Number(input[0]);
    const startMoney = Number(input[1]);
    let index = 2;

    let aviableMoney = startMoney;
    let spendCouter = 0;
    let ifSpendFiveDays = false;
    let daysCounter = 0;

    while (aviableMoney < moneyNeededForExcursion) {
        daysCounter++;

        let transactionType = input[index++];
        let transactionMoney = Number(input[index]);

        switch (transactionType) {
            case "spend":
                spendCouter++;
                aviableMoney -= transactionMoney;
                if (aviableMoney < 0) {
                    aviableMoney = 0
                }
            break;

            case "save":
                aviableMoney += transactionMoney;
                spendCouter = 0;
            break;
        }

        if (spendCouter >= 5) {
            console.log("You can't save the money.");
            console.log(daysCounter);
            
            break;
        }

        index++;
    }

    if (aviableMoney >= moneyNeededForExcursion) {
        console.log(`You saved the money for ${daysCounter} days.`);
    }
}

// vacation(["2000", "1000", "spend", "1200", "save", "2000"]);

vacation(["110","60","spend","10","spend","10","spend","10","spend","10","spend","10","spend","10","spend","10"]);

// vacation(["1000","500","spend","100","spend","100","spend","100","spend","100","save","1000","spend","100","spend","100"]);