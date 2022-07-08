function isOdd(mat) {
  var count = 0;
  var c = [];
  for (var i = 0; i < mat.length; i++) {
    if (mat[i] % 2 == 1) {
      count++;
    }

    if (count == mat.length - 1) {
      console.log(count);
        return true;

    }
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  
  var sub = [];
  for (var i = 0; i < n; i++) {
    for (var j = i + 1; j <= n; j++) {
      sub.push(arr.slice(i, j));
    }
  }

  var count = 0;
  for (var z = 0; z < arr.length; z++) {
    if (isOdd(sub[z])) {
      count++;
    }
  }
  console.log(count);
}

if (process.env.USERNAME === "hp") {
  runProgram(`4
    1 2 3 4 `);
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
