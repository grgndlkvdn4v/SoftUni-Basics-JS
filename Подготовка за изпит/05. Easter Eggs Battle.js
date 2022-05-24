function easterEggsBattle(input) {

    let index = 0;

    const eggsCountFirstPlayer = Number(input[index++]);
    let eggsTotalFirst = eggsCountFirstPlayer;

    const eggsCountSecondPlayer = Number(input[index++]);
    let eggsTotalSecond = eggsCountSecondPlayer;

    let command = input[index++];

    while (command !== "End of battle") {
    
        switch (command) {
            case "one": eggsTotalSecond--; break;
            case "two": eggsTotalFirst--; break;
        }

        if (eggsTotalFirst <= 0) {
            console.log(`Player one is out of eggs. Player two has ${eggsTotalSecond} eggs left.`);
            break;
        } else if (eggsTotalSecond <= 0) {
            console.log(`Player two is out of eggs. Player one has ${eggsTotalFirst} eggs left.`);
            break;
        }

        command = input[index++];

    }


    if (command === "End of battle") {
        console.log(`Player one has ${eggsTotalFirst} eggs left.`);
        console.log(`Player two has ${eggsTotalSecond} eggs left.`);
    }

}
easterEggsBattle(["5", "4", "one", "two", "one", "two", "two", "End of battle"]);

easterEggsBattle(["2", "6", "one", "two", "two"]);

easterEggsBattle(["6", "3", "one", "two", "two", "one", "one"]);