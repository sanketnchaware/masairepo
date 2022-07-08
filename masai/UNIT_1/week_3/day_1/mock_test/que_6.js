



function runProgram(input) {
  console.log(input);
    var input=input.trim().split("\n");
   console.log(input);
    var arr=input[1].trim().split(" ").map(Number);
    console.log(arr);
    for(var i=0;i<=arr.length;i++){
        if(arr[i]==42){
            console.log("Yes");
            break;
        }
        else{
            console.log("No")
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
  