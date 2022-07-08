function CheckDuplicate(arr) {
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] in obj) {
      obj[arr[i]] = i + 1;
    } else {
      obj[arr[i]] = 1;
    }
  }
//   console.log(obj)

  for(key in obj) {
      if(obj[key]>=2){
          console.log("YES")
          break;
      }
      else{
          console.log("NO")
          break;
      }
  }
}
function runProgram(input) {
  var input = input.trim().trim().split("\n");
  var n = +input[0];
  for (var i = 2; i < input.length; i = i + 2) {
    CheckDuplicate(input[i].trim().split(" ").map(Number));
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`3
1
1
2
1 1
3
1 2 3`);
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
