function runProgram(input) {
    input=input.trim().split(" ").map(Number);
    

var take=5;
var sum=0;
    for (var i=0; i<input.length; i++) {
        var sum=sum + (take*input[i]);
        take--;
    }
    console.log(sum);
    
   
  }
  if (process.env.USERNAME === "hp") {
    runProgram(`3 2 1 4 5`);
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
  
  