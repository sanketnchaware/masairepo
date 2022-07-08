function runProgram(input) {
  input = input.trim().split("\n");
  

  var cases = +input[0];

  var line = 1;
  for (var i = 0; i < cases; i++) {
    var length = +input[line];

    line++;
    var arr = [];
    for (var j = 0; j < length; j++) {
      var Arr = input[line].trim().split(" ").map(Number);
      arr.push(Arr[j]);
    }

    line++;
    var sum = 0;
    var n = 1;
    for (var z = 0; z < arr.length; z++) {
      sum = sum + arr[z] * n;
      n++;
    }
    console.log(sum);
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`2
    5
    1 2 3 4 5
    2
    100 1`);
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
