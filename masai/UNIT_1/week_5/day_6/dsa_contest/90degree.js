function runProgram(input) {
    input=input.trim().split("\n");
    console.log(input);
   var N=Number(input[0])
   console.log(N);
   var matrix=[];
   for(var i=0;i<N;i++) {
       matrix.push(input[i].trim().split(" ").map(Number));
   }
   console.log(matrix);



   var result =[];
   for(var x=0;x<N;x++) {
       var mat=[];
       for(var y=N-1;y>=0;y--) {
           mat.push(matrix[x][y]);
       }
       result.push(mat);
   }
console.log(result);





  }
  if (process.env.USERNAME === "hp") {
    runProgram(`4
    1 2 3 4
    5 6 7 8
    1 2 3 4
    5 6 7 8`);
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
  
  
