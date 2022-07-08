function stepsCount(mat,n){
  

var total=n*n;
var i=0;
var j=0;
var count=0;

while(i<n && j<n && total>0){
    count++;
    if(mat[i][j]=="D"){
        if(i==n-1){
            console.log(count);
            break;
        }
        else{
            total--;
            i++;
        }
    }
    if(mat[i][j]=="U"){
        if(i==0){
            console.log(count);
            break;
        }
        else{
            total--;
            i--;
        }
    }
    if(mat[i][j]=="R"){
        if(j==n-1){
            console.log(count);
            break;
        }
        else{
            total--;
            j++;
        }
    }
    if(mat[i][j]=="L"){
        if(i==0){
            console.log(count);
            break;
        }
        else{
            total--;
            j--;
        }
    }
    
}



}

function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0];
  var line = 1;

  for (var i = 0; i < cases; i++) {
    var n = +input[line];
 
    line++;
    var arr = [];
    for (var j = 0; j < n; j++) {
      arr.push(input[line].trim().split(""));
      line++;
    }

    stepsCount(arr,n);

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`3
    4 
    RRRR
    LLLL
    UUUU
    DDDD
    3
    LRL
    UUU
    DLR
    2
    RL
    DD
    `);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
