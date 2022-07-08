function runProgram(input) {
  input = input.trim().split("\n");
  var [layers, rows, cols] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);
  var res_array = [];
  var count = 0;
  for (var i = 0; i < layers; i++) {
    var A = [];
    for (var j = 0; j < rows; j++) {
      var B = [];
      for (var k = 0; k < cols; k++) {
        B.push(arr[count++]);
      }
      A.push(B.join(" "));
    }
    res_array.push(A.join("\n"));
  }
  console.log(res_array.join("\n"));
}
if (process.env.USERNAME === "hp") {
  runProgram(`2 2 2
    1 2 3 4 5 6 7 8
    `);
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
