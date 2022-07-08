Fib = (N) => {
  var N1 = 0;
  var N2 = 1;

  if (N === 0) {
    return 1;
  }
  N3 = N1 + N2;
  N1 = N2;
  N2 = N3;
  
  console.log(N3)
  Fib(N-1)+Fib(N-2)




};

function runProgram(input) {
  var input = +input[0];
  console.log("input:", input);

  Fib(input);
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
