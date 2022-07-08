function runProgram(input) {
   var min=+input;

   var hour=(Math.floor(min/60));
   var minutes=(min%60);
   if(hour<=1){
    console.log(hour+"hr"+" "+minutes+"mins");
   }
   else{
    console.log(hour+"hrs"+" "+minutes+"mins");
   }
  

  }
  if (process.env.USERNAME === "hp") {
    runProgram(`135`);
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
  
  