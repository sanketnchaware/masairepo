function runProgram(input) {
   input=input.trim().split("\n");
  
   var cases=+input[0];
   
   var line=1;
   for(var i=0;i<cases;i++) {
       var num=+input[line];
       console.log(num);
       line++;
       var arr=input[line].trim().split("");
       console.log(arr);
        line++;
   }





  }
  if (process.env.USERNAME === "hp") {
    runProgram(`2
    5
    abcde
    3
    aaa`);
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
  
  