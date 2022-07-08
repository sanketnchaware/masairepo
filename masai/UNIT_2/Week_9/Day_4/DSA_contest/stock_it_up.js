// Due to recent pandemic announcement we need to make a stock requirement generator, where all the items required for a week with price are given.

// For one week:

// 1. Flour = 5kg| Price = 110 per kg

// 2. Rice = 2kg| Price = 120 per kg

// 3. Sugar = 2kg| Price = 42 per kg

// 4. Pulse = 3kg| Price = 53 per kg

// 5. Bread = 2 packet | Price = 40 per packet

// 6. Milk = 5 litre| Price = 32 per litre

// 7. Oil = 2 litre| Price = 126 per litre

// The user will give N number of weeks for stock calculation with a list of 7 elements with 0 and 1 representing each item in the list, if the element is 0 then that item is not required by the person.

// The output should be the overall cost of the items for that number of weeks.





var n=4;
var elements=[0, 1, 1, 1, 0, 0, 1];



var out=[];

var floor=elements[0];
if(floor==1){
    var quantity=5;
    var rate=110;
    var total=quantity*rate; 
    out.push(total);
}

var rice=elements[1];
if(rice==1){
    var quantity=2;
    var rate=120;
    var total=quantity*rate; 
    out.push(total);

    
}

var sugar=elements[2];
if(sugar==1){
    var quantity=2;
    var rate=42;
    var total=quantity*rate; 
    out.push(total);
}


var pulse=elements[3];
if(pulse==1){
    var quantity=3;
    var rate=53;
    var total=quantity*rate; 
    out.push(total);
}

var bread=elements[4];

if(bread==1){
    var quantity=2;
    var rate=40;
    var total=quantity*rate;
    out.push(total); 
}

var milk=elements[5];

if(milk==1){
    var quantity=5;
    var rate=32;
    var total=quantity*rate; 
    out.push(total);

}

var oil=elements[6];

if(oil==1){
    var quantity=2;
    var rate=126;
    var total=quantity*rate; 
    out.push(total);
}



var sum=0;
for(var i=0;i<out.length;i++){
    sum=sum+out[i];
}
console.log(sum*4);