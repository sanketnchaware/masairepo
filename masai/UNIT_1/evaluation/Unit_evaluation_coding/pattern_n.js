function runProgram(input) {
   var N=Number(input);
   var square =N*N;
   console.log(square);
var arr=[];
   for (var i=1;i<=square;i++) {
       arr.push(i);
       
   }
console.log(arr);



 


  }
  if (process.env.USERNAME === "hp") {
    runProgram(`4`);
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
  
  