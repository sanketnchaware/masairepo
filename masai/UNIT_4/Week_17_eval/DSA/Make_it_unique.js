function runProgram(input) {
  var input = input.trim().split("");

  var obj = {};

  for (var i = 0; i < input.length; i++) {
    for (var j = i + 1; j < input.length; j++) {
      if (input[i] == input[j]) {
        obj[input[i]] = 1;
      }
    }
  }

  var ans = [];
  for (key in obj) {
    ans.push([key]);
  }

  console.log(ans.join(""));
}
if (process.env.USERNAME === "hp") {
  runProgram(`my name is ankush`);
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
