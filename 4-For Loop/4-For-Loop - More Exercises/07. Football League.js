function footballLeague(input) {
    index = 0;

    const stadionCapacity = Number(input[index]);
    index++;

    const totalFans = Number(input[index]);
    index++;

    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;

    
    for (let i = 1; i <= totalFans; i++) {
        
        let currentFanSector = input[index];
        
        switch (currentFanSector) {
            case "A": sectorA++; break;
            case "B": sectorB++; break;
            case "V": sectorV++; break;
            case "G": sectorG++; break;
        }

        index++; 
    }

    const sectorAprocent = sectorA / totalFans *100;
    console.log(`${sectorAprocent.toFixed(2)}%`);

    const sectorBprocent = sectorB / totalFans *100;
    console.log(`${sectorBprocent.toFixed(2)}%`);

    const sectorVprocent = sectorV / totalFans *100;
    console.log(`${sectorVprocent.toFixed(2)}%`);

    const sectorGprocent = sectorG / totalFans *100;
    console.log(`${sectorGprocent.toFixed(2)}%`);

    const fansPercent = totalFans / stadionCapacity * 100;
    console.log(`${fansPercent.toFixed(2)}%`);

}
footballLeague(["76","10","A","V","V","V","G","B","A","V","B","B" ]);