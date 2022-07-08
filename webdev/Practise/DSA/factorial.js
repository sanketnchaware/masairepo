// var fact = 1;
// for (var i = 0; i < n; i++) {
//   var fact = fact * (n - i);
// }
// console.log(fact);

function Factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  }
  return n * Factorial(n - 1);
}

let n = 5;
var res = Factorial(n);
console.log("res:", res);
