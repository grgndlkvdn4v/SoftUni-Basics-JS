function personalTitles(input) {

    const age = Number(input[0]);
    const sex = input[1];

    if (sex === "m") {
        if (age >= 16) {
            console.log("Mr.");
        }
        else {
            console.log("Master");
        }
    }

    else if (sex === "f") {
        if (age >= 16) {
            console.log("Ms.");
        }
        else {
            console.log("Miss");
        }
    }

}

personalTitles(["12", "f"])
personalTitles(["17", "m"])
personalTitles(["25", "f"])
personalTitles(["13.5", "m"])