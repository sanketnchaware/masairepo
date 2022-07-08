function runProgram(input) {
  input = input.trim().split("\n");

  var [rows, cols] = input[0].trim().split(" ").map(Number);
  var arr = [];
  for (var i = 1; i <= rows; i++) {
    arr.push(input[i].trim().split(" ").map(Number));
  }

  var sum = 0;
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      var n = arr[i][j];

      if (n % 3 == 0) {
        sum = sum + n;
      }
    }
  }
  console.log(sum);
}
if (process.env.USERNAME === "hp") {
  runProgram(`2 3
    3 1 8
    2 6 0`);
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
