function runProgram(input) {
  input = input.trim().split("\n");

  var nums = Number(input[0]);

  var arr1 = input[1].trim().split(" ").map(Number);

  var arr2 = input[2].trim().split(" ").map(Number);

  for (var i = 0; i < nums; i++) {
    for (var j = 0; j < nums; j++) {
      if (arr1[i] == arr2[j]) {
        console.log(arr1[i]);
      }
    }
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`3
    4 5 7
    9 2 5`);
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
