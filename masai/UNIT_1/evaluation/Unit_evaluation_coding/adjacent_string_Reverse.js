function runProgram(input) {
  input = input.trim().split("\n");

  var len = Number(input[1]);
  var char = input[2].trim().split("");


  

}
if (process.env.USERNAME === "hp") {
  runProgram(`1
    12
   rutwik`);
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
