function grandpaStavri(input) {

    let index = 0;
    const totalDays = Number(input[index++]);

    let totalLiters = 0;
    let degreesPerLiterSum = 0;

    for (let currDay = 1; currDay <= totalDays; currDay++) {

        let litersRakia = Number(input[index++]);
        totalLiters += litersRakia;

        let rakiaGegrees = Number(input[index++]);
        degreesPerLiterSum +=  litersRakia * rakiaGegrees;

    }

    console.log(`Liter: ${totalLiters.toFixed(2)}`);

    let averageDegreesPerLiter = degreesPerLiterSum / totalLiters;
    console.log(`Degrees: ${averageDegreesPerLiter.toFixed(2)}`);

    if (averageDegreesPerLiter < 38)
        console.log("Not good, you should baking!");
    else if (averageDegreesPerLiter >= 38 && averageDegreesPerLiter <= 42)
        console.log("Super!");
    else
        console.log("Dilution with distilled water!");

}
grandpaStavri(["3", "100", "45", "50", "55", "150", "36"]);
grandpaStavri(["2", "200", "43", "200", "40"]);