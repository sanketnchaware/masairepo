function Natural_sum(num) {
  if (num == 0) {
    return 0;
  }
  var pre_sum = Natural_sum(num - 1);

  return num + pre_sum;
}

function runProgram(input) {
  var input = +input;
  console.log("input:", input);
  var out = Natural_sum(input);
  console.log("out:", out);
}
if (process.env.USERNAME === "hp") {
  runProgram(`4`);
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
