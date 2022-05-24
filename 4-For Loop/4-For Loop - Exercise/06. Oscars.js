function oscars(input) {

    let index = 0;

    const nominee = input[index]; //0
    index++;

    const academyPoints = Number(input[index]); //1
    index++;

    const juryCount = Number(input[index]); //2
    index++;

    const pointsForNomination = 1250.5

    let totalPoints = 0;
    let difference = 0;
    let check = false;

    totalPoints = academyPoints;

    for (let i = 1; i <= juryCount; i++) {

        let juryName = input[index];
        let juryNameLength = juryName.length;
        index++;

        let juryPoints = Number(input[index]);
        index++;

        totalPoints += (juryNameLength * juryPoints) / 2;
        
        // console.log(juryNameLength);
        // console.log(juryPoints);
        // console.log(totalPoints);
        // console.log("=======");

        if (totalPoints > pointsForNomination) {
            console.log(`Congratulations, ${nominee} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
            check = true;
            break;
        }

    }

    difference = pointsForNomination - totalPoints;
    if (!check) {
        console.log(`Sorry, ${nominee} you need ${difference.toFixed(1)} more!`);
    }

}
// oscars([
//   "Zahari Baharov",
//   "205",
//   "4",
//   "Johnny Depp",
//   "45",
//   "Will Smith",
//   "29",
//   "Jet Lee",
//   "10",
//   "Matthew Mcconaughey",
//   "39",
// ]);

oscars([
  "Sandra Bullock",
  "340",
  "5",
  "Robert De Niro",
  "50",
  "Julia Roberts",
  "40.5",
  "Daniel Day-Lewis",
  "39.4",
  "Nicolas Cage",
  "29.9",
  "Stoyanka Mutafova",
  "33",
]);