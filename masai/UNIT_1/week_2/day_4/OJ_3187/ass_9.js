// You are given an array of N-1 integers and integers are in the range of 1 to N. There are no duplicates in the array. One of the integers is missing in the array. Find the missing integer//

function runProgram(input) {
  arr = input.split(" ").map(Number);
  var l = arr.length+1;
  console.log(l);
  var sum_given=0;

  for(var i=0;i<arr.length;i++){
    sum_given=sum_given+arr[i];
  }

var total_sum=(l*(l+1))/2;

  var remain_num= total_sum-sum_given;
console.log(remain_num);

  }
  
  if (process.env.USERNAME === "hp") {
    runProgram(`4 5 1 3`);
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
  
  