function runProgram(input) {
  input = input.trim().split("\n");
  var test = Number(input[0]);
  
  var line = 1;
  var out = [];
  for (var i = 0; i < test; i++) {
    var num = Number(input[line]);
    line++;
    var matrix = [];
    for (var j = 0; j < num; j++) {
      matrix.push(input[line].trim().split(" ").map(Number));
      line++;
    }

    var res = [];
    for (var i = num - 1; i > 0; i--) {
      for (var j = 0; j < num; j++) {
        if (j == 0) {
          res.push(matrix[i][j]);
        }
      }
    }

    for (var i = 0; i < num; i++) {
      for (var j = 0; j < num; j++) {
        if (i == j) {
          res.push(matrix[i][j]);
        }
      }
    }

    for (var i = num - 2; i >= 0; i--) {
      for (var j = 0; j <= num; j++) {
        if (j == num - 1) {
          res.push(matrix[i][j]);
        }
      }
    }
    out.push(res.join(" "));
  }
  console.log(out.join("\n"));
}
if (process.env.USERNAME === "hp") {
  runProgram(`8
  2
  6 4
  3 5
  2
  7 3
  9 7
  3
  8 4 2
  1 2 5
  8 6 1
  4
  3 8 2 7
  8 6 9 2
  7 5 7 4
  7 2 7 3
  7
  1 3 1 5 5 3 4
  5 8 6 4 1 8 2
  7 9 7 4 8 6 4
  2 1 9 1 5 9 9
  7 3 4 9 7 9 3
  1 1 5 9 5 5 4
  8 9 8 7 1 3 8
  3
  5 9 3
  9 3 6
  5 7 2
  2
  9 6
  1 7
  1
  5 `);
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
