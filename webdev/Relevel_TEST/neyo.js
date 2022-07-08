function SubSet(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j <=arr.length; j++) {
      console.log(arr.slice(i, j));
    }
  }
}

function runProgram(input) {
  var input = input.trim().split("\n");
  var lens = input[0].trim().split(" ").map(Number);
  var towers = lens[0];
  var q = lens[1];
  console.log(towers, q);

  var arr = input[1].trim().split(" ").map(Number);
  console.log("arr:", arr);

  SubSet(arr);
  for (var i = 2; i < arr.length - 1; i++) {
    var x = +input[i];
    console.log(x);
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`5 2
  10 4 7 9 4
  8
  19`);
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
