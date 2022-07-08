function runProgram(input) {
  var input = input.trim().split("\n");
  var [total, K] = input[0].trim().split(" ").map(Number);

  var arr = input[1].trim().split(" ").map(Number);

  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] <= K) {
      var sum = sum + arr[i];
    }
  }
  console.log(sum);
}
if (process.env.USERNAME === "hp") {
  runProgram(`4 2
    1 2 3 4`);
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
