
    function runProgram(input) {
      console.log(input);
        var input=input.split(" ").map(Number);
    console.log(input);
        for(var i=0;i<input.length;i++){
            var a=input[0];
            var b=input[1];
            var c=input[2];
            if((a**2+(b**2)== c**2)){
                console.log("Yes");
                break;
            }
            console.log("No");
            break;
        }
        
   }
   
       
       
       if (process.env.USERNAME === "hp") {
         runProgram(`4
         2 1 2`);
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