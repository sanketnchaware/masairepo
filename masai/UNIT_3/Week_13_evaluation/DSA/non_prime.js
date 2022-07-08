isPrime = (data) => {
  var c = 0;
  while (data !== 0) {
    for (var i = 0; i <= data; i++) {
      if (data % i == 0) {
        c++;
      }
    }

    if (c == 2) {
      return false;
    } else {
      return true;
    }
  }
};

function runProgram(input) {
  input = input.trim().split("\n");
  var [row, col] = input[0].trim().split(" ").map(Number);
  var arr = [];
  for (var i = 1; i < input.length; i++) {
    arr.push(input[i].trim().split(" ").map(Number));
  }

  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (isPrime(arr[i][j])) {
        count++;
      }
    }
  }

  console.log(count);
}
if (process.env.USERNAME === "hp") {
  runProgram(`3 3
    1 2 3
    4 5 6
    7 8 9 `);
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
