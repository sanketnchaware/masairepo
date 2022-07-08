function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0];
  var arr = [];
  for (var i = 1; i <= n; i++) {
    arr.push(input[i].trim().split(" ").map(Number));
  }

  var ring = [];
  var d1 = [];
  var top = 0;
  var bottom = n - 1;
  var left = 0;
  var right = n - 1;

  for (var i = left; i <= right; i++) {
    ring.push(arr[top][i]);
  }
  top++;

  for (var i = top; i <= bottom; i++) {
    ring.push(arr[i][right]);
  }
  right--;

  for (var i = right; i >= left; i--) {
    ring.push(arr[bottom][i]);
  }

  bottom--;
  for (var i = bottom; i >= top; i--) {
    ring.push(arr[i][left]);
  }

  for (var x = 1; x < n-1; x++) {
    for (var y = 1; y < n-1; y++) {
      if (x == y) {
        d1.push(arr[x][y]);
      }
    }
  }

  for (var x = 1; x <n-1; x++) {
    for (var y = 1; y < n-1; y++) {
      if (x + y === arr.length - 1) {
        d1.push(arr[x][y]);
      }
    }
  }

  for (var m = 0; m < d1.length; m++) {
    for (var n = m + 1; n <= d1.length; n++) {
      if (d1[m] == d1[n]) {
        d1.splice(n, m);
      }
    }
  }

  var s1 = 0;
  for (var s = 0; s < ring.length; s++) {
    s1 = s1 + ring[s];
  }
  var s2 = 0;
  for (var k = 0; k < d1.length; k++) {
    s2 = s2 + d1[k];
  }

  var total = s1 + s2;
  console.log(total);
}
if (process.env.USERNAME === "hp") {
  runProgram(`5
  1 2 3 4 5
  6 7 8 9 1
  2 3 4 5 6
  7 8 9 1 2
  3 4 5 6 7`);
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
