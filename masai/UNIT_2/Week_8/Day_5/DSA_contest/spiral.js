function Spiral(arr, m, n) {
  var size = m * n;

  //Setting up variables for generating spiral matrix//
  var top = 0;
  var bottom = m - 1;
  var left = 0;
  var right = n - 1;
  var size = m * n;
  var count = 0;
  var res = [];

  while (count < size) {
    for (var i = top; i <= bottom; i++) {
      if (count == size) {
        break;
      }
      // if condition is to print just upto the 12th element//
      res.push(arr[i][left]);
      count++;
    }
    left++; //changing boundaries//
    for (var i = left; i <= right; i++) {
      if (count == size) {
        break;
      }
      res.push(arr[bottom][i]);
      count++;
    }
    bottom--; //changing boundaries//
    for (var i = bottom; i >= top; i--) {
      if (count == size) {
        break;
      }
      res.push(arr[i][right]);
      count++;
    }
    right--; //changing boundaries//
    for (var i = right; i >= left; i--) {
      if (count == size) {
        break;
      }
      res.push(arr[top][i]);
      count++;
    }
    top++; //changing boundaries//
  }
  console.log(res.join(" "));
}

function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0];
  var line = 1;
  for (var i = 0; i < cases; i++) {
    var [r, c] = input[line].trim().split(" ").map(Number);
    line++;
    var matrix = [];
    for (var j = 0; j < r; j++) {
      matrix.push(input[line].trim().split(" ").map(Number));
      line++;
    }

    Spiral(matrix, r, c);
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`2
    3 4
    1 2 3 4
    5 6 7 8
    9 10 11 12
    4 3
    1 2 3
    4 5 6
    7 8 9
    10 11 12`);
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
