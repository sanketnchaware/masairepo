var purch_amount = 250;
d = 10;
max_discount = 100;

var discount = purch_amount * (d / 100);
if ( purch_amount >= 300 && discount <= 100){
    console.log("Total Discount is",discount);
}
else if(purch_amount >300 && discount > max_discount){
    console.log("Sorry,Total discount is ",max_discount);
}
else{
    console.log("Please Purchase for Amount more than 300");
}