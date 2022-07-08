function runProgram(input) {
  for (var i = 0; i <5;i++) {
      for (var j = 0; j <5; j++) {
          if((i==0 && j==4) || (i==0 && j==0)){
              console.log(i,j)
          }
          else{
              console.log(" ");
          }
      }
  }
   
  }
  if (process.env.USERNAME === "hp") {
    runProgram(`5`);
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
  
  