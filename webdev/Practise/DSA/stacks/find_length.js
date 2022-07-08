function FindLength(arr) {
  if (arr.length == 0) {
    return 0;
  }
  return 1 + FindLength(arr.slice(1));
}

function runProgram(input) {
  var word = input.trim().split("");
  console.log(FindLength(word));
}
if (process.env.USERNAME === "hp") {
  runProgram(`masaischool`);
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
