var arr = [0, 1, 0, 1, 1, 1, 0, 2, 2, 0];

var obj = {};

for (var i = 0; i < arr.length; i++) {
  if (obj[arr[i]]) {
    obj[arr[i]]++;
  } else {
    obj[arr[i]] = 1;
  }
}


var res=" "
for (key in obj) {
 res=res+" "+(obj[key]);
}

console.log(res);
