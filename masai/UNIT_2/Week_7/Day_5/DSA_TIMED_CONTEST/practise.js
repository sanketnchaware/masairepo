
  var vowels=["a","i","o","u"];
  var vowLen=vowels.length;
 
var pre_vow=[];
var obj={};
  for(var i=0;i<vowels.length;i++) {
      var count=0;
      for(var j=0;j<sub.length;j++) {
          if(vowels[i]==sub[j]) {
                count++;
                obj[sub[j]]=count;
          }
      }
  }
  console.log(obj);
for(key in obj) {
    pre_vow.push(key);
}

console.log(pre_vow.join(""));
if(pre_vow.length==vowLen) {
    console.log("YES");
}
else{
    console.log("NO");
}
