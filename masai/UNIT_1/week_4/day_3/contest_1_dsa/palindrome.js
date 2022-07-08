function runProgram(input) {
    var taken= input.trim().split("");
    console.log(taken);
    var res=[];
    for(var i=taken.length-1; i>=0; i--) {
        res.push(taken[i]);
    }
   
    console.log(res);
    if(taken.join(" ")==res.join(" ")){
        console.log("Yes");
    }
    else{
        console.log("No")
    }

  }
  if (process.env.USERNAME === "hp") {
    runProgram(`12321`);
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
  
  