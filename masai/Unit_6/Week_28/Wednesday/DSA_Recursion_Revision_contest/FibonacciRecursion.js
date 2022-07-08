function FibN(N) {
  if (N == 0) {
    return 0;
  }
  if (N == 1) {
    return 1;
  }
  return FibN(N - 1) + FibN(N - 2);
}

function runProgram(input) {
  // Write code here
  var input = +input;


  const res = FibN(input);
  console.log(res);
}
if (process.env.USERNAME === "hp") {
  runProgram(`15`);
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
