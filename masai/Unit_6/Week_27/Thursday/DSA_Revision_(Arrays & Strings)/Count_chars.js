function runProgram(input) {
  console.log("input:", input);
  var res = input[0];
  count = 1;
  for (var i = 1; i < input.length; i++) {
    if (input[i] === input[i - 1]) {
      count++;
    } else {
      if (count > 1) {
        res += count 
        count = 1;
      }
      res += input[i];
    }
  }
  if (count > 1) {
    res += count 
    count = 1;
  }
  console.log(res)
}

if (process.env.USERNAME === "hp") {
  runProgram(`aaabbbcccaaa`);
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
