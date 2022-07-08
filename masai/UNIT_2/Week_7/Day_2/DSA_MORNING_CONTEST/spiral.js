function runProgram(input) {
    var input = input.trim().split("\n");
    var n = +input[0];
    var arr = [];
    for (var i = 1; i < input.length; i++) {
      arr.push(input[i].trim().split(" ").map(Number));
    }
  
    var left = 0,
      right = n - 1;
    top = 0;
    bottom = n - 1;
    var size = n * n;
    var count = 0;
    var result = [];
    while (count < size) {
      for (var i = left; i <= right; i++) {
        result.push(arr[top][i]);
        count++;
      }
      top++;
      for (var i = top; i <= bottom; i++) {
        result.push(arr[i][right]);
        count++;
      }
      right--;
      for (var i = right; i >= left; i--) {
        result.push(arr[bottom][i]);
        count++;
      }
      bottom--;
      for (var i = bottom; i >= top; i--) {
        result.push(arr[i][left]);
        count++;
      }
      left++;
    }
    console.log(result.join(" "));
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
  