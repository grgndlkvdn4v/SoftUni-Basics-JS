function onTimeForTheExam(input) {
    
    const startTimeHours = Number(input[0]);
    const startTimeMinutes = Number(input[1]);

    const arrivalTimeHours = Number(input[2]);
    const arrivalTimeMinutes = Number(input[3]);

    let hoursDifference = 0;
    let minutesDifference = 0;

//          Doing the math for LATE

    if (arrivalTimeHours > startTimeHours  || (arrivalTimeHours === startTimeHours && arrivalTimeMinutes > startTimeMinutes)) {

        hoursDifference = arrivalTimeHours - startTimeHours;
        if (arrivalTimeMinutes > startTimeMinutes) {
            minutesDifference = arrivalTimeMinutes - startTimeMinutes;
        } else if (arrivalTimeMinutes < startTimeMinutes) {
            minutesDifference = 60 - (startTimeMinutes - arrivalTimeMinutes);
            hoursDifference--;
        }

    }

//         Doing the math for EARLY
    if (arrivalTimeHours < startTimeHours  || (arrivalTimeHours === startTimeHours && arrivalTimeMinutes < startTimeMinutes)) {
        
        hoursDifference = arrivalTimeHours - startTimeHours;
        if (startTimeMinutes > arrivalTimeMinutes) {
            minutesDifference = arrivalTimeMinutes - startTimeMinutes;
        } else if (startTimeMinutes < arrivalTimeMinutes) {
            minutesDifference = (arrivalTimeMinutes - startTimeMinutes) - 60;
            hoursDifference++;
        }
    }

//          Print 

    if (hoursDifference > 0 || (hoursDifference === 0 && minutesDifference > 0) ) {
        console.log("Late");
    } else if (hoursDifference === 0 && minutesDifference >= -30 && minutesDifference <= 0) {
        console.log("On time");
    } else if (hoursDifference < 0 || (hoursDifference === 0 && minutesDifference < -30)) {
        console.log("Early");
    }


//          за Подраняване
    if (hoursDifference <= 0 && minutesDifference <= 0) {

        if (hoursDifference === 0 && minutesDifference != 0) {
            console.log(`${Math.abs(minutesDifference)} minutes before the start`);  
        } else if (hoursDifference != 0 && minutesDifference > -10 && minutesDifference < -1 ) {
            console.log(`${Math.abs(hoursDifference)}:0${Math.abs(minutesDifference)} mm hours before the start`); 
        } else if (hoursDifference != 0 && minutesDifference <= -10) {
            console.log(`${Math.abs(hoursDifference)}:${Math.abs(minutesDifference)} hours before the start`);
        } else if (hoursDifference != 0 && minutesDifference === 0) {
            console.log(`${Math.abs(hoursDifference)}:00 hours before the start`);
        }
    } 

//          за закyснение
    if (hoursDifference >= 0 && minutesDifference >= 0) {

        if (hoursDifference === 0 && minutesDifference != 0) {
            console.log(`${Math.abs(minutesDifference)} minutes after the start`);  
        } else if (hoursDifference != 0 && minutesDifference > 1 && minutesDifference < 10 ) {
            console.log(`${Math.abs(hoursDifference)}:0${Math.abs(minutesDifference)} hours after the start`); 
        } else if (hoursDifference != 0 && minutesDifference > 10) {
            console.log(`${Math.abs(hoursDifference)}:${Math.abs(minutesDifference)} hours after the start`);
        } else if (hoursDifference != 0 && minutesDifference === 0) {
            console.log(`${Math.abs(hoursDifference)}:00 hours after the start`);
        }
    }
    // console.log("---------------");


}
onTimeForTheExam(["9", "30", "9", "50"]);
onTimeForTheExam(["9", "00", "8", "30"]);
onTimeForTheExam(["16", "00", "15", "00"]);
onTimeForTheExam(["9", "00", "10", "30"]);
onTimeForTheExam(["14", "00", "13", "55"]);
onTimeForTheExam(["11", "30", "8", "12"]);
onTimeForTheExam(["10", "00", "10", "00"]);
onTimeForTheExam(["11", "30", "10", "55"]);
onTimeForTheExam(["11", "30", "12", "29"]);
onTimeForTheExam(["16", "00", "18", "00"]);
