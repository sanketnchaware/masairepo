function runProgram(input) {
  input = input.trim().split("\n");
  
  var num = Number(input[1]);


  var arr = [];
  for (var i = 2; i < input.length; i++) {
    arr.push(input[i].trim().split(" ").map(Number));
  }


var result = [];
for (var i=0;i<num;i++) {
    for (var j=0;j<arr.length;j++) {
        




        if(i==0) {
            result.push(arr[i][j]);
        }
        if(i==j && i%2==1) {
            result.push(arr[i][j]);
        }
        if(i==num-1) {
            result.push(arr[i][j]);
        }

    }
}
console.log(result.join(" "));


}
if (process.env.USERNAME === "hp") {
  runProgram(`1
    3
    1 2 3
    4 5 6
    7 8 9
    `);
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
