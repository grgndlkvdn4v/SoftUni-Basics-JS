function weddingSeats(input) {
    
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

    const lastSector = input[0];
    const firstSectorRows =Number(input[1]); 
    const oddRowSeats = Number(input[2]);
    
    let additionaSectorsCounter = 0;
    let seatsCounter = 0;


    for (let i = 0; i <= alphabet.indexOf(lastSector.toLowerCase()); i++) {
        let currentSector = alphabet[i];

        for (let j = 1; j <= firstSectorRows + additionaSectorsCounter; j++) {

            if (j % 2 === 0) {

                for (let f = 0; f < oddRowSeats + 2; f++) {
                    let seat = alphabet[f];
                    console.log(`${currentSector.toUpperCase()}${j}${seat}`);
                    seatsCounter++;
                }

            } else {

                for (let k = 0; k < oddRowSeats; k++) {
                    let seat = alphabet[k];
                    console.log(`${currentSector.toUpperCase()}${j}${seat}`);
                    seatsCounter++;
                }

            }

        }
        additionaSectorsCounter++;
    }

    console.log(seatsCounter);

}
weddingSeats(["E", "1", "3"])