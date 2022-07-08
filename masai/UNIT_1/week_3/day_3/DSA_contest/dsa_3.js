function runProgram(input) {
  var N = Number(input);
  if (N % 7 == 0) {
    console.log("Masai");
    
  }
  if (N % 5 == 0) {
    console.log("School");
    
  }
  if (N % 35 == 0) {
    console.log("Masai School");
  } else {
    console.log("Hurray!");
  }
}

if (process.env.USERNAME === "hp") {
  runProgram(`35`);
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
