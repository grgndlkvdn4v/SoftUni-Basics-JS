function trainTheTrainers(input) {
    let index = 0;
    const juryCount = Number(input[index++]);

    let presentationName = input[index++];
    let finalAssesment = 0
    let presentationsCounter = 0;


    while (presentationName !== "Finish") {
    let avr = 0;
    presentationsCounter++;
        

        for (let i = 1; i <= juryCount; i++) {
            avr += Number(input[index++]);
        }

        avr = avr / juryCount;
        finalAssesment += avr;

        console.log(`${presentationName} - ${avr.toFixed(2)}.`);
        presentationName = input[index++];
        
    }

    console.log(`Student's final assessment is ${(finalAssesment / presentationsCounter).toFixed(2)}.`);

}

// trainTheTrainers(["2","While-Loop","6.00","5.50","For-Loop","5.84","5.66","Finish"]);

trainTheTrainers(["3","Arrays","4.53","5.23","5.00","Lists","5.83","6.00","5.42","Finish"]);