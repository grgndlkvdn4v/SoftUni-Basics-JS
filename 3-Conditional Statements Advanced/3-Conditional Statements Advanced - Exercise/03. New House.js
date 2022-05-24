function newHouse(input) {
    
    const roses = 5;
    const dahlias = 3.80;
    const tulips = 2.80;
    const narcissus = 3;
    const gladiolus = 2.50;

    const flowerType = input[0];
    const quantity = Number(input[1]);
    const budget = Number(input[2]);

    let cost = 0;
    let difference = 0;
    
    switch (flowerType) {

        case "Roses":
            if (quantity > 80) {
                cost = quantity * roses;
                cost -= cost * 0.1;
            } else {
                cost = quantity * roses;
            } break;

        case "Dahlias":
            if (quantity > 90) {
                cost = quantity * dahlias;
                cost -= cost * 0.15;
            } else {
                cost = quantity * dahlias;
            } break;

        case "Tulips":
            if (quantity > 80) {
                cost = quantity * tulips;
                cost -= cost * 0.15;
            } else {
                cost = quantity * tulips;
            } break;

        case "Narcissus":
            if (quantity < 120) {
                cost = quantity * narcissus;
                cost += cost * 0.15;
            } else {
                cost = quantity * narcissus;
            } break;

        case "Gladiolus":
            if (quantity < 80) {
                cost = quantity * gladiolus;
                cost += cost * 0.2;
            } else {
                cost = quantity * gladiolus;
            } break;

    }

    difference = Math.abs(budget - cost);

    if (budget >= cost) {
        console.log(`Hey, you have a great garden with ${quantity} ${flowerType} and ${difference.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${difference.toFixed(2)} leva more.`);
    }

}

newHouse(["Roses", "55", "250"]);
newHouse(["Tulips", "88", "260"]);
newHouse(["Narcissus", "119", "360"]);