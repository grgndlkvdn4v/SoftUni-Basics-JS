function skiTrip(input) {

    const roomForOnePerson = 18;
    const apartment = 25;
    const presidentsApartment = 35;
    
    const daysStay = Number(input[0]);
    const overnights = daysStay - 1;
    const room = input[1];
    const feedback = input[2];

    let totalPrice = 0;
    let discount = 0;
    let additionalFee = 0;
    
    
    switch(room) {

        case "room for one person": totalPrice = roomForOnePerson * overnights; break;

        case "apartment":
            if (daysStay < 10) {
                discount = 0.30;
            } else if (daysStay >= 10 && daysStay <= 15) {
                discount = 0.35;
            } else if (daysStay > 15) {
                discount = 0.5;
            }
            totalPrice = apartment * overnights;
            break;

        case "president apartment":
            if (daysStay < 10) {
                discount = 0.1;
            } else if (daysStay >= 10 && daysStay <= 15) {
                discount = 0.15;
            } else if (daysStay > 15) {
                discount = 0.2;
            }
            totalPrice = presidentsApartment * overnights;
            break;
    }

    totalPrice -= totalPrice * discount;

    switch (feedback) {
        case "positive":
            additionalFee = totalPrice * 0.25;
            totalPrice += additionalFee;
            break;
        case "negative": 
            additionalFee = totalPrice * 0.1;
            totalPrice -= additionalFee;
            break;
    }

    console.log(totalPrice.toFixed(2));

}
skiTrip(["14", "apartment", "positive"]);
skiTrip(["30", "president apartment", "negative"]);
skiTrip(["12", "room for one person", "positive"]);
skiTrip(["2", "apartment", "positive"]);