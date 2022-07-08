function runProgram(input) {
  var input = input.trim().split("\n");

  var num_arr=input[1].trim().split(" ").map(Number);
 
  var sum=0;
  for(var i=0;i<num_arr.length;i++){
      sum=sum+num_arr[i];
  }
  
  if(sum>100){
      console.log("Greater");
  }
  else{
      console.log("Lesser")
  }

}

if (process.env.USERNAME === "hp") {
  runProgram(`5
  21 24 2 54 8`);
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
