function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0];
  console.log("cases:", cases);

  var arr = input[1].trim().split(" ").map(Number);
  console.log("arr:", arr);
  var target = +input[2]
  console.log('target:', target)
}
if (process.env.USERNAME === "hp") {
  runProgram(`9
    1 2 3 4 5 6 7 8 9
    5`);
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
