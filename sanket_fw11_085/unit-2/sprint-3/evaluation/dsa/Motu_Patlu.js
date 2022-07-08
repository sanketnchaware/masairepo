function runProgram(input) {
  var num = +input;
  var s1 = Math.floor(num / 5);

  var s2 = num % 5;
  var count = 0;
  if (s2 == 1) {
    count++;
  } else if (s2 == 2) {
    count++;
  } else if (s2 == 3) {
    count++;
  } else if (s2 == 4) {
    count++;
  }

  var steps = s1 + count;
  console.log(steps);
}
if (process.env.USERNAME === "hp") {
  runProgram(`27`);
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
