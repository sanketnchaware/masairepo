
function isProper(char,n){
  
    var x=0;y=0;
    for(var i=0;i<char.length;i++){
        if(char[i]=="L"){
            x=x-1;
        }if(char[i]=="R"){
            x=x+1;
        }
        if(char[i]=="U"){
            y=y+1;
        }
        if(char[i]=="D"){
            y=y-1;
        }

    }

    return (x+y);


}


function runProgram(input) {
   input=input.trim().split("\n");
 
   var cases=+input[0];
    
   
    var line=1;
    for(var i=0; i<cases; i++) {
        var num=+input[line];
      
        line++;
        var arr=input[line].trim().split("");
        
        line++;
        var res=isProper(arr,num);
        
       
       if(res==0){
           console.log("Yes");
       }
       else if(res!=0){
           console.log("No");
       }



    }


  }
  if (process.env.USERNAME === "hp") {
    runProgram(`2
    5
    RLRUD
    4
    LRUD`);
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
  
  