function runProgram(input) {
    input=input.trim().split("\n");
    var num=+input[0];
    console.log(num);
    var arr=input[1].trim().split("");
    console.log(arr);

var count=0;

    for(var i=0;i<num;i++){
        for(var j=i+1;j<num;j++){
               
            if(arr[i]==arr[j]){
                count++;
            }
        }
    }

    console.log(count);



  }
  if (process.env.USERNAME === "hp") {
    runProgram(`6
    abcbaa`);
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
  
  