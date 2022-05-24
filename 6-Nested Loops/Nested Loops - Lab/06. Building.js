function building(input) {

    const floor = Number(input[0]);
    const apartment = Number(input[1]);

    let out = ``;

    for (let i = floor; i >= 1; i--) {

        
        for (let k = 0; k < apartment; k++) {

            if (i === floor) {
                out += `L${i}${k} `
            }else if (i % 2 === 0) {
                out += `O${i}${k} `
            } else {
                out += `A${i}${k} `
            }

        }   
        console.log(out);
        out = '';
    }
    
}
building(["6", "4"]);