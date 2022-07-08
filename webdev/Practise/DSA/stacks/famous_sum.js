//Find P-Sum
function P_sum(arr) {
  if (arr.length == 0) {
    return 0;
  }

  return arr[0] + P_sum(arr.slice(1));
}

// Concatenate the string
function Concatenate(n, k) {
  if (k == 1) {
    return n;
  }
  return n + Concatenate(n, k - 1);
}


function SuperDigit(str) {
  if (str.length == 0) {
    return 0;
  }
  if (str.length == 1) {
    return str;
  }
  var p_arr = str.trim().split("").map(Number);

  var p_sum = P_sum(p_arr);

  var p_str = p_sum.toString();

  return SuperDigit(p_str);
}

function runProgram(input) {
  var taking = input.trim().split(" ");
  var n = taking[0];
  var k = +taking[1];

  var p = Concatenate(n, k);
  console.log('p:', p)
  console.log(SuperDigit(p));
}
if (process.env.USERNAME === "hp") {
  runProgram(`148 3`);
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
