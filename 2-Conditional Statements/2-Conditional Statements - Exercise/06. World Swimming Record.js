function worldSwimmingRecord(input) {

    const worldRecord = Number(input[0]);
    const distance = Number(input[1]);
    const timePerOneMeter = Number(input[2]);


    //съпротивлението на водата го забавя на всеки 15 м. с 12.5 секунди.

    //const delay = 15 * 12.5; //delay per 1 meter in seconds
    const time = distance * timePerOneMeter;
    const resistance = Math.floor(distance / 15) * 12.5;
    let totalTime = Number((time + resistance).toFixed(2));

    const difference = Math.abs(totalTime - worldRecord);

    if (totalTime < worldRecord) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${difference.toFixed(2)} seconds slower.`);
    }

}
worldSwimmingRecord(["10464", "1500", "20"]);
worldSwimmingRecord(["55555.67", "3017", "5.03"]);