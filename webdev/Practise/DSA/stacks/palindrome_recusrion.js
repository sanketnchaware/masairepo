function Palindrome(str, l, r) {
  if (l == r) {
    return true;
  }
  if (l != r) {
    return false;
  } else if (l < r) {
    Palindrome(str, l + 1, r - 1);
  }
}

var str = "sa";
var l = str[0];
var r = str[str.length - 1];
var res = Palindrome(str, l, r);
console.log("res:", res);
