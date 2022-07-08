var arr=["A", "Good", "Problem"];

 var odd =function(el){
    return el.length%2==1;
}
var sum=function(a,c){
    return a+c.length;
}


var out=arr.filter(odd).reduce(sum,0);
console.log(out);