function RadiansToDegrees(input) 
{
    const rad = Number(input[0]);
    const deg = (rad * 180) / Math.PI;

    console.log(deg)
}

RadiansToDegrees(["3.1416"]);