function runProgram(input) {
     input=input.trim().split("\n");
     console.log(input);
     var num=+input[0];
   console.log(num);
   var arr=input[1].trim().split("");
   console.log(arr);
var alpha=[];
for(var i=0;i<num;i++) {
    var count=1;
    for(var j=i;j<num;j++) {
        if(arr[i]==arr[j]) {
            alpha.push(arr[i]);
            count++;
        }
        
    }
    console.log(arr[i]+" "+count);

}
console.log(alpha);


  }
  if (process.env.USERNAME === "hp") {
    runProgram(`4
    aman`);
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
  
  