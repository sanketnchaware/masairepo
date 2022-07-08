function divisible(num) {
  if (num % 3 == 0) {
    return true;
  }
  return false;
}

var limit = 15;
for (var i = 1; i <= limit; i++) {
  if (divisible(i)) {
    console.log(i);
  }
}
