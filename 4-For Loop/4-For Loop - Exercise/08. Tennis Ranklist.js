function tennisRanklist(input) {

    index = 0;

    const tournaments = Number(input[index]); //0
    index++;
    const startingPoints = Number(input[index]); //0
    index++;

    const w = 2000;
    const f = 1200;
    const sf = 720;

    let totalPoints = startingPoints;
    let averagePoints = 0;
    let wonTournaments = 0;

    for (let i = 1; i <= tournaments; i++) {
        let ranking = input[index];
        index++;

        switch (ranking) {
            case "W":
             totalPoints += w; 
            wonTournaments++;        
            break;
            case "F": totalPoints += f; break;
            case "SF": totalPoints += sf; break;
        }
        
    }

    totalPoints = Math.floor(totalPoints);

    console.log(`Final points: ${totalPoints}`);
    
    averagePoints = (totalPoints - startingPoints) / tournaments;
    averagePoints = Math.floor(averagePoints);
    console.log(`Average points: ${averagePoints}`);

    wonTournaments = (wonTournaments / tournaments) * 100;
    console.log(`${wonTournaments.toFixed(2)}%`);

}
tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
// tennisRanklist(["4", "750", "SF", "W", "SF", "W"]);