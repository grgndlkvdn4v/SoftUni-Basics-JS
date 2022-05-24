function trapeziodArea (input) {
//          INPUTS
    const b1 = Number(input[0]);
    const b2 = Number(input[1]);
    const h = Number(input[2]);
//          SOLUTION
    const S = (b1 + b2) * h/2;

    console.log(S.toFixed(2));
}
trapeziodArea(["8", "13", "7"]);