function operationsBetweenNumbers(input) {

    const n1 = Number(input[0]);
    const n2 = Number(input[1]);
    const operator = input[2];

    let sum = 0;
    let oddOrEven = "";
    let print = "";

    if ((operator === "/" || operator === "%") && n2 === 0) {
        console.log(`Cannot divide ${n1} by zero`);
    } else {

        // switch (operator) {
        //     case "+": 
        //     case "-": 
        //     case "*": 
        //         if (sum % 2 === 0) {oddOrEven = "even";} 
        //         else {oddOrEven = "odd";} break;
        // }
        
        switch (operator) {
            case "+":
                sum = n1 + n2;
                if (sum % 2 === 0) {oddOrEven = "even";} 
                else {oddOrEven = "odd";}
                print = `${n1} ${operator} ${n2} = ${sum} - ${oddOrEven}`;
                break;
            case "-":
                sum = n1 - n2;
                if (sum % 2 === 0) {oddOrEven = "even";} 
                else {oddOrEven = "odd";}
                print = `${n1} ${operator} ${n2} = ${sum} - ${oddOrEven}`;
                break;
            case "*":
                sum = n1 * n2;
                if (sum % 2 === 0) {oddOrEven = "even";} 
                else {oddOrEven = "odd";}
                print = `${n1} ${operator} ${n2} = ${sum} - ${oddOrEven}`;
                break;
            case "/":
                sum = n1 / n2;
                print = `${n1} ${operator} ${n2} = ${sum.toFixed(2)}`;
                break;
            case "%":
                sum = n1 % n2;
                print = `${n1} ${operator} ${n2} = ${sum}`;
                break;
        }

        console.log(print);
    }
    
} 
operationsBetweenNumbers(["10", "12", "+"]);
operationsBetweenNumbers(["123", "12", "/"]);
operationsBetweenNumbers(["112", "0", "/"]);
operationsBetweenNumbers(["10", "1", "-"]);
operationsBetweenNumbers(["10", "3", "%"]);
operationsBetweenNumbers(["10", "0", "%"]);
operationsBetweenNumbers(["7", "3", "*"]);