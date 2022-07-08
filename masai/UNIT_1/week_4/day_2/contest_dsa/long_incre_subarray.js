function longestSum(num,items){
    var newArray = [];
    for(var i=0;i<items.length;i++){
        if(items[i]<=items[i+1]){
            newArray.push(items[i]);

        }
    }
    console.log(newArray.length);



}






function runProgram(input) {
    input=input.trim().split("\n");
    
    var cases=input[0];
    
    for(var i=1; i<input.length; i++){
        var n=Number(input[i]);
        i++;
        var arr=input[i].trim().split(" ").map(Number).sort();
       
        console.log(arr);
    }
   
  }
  if (process.env.USERNAME === "hp") {
    runProgram(`2
    2
    1 1
    6
    1 2 1 2 3 1
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
  
  