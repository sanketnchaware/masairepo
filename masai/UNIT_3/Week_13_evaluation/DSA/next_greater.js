function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0];
  var len = +input[1];
  var arr = input[2].trim().split(" ").map(Number);

  var res = [];
  for (var i = 0; i < len; i++) {
    if (arr[i + 1] > arr[i]) {
      res.push(arr[i]);
    }
  }

  let sum = 0;
  for (var z = 0; z < res.length; z++) {
    sum = sum + res[z];
  }

  console.log(sum);
}
if (process.env.USERNAME === "hp") {
  runProgram(`1
  5
  2 3 5 8 3`);
  runProgram(`1
  6
  6 10 4 8 3 7`);


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
