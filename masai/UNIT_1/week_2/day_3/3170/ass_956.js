var num = 64;
var i = 1,
  c = 0;
while (i <= num) {
  if (num % i == 0) {
    c++;
  }
  i++;
}
if (c == 2) {
  console.log(num, "Prime");
} else {
  console.log(num, "Not Prime ");
}
