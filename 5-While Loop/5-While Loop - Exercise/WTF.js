function coins(input) {
    
    const change = Number(input[0]);
    let currentChange = change;

    const twoLeva = 2.00;
    const oneLev = 1.00;
    const fiftyStotinki = 0.50;
    const twentyStotinki = 0.20;
    const tenStotinki = 0.10;
    const fiveStotinki = 0.05;
    const twoStotinki = 0.02;
    const oneStotinka = 0.01;

    let twoLevaCounter = 0;
    let oneLevCounter = 0;
    let fiftyStotinkiCounter = 0;
    let twentyStotinkiCounter = 0;
    let tenStotinkiCounter = 0;
    let fiveStotinkiCounter = 0;
    let twoStotinkiCounter = 0;
    let oneStotinkaCounter = 0;

    console.log(currentChange);

    while (currentChange !== `0.00` || currentChange !== 0.00 ) {
        
        while (currentChange >= 2) {
            currentChange -= 2;
        currentChange = currentChange.toFixed(2)

            twoLevaCounter++;
            console.log(currentChange);
            if (currentChange === 2) {
                currentChange -= 2;
        currentChange = currentChange.toFixed(2)

                twoLevaCounter++;
            }
        }
//=================================================
        while (currentChange >= 1) {
            currentChange -= 1;
        currentChange = currentChange.toFixed(2)

            oneLevCounter++;
            console.log(currentChange);
            if (currentChange === 1) {
                currentChange -= 1;
        currentChange = currentChange.toFixed(2)

                oneLevCounter++;
            }
        }
//=================================================
        while (currentChange >= 0.5) {
            currentChange -= 0.5;
        currentChange = currentChange.toFixed(2)

            fiftyStotinkiCounter++;
            console.log(currentChange);
            if (currentChange === 0.5) {
                currentChange -= 0.5;
        currentChange = currentChange.toFixed(2)

                fiftyStotinkiCounter++;
            }
        }
//=================================================
        while (currentChange >= 0.2) {
            currentChange -= 0.2;
        currentChange = currentChange.toFixed(2)

            twentyStotinkiCounter++;
            console.log(currentChange);
            if (currentChange === 0.2) {
                currentChange -= 0.2;
        currentChange = currentChange.toFixed(2)

                twentyStotinkiCounter++;
            }
        }
// =================================================
        while (currentChange >= 0.1) {
            currentChange -= 0.1;
        currentChange = currentChange.toFixed(2)

            tenStotinkiCounter++;
            console.log(currentChange);
            if (currentChange === 0.1) {
                currentChange -= 0.1;
        currentChange = currentChange.toFixed(2)

                tenStotinkiCounter++;
            }
        }
//=================================================
        while (currentChange >= 0.05) {
            currentChange -= 0.05;
        currentChange = currentChange.toFixed(2)

            fiveStotinkiCounter++;
            console.log(currentChange);
            if (currentChange === 0.05) {
                currentChange -= 0.05;
        currentChange = currentChange.toFixed(2)

                fiveStotinkiCounter++;
            }
        }
//=================================================
        while (currentChange >= 0.02) {
            currentChange -= 0.02;
        currentChange = currentChange.toFixed(2)

            twoStotinkiCounter++;
            console.log(currentChange);
            if (currentChange === 0.02) {
                currentChange -= 0.02;
        currentChange = currentChange.toFixed(2)

                twoStotinkiCounter++;
            }
        }
//=================================================
        while (currentChange >= 0.01) {
            currentChange -= 0.01;
        currentChange = currentChange.toFixed(2)

            oneStotinkaCounter++;
            console.log(currentChange);
            if (currentChange === 0.01) {
                currentChange -= 0.01;
        currentChange = currentChange.toFixed(2)

                oneStotinkaCounter++;
            }
        }

        if (currentChange === `0.00`) {
            break;
        }
        currentChange = currentChange.toFixed(2)
    }
    console.log("===============");
    // console.log(currentChange);

    console.log(`twoLevaCounter = ${twoLevaCounter}\noneLevCounter = ${oneLevCounter}\nfiftyStotinkiCounter = ${fiftyStotinkiCounter}\ntwentyStotinkiCounter = ${twentyStotinkiCounter}\ntenStotinkiCounter = ${tenStotinkiCounter}\nfiveStotinkiCounter = ${fiveStotinkiCounter}\nfiveStotinkiCounter = ${fiveStotinkiCounter}\ntwoStotinkiCounter = ${twoStotinkiCounter}\noneStotinkaCounter = ${oneStotinkaCounter}`);
}

// coins (["1.23"]);
// coins (["2"]);
// coins (["0.56"]);
// coins (["2.73"]);
coins(["3.77"]);