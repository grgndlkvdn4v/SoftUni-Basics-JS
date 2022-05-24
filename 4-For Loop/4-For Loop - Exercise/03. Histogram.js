function histogram(input) {

    const n = Number(input[0])
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;


    for (let i = 1; i <= n; i++) {
        if (Number(input[i]) < 200) {
            p1++;
        } else if (Number(input[i]) >= 200 && Number(input[i]) <= 399) {
            p2++;
        } else if (Number(input[i]) >= 400 && Number(input[i]) <= 599) {
            p3++;
        } else if (Number(input[i]) >= 600 && Number(input[i]) <= 799) {
            p4++;
        } else if (Number(input[i]) >= 800) {
            p5++;
        }
    }


    console.log(`${((p1 / n) * 100).toFixed(2)}%`);
    console.log(`${((p2 / n) * 100).toFixed(2)}%`);
    console.log(`${((p3 / n) * 100).toFixed(2)}%`);
    console.log(`${((p4 / n) * 100).toFixed(2)}%`);
    console.log(`${((p5 / n) * 100).toFixed(2)}%`);

}
histogram(["3", "1", "2", "999"]);
// histogram(["7", "800", "801", "250", "199", "399", "599", "799"]);
// histogram(["9", "367", "99", "200", "799", "999", "333", "555", "111", "9"]);
// histogram(["150", "350", "450", "750", "850"]);
// histogram(["53", "7", "56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200", "800", "799", "199", "46", "128", "65"]);