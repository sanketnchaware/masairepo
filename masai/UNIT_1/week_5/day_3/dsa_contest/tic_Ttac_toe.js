function runProgram(input) {
  var input = input.trim().split("\n");

  var matrix = [];
  for (var i = 0; i < input.length; i++) {
    matrix.push(input[i].trim().split(" "));
  }
  console.log(matrix);

  for (var r = 0; r < matrix.length; r++) {
    for (var c = 0; c < matrix.length; c++) {
      if (
        matrix[r][c] != 0 &&
        matrix[r][c] == matrix[r][c + 1] &&
        matrix[r][c + 1] == matrix[r][c + 2]
      ) {
        console.log("yes1");
        break;
      }
    }
  }

  

 

  
}





if (process.env.USERNAME === "hp") {
  runProgram(`o o x
    o x x
    o o o`);
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
