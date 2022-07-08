var  matrixA = [
  [1, 2, 3],
  [5, 6, 7],
  [7, 8, 9],
];
var  matrixB = [
  [2, 1, 2],
  [1, 2, 1],
  [2, 1, 2],
];


var result = [];
for (var i = 0; i < matrixA.length; i++) {
    var row = [];
    for (var j = 0; j < matrixA[i].length; j++) {
      row.push(matrixA[i][j] + matrixB[i][j]);
    }
    result.push(row);
  }
  console.log(result);