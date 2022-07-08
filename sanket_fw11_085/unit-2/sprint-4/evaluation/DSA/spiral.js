var arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];


var N = arr.length;

var top=0;
var bottom=N-1;
var right=N-1;
var left=0;
var size=N*N;
var count=0;
var out=[];
while(count<size){

    
    for (var i=top; i<N; i++){
        if(count==size){
        break;
        }
        out.push(arr[i][right]);
        count++;
       
    }
    right--;
    for (var i=right; i>=0; i--){
        if(count==size){
            break;
            }
            out.push(arr[bottom][i]);
       count++;
       
    }
    bottom--;
    for (var i=bottom; i>=0; i--){
        if(count==size){
            break;
            }
            out.push(arr[left][i]);
       count++;
       
    }
    

  





}

console.log(out.join(" "));