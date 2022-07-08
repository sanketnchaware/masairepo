function SantoshMilk(N) {
  if (N == 0) {
    return 1;
  }
  if(N<0){
      return 0;
  }
  return SantoshMilk(N - 4) + SantoshMilk(N - 8);
}

function runProgram(input) {
  var input = input.trim().split("\n");
  var cases = +input[0];
  
  for (var i = 1; i <= cases; i++) {
    var N = +input[i];


    var res = SantoshMilk(N);
    console.log( res);
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`2
    12
    24`);
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
