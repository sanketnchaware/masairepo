// You are given two integers, L and R. You have to print all the integers between this range, which are at a distance of two from the previous element, including L and R . Refer to the sample I/O for better understanding.

function runProgram(input) {
  console.log(input);
var arr=input.split(" ");
console.log(arr);
var new_arr=[];
for(var i=0;i<arr.length;i++){
 new_arr.push(Number(arr[i]));
 
}

arey=new_arr;
var n1=new_arr[0];
var n2=new_arr[1];
for(n1;n1<=n2;n1=n1+2){
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