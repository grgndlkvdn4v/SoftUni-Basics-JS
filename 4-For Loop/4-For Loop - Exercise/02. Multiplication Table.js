function multiplicationTable(input) {

    const num = Number(input[0]);
    
    let sum = "";
    // let sum = 0;

    // for (let i = 1; i <= 10; i++) {
    //     sum = i * sum 
    //     console.log(`${i} * ${num} = ${i * num}`);
    // }

    for (let i = 1; i <= 10; i++) {
        sum += `${i} * ${num} = ${i * num}\n`
    }

    console.log(sum);

}
multiplicationTable(["5"]);