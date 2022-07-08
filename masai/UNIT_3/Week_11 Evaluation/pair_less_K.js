function pairK(arr, len, k) {
  let maxSum = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      let s = arr[i] + arr[j];

      if (s < k && i != j) {
        maxSum = Math.max(maxSum, s);
      }
    }
  }
  if (maxSum > 0) {
    return maxSum;
  } else {
    return -1;
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0];
  var line = 1;

  for (var i = 0; i < cases; i++) {
    var len = +input[line];

    line++;
    var arr = input[line].trim().split(" ").map(Number);

    line++;
    var k = +input[line];

    line++;

    console.log(pairK(arr, len, k));
  }
}

if (process.env.USERNAME === "hp") {
  runProgram(`2
    5
    1 2 3 4 5
    7
    3
    30 10 20
    15`);
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
