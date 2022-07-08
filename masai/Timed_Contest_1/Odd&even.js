function OddEven(arr) {
  var Even_sum = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      Even_sum += arr[i];
    }
  }

  var Odd_sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      Odd_sum += arr[i];
    }
  }

  if (Odd_sum > Even_sum) {
    console.log("Odd");
  } else {
    console.log("Even");
  }
}

function runProgram(input) {
  var input = input.trim().split("\n");
  var arr = input[1].trim().split(" ").map(Number);

  OddEven(arr);
}
if (process.env.USERNAME === "hp") {
  runProgram(`4
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
