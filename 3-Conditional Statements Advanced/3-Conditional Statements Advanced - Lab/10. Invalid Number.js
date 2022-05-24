function invalidNumber(input) {
    
    const num = Number(input[0]);
    const test = (num >= 100 && num <= 200 || num === 0);

    if (!test) {
        console.log("invalid");
    }

}

invalidNumber(["75"]);
invalidNumber(["150"]);
invalidNumber(["0"]);
invalidNumber(["200"]);