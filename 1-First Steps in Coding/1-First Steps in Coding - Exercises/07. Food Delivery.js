function foodDelivery(input) {
//          PriceList
const chichenMenu = 10.35;
const fishMenu = 12.40;
const veggieMenu = 8.15;
const delivery = 2.50;
//          OrderList
const chickenMenuOrdered = Number(input[0]);
const fishMenuOrdered = Number(input[1]);
const veggieMenuOrdered = Number(input[2]);
//          DESSERTS
const ordersTotal = (chickenMenuOrdered * chichenMenu) + (fishMenuOrdered * fishMenu) + (veggieMenuOrdered * veggieMenu);
const dessert = ordersTotal * 0.2;
//          RECEIPE
total = ordersTotal + dessert + delivery;

console.log(total);
}

foodDelivery(["9 ", "2 ", "6 "]);