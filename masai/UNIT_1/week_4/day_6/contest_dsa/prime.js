function runProgram(input) {
    input=input.trim().split(" ");
    var num=Number(input[0]);

    count=0;
    for(var i=2;i<=num;i++){
        if(num%i==0){
            count++; 
        }
    }

    if(count>=2){
        console.log("No")
    }
    else{
        console.log("Yes");
    }
   
  }
  if (process.env.USERNAME === "hp") {
    runProgram(`4`);
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
  
  