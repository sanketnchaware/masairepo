signalCapacity = (arr, stack, ans) => {
  for (var i = 0; i < arr.length; i++) {
    if (stack.length == 0) {
      ans.push(1);
      stack.push(arr[i]);
    } else if (stack[stack.length - 1] < arr[i]) {
      ans.push[stack[stack.length - 1]];
      stack.push(arr[i]);
    } else {
      while (stack.length > 0 && stack[stack.length - 1] > arr[i]) {
        stack.pop();
      }
      if()
    }
  }
};
function runProgram(input) {
  var input = input.split("\n");
  var t = +input[0];
  var line = 1;
  for (var i = 0; i < t; i++) {
    var l = +input[line++];
    console.log("l:", l);
    var arr = input[line++].trim().split(" ").map(Number);
    signalCapacity(arr, stack, ans);
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`2
  7
  100 80 60 70 60 75 85
  5
  3 5 0 9 8`);
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
