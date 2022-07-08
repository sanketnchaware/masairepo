function runProgram(input) {
  
  input = input.trim().split("\n");
 
  var line = 1;
  var cases = Number(input[0]);
var out=[];
  for (var i = 0; i < cases; i++) {
    var num = Number(input[line]);
    line++;
    var arr = [];
    var res=[];

    for (var j = 0; j < num; j++) {
      arr.push(input[line].trim().split(" ").map(Number));
      line++;
    }
 

    for (var x = 0; x < num; x++) {
      for (var y = 0; y < num - 1; y++) {
        if (x == 0) {
          res.push(arr[x][y]);
        }
      }
    }

    

    for (var m = 0; m < num; m++) {
      for (var n = 0; n < num; n++) {
        if (m + n == num - 1) {
            res.push(arr[m][n]);
        }
      }
    }

   

    for (var x = 0; x < num; x++) {
      for (var y = 1; y < num; y++) {
        if (x == num - 1) {
            res.push(arr[x][y]);
        }
      }
    }
    out.push(res.join(" "));

    
  }
  console.log((out.join("\n")))
}
if (process.env.USERNAME === "hp") {
  runProgram(`2
    3
    1 2 3
    4 5 6
    7 8 9
    2
    7 8
    9 4`);
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
