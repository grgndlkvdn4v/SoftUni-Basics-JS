function tradeCommissions(input) {

    const sales = Number(input[1]);
    const city = input[0];

    let commissions = 0;
    let finalCost = 0;

    if (sales >= 0 &&  sales <= 500) {
        switch (city) {
            case "Sofia": commissions = 0.05; break;
            case "Varna": commissions = 0.045; break;
            case "Plovdiv": commissions = 0.055; break;
        }
    } else if (sales > 500 &&  sales <= 1000) {
        switch (city) {
            case "Sofia": commissions = 0.07; break;
            case "Varna": commissions = 0.075; break;
            case "Plovdiv": commissions = 0.08; break;
        }
    } else if (sales > 1000 &&  sales <= 10000) {
        switch (city) {
            case "Sofia": commissions = 0.08; break;
            case "Varna": commissions = 0.1; break;
            case "Plovdiv": commissions = 0.12; break;
        }
    } else if (sales > 10000) {
        switch (city) {
            case "Sofia": commissions = 0.12; break;
            case "Varna": commissions = 0.13; break;
            case "Plovdiv": commissions = 0.145; break;
        }
    }

    finalCost = sales * commissions;

    if (sales >= 0 && (city === "Sofia" || city === "Varna" || city === "Plovdiv")) { 
        console.log(finalCost.toFixed(2));
    } else {
    console.log("error");
    }

}

tradeCommissions(["Sofia", "1500"]);
tradeCommissions(["Plovdiv", "499.99"]);