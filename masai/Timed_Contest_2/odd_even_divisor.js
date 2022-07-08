function Odd_even(N) {
  var even = [];

  for (var i = 0; i <= N; i++) {
    if (i % 2 == 0 && N % i === 0) {
      even.push(i);
    }
  }

  var odd = [];
  for (var o = 0; o <= N; o++) {
    if (o % 2 != 0 && N % o === 0) {
      odd.push(o);
    }
  }

  if (even.length > odd.length) {
    console.log("Even Skewed");
  } else if (even.length < odd.length) {
    console.log("Odd Skewed");
  } else {
    console.log("Not Skewed");
  }
}

function runProgram(input) {
  var input = input.trim().split("\n");
  var n = +input[0];
  for (var i = 1; i < input.length; i++) {
    Odd_even(+input[i]);
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`3
    4
    6
    11
    `);
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
