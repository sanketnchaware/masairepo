function runProgram(input) {
    var stack=[];
    
    for (var i = 0; i < input.length; i++) {
        if(i===0){
            stack.push(input[i]);
        }
        else if(input[i]===stack[stack.length-1]){
            stack.pop();
        }
        else if(input[i]!==stack[stack.length-1]){
            stack.push(input[i]);
        }
    }


    if(stack.length==0){
        console.log("Empty string");
    }
    else{
        console.log(stack.join(""));
    }
   
  }
  if (process.env.USERNAME === "hp") {
    runProgram(`aaabccddd`);
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
  
  