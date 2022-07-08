function runProgram(input) {
    var char=input.trim().split("");
    for (var i=0;i<char.length;i=i+2) {
        for (var j=1;j<char.length;j=j+2) {
           console.log(i,j);
        }
        
    }

  }
  if (process.env.USERNAME === "hp") {
    runProgram(`a3b2`);
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
  
  