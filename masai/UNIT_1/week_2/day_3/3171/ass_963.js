var num =  9678;
var letter = String(num);
var mult=1;
for(var i=letter.length-1;i>=0;i--){   
var result=letter[i]*mult;
mult=mult*10;
console.log(result);

}
