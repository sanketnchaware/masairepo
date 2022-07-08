function runProgram(input) {
  input = input.trim().split("\n");
  var [n, target] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);

  var count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      if (arr[i] + arr[j] == target) {
        count++;
      }
    }
  }
  console.log(count);
}
if (process.env.USERNAME === "hp") {
  runProgram(`5 9
    3 0 6 2 7`);
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
