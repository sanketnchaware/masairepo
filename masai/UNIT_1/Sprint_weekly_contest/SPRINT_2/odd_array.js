function runProgram(input) {
  input = input.trim().split("\n");

  var total = Number(input[0]);

  var arr = input[1].trim().split(" ").map(Number);

  var res = [];
  for (var i = 0; i < arr.length; i++) {
    if (i % 2 == 1) {
      res.push(arr[i]);
    }
  }
  console.log(res.join(" "));
}
if (process.env.USERNAME === "hp") {
  runProgram(`5
  1 2 3 4`);
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
