function runProgram(input) {
  input = input.trim().split("\n");
  var nums = input[0];
  var arr = input[1].trim().split(" ").map(Number);
  var count = 0;
  if (arr[0] > arr[1]) {
    count++;
  }
  if (arr[arr.length - 1] > arr[arr.length - 2]) {
    count++;
  }
  for (var i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1] && arr[i] > arr[i - 1]) {
      count++;
    }
  }
  console.log(count);
}
if (process.env.USERNAME === "hp") {
  runProgram(`8
    1 2 3 4 2 1 6 5`);
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
