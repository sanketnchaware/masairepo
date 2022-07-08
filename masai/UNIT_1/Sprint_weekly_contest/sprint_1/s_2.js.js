function runProgram(input) {
  var input = input.trim().split(" ").map(Number);

  var target = input[0];
  var n1 = input[1];
  var n2 = input[2];
  var n3 = input[3];
  var n4 = input[4];
  var n5 = input[5];
  var n6 = input[6];

  var sum = n1 + n2 + n3 + n4 + n5 + n6;

  var req_run = target - sum;
  console.log(req_run);
}
if (process.env.USERNAME === "hp") {
  runProgram(`40 6 6 6 6 6 6`);
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
