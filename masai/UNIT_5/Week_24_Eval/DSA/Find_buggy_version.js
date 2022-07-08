function Buggy(arr, key, low, high) {
  if (low > high) {
    return -1;
  }
  var mid = Math.floor(low + (high - low) / 2);
  if (key < arr[mid]) {
    return Buggy(arr, key, low, mid - 1);
  } else if (key > arr[mid]) {
    return Buggy(arr, key, mid + 1, high);
  } else {
    return mid;
  }
}

function runProgram(input) {
  input = input.trim().split("/n");
  //   console.log("input:", input);
  var len = +input[0];
  //   console.log("len:", len);
  var arr = input[1].trim().split(" ").map(Number);
  //   console.log("arr:", arr);

  var key = 1;
  var out = Buggy(arr, key, (low = 0), (high = arr.length - 1));
  console.log(out);
}
if (process.env.USERNAME === "hp") {
  runProgram(`5/n0 0 0 1 1`);
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
