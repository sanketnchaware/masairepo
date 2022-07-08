function runProgram(input) {
    input=input.trim().split(" ").map(Number);
    var K=Number(input[0]);



var sum=0;
    for (var i=1; i<input.length; i++) {
        var sum=sum + (K*input[i]);
       
    }
    console.log(sum);
    
   
  }
  if (process.env.USERNAME === "hp") {
    runProgram(`4 1 2 3`);
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
  
  