function runProgram(input) {
    input=input.trim().split(" ").map(Number);
    

    var len=input.length;
    var sorted=input.sort();

    console.log(sorted[len-2]);
   
  }
  if (process.env.USERNAME === "hp") {
    runProgram(`3 7 5`);
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
  
  