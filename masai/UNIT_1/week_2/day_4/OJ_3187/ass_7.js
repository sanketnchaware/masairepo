//You are given an array which has integer elements. Write a program to print the ceil (Ref :https://en.wikipedia.org/wiki/Floor_and_ceiling_functions) average of elements (numbers) present in the array.

function runProgram(input) {
  
  var input=input.split("\n");
  var second=input[1];
  var n = second.split(" ").map(Number);

  var sum=0;
  for(var i=0;i<n.length;i++){
    sum=sum+n[i];
  }
  console.log(sum/n.length);
 
}

if (process.env.USERNAME === "hp") {
  runProgram(`4\n2 5 0 9`);
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

