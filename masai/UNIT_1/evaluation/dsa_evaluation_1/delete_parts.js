function runProgram(input) {
   input=input.trim().split("\n");

   arr=input[1].trim().split("");

   var [L,R] = input[2].trim().split(" ").map(Number);


var res1=arr.splice(L,R);

console.log(arr.join(""));
   
  }
  if (process.env.USERNAME === "hp") {
    runProgram(`5
    abcdef
    1 3
    `);
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
  
  