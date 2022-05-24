function sleepyTomCat(input) {

//          INPUT
    const daysOffPerYear = Number(input[0]);
    const norm = 30000;
    const year = 365;
    const workDayPlayTime = 63; //игра в минути на ден когато е на работа
    const dayOffPlayTime = 127; //игра в минути на ден когато почива
    const workDays = year - daysOffPerYear; 
 
//          SOLUTION
    const playTimeMinutesPerYear = (workDays * workDayPlayTime) + (daysOffPerYear * dayOffPlayTime) ;
    const differenceMinutes = norm - playTimeMinutesPerYear; 
    const normDifferenceHours = differenceMinutes / 60;
    const normDifferenceMinutes = differenceMinutes % 60;

    if (differenceMinutes > 0) {
        console.log("Tom sleeps well");
        console.log(
        `${Math.trunc(normDifferenceHours)} hours and ${normDifferenceMinutes} minutes less for play`);
    } else {
        console.log("Tom will run away");
        console.log(`${Math.trunc(-normDifferenceHours)} hours and ${-normDifferenceMinutes} minutes more for play`);
    }

}

sleepyTomCat(["20"]);
sleepyTomCat(["113"]);