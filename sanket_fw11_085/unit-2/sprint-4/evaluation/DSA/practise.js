function runProgram(input) {
    input = input.trim().split("\n");
    var cases = +input[0];
    var line = 1;
    for (var i = 0; i < cases; i++) {
      var n = +input[line];
      line++;
      var arr = input[line].trim().split(" ").map(Number);
      line++;
      console.log(arr)
  
     
  }
  if (process.env.USERNAME === "hp") {
    runProgram(`2
      3
      1 1 3 2 2
      5
      1 4 3 5 4 3 2 2 1`);
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
  