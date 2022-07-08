function runProgram(input) {
    input = input.trim().split("\n");
    var [nums, targets] = input[0].trim().split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
  
    var count = 0;
    for (var i = 0; i < nums; i++) {
      var sum = 0;
      for (var j = 1; j < nums; j++) {
        if (arr[i] != [j]) {
          sum = arr[i] + arr[j];
          if (sum == targets) {
            count++;
          }
        }
      }
    }
    console.log(Math.ceil(count / 2));
  }
  if (process.env.USERNAME === "hp") {
    runProgram(`5 9
    3 0 6 2 7`);
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
  