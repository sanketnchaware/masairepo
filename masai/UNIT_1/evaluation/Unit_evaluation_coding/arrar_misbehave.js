function isMisbehave(arr,n){
    
   
    for(var i=0;i<n;i++){
        for(var j=i+1;j<n;j++){
            if((arr[i]==arr[j]) && (arr[i]%2==1)){
               return true;
            }
            
        }
    }
}






function runProgram(input) {
    var input = input.trim().split("\n");

  
  for(var i=1;i<input.length;i=i+2){
      var nums=Number(input[i]);
      var item=input[i+1].trim().split(" ").map(Number);
     
      var result=isMisbehave(item,nums);

      if(result){
          console.log("Misbehave!")
      }
      else{
          console.log("Behave!")
      }


  }

 
   
  }
  if (process.env.USERNAME === "hp") {
    runProgram(`2
    6
    1 3 3 4 5 6
    5
    1 2 3 4 5`);
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
  
  