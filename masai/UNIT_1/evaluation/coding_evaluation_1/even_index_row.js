function runProgram(input) {
  input = input.trim().split("\n");
  var [rows, cols] = input[0].trim().split(" ").map(Number);
  var arr = [];
  for (var i = 1; i <= rows; i++) {
    arr.push(input[i].trim().split(" ").map(Number));
  }



  var arr1 = [];

  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      if (i % 2 == 0) {
        arr1.push(arr[i].join(" "));
        console.log(arr[i]);
        break;
      }
    }
  }
  console.log(arr1.join("\n"));
}
if (process.env.USERNAME === "hp") {
  runProgram(`3 3
    1 2 3 
    4 5 6
    7 8 9`);
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
