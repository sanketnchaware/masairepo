var sum_even=0,sum_odd=0;
var num=[34,-87,23,12,98,-2,0];
console.log("array length",num.length);
for(var i=0;i<=num.length;i++){
    if(num[i]%2==0){
        sum_even=sum_even+num[i];
    }
   
    else if(num[i]%2==1) {
        sum_odd=sum_odd+num[i];
    }
    
}
console.log(sum_even/num.length);
console.log(sum_odd/num.length);