function runProgram(input) {
  input = input.trim().split("\n");
  console.log(input);
  var num = input[0];
  var arr = input[1].trim().split(" ").map(Number);
  console.log(arr);
 
  var lowest=arr[0];
  var highest=arr[0];
  for(i=0;i<arr.length;i++){
      if(arr[i]<lowest){
          lowest=arr[i];
      }
      else if(arr[i]>highest){
          highest=arr[i];
      }
  }
  console.log(lowest);
  console.log(highest);



}
  

if (process.env.USERNAME === "hp") {
  runProgram(`4
    -2 0 8 4`);
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
