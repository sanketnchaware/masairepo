


function multi(number){
 var tab=[ ];
    for(var i=1;i<=10;i++){
        var out=number*i;
        tab.push(out);
        
        
    } 
    console.log(tab.join(" "));
    
}






  function runProgram(input) {
      var arr=input.trim().split("\n").map(Number);
      for(var i=1;i<arr.length;i++){
        var n=arr[i];
        var table=multi(n);
      }
     
      
     
    }
  
  
  if (process.env.USERNAME === "hp") {
    runProgram(`2
    2
    3`);
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
  

