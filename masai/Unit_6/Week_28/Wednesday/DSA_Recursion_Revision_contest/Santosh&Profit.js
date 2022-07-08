const SandP = (N) => {

};

function runProgram(input) {
  // Write code here
  var input = input.trim().split("\n");
  var cases = +input[0];
  for (var i = 1; i <= cases; i++) {
    var N = +input[i];
    console.log("N:", N);
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`2
    12
    24
    `);
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
