function summerOutFit(input) {
    
const degrees = Number(input[0]);
const timeOfTheDay = input[1];

let outfit = "";
let shoes = "";

    if (degrees >= 10 && degrees <= 18) {
        
        switch (timeOfTheDay) {
            case "Morning": 
                outfit = "Sweatshirt";
                shoes = "Sneakers";
                break;

            case "Afternoon": 
                outfit = "Shirt";
                shoes = "Moccasins";
                break;    
        
            case "Evening": 
                outfit = "Shirt";
                shoes = "Moccasins";
                break;

            default:
                break;
        }

    } else if (degrees > 18 && degrees <= 24) {
        
        switch (timeOfTheDay) {
            case "Morning": 
                outfit = "Shirt";
                shoes = "Moccasins";
                break;

            case "Afternoon": 
                outfit = "T-Shirt";
                shoes = "Sandals";
                break;    
        
            case "Evening": 
                outfit = "Shirt";
                shoes = "Moccasins";
                break;

            default:
                break;
        }

    } else if (degrees >= 25) {
        
        switch (timeOfTheDay) {
            case "Morning": 
                outfit = "T-Shirt";
                shoes = "Sandals";
                break;

            case "Afternoon": 
                outfit = "Swim Suit";
                shoes = "Barefoot";
                break;    
        
            case "Evening": 
                outfit = "Shirt";
                shoes = "Moccasins";
                break;

            default:
                break;
        }
    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);

}
summerOutFit(["16", "Morning"]);
summerOutFit(["22", "Afternoon"]);