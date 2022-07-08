function runProgram(input) {
  input = input.trim().split("\n");

  var num = Number(input[0]);
  var arr = [];

  var total = +input[0];

  var arr = input[1].trim().split(" ").map(Number);

  var maxCount = 0;
  var mf = 0;
  for (var i = 0; i < total; i++) {
    count = 0;
    for (var j = 0; j < total; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }
    if (count > maxCount) {
      maxCount = count;
      mf = arr[i];
    }
  }
  console.log(mf);
}
if (process.env.USERNAME === "hp") {
  runProgram(`7
    0 2 0 6 9 2 6`);
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
