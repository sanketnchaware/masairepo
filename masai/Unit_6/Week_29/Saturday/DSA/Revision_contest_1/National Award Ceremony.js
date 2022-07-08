function SortMedals(arr) {
  // console.log(arr)
  var temp = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i + 1] < arr[i]) {
      temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      i=-1;
    } 
  }
  console.log(arr.join(" "));
}

function runProgram(input) {
  // Write code here
  var input = input.trim().split("\n");
  var cases = +input[0];
  var line = 1;
  for (var i = 0; i < cases; i++) {
    var n = +input[line];
    line++;
    var arr = input[line].trim().split(" ").map(Number);
    line++;

    SortMedals(arr);
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`3
    1
    2
    3
    2 0 1
    4
    2 0 2 1`);
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
