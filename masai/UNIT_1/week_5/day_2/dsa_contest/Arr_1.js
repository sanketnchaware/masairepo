function runProgram(input) {
  var input = input.trim().split("\n");
 
  var [rows, cols] = input[0].trim().split(" ").map(Number);
  

  var arr = [];
  for (var i = 1; i < input.length; i++) {
    arr.push(input[i].trim().split(" ").map(Number));
  }
  
var result = [];
for (var i =0 ; i <cols; i++) {
    for (var j = rows-1; j >=0;j--){
        result.push(arr[j][i]);
    }
}
console.log(result.join(" "));



}

if (process.env.USERNAME === "hp") {
  runProgram(`4 3
    1 8 9
    2 7 10
    3 6 11
    4 5 12`);
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


