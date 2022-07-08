// var arr = ["a", "a", "a", "a", "a", "a", "a"];
// var count = 0;
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] != arr[i + 1]) {
//     count++;
//   }
// }
// console.log(count);

function runProgram(input) {
  var len = +input[0];
  console.log('len:', len)
for(var i=0;i<len;i++) {
    console.log(input[i]).trim().split("/n");
}
 
}
if (process.env.USERNAME === "hp") {
  runProgram(`2/naaaaa/nabbbaaz`);
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
