function solve(t, arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] == t) {
        return 1;
      }
    }
  }
  return -1;
}

function runProgram(input) {
  var input = input.split("\n");
  var cases = +input[0];
  var line = 1;
  for (var i = 0; i < cases; i++) {
    var [n, t] = input[line].trim().split(" ").map(Number);
    // console.log("n, t:", n, t);
    line++;
    var arr = input[line].trim().split(" ").map(Number);
    // console.log("arr:", arr);

    var result = solve(t, arr);
    console.log(result);
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`1
    5 2
    3 4 0 5 7`);
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
