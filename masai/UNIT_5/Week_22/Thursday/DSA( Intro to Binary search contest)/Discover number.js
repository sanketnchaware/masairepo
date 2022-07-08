const DiscoverNumber = (arr, key, low, high) => {
  var mid = Math.floor(low + Math.floor(high - low) / 2);
  if (low > high) {
    return "NO";
  }
  if (key == arr[mid]) {
    return "YES";
  } else if (key < arr[mid]) {
    return DiscoverNumber(arr, key, low, mid - 1);
  } else {
    return DiscoverNumber(arr, key, mid + 1, high);
  }
};

function runProgram(input) {
  var input = input.trim().split("\n");
  var [len, queries] = input[0].trim().split(" ").map(Number);

  var arr = input[1].trim().split(" ").map(Number);
  var arr = arr.sort((a, b) => {
    return a - b;
  });
  var low = 0;
  var high = len - 1;
  for (var key = 2; key < input.length; key++) {
    var result = DiscoverNumber(arr, input[key], low, high);
    console.log(result);
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`5 10
    50 40 30 20 10
    10
    20
    30
    40
    50
    60
    70
    80
    90
    100`);
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
