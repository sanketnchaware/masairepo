function runProgram(input) {
  input = input.trim().split("\n");
 
  var num = Number(input[0]);
  var arr = [];
  for (var i = 1; i <= num; i++) {
    arr.push(input[i]);
  }
  

  var maxCount =0;
  var mf=arr[0];
  for(var x = 0; x < num; x++) {
      var count=0;
      for(y=0; y < num; y++) {
        if(arr[x]==arr[y]) {
            count++;
        }

      }
      if(count>maxCount){
        maxCount=count;
          mf=arr[x];
      }
  }
  console.log(mf);


}
if (process.env.USERNAME === "hp") {
  runProgram(`3
  QCCYXL
  QCCYXL
  AXGLFQDD`);
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
