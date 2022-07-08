function add(res) {
  var sum = 0;
  for (var i = 0; i < res.length; i++) {
    sum = sum + res[i];
  }
  return sum;
}

function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0];
  var line = 1;
  var stack = [];

  for (var i = 0; i < cases; i++) {
    var len = +input[line];
    line++;

    var arr = input[line].trim().split(" ").map(Number);
    line++;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1] && arr[i + 1] > arr[i + 2]) {
        stack.push(arr[i + 1]);
        stack.push(arr[i + 2]);
      }
    }

    if (add(stack)) {
      console.log(add(stack));
    } else {
      console.log(0);
    }
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`2
    4
    4 3 1 2
    4
    1 2 3 4`);
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
