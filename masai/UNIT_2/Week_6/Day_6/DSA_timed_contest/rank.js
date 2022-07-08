function runProgram(input) {
 input=input.trim().split("\n");

 var cases=Number(input[0]);

  var arr=[];
   for(var i=1; i<input.length; i++){
       arr.push(input[i].trim().split(" "));
   }

   
for(var i=0; i<cases; i++){
    if(arr[i]=="India"){
        console.log((i+1));
    }

    

}



  }
  if (process.env.USERNAME === "hp") {
    runProgram(`3
    India
    USA
    China`);
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
  
  