function runProgram(input) {
input=input.trim().split("\n");

var cases=+input[0];
for(var i=1; i<=cases; i++) {
    var number=+input[i];
    var n=Math.abs(number);

    if(n%2==0) {
        console.log("True");
    }
    else{
        console.log("False");
    }
}
   
  }
  if (process.env.USERNAME === "hp") {
    runProgram(`3
    2
    3
    -1024`);
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
  
  