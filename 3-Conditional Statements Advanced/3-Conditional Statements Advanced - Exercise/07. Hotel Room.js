function hotelRoom(input) {

    const month = input[0];
    const overnights = Number(input[1]);

    const mayOctoberStudio = 50;
    const mayOctoberApartment = 65;
    const juneSeptemberStudio = 75.20;
    const juneSeptemberApartment = 68.70;
    const julyAugustStudio = 76;
    const julyAugustApartment = 77;

    let studio = 0;
    let apartment = 0;

    let studioDiscount = 0;
    let apartmentDiscount = 0.1;

    switch (month) {
        case "May":
        case "October":
            if (overnights > 7 && overnights <= 14) {
                studioDiscount = 0.05;
            } else if (overnights > 14) {
                studioDiscount = 0.3;
            }
            apartment = mayOctoberApartment;
            studio = mayOctoberStudio - (mayOctoberStudio * studioDiscount);
        break;

        case "June":
        case "September":
            if (overnights > 14) {
                studioDiscount = 0.2;
            }
            apartment = juneSeptemberApartment;
            studio = juneSeptemberStudio - (juneSeptemberStudio * studioDiscount);
        break;

        case "July":
        case "August":
            apartment = julyAugustApartment;
            studio = julyAugustStudio;
        break;
    }

    if (overnights > 14) {
    apartment -= apartment * apartmentDiscount;
    }

    console.log(`Apartment: ${(apartment * overnights).toFixed(2)} lv.`);
    console.log(`Studio: ${(studio * overnights).toFixed(2)} lv.`);
 
}
hotelRoom(["May", "15"]);
hotelRoom(["June", "14"]);
