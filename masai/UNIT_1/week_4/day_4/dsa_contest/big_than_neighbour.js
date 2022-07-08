function runProgram(input) {
    input = input.trim().split("\n");
  
    var total = Number(input[0]);
    var arr = input[1].trim().split(" ").map(Number);
    var count = 0;
    if (arr[0] > arr[1]) {
      count++;
    }
    if (arr[total - 1] > arr[total - 2]) {
      count++;
    }
  
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
        count++;
      }
    }
  
    console.log(count);
  }
  if (process.env.USERNAME === "hp") {
    runProgram(`5
      8 0 -2 1 -4`);
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
  