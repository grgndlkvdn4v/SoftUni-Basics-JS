function bestPlayer(input) {
    let index = 0;
    let name = input[index++];
    let goals = Number(input[index++]);

    let maxGoals = Number.MIN_SAFE_INTEGER;
    let bestPlayer = "";


    while (name !== "END") {

        if (goals > maxGoals) {
            maxGoals = goals;
            bestPlayer = name;
        }
        
        if (goals >= 10) {
            maxGoals = goals;
            bestPlayer = name;
            break;
        }

        name = input[index++];
        goals = Number(input[index++]);

    }

    console.log(`${bestPlayer} is the best player!`);

    if (maxGoals >= 3)
    console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
    else
    console.log(`He has scored ${maxGoals} goals.`);


}
// bestPlayer(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]);
bestPlayer(["Silva", "5", "Harry Kane", "10", "Kurti", "12"]);
// bestPlayer(["Petrov", "2", "Drogba", "11"]);

// bestPlayer(["END"]);
