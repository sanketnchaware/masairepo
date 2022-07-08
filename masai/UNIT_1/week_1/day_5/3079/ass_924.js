var i1_price=80, i2_price=140;
var i1_quan=6, i2_quantity=3;
var t= 5,d=8, tip = 50;
var total = (i1_price*i1_quan+i2_price*i2_quantity);
console.log(`Meal Amount is ${total}`);
var discounted_price= (total- total*(d/100));
var after_tax=(discounted_price+discounted_price*(t/100))
var total_bill=after_tax+ tip;
console.log(`Total bill with tax, discount and tip is ${total_bill}.`);

