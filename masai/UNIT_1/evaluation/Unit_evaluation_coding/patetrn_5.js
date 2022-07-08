function runProgram(input) {
    var num=Number(input);
   
    

var str="";
    for (var i=0;  i<num; i++) {
        var pattern=[];
        for (var j=0; j<num-i; j++) {
           str=str+"* ";
        }
        str=str+"\n"
    }
    console.log(str);
  }
  if (process.env.USERNAME === "hp") {
    runProgram(`5`);
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
  
  