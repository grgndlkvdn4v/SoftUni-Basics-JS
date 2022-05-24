function password(input) {
    
    let index = 0;
    const name  = input[index++]; //0
    const pass = input[index++]; //1

    let hui = input[index++]

    while (hui !== pass) {
        hui = input[index++]
    }

    console.log(`Welcome ${name}!`);
}
password(["Nakov", "1234", "Pass", "1324", "1234"]);