function runProgram(input) {
    var A=1;
    var B=49;
    var X=Number(input);
    if((X-A)>(B-X)){
        console.log("RU Beach");
    }
    else if((B-X)>(X-A)){
        console.log("RK Beach");
    }
    else{
        console.log("Go Anywhere!")
    }
   
  }
  if (process.env.USERNAME === "hp") {
    runProgram(`23`);
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
  
  