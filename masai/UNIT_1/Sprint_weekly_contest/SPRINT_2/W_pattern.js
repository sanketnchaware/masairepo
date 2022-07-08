function runProgram(input) {
    
    var N=Number(input);
    
    for(var i = 0; i <N;i++){
        for(var j = 0; j <N;j++){
            if(i==j){
                
                console.log("\\");
               
                
            }
            console.log(" \\");
            console.log("  \\");
            console.log("   \\");
          
        }
       
    }
   
  }
  if (process.env.USERNAME === "hp") {
    runProgram(`4`);
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
  
  