//----------------------------------------------//
//1.//
var a = 1;
var b = 2;
if (a > b) {
  console.log("A is greater");
} else if (b > a) {
  console.log("B is greater");
} else {
  console.log("A and B are same");
}

//--------------------------------------------//
//2.//

var pass1 = "sanket";
var pass2 = "chaware";
if (pass1 !== pass2) {
  console.log("Wrong password");
} else {
  console.log("Passwords are same.");
}

//--------------------------------------------//
//3.//

var num = 15;
if (num % 2 == 1) {
  console.log("Odd Number ");
} else if (num % 2 == 0) {
  console.log("Even Number");
} else {
  console.log("Enter valid number");
}

//--------------------------------------------//
//4.//

var birth = 2005;
var age = 2021 - birth;
if (age >= 20 && age <= 29) {
  console.log("Twenties");
} else if (age >= 13 && age <= 19) {
  console.log("Teenagers");
}

//--------------------------------------------//
//5.//
var age_a =32;
var age_b =74;
var age_c =37;

if( age_a > age_b && age_a> age_c){
    if (age_b >age_c){
        console.log("a b c");
        console.log("c b a");           //descending -  (a b c) , ascending -revers it (c b a) //            
    }
    else {
        console.log("a c b"); 
        console.log("b c a"); 
    }
}

if( age_b > age_a && age_b> age_c){
    if (age_a >age_c){
        console.log("b a c");
        console.log("c a b");    
    }
    else {
        console.log("b c a"); 
        console.log("a c b"); 
    }
}

if( age_c > age_a && age_c> age_b){
    if (age_a >age_b){
        console.log("c a b");   
        console.log("b a c"); 
    }
    else {
        console.log("c b a ");
        console.log("a b c");  
    }
}

//-----------------------------------------------//

//6.//
var a=32;
var b=12;

(a=b)? console.log("Both are Equal"):console.log("Different");

//-----------------------------------------------//

//7.//
var day = "October";
switch (day) {
    case "January" :
        console.log("Jan");
        break;
    case "February" :
        console.log("Feb");
        break;
    case "September" :
        console.log("Sept");
        break;
    case "November" :
        console.log("Nov");
        break;  
    case "December":
        console.log("Dec");
        break;
    case "August" :
        console.log("Aug");
        break;
    case "March":
        console.log("Mar");
        break;  
    case "October":
        console.log("Oct");    
    
            
}

