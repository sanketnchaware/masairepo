function Factorial(f) {
  if (f <= 1) {
    return 1;
  }
  return f * Factorial(f - 1);
}
function EPowerX(x, n) {
  if (n == 0) {
    return 1;
  }
  var value = Math.pow(x, n);
  return value / Factorial(n) + EPowerX(x, n - 1);
}

function runProgram(input) {
  var [x, n] = input.trim().split(" ").map(Number);
  console.log(EPowerX(x, n).toFixed(4));
}

if (process.env.USERNAME === "hp") {
  runProgram(`4 2`);
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
