function circleAreaAndPerimeter(input) {
// Лице = π * r * r;
// Периметър = 2 * π * r;
    const r = Number(input[0]);

    const S = Math.PI * Math.pow(r, 2);
    const P = 2 * Math.PI * r;


    console.log(S.toFixed(2));
    console.log(P.toFixed(2));
}

circleAreaAndPerimeter (["3"]);
