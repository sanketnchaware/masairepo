function runProgram(input) {
  var arr=Number(input);
  for(var i=0;i<arr;i++){
    if(i==0 || i == arr-1){
      var starPattern=[ ];
    }
    for(var j=0;j<arr;j++){
      starPattern.push("*");
    }
    console.log(starPattern.join(" "));
  }
 
    for(var j=0;j<arr;j++){
      if(j==0 ||j==arr-1){
        starPattern.push("*");
      }
      
        starPattern.push(" ");
     
    }
    console.log(starPattern.join(" "));
  }

if (process.env.USERNAME === "hp") {
  runProgram(`5`);
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