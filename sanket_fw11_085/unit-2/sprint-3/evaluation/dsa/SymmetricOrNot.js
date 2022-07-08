function Xsymmetric(arr) {
  var out = [];
  for (var i = 0; i < arr.length; i++) {
    var res = [];
    for (var j = 0; j < arr.length; j++) {
      res.push(arr[i][j]);
    }
    out.push(res);
  }

  var rev = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    var o = [];
    for (var j = 0; j < arr.length; j++) {
      o.push(arr[i][j]);
    }
    rev.push(o);
  }

  var nocount = 0;
  var yescount = 0;
  for (var z = 0; z < arr.length; z++) {
    if (out[z].join("") != rev[z].join("")) {
      nocount++;
    } else {
      yescount++;
    }
  }

  if (yescount == arr.length) {
    return true;
  } else {
    return false;
  }
}

function Ysymmetric(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var subr = [];
    for (var j = 0; j < arr.length; j++) {
      subr.push(arr[j][i]);
    }
    result.push(subr);
  }

  var reverse = [];

  for (var i = arr.length - 1; i >= 0; i--) {
    var subr2 = [];
    for (var j = 0; j < arr.length; j++) {
      subr2.push(arr[j][i]);
    }
    reverse.push(subr2);
  }

  var nc = 0;
  var cy = 0;
  for (var i = 0; i < arr.length; i++) {
    if (result[i].join("") != reverse[i].join("")) {
      nc++;
    } else {
      cy++;
    }
  }

  if (cy == arr.length) {
    return true;
  } else {
    return false;
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0];

  var line = 1;
  for (var i = 0; i < cases; i++) {
    var n = +input[line];
    console.log(n);
    line++;
    var arr = [];
    for (var j = 0; j < n; j++) {
      arr.push(input[line].trim().split("").map(Number));
      line++;
      
    }
    console.log(arr);
 
    var XS = Xsymmetric(arr);
    var YS = Ysymmetric(arr);

    if (XS && YS) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`5
    2
    11
    11
    4
    0101
    0110
    0110
    0101
    4
    1001
    0000
    0000
    1001
    5
    01110
    01010
    10001
    01010
    01110
    5
    00100
    01010
    10001
    01010
    01110`);
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
