function hospital(input) {

    index = 0;

    const periodOfTime = Number(input[index]); //0
    index++;

    let doctors = 7;
    let treatedPatients = 0;
    let untreatedPatients = 0;

    for (let i = 1; i <= periodOfTime; i++) {

        if (i % 3 === 0  && untreatedPatients > treatedPatients) {
            doctors++;
        }
        
        let patientsPerDay = Number(input[index]);

        if (patientsPerDay <= doctors) {
            treatedPatients += patientsPerDay;
        } else {
            treatedPatients += doctors;
            untreatedPatients += patientsPerDay - doctors
        }
        
        index++;

    }

    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);

}
// hospital(["4", "7", "27", "9", "1"]);
// hospital(["6", "25", "25", "25"]);
hospital(["3", "7", "7", "7"]);
// hospital(["4", "15", "14", "14", "14"]);

