const iterativeBinarySearch = (arr, key, low, high) => {
  while (low <= high) {
    var mid = Math.floor(low + Math.floor((high - low) / 2));

    if (arr[mid] === key) {
      return 1;
    } else if (arr[mid] > key) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
    return -1;
  }
};

function runProgram(input) {
  var input = input.trim().split("\n");
  var [len, key] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);

  var low = 0;
  var high = len - 1;

  var result = iterativeBinarySearch(arr, key, low, high);
  console.log(result);
}
if (process.env.USERNAME === "hp") {
  runProgram(`6 5
  11 34 5 4 21 0`);
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
