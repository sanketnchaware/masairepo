Fib = (n) => {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }

  return Fib(n - 1) + Fib(n - 2);
};

function runProgram(input) {
  var input = +input;
  var res = Fib(input);
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
