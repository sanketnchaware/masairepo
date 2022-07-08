
function runProgram(input) {
    var arr=input.split("\n");
    var second=arr[1];
    var nums= second.split(" ").map(Number);
    var largest=nums[0];
    var lowest=nums[0];
    for(var i=0;i<nums.length;i++){
         if(nums[i]<lowest){
            lowest=nums[i];
        }
        if(nums[i]>largest){
            largest=nums[i];
        }

    }
console.log(lowest);
console.log(largest);
    
  }
  
  if (process.env.USERNAME === "hp") {
    runProgram(`4\n-2 0 8 4`);
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
  
  