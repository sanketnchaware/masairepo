let stack = [];
var top = -1 ;
function push(x){
return stack[++top]=x;
}

function pop(){
return  stack[top--];
}

function peak(){
  return top<0?console.log("Empty!"):console.log(stack[top]);
}



function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];

  let line = 1;

  for (let i = 0; i < n; i++) {
    let [operation, x] = input[line].trim().split(" ").map(Number);
    line++;
   
    if(operation == 1){
      push(x);
    }
    else if(operation == 2){
      pop();
    }
    else if(operation == 3){
      peak();
    }

    
   
    
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`6
    1 15
    1 20
    2
    3
    2
    3`);
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
