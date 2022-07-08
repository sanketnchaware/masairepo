function runProgram(input) {
  input = input.trim().split("\n");
  var [len, k] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);

  var sum = 0;
  var maxSum = 0;

  var i = 0;
  var j = 0;

  while (j < len) {
    sum = sum + arr[j];
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      maxSum = Math.max(maxSum, sum);
      sum = sum - arr[i];
      i++;
      j++;
    }
  }

  console.log(maxSum);
}
if (process.env.USERNAME === "hp") {
  runProgram(`10 3
    -1 -1 -2 1 -2 4 1 9 3 9`);
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
