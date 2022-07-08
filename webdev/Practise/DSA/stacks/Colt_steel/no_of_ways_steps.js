function PossibleSteps(N) {
  if (N < 0) {
    return 0;
  }
  if (N == 0) {
    return 1;
  }
  return PossibleSteps(N - 1) + PossibleSteps(N - 2) + PossibleSteps(N - 3);
}
function runProgram(input) {
  var N = +input;

  var res = PossibleSteps(N);
  console.log(res);
}
if (process.env.USERNAME === "hp") {
  runProgram(`4`);
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
