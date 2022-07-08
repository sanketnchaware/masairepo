function runProgram(input) {
  input = input.trim().split("\n");

  var cases = +input[0];
  var line = 1;
  for (var i = 0; i <cases; i++) {
    var length = +input[line];

    line++;
    var arr = input[line].trim().split("");
    

    var res = [];

    for (var x = 0; x< length; x++) {
      for (var y = x + 1; y <= length; y++) {
        res.push(arr.slice(x, y).join(""));
      }
    }
   console.log(res.join("\n"));

    line++;
  }
  
}
if (process.env.USERNAME === "hp") {
  runProgram(`1
    4 
    aman`);
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
