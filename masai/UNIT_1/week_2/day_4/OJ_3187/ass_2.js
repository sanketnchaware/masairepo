// Given a number N, print the multiplication table of N.function runProgram(input) {

    function runProgram(input) {
     for(var i=1;i<=10;i++){
         console.log(input + "*" + i + "=" + (input*i));
     }
}

    
    
    if (process.env.USERNAME === "hp") {
      runProgram(`2`);
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