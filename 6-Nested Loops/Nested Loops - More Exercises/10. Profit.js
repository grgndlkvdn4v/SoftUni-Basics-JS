function profit(input) {
    
    const oneLevaBanknotes = Number(input[0]);
    const twoLevaBanknotes = Number(input[1]);
    const fiveLevaBanknotes = Number(input[2]);
    const sumNeeded = Number(input[3]);


    for (let oneLv = 0; oneLv <= oneLevaBanknotes; oneLv++) {
        

        for (let twoLv = 0; twoLv <= twoLevaBanknotes; twoLv++) {

            for (let fiveLv = 0; fiveLv <= fiveLevaBanknotes; fiveLv++) {
                
                if ((oneLv * 1) + (twoLv *2 ) + (fiveLv * 5) === sumNeeded) {

                    console.log(`${oneLv} * 1 lv. + ${twoLv} * 2 lv. + ${fiveLv} * 5 lv. = ${sumNeeded} lv.`);
                }
                
            }
        }
    }

}
// profit(["3", "2", "3", "10"]);
profit(["5", "3", "1", "7"]);
//       1    2    5