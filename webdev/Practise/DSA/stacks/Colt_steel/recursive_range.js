function Range(n) {
  if (n === 0) {
    return 0;
  }

  return n + Range(n - 1);
}

var N = 4;
var res = Range(N);
console.log("res:", res);
