function runProgram(input) {
   console.log(input);
   var No= Number(input);
   var fact=1;
    for(var i=1;i<=No;i++){
        fact=fact*i;
    }
    console.log(fact);
     
        
    
}

if (process.env.USERNAME === "hp") {
  runProgram("5");
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