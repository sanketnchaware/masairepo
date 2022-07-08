const recursiveBinarySearch = (arr, key, low, high) => {
  if (low > high) {
    return -1;
  }
  var mid = Math.floor(low + Math.floor((high - low) / 2));
  if (key === arr[mid]) {
    return 1;
  } else if (key < arr[mid]) {
    return recursiveBinarySearch(arr, key, low, mid - 1);
  } else {
    return recursiveBinarySearch(arr, key, mid + 1, high);
  }
};

function runProgram(input) {
  var input = input.trim().split("\n");
  var [len, key] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);

  var low = 0;
  var high = len - 1;

  var result = recursiveBinarySearch(arr, key, low, high);
  console.log(result);
}
if (process.env.USERNAME === "hp") {
  runProgram(`5 4
    2 -2 0 3 4`);
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
