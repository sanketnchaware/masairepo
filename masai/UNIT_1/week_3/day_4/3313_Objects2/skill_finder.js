function runProgram(input) {
    var input = input.trim().split("\n");

var data ={};
var skills =[];
    for (var i = 0; i <input.length; i++) {
        var person=input[i].trim().split(" ");
      
        console.log(person);
        
     

        
       
    }
    console.log(skills);
    console.log(data);
  }
  if (process.env.USERNAME === "hp") {
    runProgram(`Nrupul cmd
    Prateek js
    Aman ds
    Nrupul python
    Albert js
    Albert react
    Aman algo
    Prateek html
    Nrupul sql`);
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
  
  