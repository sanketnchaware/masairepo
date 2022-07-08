function runProgram(input) {
  var input = input.trim().split("\n");
  var nam1 = input[1].trim().split("");
  console.log('nam:', nam1)

  var nam2=nam1.reverse();
  console.log('nam2:', nam2)

  if(nam1===nam2){
    console.log('true')
  } 
  else{
    console.log('false')
  }


}
if (process.env.USERNAME === "hp") {
  runProgram(`6
    nrupul`);
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
