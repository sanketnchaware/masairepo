// 3
// hi there
// hello  world  olleh dlrow
// a  b





function runProgram(input) {

input=input.trim().split("\n");
console.log(input);


for (var i=1; i<input.length; i++) {
    console.log(input[i].trim().split("  "));

}


}



  if (process.env.USERNAME === "hp") {
    runProgram(`3
    hi there
    hello  world
    a  b`);
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
  
  