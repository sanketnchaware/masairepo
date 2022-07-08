function runProgram(input) {
    input=input.trim().split("\n");
    var persons= +input[0];
    console.log(persons);
    var chek_in= input[1].trim().split(" ").map(Number);
    var hand_bag=input[2].trim().split(" ").map(Number);
    console.log(chek_in,hand_bag);   

 




}


  
  if (process.env.USERNAME === "hp") {
    runProgram(`4
    12 14 15 6
    8 5 7 4`);
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
  
  