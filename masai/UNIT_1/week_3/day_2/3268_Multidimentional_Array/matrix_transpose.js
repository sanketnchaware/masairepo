function runProgram(input) {
  input = input.trim().split("\n");
  var matrix = [];
  for (var i = 0; i < input.length; i++) {
    matrix.push(input[i].trim().split(" ").map(Number));
  }
  
  var result = [];
  for (let i = 0; i < matrix[0].length; i++) {
    var trans = [];
    for (let j = 0; j < matrix.length; j++) {
      trans.push(matrix[j][i]);
    }
    result.push(trans);
  }
  console.log(result);
}
if (process.env.USERNAME === "hp") {
  runProgram(`1 2 3
    4 5 6
    7 8 9
    1 2 3`);
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
