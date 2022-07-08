function runProgram(input) {
  input = input.trim().split("\n");
  
  var users={};
  
  for (var i = 0; i < input.length; i++) {
      users[input[i].trim().split(" ")[0]] =input[i].trim().split(" ")[1];
     
  }
var name="Mani";
   if(users[name]){
       console.log(users[name]);
   }
   else
   {
       console.log("not found");
   }
  
}
if (process.env.USERNAME === "hp") {
  runProgram(`Ajay 21345
  RamDas 32146
  Rohith 23522
  Nihal 98743`);
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
