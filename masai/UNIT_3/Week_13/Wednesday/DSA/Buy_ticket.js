function Queue(operation, data,q ) {
    

    if(operation==="E"){
        q.push(data);
        console.log(q.length);
    }
    else if(operation==="D"){
        if(q.length==0){
            console.log(-1,q.length);
        }
        else{
            console.log(q.shift(),q.length);
        }
    }
    
}

function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +input[0];
 
  let q=[];

  for (let i = 1; i <= cases; i++) {
    let arr = input[i].trim().split(" ");
    let operation = arr[0];
    let data = +arr[1];

    Queue(operation, data,q)
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`5
    E 2
    D
    D
    E 3
    D`);
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
