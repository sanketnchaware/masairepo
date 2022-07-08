var limit = 100;
for (var start = 2; start <= limit; start++) {
  var num = start;
  var c = 0;
  for (var i = 1; i <= num; i++) {
    if (num % i == 0) {
      c++;
    }
  }
  if (c == 2) {
    console.log(num);
  }
}
