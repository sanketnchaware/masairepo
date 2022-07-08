function QueueStack(op, d, q, s) {
  if (op == 1) {
    q.push[d];
  } else if (op == 2) {
    s.push[d];

  }
  else if (op ==3){
    if(q.length ==0){
        console.log(-1);
    }else{
        console.log(q[0]);
    }
  }
  else if (op ==4){
    if(s.length===0){
        console.log(-1);
    }
    else{
        console.log(s[s.length-1]);
    }
  }
  else if (op ===5){
    let person=q.shift();
    s.push[person];
  }

}

function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +input[0];
  let q = [];
  let s = [];

  for (let i = 1; i <= cases; i++) {
    let arr = input[i].trim().split(" ");
    let operation = +arr[0];
    let data = +arr[1];

    QueueStack(operation, data,q,s);
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`7
    1 4
    2 3
    1 2
    3
    4
    5
    4`);
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
