function fruitShop(input) {

    let fruit = input[0];
    const day = input[1];
    const quantity = input[2];

    let cost = 0;

    let banana = 2.50;
    let apple = 1.20;
    let orange = 0.85;
    let grapefruit = 1.45;
    let kiwi = 2.70;
    let pineapple = 5.50;
    let grapes = 3.85;

    let dayCheck = (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday" || day === "Saturday" || day === "Sunday");

    let fruitCheck = (fruit === "banana" || fruit === "apple" || fruit === "orange" || fruit === "grapefruit" || fruit === "kiwi" || fruit === "pineapple" || fruit === "grapes");


    switch (day) {
        case "Saturday":
        case "Sunday":
            banana = 2.70;
            apple = 1.25;
            orange = 0.90;
            grapefruit = 1.60;
            kiwi = 3.00;
            pineapple = 5.60;
            grapes = 4.20;
        break;
    }

    switch (fruit) {
        case "banana": cost = banana * quantity; break;
        case "apple": cost = apple * quantity; break;
        case "orange": cost = orange * quantity; break;
        case "grapefruit": cost = grapefruit * quantity; break;
        case "kiwi": cost =  kiwi * quantity; break;
        case "pineapple": cost = pineapple * quantity; break;
        case "grapes": cost = grapes * quantity; break;
    break;
    }




    if (dayCheck === false || fruitCheck === false) {
        console.log("error");
    } else {
        console.log(cost.toFixed(2));
    }

}

fruitShop(["apple", "Tuesday", "2"]);
fruitShop(["orange", "Sunday", "3"]);
fruitShop(["kiwi", "Monday", "2.5"]);
fruitShop(["grapes", "Saturday", "0.5"]);
fruitShop(["tomato", "Monday", "0.5"]);