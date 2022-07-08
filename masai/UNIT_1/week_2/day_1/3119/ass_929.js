
var year =2014;
if ((year % 400== 0) && ((year %4==0) || (year%100!= 0))) {
    console.log(year ,"Its a Leap Year");
}
else{
    console.log(year,"Not a leap year");
}