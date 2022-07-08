function runProgram(input) {
  var input = input.trim().split("\n");
  console.log(input);
  var length = Number(input[0]);
  console.log(length);
  var arr = input[1].trim().split("");
  console.log(arr);

  var substr = [];
  for (var i = 0; i < length; i++) {
    for (var j = i + 1; j < length; j++) {
      
      for (var k = i; k <= length; k++) {
        substr.push(arr[k]);
      }
     
    }
    
  }
  console.log(substr);
}
if (process.env.USERNAME === "hp") {
  runProgram(`6
     snc`);
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
