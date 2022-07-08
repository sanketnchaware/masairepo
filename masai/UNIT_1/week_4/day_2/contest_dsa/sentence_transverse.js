function runProgram(input) {
    var sentence=input.trim().split(" ");
    
   var res=[];
   for (var i=sentence.length-1;i>=0;i--) {
       res.push(sentence[i]);
   }
   console.log(res.join(" "));
   
  }
  if (process.env.USERNAME === "hp") {
    runProgram(`A Transformation in education`);
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
  
  