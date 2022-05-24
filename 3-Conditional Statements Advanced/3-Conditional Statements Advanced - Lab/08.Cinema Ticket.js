function cinemaTicket(input) {
    
    const day = input[0];
    let price = 0;

    switch (day) {
        case "Friday":
        case "Monday":
        case "Tuesday": price = 12; break;
        case "Wednesday":
        case "Thursday": price = 14; break;
        case "Saturday":
        case "Sunday": price = 16; break;

        // default: break;
    }

    console.log(price);
}

cinemaTicket(["Saturday"]);