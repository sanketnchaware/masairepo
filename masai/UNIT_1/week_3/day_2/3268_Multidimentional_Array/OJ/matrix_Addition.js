function runProgram(input) {
  input = input.trim().split("\n");
  var first = input[0].trim().split(" ").map(Number);
  var [r1, c1, r2, c2] = first;
  var m1 = [];
  var m2 = [];
  for (var i = 1; i <= r1; i++) {
    m1.push(input[i].trim().split(" ").map(Number));
    
  }

  for (var j = 3; j < input.length; j++) {
    m2.push(input[j].trim().split(" ").map(Number));
  }

  if (r1 != r2 || c1 != c2) {
    console.log(-1);
  } else {
    for (var i = 0; i < r1; i++) {
      for (var j = 0; j < c1; j++) {
        m1[i][j] = m1[i][j] + m2[i][j];
      }
    }

   
  }

  for (let i = 0; i < r1; i++) {
    console.log(m1[i].join(" "));
    
  }
}

if (process.env.USERNAME === "hp") {
  runProgram(`2 2 2 2
    1 2
    3 4
    2 3
    4 5`);
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
