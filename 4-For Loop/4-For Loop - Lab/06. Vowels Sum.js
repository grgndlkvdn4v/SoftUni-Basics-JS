function vowelsSum(input) {
    
    const a = 1;
    const e = 2;
    const i = 3;
    const o = 4;
    const u = 5;

    const word = input[0];
    
    let char = '';
    let sum = 0;


    for (let f = 0; f < word.length; f++) {

        char = word[f];

        switch (char) {
            case "a": sum += a; break;
            case "e": sum += e; break;
            case "i": sum += i; break;
            case "o": sum += o; break;
            case "u": sum += u; break;
        }
    }

    console.log(sum);

}
vowelsSum(["bamboo"]);