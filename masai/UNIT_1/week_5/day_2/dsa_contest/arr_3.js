function runProgram(input) {
  var input = input.trim().split("\n");
  var [rows, cols] = input[0].trim().split(" ").map(Number);
  var arr = [];
  for (var i = 1; i < input.length; i++) {
    arr.push(input[i].trim().split(" ").map(Number));
  }
  var result = [];
  for (var i = 0; i < rows; i++) {
    if (i % 2 == 0) {
      for (var j = cols - 1; j >= 0; j--) {
        result.push(arr[i][j]);
      }
    } else if (i % 2 == 1) {
      for (var j = 0; j < cols; j++) {
        result.push(arr[i][j]);
      }
    }
  }
  console.log(result.join(" "));
}
if (process.env.USERNAME === "hp") {
  runProgram(`5 5
    4 7 1 1 7
    8 9 9 6 1
    6 4 9 5 1
    7 7 4 7 7
    8 6 2 5 5`);
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
