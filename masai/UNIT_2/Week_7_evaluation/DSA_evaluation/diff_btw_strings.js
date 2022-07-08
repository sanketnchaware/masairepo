function runProgram(input) {
    input=input.trim().split("\n");

   var first=input[0].trim().split("");
   var second=input[1].trim().split("");


   for (let i = 0; i < first.length; i++) {
        if(first[i]!=second[i]) {

            console.log(first[i]);
        }
       
   }


   
  }
  if (process.env.USERNAME === "hp") {
    runProgram(`ABCX
    ABCD`);
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
  
  