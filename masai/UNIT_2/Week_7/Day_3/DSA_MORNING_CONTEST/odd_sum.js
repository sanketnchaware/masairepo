function evenSumBelowN(num) {
    var sum = 0;
    for (var i = 0; i <=num; i++) {
      if (i % 2 == 0) {
        sum = sum + i;
      }
    }
    console.log(sum);
}


function runProgram(input) {
  var n = +input[0];
  evenSumBelowN(n)


}
if (process.env.USERNAME === "hp") {
  runProgram(`8`);
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
