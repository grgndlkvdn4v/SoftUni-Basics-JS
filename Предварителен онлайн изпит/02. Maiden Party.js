function maidenParty(input) {

    const maidenPartyCost = Number(input[0]);
    const loveMessagesCount =  Number(input[1]);
    const waxRosesCount =  Number(input[2]);
    const keyHoldersCount =  Number(input[3]);
    const cartoonsCount =  Number(input[4]);
    const luckyCharmsCount =  Number(input[5]);

    const loveMessage = 0.60;
    const waxRose = 7.20;
    const keyHolder = 3.60;
    const cartoon = 18.20;
    const luckyCharm = 22;

    const hostingTax = 0.1;

    const orderedItems = loveMessagesCount + waxRosesCount + keyHoldersCount + cartoonsCount + luckyCharmsCount;
    
    let totalMoney = 
    loveMessagesCount * loveMessage + 
    waxRosesCount * waxRose + 
    keyHoldersCount * keyHolder + 
    cartoonsCount * cartoon + 
    luckyCharmsCount * luckyCharm;


    if (orderedItems >= 25 ){
        let discount = 0.35;
        totalMoney -= totalMoney * discount;
    }

    totalMoney -= totalMoney * hostingTax;

    const difference = Math.abs(totalMoney - maidenPartyCost);

    if (totalMoney >= maidenPartyCost)
        console.log(`Yes! ${difference.toFixed(2)} lv left.`);
    else
    console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`);

}
maidenParty(["40.8", "20", "25", "30", "50", "10"]);
maidenParty(["320", "8", "2", "5", "5", "1"]);