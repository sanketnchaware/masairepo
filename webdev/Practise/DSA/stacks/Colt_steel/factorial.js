Fact = (n) => {
  if (n <= 1) {
    return 1;
  }

  return n * Fact(n - 1);
};

var res = Fact(5);
console.log("res:", res);
