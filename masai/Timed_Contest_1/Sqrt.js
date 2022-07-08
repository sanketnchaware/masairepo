function sqr(N) {
  var sq = N ** 0.5;
  console.log( Math.floor(sq));
}

function runProgram(input) {
  var input = input.trim().split("\n");
  
  for (var i = 1; i < input.length; i++) {
    
    sqr(+input[i]);
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`2
    4
    8`);
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
