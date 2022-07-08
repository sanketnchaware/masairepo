P= (number, power) => {
  if (power == 0) {
    return 1;
  }
  return number * P(number,power-1);
};

var out = P(2, 4);
console.log("out:", out);
