function runProgram(input) {
   var char=input.trim().split("");
   
   
   var arr=[];
   var obj={};

   for(var i=0;i<char.length;i++){
       var count=0;
       for(var j=0;j<char.length;j++){
           if(char[i]==char[j]){
               count++;
               obj[char[i]]=count;
           }
       }
   }
 
   
   for(key in obj){
       arr.push(key);
   }
   
 
   if(arr.length==char.length){
       console.log("Unique");
   }
   else{
       console.log("No");
   }
   


  }
  if (process.env.USERNAME === "hp") {
    runProgram(`msai`);
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
  
  