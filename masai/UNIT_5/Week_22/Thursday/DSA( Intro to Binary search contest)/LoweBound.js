const LowerBound = (arr, key, low, high, res) => {
  while (low <=high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (key == arr[mid]) {
      res = mid;
      high = mid - 1;
    } else if (key < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return res;
};

function runProgram(input) {
  var input = input.split("\n");
  var [len, key] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);
  var low = 0;
  var high = len - 1;
  var res = -1;
  var output = LowerBound(arr, key, low, high, res);
  console.log(output);
}
if (process.env.USERNAME === "hp") {
  runProgram(`10 7
  0 2 4 4 5 5 7 7 9 10`);
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
