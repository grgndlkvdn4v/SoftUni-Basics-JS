function trekkingMania(input) {

    index = 0;

    const groupsCount = Number(input[index]); //0
    index++;

    let musalaGroup = 0;
    let montblancGroup = 0;
    let kilimanjaroGroup = 0;
    let K2Group = 0;
    let everestGroup = 0;

    let totalClimbers = 0;

    for (let i = 1; i <= groupsCount; i++) {
        
        let peopleInGroup = Number(input[index]);
        index++;


        if (peopleInGroup <= 5) {
            musalaGroup += peopleInGroup;
        } else if (peopleInGroup >= 6 && peopleInGroup <= 12) {
            montblancGroup += peopleInGroup;
        } else if (peopleInGroup >= 13 && peopleInGroup <= 25) {
            kilimanjaroGroup += peopleInGroup;
        } else if (peopleInGroup >= 26 && peopleInGroup <= 40) {
            K2Group += peopleInGroup;
        } else if (peopleInGroup >= 41) {
            everestGroup += peopleInGroup;
        }

        totalClimbers  += peopleInGroup;

    }

    // totalClimbers = musalaGroup + montblancGroup + kilimanjaroGroup + K2Group + everestGroup;

console.log(`${((musalaGroup / totalClimbers) * 100).toFixed(2)}%`);
// console.log(musalaGroup);

console.log(`${((montblancGroup / totalClimbers) * 100).toFixed(2)}%`);
// console.log(montblancGroup);

console.log(`${((kilimanjaroGroup / totalClimbers) * 100).toFixed(2)}%`);
// console.log(kilimanjaroGroup);

console.log(`${((K2Group / totalClimbers) * 100).toFixed(2)}%`);
// console.log(K2Group);

console.log(`${((everestGroup / totalClimbers) * 100).toFixed(2)}%`);
// console.log(everestGroup);

}
trekkingMania([
  "10",
  "10",
  "5",
  "1",
  "100",
  "12",
  "26",
  "17",
  "37",
  "40",
  "78"
]);

// trekkingMania(["5",
// "25",
// "41",
// "31",
// "250",
// "6"]);
