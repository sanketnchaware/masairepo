function FindSum(arr, sum) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + FindSum(arr.slice(1));
}

function runProgram(input) {
  var input = input.trim().split("\n");
  var cases = +input[0];
  var line = 1;
  for (var i = 0; i < cases; i++) {
    var len = +input[line];

    line++;
    var arr = input[line].trim().split(" ").map(Number);

    line++;

    console.log(FindSum(arr));
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`3
    5
    6 3 8 2 -4
    5
    -10 -7 10 2 -2
    5
    -4 -5 6 -3 9`);
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
