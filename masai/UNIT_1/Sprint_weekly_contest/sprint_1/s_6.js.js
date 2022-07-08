
function sort(item){
  var lowest=0;
  var input_arr=[];
  for(var i=0;i<item.length;i++){
    if(item[i<lowest]){
      input_arr.push(item[i]);
    }
  }
  console.log(input_arr);
}


function runProgram(input) {
  var arr=input.trim().split("\n");
  console.log(arr);
  for(var i=2;i<arr.length;i=i+2){
    var num_arr=arr[i].trim().split(" ").map(Number);
     var after_sort=sort(num_arr);
     console.log(after_sort);
  }
  
}
if (process.env.USERNAME === "hp") {
  runProgram(`2
  5 
  1 4 2 3 5
  5
  5 4 3 2 1`);
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