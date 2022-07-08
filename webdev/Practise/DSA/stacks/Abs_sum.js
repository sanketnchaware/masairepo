function Abs(arr, N) {
  if (N == arr.length - 1) {
    return 0;
  }
  return Math.abs(arr[N] - arr[N + 1]) + Abs(arr, N + 1);
}

function runProgram(input) {
  var input = input.trim().split("\n");
  console.log("input:", input);
  var cases = +input[0];
  var line = 1;
  for (var i = 0; i < cases; i++) {
    var len = +input[line];
    line++;
    var arr = input[line].trim().split(" ").map(Number);
    line++;
    console.log(Abs(arr, 0));
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`2
    3
    1 5 2
    5
    3 5 6 1 8`);
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

//////////////////////MADANA BRO//////////////////////////
// function sum(arr, n) {
//     if (n === arr.length - 1) {
//       return 0
//     }
//     return Math.abs(arr[n] - arr[n + 1]) + sum(arr, n + 1)
//   }

//   function runProgram(input) {
//     input = input.split('\n')
//     var cases = +input[0]
//     var line = 1
//     for (let k = 0; k < cases; k++) {
//       var len = +input[line++]
//       var arr = input[line++].split(' ').map(Number)
//       console.log(sum(arr, 0))
//     }
//   }
