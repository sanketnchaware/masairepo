function diagonal_diff(a) {
  var d1_sum = 0;
  var d2_sum = 0;
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a[i].length; j++) {
      if (i === j) {

        d1_sum = d1_sum + a[i][j];
      }
      if (i + j === a.length - 1) {
        d2_sum = d2_sum + a[i][j];
      }
    }
  }

  var res = d1_sum - d2_sum;
  console.log(res);
}

function runProgram(input) {
  input = input.trim().split("\n");

  var arr = [];
  for (var i = 0; i < input.length; i++) {
    arr.push(input[i].trim().split(" ").map(Number));
  }

  diagonal_diff(arr);
}
if (process.env.USERNAME === "hp") {
  runProgram(`1 2 3 4
  5 6 7 6
  7 8 9 9
  2 4 1 3`);
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
