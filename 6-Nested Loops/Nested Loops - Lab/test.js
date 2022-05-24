function traveling(input) {
    let index = 0;
    let destination = input[index++]; //0
    let minBudget = Number(input[index++]); //1

    let currentInput = input[index++];
    let totalSum = 0;

    while (currentInput !== "End") {

        let money = Number(currentInput)
        totalSum += money;

        // console.log(`${totalSum} + ${money}`);

        if (totalSum >= minBudget) {
            console.log(`Going to ${destination}!`);
            totalSum = 0;
            // index++;
            destination = input[index++];
            if (destination === "End") {
                break;
            }
            minBudget = Number(input[index++]);
        }

        currentInput = input[index++];
    }

    // console.log(currentInput);

}

traveling(["Greece","1000","200","200","300","100","150","240","Spain","1200","300","500","193","423","End"]);

traveling(["France","2000","300","300","200","400","190","258","360","Portugal","1450","400","400","200","300","300","Egypt","1900","1000","280","300","500","End"]);

// traveling(["Greece", "1000", "200", "200", "300", "100", "150", "240", "End"]);