function onTimeForTheExamTwo(input) {
    
    const startHours = Number(input[0]);
    const startMinutes = Number(input[1]);

    const arrivalHours = Number(input[2]);
    const arrivalMinutes = Number(input[3]);

    let startTotal = startHours * 60 + startMinutes;
    let arrivalTotal = arrivalHours * 60 + arrivalMinutes;
    let difference = Math.abs(startTotal - arrivalTotal);

    let differenceHours = Math.floor(difference / 60);
    let differenceMinutes = difference % 60;

//      FLOATING ZERO ADDING
    if (differenceMinutes => 0 && differenceMinutes < 10) {
        differenceMinutes = `0${differenceMinutes}` ;
    }
    
    if (startTotal >= arrivalTotal && difference <= 30 ) { // ON TIME
        console.log("On time");
        if (difference != 0) {
            console.log(`${difference} minutes before the start`);
        }

    } else if (startTotal >= arrivalTotal && difference > 30) { // EARLY
        console.log("Early");
        if (difference < 60) {
            console.log(`${difference} minutes before the start`);
        } else { //(difference >= 60) {
            console.log(`${differenceHours}:${differenceMinutes} hours before the start`);
        }

    } else if (startTotal < arrivalTotal) { // LATE
        console.log("Late");
        if (difference < 60) {
            console.log(`${difference} minutes after the start`);
        } else { //(difference >= 60) {
            console.log(`${differenceHours}:${differenceMinutes} hours after the start`);
        }
    }
    
// console.log("================");
    
}
// onTimeForTheExamTwo(["9", "30", "9", "50"]);
// onTimeForTheExamTwo(["9", "00", "8", "30"]);
onTimeForTheExamTwo(["16", "00", "16", "00"]);
// onTimeForTheExamTwo(["9", "00", "10", "30"]);
// onTimeForTheExamTwo(["14", "00", "13", "55"]);
// onTimeForTheExamTwo(["11", "30", "8", "12"]);
// onTimeForTheExamTwo(["10", "00", "10", "00"]);
// onTimeForTheExamTwo(["11", "30", "10", "55"]);
// onTimeForTheExamTwo(["11", "30", "12", "29"]);
// onTimeForTheExamTwo(["16", "00", "18", "00"]);
// onTimeForTheExamTwo(["16", "00", "17", "05"]);