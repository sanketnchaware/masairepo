function runProgram(input){
    input =input.trim().split("\n");
    console.log(input);
    var data =[];
    for(var i=0;i<input.length;i++){
        console.log(input[i]);
        var item=input[i].trim().split(" ");
        console.log(item);
        var n=item[0];
        var a=Number(item[1]);
        var user={};
        user.name=n;
        user.age=a;
        console.log(user);
        data.push(user);

    }
    console.log(data);
    
    for(var i=0;i<data.length;i++){
        if(data[i].age>30){
            console.log(data[i].name);
        }
    }





}
  
  if (process.env.USERNAME === "hp") {
    runProgram(`Nrupul 32
    Prateek 30
    Aman 26
    Albert 28
    Yogesh 44`);
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
  
  