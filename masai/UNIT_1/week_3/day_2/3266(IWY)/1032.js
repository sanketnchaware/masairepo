var items = [
  [1, 2, 3],
  [5, 6, 7],
  [7, 8, 9],
];

var rows = items.length;
var col = items[0].length;

for (var i = 0; i < col; i++) {
    var sum=0;
  for (var j = 0; j < rows; j++) {
    
    sum=sum+items[j][i];
  }
  console.log(sum);
}
