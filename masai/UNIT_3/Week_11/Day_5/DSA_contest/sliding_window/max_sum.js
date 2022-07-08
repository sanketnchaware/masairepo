var arr = [2, 1, 5, 1, 3, 2];
var k = 3;

var sum = 0;
maxSum = 0;

var i = 0;
var j = 0;

while (j < arr.length) {
  sum = sum + arr[j];
  if (j - i + 1 < k) {
    j++;
  } else if (j - i + 1 === k) {
    maxSum = Math.max(maxSum, sum);
    sum = sum - arr[i];
    i++;
    j++;
  }
}

console.log(maxSum);
