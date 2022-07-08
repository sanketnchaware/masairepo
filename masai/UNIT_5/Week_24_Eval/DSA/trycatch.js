function Buggy(arr, key, low, high) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == key) {
      return i;
    }
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
