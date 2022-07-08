function stringCheck(numbers,num_arr){
    var nums_arr=[0,1,2,3,4,5,6,7,8,9];
    var count=0;
    
for(var a=0;a<numbers;a++){
    for(var b=0;b<nums_arr.length;b++){
        if(num_arr[a]==nums_arr[b]){
            count++;
        }
    }
}

if(count==numbers){
    console.log("numbers");
}
else if(count==0){
    console.log("chars");
}
else{
    console.log("alphanumeric");
}






}
   


    
    function runProgram(input) {
        input=input.trim().split("\n");
       
        var cases=Number(input[0]);
        
        var line=1;
        for(var i=0;i<cases;i++){
            var n=Number(input[line]);
            line++;
            var arr=input[line].trim().split("");
            line++;
            
            stringCheck(n,arr);
            
        }

    
    }
    
    if (process.env.USERNAME === "hp") {
      runProgram(`3
      5
      ab2cd
      5
      acfgh
      3
      123`);
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
    