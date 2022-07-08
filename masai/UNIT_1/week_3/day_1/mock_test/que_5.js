

function runProgram(input) {
  var input = input.trim().split(" ").map(Number);

  var n = input.length + 1;

  var sum = 0;
  for (var i = 0; i < input.length; i++) {
    sum = sum + input[i];
  }

  var sum_nterms = (n * (n + 1)) / 2;
  console.log(sum_nterms - sum);
}

if (process.env.USERNAME === "hp") {
  runProgram(`4 5 1 3`);
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
