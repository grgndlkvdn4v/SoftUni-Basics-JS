function santasHoliday(input) {
    let index = 0;

    const daysStay = Number(input[index++]);
    const overnights = daysStay - 1;

    const typeOfRoom = input[index++];
    const feedback = input[index++];

    const roomForOnePerson = 18;
    const apartment = 25;
    const presidentsApartment = 35;

    let total = 0;
    let discount = 0;

    switch (typeOfRoom) {

        case "room for one person" :
            total = overnights * roomForOnePerson;
            break;

        case "apartment" :
            total = overnights * apartment;

            if (daysStay < 10)
                discount = 0.3;
            else if (daysStay >= 10 && daysStay <= 15)
                discount = 0.35;
            else 
            discount = 0.5;
        break;

        case "president apartment" :
            total = overnights * presidentsApartment;

            if (daysStay < 10)
                discount = 0.1;
            else if (daysStay >= 10 && daysStay <= 15)
                discount = 0.15;
            else 
            discount = 0.2;
        break;

    }

    total -= total * discount;

    switch (feedback) {
        case "positive" :
            total += total * 0.25;
            break;
    
        case "negative" :
            total -= total * 0.1;
            break;
    }

    console.log(total.toFixed(2));

}
santasHoliday(["14", "apartment", "positive"]);
// santasHoliday(["30", "president apartment", "negative"]);
// santasHoliday(["12", "room for one person", "positive"]);
// santasHoliday(["2", "apartment", "positive"]);