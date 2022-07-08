function runProgram(input) {
  input = input.trim().split("\n");

  var cases = +input[0];

  var line = 1;
  for (var i = 0; i < cases; i++) {
    var num = Number(input[line]);
    line++;
    var arr = input[line].trim().split(" ").map(Number);
    line++;
    var out = [];
    
    for (var x = 0; x < arr.length; x++) {
      var sum = 0;
      var n1 = parseInt(arr[x] / 10);
      var n2 = parseInt(arr[x] % 10);

      sum = n1 + n2;
      out.push(sum);
    }

    var add = 0;
    for (var z = 0; z < out.length; z++) {
      add = add + out[z];
    }
    console.log(add);
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`2
    5
    12 14 16 17 29
    6
    1 2 3 4 5 51`);
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
