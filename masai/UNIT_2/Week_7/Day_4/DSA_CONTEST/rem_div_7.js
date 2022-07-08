function runProgram(input) {
  input=input.trim().split("\n");
  var length=+input[0];
  console.log(length);
  var arr=input[1].trim().split(" ").map(Number);
  console.log(arr);


console.log(arr.slice(1))



  }
  if (process.env.USERNAME === "hp") {
    runProgram(`5
    14 7 8 2 4`);
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
  
  