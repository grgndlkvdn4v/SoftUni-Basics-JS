function vacationBooksList(input) {
        // INPUTS
    const pagesPerBook = Number(input[0]);
    const pagesPerHour = Number(input[1]);
    const days = Number(input[2]);
    // SOLUTION
    const timePerBook = pagesPerBook / pagesPerHour ;
    const needHoursPerDay = timePerBook / days ;

    console.log(needHoursPerDay);

}

vacationBooksList(["432 ", "15 ", "4 "]);