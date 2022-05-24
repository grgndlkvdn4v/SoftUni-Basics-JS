function USDtoBGN(input)
{
    // let usd = Number(input[0]);
    // let bgn = usd * 1.79549;

    const BgnToUsd = 1.79549;
    let bgn = Number(input[0]);

    const usd = bgn * BgnToUsd;


    console.log(usd);
}

USDtoBGN(["22"]);
USDtoBGN(["100"]);
USDtoBGN(["12.5"]);
