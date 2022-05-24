function yardGreening(input) 
{
    let cenorazpis = 7.61;
    let price = cenorazpis * Number(input[0]);
    let discount = price * 0.18;
    let totalPrice = price - discount;

    // console.log(price);
    // console.log(discount);
    // console.log(totalPrice);
    
    console.log(
`The final price is: ${totalPrice} lv.
The discount is: ${discount} lv.`
    );

}

yardGreening(["550"]) 