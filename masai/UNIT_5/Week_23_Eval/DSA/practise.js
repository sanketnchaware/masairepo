var arr = [0, 1, 0, 1, 1, 1, 0, 2, 2, 0];
var c,
  c1,
  c2 = 0;

for (var i = 0; i < arr.length; i++) {
  for (var j = i+1; j < arr.length; j++) {
    if (arr[i] == 0) {
      c++;
    } else if (arr[i] == 1) {
      c1++;
    } else {
      c2++;
    }
  }
}

console.log(c + " " + c1 + " " + c2);
