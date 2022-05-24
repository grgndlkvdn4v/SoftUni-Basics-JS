function celsiusToFahrenheit(input) {

//          INPUTS
    const celsius = Number(input[0]);
//          SOLUTION
    const farenheit = (celsius * 1.8) + 32;

    console.log(farenheit.toFixed(2));
}

celsiusToFahrenheit(["0"]);