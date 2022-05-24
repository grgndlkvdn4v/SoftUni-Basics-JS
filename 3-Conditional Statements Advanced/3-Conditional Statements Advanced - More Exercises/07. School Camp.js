function schoolCamp(input) {

    const season = input[0];
    const groupType = input[1];
    const kindsCount = Number(input[2]);
    const overnights = Number(input[3]);

    let pricePerNight = 0;
    let totalPrice = 0;
    let sportType = "";

    switch (season) {

        case "Winter":
            switch (groupType) {
                case "girls": pricePerNight = 9.60;
                    sportType = "Gymnastics"; break;
                case "boys":
                    pricePerNight = 9.60; 
                    sportType = "Judo"; break;
                case "mixed": pricePerNight = 10;
                sportType = "Ski"; break;
            } break;

        case "Spring":
            switch (groupType) {
                case "girls": pricePerNight = 7.20;
                    sportType = "Athletics"; break;
                case "boys": pricePerNight = 7.20;
                    sportType = "Tennis"; break;
                case "mixed": pricePerNight = 9.50;
                    sportType = "Cycling"; break;
            } break;

            case "Summer":
            switch (groupType) {
                case "girls": pricePerNight = 15;
                    sportType = "Volleyball"; break;
                case "boys":pricePerNight = 15;
                    sportType = "Football"; break;
                case "mixed": pricePerNight = 20;
                    sportType = "Swimming"; break;
            } break;
    }

    totalPrice = pricePerNight * overnights * kindsCount;

        if (kindsCount >= 50) {
            totalPrice -= totalPrice * 0.5;
        } else if (kindsCount >= 20 && kindsCount < 50) {
            totalPrice -= totalPrice * 0.15;
        } else if (kindsCount >= 10 && kindsCount < 20) {
            totalPrice -= totalPrice * 0.05;
        }  

    console.log(`${sportType} ${totalPrice.toFixed(2)} lv.`);

}
schoolCamp(["Spring", "girls", "20", "7"])
schoolCamp(["Winter", "mixed", "9", "15"])
schoolCamp(["Summer", "boys", "9", "15"])
schoolCamp(["Spring", "mixed", "17", "14"])
// schoolCamp(["Winter", "mixed", "100", "10"]);