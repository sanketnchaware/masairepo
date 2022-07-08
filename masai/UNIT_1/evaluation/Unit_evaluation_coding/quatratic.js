function runProgram(input) {
    var X=Number(input);
    var equation= (X**2) + (2*X) + 1;
    console.log(equation);
   
  }
  if (process.env.USERNAME === "hp") {
    runProgram(`2`);
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
  
  