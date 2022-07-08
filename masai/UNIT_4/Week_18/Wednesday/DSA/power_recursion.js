findPower = (n, p) => {
  if (p == 0) {
    return 1;
  }
  if (p == 1) {
    return n;
  }
  return n * findPower(n, p - 1);
};

function runProgram(input) {
  var [n, p] = input.trim().split(" ").map(Number);

  var res = findPower(n, p);
  console.log(res);
}
if (process.env.USERNAME === "hp") {
  runProgram(`2 4`);
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
