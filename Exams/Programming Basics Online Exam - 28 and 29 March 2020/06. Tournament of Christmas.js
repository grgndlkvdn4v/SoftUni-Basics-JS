function tournamentOfChristmas(input) {
    let index = 0;
    const daysCount = Number(input[index]); //0
    index++;

    let sport = input[index]; //1
    index++;
    let condition = input[index]; //2
    index++;

    let totalMoney = 0;
    let daysWining = 0;
    let printLine = "";


    for (let currentDay = 1; currentDay <= daysCount; currentDay++) {

        let winCounter = 0;
        let loseCounter = 0;
        let currnetDayMoney = 0;

        while (sport !== "Finish") {

            switch (condition) {
// Със спечелването на всяка една игра печелите по 20лв
                case "win":
                    currnetDayMoney += 20;
                    winCounter++;
                    break;

                case "lose":
                    loseCounter++;
                    break;
            }

            sport = input[index++];
            condition = input[index++];
        }

// Трябва да изчислите колко пари сте спечелили на края на деня. Ако имате повече спечелени игри, отколкото загубени – вие сте победители този ден и увеличавате парите от него с 10%.
        if (winCounter > loseCounter) {
            currnetDayMoney += currnetDayMoney * 0.1;
            daysWining++;
        } else {
            daysWining--;
        }

        totalMoney += currnetDayMoney;

        index--;
        sport = input[index++];
        condition = input[index++];

    }

// При приключване на турнира ако през повечето дни сте били победители печелите турнира и увеличавате всичките спечелени пари с 20%.
    if (daysWining > 0) {
        totalMoney += totalMoney * 0.2;
        printLine += `You won the tournament! `;
    } else
    printLine += `You lost the tournament! `;

    printLine += `Total raised money: ${totalMoney.toFixed(2)}`;

    console.log(printLine);

}

// tournamentOfChristmas(["2","volleyball","win","football","lose","basketball","win","Finish","golf","win","tennis","win","badminton","win","Finish"]);

tournamentOfChristmas(["3","darts","lose","handball","lose","judo","win","Finish","snooker","lose","swimming","lose","squash","lose","table tennis","win","Finish","volleyball","win","basketball","win","Finish"]);