function FindNumber(arr, n) {
  console.log(arr, n);

  var start = 0,
    end = arr.length - 1;
  var mid = end - Math.floor(start + end / 2);
  console.log("mid:", mid);
  while (start < end) {
    if (arr[mid] === n) {
      console.log(mid);
    } else if (n > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}

function runProgram(input) {
  var input = input.trim().split("\n");
  var arr = input[1].trim().split(" ").map(Number);
  var n = +input[2];
  FindNumber(arr, n);
}
if (process.env.USERNAME === "hp") {
  runProgram(`5
    1 2 3 5 6
    4`);
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
