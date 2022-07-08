// c = {+, -, *, / }

function runProgram(input) {
  var input = input.split(" ");

  var a = Number(input[0]);
  var c = input[1];
  var b = Number(input[2]);
  
  switch (c) {
    case "+": {
        console.log(a+b);
        break;
    }
    case "-": {
        console.log(a-b);
        break;
    }

    case "*": {
        console.log(a*b);
        break;
        
    }

    case "/": {
        console.log(a/b);
        break;
    }
  }
}

if (process.env.USERNAME === "hp") {
  runProgram(`2 * 3`);
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
