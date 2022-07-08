function runProgram(input) {
  input = input.trim().split("\n");
  var len = input[0];
  var str = input[1].trim().split("");
  var mid = Math.floor(len / 2);
  var s1 = str.splice(mid);
  var s2 = str;
  if( isPalindrome(s1) &&  isPalindrome(s2)){
    console.log("yes");
  }
  else{
    console.log("no");
  }
  
function isPalindrome(arr) {
  var count = 0;
  for(var i = 0; i < arr.length; i++) {
    if(arr[i]!=arr[arr.length-i-1]){
      count=1;
      break;
    }
  }
  if(count==0){
    return true;
  }
  else{
    return false;
  }
}


}
if (process.env.USERNAME === "hp") {
  runProgram(`6
  abcdff`);
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
