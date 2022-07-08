var arr=["A", "Quick", "brown", "FOX", "Jumps", "Over", "A", "lazy", "DOG"];

var str=arr.join("");
console.log(str);


var cap=["A","B","C","D","E","F","G","H","I","J","K",",M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var count=0;
for(var i=0;i<str.length;i++){
    for(var j=0;j<cap.length;j++){
        if(cap[j]==str[i]){
            count++;
        }
    }
}
console.log(count);