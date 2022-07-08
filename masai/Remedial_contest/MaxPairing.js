function FindPairs(arrM, arrN) {
  var count = 0;
  for (var i = 0; i < arrN.length; i++) {
    for (var j = 0; j < arrM.length; j++) {
      if (arrM[i] - arrN[j] === 1) {
        count++;
      }
    }
  }
  console.log(count);
}

function runProgram(input) {
  var input = input.trim().split("\n");
  var arrM = input[1].trim().split(" ").map(Number);
  var arrN = input[2].trim().split(" ").map(Number);
  FindPairs(arrM, arrN);
}
if (process.env.USERNAME === "hp") {
  runProgram(`4 4
  1 2 3 4
  10 11 12 13
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
