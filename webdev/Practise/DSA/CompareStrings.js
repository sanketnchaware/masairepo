const a = "202";
const b = "232";

var sum1 = 0;
for (var i = 0; i < a.length; i++) {
  var c1 = a.charCodeAt(i);
  sum1 = sum1 + c1;
}

var sum2 = 0;
for (var z = 0; z < b.length; z++) {
  var c2 = b.charCodeAt(z);
  sum2 = sum2 + c2;
}

if (sum1 > sum2) {
  console.log("True");
} else if (sum1 < sum2) {
  console.log("False");
} else {
  console.log("False");
}

