function runProgram(input) {
    var num=+input[0];
    var i=1;
    var out=[];
    while(i<=num){
        var res=[];
        for(var j=0; j<num;j++){
            res.push(j);
        }

        for(var k=0; k<num; k++){
            res.push(i);
        }
      
        i=i+2;
        
        out.push(res);
        

    }
    console.log(out);
        
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
  
  