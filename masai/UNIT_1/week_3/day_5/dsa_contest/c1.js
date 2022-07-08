

function runProgram(input) {
  console.log(input);
var arr=input.trim().split(" ").map(Number);



var n1=arr[0];
var n2=arr[1];
for(var i=n1;n1<=n2;n1=n1*2){
    console.log(n1);
}


}

if (process.env.USERNAME ==="hp") {
  runProgram(`4 10`);
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