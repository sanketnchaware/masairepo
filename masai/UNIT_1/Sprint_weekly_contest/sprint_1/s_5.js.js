function isGreater(arr) {
  count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      count++;
    }
  }
  console.log(count);
}

function runProgram(input) {
  input = input.trim().split("\n");
  for (var i = 2; i < input.length; i = i + 2) {
    var num_arr = input[i].trim().split(" ").map(Number);
    var res = isGreater(num_arr);
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`2
    5 
    1 4 2 3 5
    5
    5 4 3 2 1`);
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
