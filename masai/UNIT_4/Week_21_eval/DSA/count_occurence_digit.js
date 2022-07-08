const CountOccurence = () => {

    
};

function runProgram(input) {
  var input = input.trim().split("\n");
  var cases = +input[0];
  var line = 1;
  for (var i = 0; i < cases; i++) {
    var len = +input[line];
    line++;
    var arr = input[line].trim().split("").map(Number);
    line++;
    console.log(len, arr);
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`2
    5
    21321
    6
    235452`);
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
