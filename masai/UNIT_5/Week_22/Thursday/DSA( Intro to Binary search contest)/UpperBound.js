UpperBound = (arr, key, low, high, res) => {
  
};

function runProgram(input) {
  input = input.split("\n");
  var [len, key] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);
  console.log("arr:", arr);

  var low = 0;
  var high = len - 1;

  var output = UpperBound(arr, key, low, high);
  console.log("output:", output);
}
if (process.env.USERNAME === "hp") {
  runProgram(`10 4
    0 2 4 4 5 5 7 7 9 10`);
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
