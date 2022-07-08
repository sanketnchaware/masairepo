function runProgram(input) {
  var arr = input.trim().split(" ").map(Number);
  var max = 450;
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  if (sum >= max) {
    var res = max - sum;
  } else {
    var res = max - sum;
  }
  console.log(res);

}
if (process.env.USERNAME === "hp") {
  runProgram(`120 120 120`);
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
