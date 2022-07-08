function runProgram(input) {
  input = input.trim().split("/n");
  var len = +input[0];
  console.log(input[1]);
  var position = input[1].trim().split(" ").map(Number);
  var rooms = input[2].trim().split(" ").map(Number);

  var res = [];
  for (var i = 0; i < len; i++) {
    res.push(rooms[i] - position[i]);
  }

  var out = Math.max(...res);
  console.log(out);
}
if (process.env.USERNAME === "hp") {
  runProgram(`3/n4 -4 2/n4 0 5`);
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
