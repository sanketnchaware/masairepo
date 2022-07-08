function runProgram(input) {
    var number=Number(input);

    count=0;
    for(var i=2;i<number;i++){
        if(number%i==0){
            count++;
        }
    }
    
    
    if(count){
        console.log("No")
    }
    else{
        console.log("Yes");
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
  
  