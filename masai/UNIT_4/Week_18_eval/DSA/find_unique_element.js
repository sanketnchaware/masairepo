function FindUnique(arr) {
var cont=[];
for(var i=0; i<arr.length; i++){
  if(){
    cont.push(arr[i]);
  }

}
return cont;
}

function runProgram(input) {
  var input = input.trim().split("\n");
  console.log("input:", input);
  var cases = +input[0];

  var line = 1;

  for (var i = 0; i < cases; i++) {
    var len = +input[line];
    console.log("len:", len);
    line++;
    var arr = input[line].trim().split(" ").map(Number);
    console.log("arr", arr);
    line++;

    var res=FindUnique(arr)
    console.log('res:', res)

  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`2
    1
    5
    5
    1 2 1 3 2`);
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
