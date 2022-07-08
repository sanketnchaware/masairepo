function runProgram(input) {

  var input = input.trim().split("\n");
  
  var num_arr = input[1].trim().split(" ").map(Number);
 
  var sum_even = 0;
  var sum_odd = 0;
  

  for(var i=0;i<=num_arr.length;i++){
    if(num_arr[i]%2==0){
        sum_even=sum_even+num_arr[i];
    }
   
    else if(num_arr[i]%2==1) {
        sum_odd=sum_odd+num_arr[i];
    }
    
}
if(sum_odd <sum_even){
    console.log("Odd");
}
else{
    console.log("Even");
}


  

 
}

if (process.env.USERNAME === "hp") {
  runProgram(` 4
    1 2 3 4`);
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
