// 1 2 1
// 2 1 2 


var matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

var sum=0;
for(var i=0;i<matrix.length;i++){
    for(var j=0;j<matrix[i].length;j++){
        sum=sum + matrix[i][j];
    }
}
console.log(sum);