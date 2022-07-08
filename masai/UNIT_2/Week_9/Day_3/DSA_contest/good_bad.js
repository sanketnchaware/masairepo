function convertString(str) {}

function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0];
  for (var i = 1; i <= cases; i++) {
    var arr = input[i].trim().split("");
    console.log(arr);
    convertString(arr);
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`3
    abb
    aaab
    ababa`);
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



