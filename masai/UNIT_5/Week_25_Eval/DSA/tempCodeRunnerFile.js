const Lifting_fingers = function (arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] != arr[i + 1]) {
      count++;
    }
  }
  console.log(count);
};

function runProgram(input) {
  var input = input.trim().split("/n");

  var len = +input[0];

  for (var i = 1; i <= len; i++) {
    Lifting_fingers(input[i].trim().split(""));
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`2/naaaaa/nabbbaaz`);
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
