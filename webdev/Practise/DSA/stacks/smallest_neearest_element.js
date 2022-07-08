function runProgram(input) {
  var input = input.trim().split("\n");
  const arr = input[1].trim().split(" ").map(Number);

  const ans = [];
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (stack.length == 0) {
      stack.push(arr[i]);
      ans.push(-1);
    } else if (stack[stack.length - 1] < arr[i]) {
      ans.push(stack[stack.length - 1]);
      stack.push(arr[i]);
    } else {
      while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
        stack.pop();
      }
      if (stack.length == 0) {
        ans.push(-1);
        stack.push(arr[i]);
      } else {
        ans.push(stack[stack.length - 1]);
        stack.push(arr[i]);
      }
    }
  }
  console.log(ans.join(" "));
}
if (process.env.USERNAME === "hp") {
  runProgram(`8
      39 27 11 4 24 32 32 1`);
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
