function accountBalance(input) {
    let index = 0;
    let currentOperacion = input[index++];
    let account = 0;

    while (currentOperacion !== "NoMoreMoney") {
        
        let money = Number(currentOperacion);

        if (currentOperacion < 0) {
            console.log("Invalid operation!");
            break;
        }

        console.log(`Increase: ${money.toFixed(2)}`);
        account += money;

        currentOperacion = input[index++];
    }
    console.log(`Total: ${account.toFixed(2)}`);

}
accountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);
// accountBalance(["120", "45.55", "-150"]);