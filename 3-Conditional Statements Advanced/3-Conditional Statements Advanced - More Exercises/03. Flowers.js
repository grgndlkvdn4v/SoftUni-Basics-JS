function flowers(input) {

    const chrysanthemumsCount = Number(input[0]);
    const rosesCount = Number(input[1]);
    const tulipsCount = Number(input[2]);
    const season = input[3];
    const holidayOrNot =input[4];

    const arranging = 2;

    const totalCount = chrysanthemumsCount + rosesCount + tulipsCount;
    let chrysanthemumsPrice = 0;
    let rosesPrice = 0;
    let tulipsPrice = 0;
    let totalCost = 0;


    switch (season) {
        case "Spring":
        case "Summer":
            chrysanthemumsPrice = 2;
            rosesPrice = 4.10;
            tulipsPrice = 2.50;
        break;
    
        case "Autumn":
        case "Winter":
            chrysanthemumsPrice = 3.75;
            rosesPrice = 4.50;
            tulipsPrice = 4.15;
        break;
    }


    switch (holidayOrNot) {
        case "Y":
            chrysanthemumsPrice += chrysanthemumsPrice * 0.15;
            rosesPrice += rosesPrice * 0.15;
            tulipsPrice += tulipsPrice * 0.15;
        break;
    }

    totalCost = (chrysanthemumsCount * chrysanthemumsPrice) + (rosesCount * rosesPrice) + (tulipsCount * tulipsPrice);

    if (tulipsCount >= 7 && season === "Spring") {
        totalCost -= totalCost * 0.05; }
    if (rosesCount >= 10 && season === "Winter") {
        totalCost -= totalCost * 0.1; }
    if (totalCount > 20) {
        totalCost -= totalCost * 0.2 }

    totalCost = totalCost + arranging;

    console.log(totalCost.toFixed(2));

}

flowers(["2", "4", "8", "Spring", "Y"]);
flowers(["3", "10", "9", "Winter", "N"]);
flowers(["10", "10", "10", "Autumn", "N"]);