function runProgram(input) {
    input = input.trim().split("\n");
 
    var [row, col] =input[0].trim().split(" ").map(Number);
    var num=Number(input[4]);
   console.log(4);
    var mat=[];
    for (var i=1;i<input.length-1;i++){
        mat.push(input[i].trim().split(" ").map(Number));
    }
    console.log(mat);


  



   
  }
  if (process.env.USERNAME === "hp") {
    runProgram(`3 3
    1 2 3
    4 5 6
    7 8 9
    6`);
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
  
  