function test(input) {
    let index = 0;
    let currentInput = input[index];//0
    
    let isFinish = false;

    let currentTicketsCounter = 0;
    let studentCounter = 0;
    let standardCounter = 0;
    let kidCounter = 0;
    let totalTicketsCounter = 0;


    while (currentInput !== "Finish") {
        
        let currentMovie = currentInput //0
        index++;
        let capacity = Number(input[index]); //1

        currentTicketsCounter = 0;

        while (currentInput !== "End" && currentTicketsCounter !== capacity) {
            index++;
            let typeOfTicket = input[index]; //2
            currentInput = input[index];

            if (currentInput === "Finish") {
                isFinish = true;
                break;
            } else if (currentInput === "End")
                continue;
        

            switch (typeOfTicket) {
                case "student": studentCounter++; break;
                case "standard": standardCounter++; break;
                case "kid": kidCounter++; break;
            }

            currentTicketsCounter++;
        }

        totalTicketsCounter += currentTicketsCounter;

        let percentageFull = (currentTicketsCounter / capacity) * 100;

        console.log(`${currentMovie} - ${percentageFull.toFixed(2)}% full.`);

        if (isFinish)
        break    
        
        index++;
        currentInput = input[index];
    }

    let StudentCounterPercent = (studentCounter / totalTicketsCounter) * 100;
    let StandardCounterPercent = (standardCounter / totalTicketsCounter) * 100;
    let KidCounterPercent = (kidCounter / totalTicketsCounter) * 100;
    
    console.log(`Total tickets: ${totalTicketsCounter}`);
    console.log(`${StudentCounterPercent.toFixed(2)}% student tickets.`);
    console.log(`${StandardCounterPercent.toFixed(2)}% standard tickets.`);
    console.log(`${KidCounterPercent.toFixed(2)}% kids tickets.`);
}

test(["Taxi","10","standard","kid","student","student","standard","standard","End","Scary Movie","6","student","student","student","student","student","student","Finish"]);

// test(["The Matrix","20","student","standard","kid","kid","student","student","standard","student","End","The Green Mile","17","student","standard","standard","student","standard","student","End","Amadeus","3","standard","standard","standard","Finish"]);

// test(["Taxi","2","standard","kid","Scary Movie","2","student","student","Finish"]);