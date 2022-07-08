function runProgram(input) {
  var input = input.trim().split("\n");
  var N = +input[0];
  var [L, R] = input[1].trim().split(" ").map(Number);
  console.log("[L,R:", [L, R]);
  var count = 0;
  var arr = [];
  for (var i = 1; i <= N; i++) {
    arr.push(i);
  }
  console.log(arr);

  for (var i = 0; i < arr.length; i++) {
    for (var j = i ; j <=arr.length; j++) {
      console.log(arr.slice(arr[i], arr[j]));

      if (arr[L] + (arr[R] % 2) !== 0) {
        count++;
      }
    }
  }
  console.log(count);
}
if (process.env.USERNAME === "hp") {
  runProgram(`3
    0 1`);
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
