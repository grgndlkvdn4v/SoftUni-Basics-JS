function agencyProfit(input) {
    let index = 0

    const airline = input[index++];
    const adultTicketsCount = Number(input[index++]);
    const kidTicketsCount = Number(input[index++]);
    const grossTicketCost = Number(input[index++]);
    const tax = Number(input[index++]);

    const adultTicketsCost = grossTicketCost + tax;
    let kidTicketsCost = grossTicketCost - (grossTicketCost * 0.7);
    kidTicketsCost += tax;

    const totalCost = (adultTicketsCount * adultTicketsCost) + (kidTicketsCount * kidTicketsCost);

    const profit = totalCost * 0.2;

    console.log(`The profit of your agency from ${airline} tickets is ${profit.toFixed(2)} lv.`);

}
agencyProfit(["WizzAir", "15", "5", "120", "40", ])
