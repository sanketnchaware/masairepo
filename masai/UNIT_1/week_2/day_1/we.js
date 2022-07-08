//1.//
var a = 4;
var b = 5;
if (a<b){
    console.log("A is smaller");
}
else if(b<a){
    console.log("B is smaller");

} 

//----------------------------------------------//
//2.//

var pass1="sanket";
var pass2="chaware"
 if(pass1 !== pass2){
     console.log("Wrong password");
 }

 //--------------------------------------------//
//3.

var num = 3;
if (num %2 == 1){
    console.log("Odd Number ")
}

//-------------------------------//

//4.//
var birth =1998;
var age = 2021-birth;
if (age>=20 && age<=29)
{
    console.log("Twenties");
}

//------------------------//

//5.//

var age_a =32;
var age_b =74;
var age_c =37;

if( age_a > age_b && age_a> age_c){
    if (age_b >age_c){
        console.log("a b c");          //descending -  (a b c) , ascending -revers it (c b a) //            
    }
    else {
        console.log("a c b"); 
    }
}

if( age_b > age_a && age_b> age_c){
    if (age_a >age_c){
        console.log("b a c");   
    }
    else {
        console.log("b c a"); 
    }
}

if( age_c > age_a && age_c> age_b){
    if (age_a >age_b){
        console.log("c a b");   
    }
    else {
        console.log("c b a "); 
    }
}

//-----------------------------------------------//

//6.//
var a=32;
var b=12;

( a>b )? console.log("A is Greater"):console.log("B  is Greater");

//-----------------------------------------//

//7.//

var day = "Saturday" 
switch (day) {
    case "Monday" :
        console.log("Mon");
        break;
    case "Tuesday" :
        console.log("Tues");
        break;
    case "Wednesday" :
        console.log("Wednes");
        break;
    case "Thursday" :
        console.log("Thurs");
        break;  
    case "Friday":
        console.log("Fri");
        break;
    case "Saturday" :
        console.log("Satur");
        break;
    case "Sun" :
        console.log("Sunday");
        break;
            
}

//-----------------------------------------//