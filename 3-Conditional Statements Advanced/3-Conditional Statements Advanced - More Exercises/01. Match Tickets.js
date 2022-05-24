function matchTickets(input) {
    
    const budget = Number(input[0]);
    const category = input[1];
    const people = Number(input[2]);

    const vip = 499.99;
    const normal = 249.99;

    let transport = 0;
    let ticketsCost = 0
    let total  = 0;

    if (people >= 1 && people <=4) {
        transport = budget * 0.75;
    } else if (people >= 5 && people <=9) {
        transport = budget * 0.6;
    } else if (people >= 10 && people <=24) {
        transport = budget * 0.5;
    } else if (people >= 25 && people <=49) {
        transport = budget * 0.4;
    } else if (people > 50) {
        transport = budget * 0.25;
    }

    switch (category) {
        case "Normal": ticketsCost = people * normal; break;
        case "VIP":    ticketsCost = people * vip;    break;
    }
    
    total = ticketsCost + transport;

    if (budget >= total) {
        console.log(`Yes! You have ${(budget - total).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(total - budget).toFixed(2)} leva.`);
    }

}
// matchTickets(["1000", "Normal", "1"])
matchTickets(["30000", "VIP", "49"])