var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var low = "abcdefghijklmnopqrstuvwxyz";
var char="SaNkYaA";
var input=char.trim().split("");
console.log(input);
var cap=[];
var small=[];
for(var i=0;i<char.length;i++){
   
   for(var j=0;j<upper.length;j++){
    
    if(input[i]==upper[j]){
        console.log(input[i]);
        cap.push(input[i]);
    }
   }
   for(var z=0;z<low.length;z++){
    
    if(input[i]==low[z]){
        console.log(input[i]);
        small.push(input[i]);
    }
   }
}
console.log(cap);
console.log(small);

for(var c=0;c<cap.length;c++){
    if(cap[c]==upper)
}