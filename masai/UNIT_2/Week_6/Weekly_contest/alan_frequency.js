function runProgram(input) {
    input=input.trim().split("\n");
  
   var num =+input[0];
   var arr=input[1].trim().split("");


var obj={}
   for(var i=0;i<num;i++) {
       var count=0;
       for(var j=0;j<num;j++) {
        if(arr[i]==arr[j]) {
        count++;
            obj[arr[i]]=count;
        }
        else{
            obj[arr[i]]=count;
        }
       }
   }
  
   var output=[];
   for(key in obj) {
       var out=(key+"-"+obj[key]);
       output.push(out);
   }
  console.log(output.sort().join("\n"));
   
  }
  if (process.env.USERNAME === "hp") {
    runProgram(`76
    gfcgqxfxkujvrkjvxeirrsvqdjcejjybwjnexvnmldrfeehotsfvnawqzmztknyywomssgdmllek`);
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
  
  