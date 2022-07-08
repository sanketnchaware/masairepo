
function isPrim(num) {
    var count = 0;
    for (var i = 2; i < num - 1; i++) {
      if (num % i == 0) {
        count++;
      }
    }
    if (count) {
     return false;
    } else {
      return true;
    }
    
  }
  
  function isIJ(a,b){
    if(a<b){
      return true;
    }
    else{
      return false;
    }
  }

function runProgram(input) {
    input=input.trim().split("\n");
    var length=+input[0];
    var arr=input[1].trim().split(" ").map(Number);
 

   
    for(var i=0; i<length; i++){
        for(var j=i; j<length; j++){
           
            var dif=j-i;
            
            if(isIJ(i,j) && isPrim(dif)){
                console.log(i,j)
                console.log(arr[i],arr[j]);
                
            }
        }

    }
    



       
   
  }
  if (process.env.USERNAME === "hp") {
    runProgram(`6
    1 2 3 5 7 12`);
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
  
  