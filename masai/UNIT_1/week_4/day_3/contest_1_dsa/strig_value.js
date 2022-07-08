function runProgram(input) {
    var char=input.trim().split("");
    console.log(char);
    value=1;
    var sum=0;
    var alpha=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    for(var i=0;i<alpha.length;i++) {
        alpha[i]=value;
        value++;
        
    }

  
   
  }
  if (process.env.USERNAME === "hp") {
    runProgram(`aba`);
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
  
  