const IsTriangle = (arr) => {
  //   console.log(arr);

  if (
    arr[0] + arr[1] > arr[2] &&
    arr[1] + arr[2] > arr[0] &&
    arr[2] + arr[0] > arr[1]
  ) {
    console.log("Yes");
  } else {
    console.log("No");
  }
};

function runProgram(input) {
  var input = input.trim().split("\n");
  var cases = +input[0];
  for (var i = 1; i <= cases; i++) {
    var arr = input[i].trim().split(" ").map(Number);
    IsTriangle(arr);
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`4
    4 5 13
    7 1 8
    2 5 4
    2 2 2
    `);
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
