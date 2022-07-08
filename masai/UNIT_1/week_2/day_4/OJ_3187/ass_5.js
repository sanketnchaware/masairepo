// You are provided 3 integers: *left*, *right* and *k*. Your task is to write a program that finds out the count of all such numbers between *left* and *right* (both inclusive) which are divided by *k*.
function runProgram(input) {
  var arr = input.split(" ");
  var new_arr = [];

  for (var i = 0; i < arr.length; i++) {
    new_arr.push(Number(arr[i]));
  }
  var count = 0;
  var a = new_arr[0];
  var b = new_arr[1];
  var c = new_arr[2];

  for (var i = a; i <= b; i++) {
    if (i % c == 0) {
      count++;
    }
  }
  console.log(count);
}

if (process.env.USERNAME === "hp") {
  runProgram(`1 10 1`);
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
