function GoodPairs(arr) {
  
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] === 2 * arr[i]) {
        count++;
      }
    }
  }
  console.log(count);
}

function runProgram(input) {
  var input = input.trim().split("\n");

  for (var i = 2; i < input.length; i = i + 2) {
    var arr = input[i].trim().split(" ").map(Number);
    GoodPairs(arr);
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`2
    5
    1 1 1 1 1
    6
    1 1 2 2 4 1 `);
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
