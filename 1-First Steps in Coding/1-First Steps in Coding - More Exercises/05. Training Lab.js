function trainingLab(input) {

//          INPUTS
    const w = Number(input[0]) * 100;  // Дължинa в см
    const h = (Number(input[1])  * 100) - 100;  // Широчина в см - коридор

//          SOLUTIONS
    const wPlaces = Math.floor(w / 120);  // закръгляне надолу
    const hPlaces = Math.floor(h / 70);

    const places = wPlaces * hPlaces

    console.log(places - 3);    // -3 за катедрата и вратата
}

trainingLab(["15","8.9"]);