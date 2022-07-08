function runProgram(input) {
  
    input=input.trim().split(" ");
    
    var s1=input[0].trim().split("").sort();
    var s2=input[1].trim().split("").sort();
  
    if(s1.join(" ")===s2.join(" ")){
      console.log("Its Anagram")
    }
    else{
      console.log("Not Anagram")
    }
  


   
  }
  if (process.env.USERNAME === "hp") {
    runProgram(`wind dwine`);
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
  
  