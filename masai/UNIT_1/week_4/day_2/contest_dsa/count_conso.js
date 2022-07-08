function runProgram(input) {
 var name=input;
 
 var name="amsaischool";
 conso = 0;
 
   

   for (var j = 0; j < name.length; j++) {
     if (name[j] != "a" && name[j] != "e" && name[j] != "i" && name[j] != "o" && name[j] != "u") {
       conso++;
     }
   }
 
 console.log(conso);
 
 
}
if (process.env.USERNAME === "hp") {
  runProgram(`masaischool`);
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
