function runProgram(input) {
  input = input.trim().split(" ").map(Number);
  var total = Number(input[0]);
  var sachin = Number(input[1]);
  console.log(sachin);

  if(sachin>=total){
      console.log("Broken");
     
  }
  else if(total>=sachin){
      console.log("Not Yet");
  }
  else{
      console.log("Wao");
  }
}

if (process.env.USERNAME === "hp") {
  runProgram(`260 200`);
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
