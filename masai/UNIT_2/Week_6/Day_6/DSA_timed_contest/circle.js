function runProgram(input) {
  input = input.trim().split("\n");

  var cases = Number(input[0]);
  var out = [];
  var line = 1;
  for (var i = 0; i <= cases; i++) {
    var num = Number(input[line]);
    line++;
    var arr = [];
    var res = [];
    for (var j = 0; j < num; j++) {
      arr.push(input[line].trim().split(" ").map(Number));
      line++;
    }
   

    for (var x = num - 1; x > 0; x--) {
      for (var y = 0; y < num; y++) {
        if (y == 0) {
          res.push(arr[x][y]);
        }
      }
    }
  

    for (var x = 0; x < num; x++) {
      for (var y = 0; y < num - 1; y++) {
        if (x == 0) {
          res.push(arr[x][y]);
        }
      }
    }

  

    for (var x = 0; x < num - 1; x++) {
      for (var y = 0; y < num; y++) {
        if (y == num - 1) {
          res.push(arr[x][y]);
        }
      }
    }


    for (var x = 0; x < num; x++) {
      for (var y = num - 1; y > 0; y--) {
        if (x == num - 1) {
          res.push(arr[x][y]);
        }
      }
    }
out.push(res.join(" "));
    
  }
  console.log(out.join("\n"));
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
