function FindGP(n, r) {
  if (n == 0) {
    return 1;
  }
  return 1 / r ** n + FindGP(n - 1, r);
}

function runProgram(input) {
  var [n, r] = input.trim().split(" ").map(Number);

  console.log(FindGP(n, r).toFixed(4));
}
if (process.env.USERNAME === "hp") {
  runProgram(`1 1`);
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
