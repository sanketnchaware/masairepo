function runProgram(input) {
    input=input.trim().split("\n");
   
    var arr=input[1].trim().split(" ").map(Number);
    var num=input[0];
    for(var j=0;j<num;j++){
        if(arr[j]==42){
            console.log("Yes");
            break;

        }
        else{
            console.log("No");
            break;
        }
    }
  
}

  
  if (process.env.USERNAME === "hp") {
    runProgram(`5
    42 7 0 9 8`);
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
  