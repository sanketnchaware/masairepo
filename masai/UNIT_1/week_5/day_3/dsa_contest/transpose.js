function runProgram(input) {
   
    input = input.trim().split("\n");
 
    var [row, col] =input[0].trim().split(" ").map(Number);
  
    var mat=[];
    for (var i=1;i<input.length;i++){
        mat.push(input[i].trim().split(" ").map(Number));
    }
   
   var result=[];
for (var x=0;x<col;x++){
    var transpose=[];
    for (var y=0;y<row;y++){
        transpose.push(mat[y][x]);
    }
    result.push(transpose.join(" "));
}
console.log(result.join("\n"));



  }
  if (process.env.USERNAME === "hp") {
    runProgram(`5 4
    0 0 0 0
    1 1 1 1
    2 2 2 2
    3 3 3 3
    4 4 4 4`);
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
  
  