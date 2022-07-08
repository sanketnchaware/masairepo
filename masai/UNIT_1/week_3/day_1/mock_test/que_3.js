// 4            1 2 3 4
//             2 4 6 8
//             3 6 9 12
//             4 8 12 16

function runProgram(input) {
    var input=Number(input);
    var arr=[];
for(var i=1;i<=input;i++){
    var res=i;
    arr.push(res);   
}
console.log(arr);
for(var j=1;j<=arr.length;j++){
    console.log(arr[j]+j);
}

console.log(arr);
   
  }
  
  if (process.env.USERNAME === "hp") {
    runProgram(`4`);
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
  