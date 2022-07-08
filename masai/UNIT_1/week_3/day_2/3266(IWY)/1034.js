var a = [
  [1, 2, 3],
  [5, 6, 7],
  [7, 8, 9],
];
var r=a.length;
var c=a[0].length;
var sum1 = 0;
for (i = 0; i < r; i++)
for (j = 0; j < c; j++) {
    if (i <= j) {
        sum1 = sum1+a[i][j];
    }
}
console.log(sum1);




