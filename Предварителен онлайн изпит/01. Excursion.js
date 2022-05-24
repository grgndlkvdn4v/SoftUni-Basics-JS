function excursion(input) {

    const peopleCount = Number(input[0]);
    const overnights = Number(input[1]);
    const transportCards = Number(input[2]);
    const museumTickets = Number(input[3]);


    const overnightCost = 20;
    const transportCardCost = 1.60;
    const museumTicketCost = 6;

    const contingencies = 0.25;

    const costPerPerson =
    overnightCost * overnights + 
    transportCardCost * transportCards + 
    museumTicketCost * museumTickets;

    let totalCost = costPerPerson * peopleCount;

    totalCost += totalCost * contingencies;

    console.log(totalCost.toFixed(2));

}
excursion(["20", "14", "30", "6"]);
excursion(["131", "9", "33", "46"]);