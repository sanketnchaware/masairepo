function sum_mat(matrix) {
  var sum = 0;
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      sum = sum + matrix[i][j];
    }
  }
  return sum;
}

function runProgram(input) {
  arr=input.trim().split("\n");
  console.log(arr);
  var [rows1, col1] = input[0].trim().split(" ").map(Number);
  console.log(rows1,col1);
 
 
}

if (process.env.USERNAME === "hp") {
  runProgram(`3 4
    1 2 3 4
    0 5 6 1
    9 3 0 8
    2 2
    8 8
    8 8`);
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
