function cinemaTickets(input) {
    let index = 0;
    let currentInput = input[index];//0
    
    let isFinish = false;

    let currentMovieTicketsCounter = 0;
    let studentCounter = 0;
    let standardCounter = 0;
    let kidCounter = 0;

    let totalStudentCounter = 0;
    let totalStandardCounter = 0;
    let totalKidCounter = 0;
    let totalTicketsCounter = 0;

    

    while (currentInput !== "Finish") {
        
        let currentMovie = currentInput //0
        index++;
        let capacity = Number(input[index]); //1

        currentMovieTicketsCounter = 0;
        studentCounter = 0;
        standardCounter = 0;
        kidCounter = 0;



        while (currentInput !== "End" && currentMovieTicketsCounter !== capacity) {

            index++;
            let typeOfTicket = input[index]; //2
            currentInput = input[index];

            if (currentInput === "Finish") {
                isFinish = true;
                break;
            }

            if (typeOfTicket === "student")
                studentCounter++;
            else if (typeOfTicket === "standard")
                standardCounter++;
            else if (typeOfTicket === "kid")
            kidCounter++;

            currentMovieTicketsCounter = studentCounter + standardCounter + kidCounter;

        }
        
        totalStudentCounter += studentCounter;
        totalStandardCounter += standardCounter;
        totalKidCounter += kidCounter;
        totalTicketsCounter += currentMovieTicketsCounter;

        let percentageFull = (currentMovieTicketsCounter / capacity) * 100;

        console.log(`${currentMovie} - ${percentageFull.toFixed(2)}% full.`);

        if (isFinish)
        break    
        
        index++;
        currentInput = input[index];

    }

    let totalStudentCounterPercent = (totalStudentCounter / totalTicketsCounter) * 100;
    let totalStandardCounterPercent = (totalStandardCounter / totalTicketsCounter) * 100;
    let totalKidCounterPercent = (totalKidCounter / totalTicketsCounter) * 100;
    

    console.log(`Total tickets: ${totalTicketsCounter}`);
    console.log(`${totalStudentCounterPercent.toFixed(2)}% student tickets.`);
    console.log(`${totalStandardCounterPercent.toFixed(2)}% standard tickets.`);
    console.log(`${totalKidCounterPercent.toFixed(2)}% kids tickets.`);
}

cinemaTickets(["Taxi","10","standard","kid","student","student","standard","standard","End","Scary Movie","6","student","student","student","student","student","student","Finish"]);

// cinemaTickets(["The Matrix","20","student","standard","kid","kid","student","student","standard","student","End","The Green Mile","17","student","standard","standard","student","standard","student","End","Amadeus","3","standard","standard","standard","Finish"]);

cinemaTickets(["Taxi","2","standard","kid","Scary Movie","2","student","student","Finish"]);