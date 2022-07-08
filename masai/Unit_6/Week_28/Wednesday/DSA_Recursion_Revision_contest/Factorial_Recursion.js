const Fact = (N) => {
  //   console.log('N:', N)
  if (N == 0 || N == 1) {
    return 1;
  } else {
    return N * Fact(N - 1);
  }
};

function runProgram(input) {
  var input = +input;
  const res = Fact(input);
  console.log(res);
}
if (process.env.USERNAME === "hp") {
  runProgram(`5`);
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
