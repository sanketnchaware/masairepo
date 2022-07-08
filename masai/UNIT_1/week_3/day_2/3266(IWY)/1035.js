var item = [
  [1, 2, 3],
  [5, 6, 7],
  [7, 8, 9],
];


var rows=item.length;
var col=item[0].length;
for(var i=0;i<rows-1;i++){
    var res=[];
    for(var j=0;j<col-1;j++){
        
        
        res.push(item[i][j]);
        
    }
    
    console.log(res.join(" "));
}