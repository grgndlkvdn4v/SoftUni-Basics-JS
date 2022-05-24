function firm(input) {

    const hoursNeeded = Number(input[0]); //необходимите часовете 
    const aviableFirmDays = Number(input[1]); //дните, с които фирмата разполага 
    const workers = Number(input[2]); //броят на служителите, работещи извънредно 

    const workingHoursPerDay = workers * 10
    const totalHourAviable = Math.floor( ((aviableFirmDays * 0.9) * 8) + (2*aviableFirmDays*workers) );
     const difference = totalHourAviable - hoursNeeded;

    if (totalHourAviable >= hoursNeeded) {
        console.log(`Yes!${difference} hours left.`);
    } else  if (totalHourAviable < hoursNeeded) {
        console.log(`Not enough time!${-difference} hours needed.`);
    }

}

firm(["90", "7", "3"]);
firm(["99", "3", "1"]);
firm(["50", "5", "2"]);