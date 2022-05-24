function petShop(input)
{
    let dogFood = 2.50;
    let catFood = 4;

    let sum = ( dogFood * Number(input[0]) ) + ( catFood * Number(input[1]) );

    console.log(`${sum} lv.`);
}

petShop(["5", "4"]);