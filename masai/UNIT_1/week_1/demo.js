



function runProgram(input) {
    console.log(input);
    var input=input.trim().split("\n")
    console.log(input);
    var a1=Number(input[1]);
    console.log(a1);
    var a3=input[3].trim().split(" ").map(Number);
    console.log(a3);
    
    
   



    
      
     
    }
    
    if (process.env.USERNAME === "hp") {
      runProgram(`5
      42 
      7
      0 9 8`);
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
    