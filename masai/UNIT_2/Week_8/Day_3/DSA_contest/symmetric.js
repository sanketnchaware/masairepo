var matrix = [
  [".", ".", "*"],
  ["*", "*", "."],
  [".", ".", "*"],
];

for (var i = 0; i<matrix.length;i++) {
 
    if(matrix[i]==matrix[matrix.length-1]){
        console.log(matrix[i]);
    }
}