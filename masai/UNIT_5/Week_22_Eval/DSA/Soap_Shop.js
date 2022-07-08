const Soap = (arr, low, high, key) => {
  
  console.log(arr);

  while()
 
};

function runProgram(input) {
  console.log(input);
  input = input.trim().split("/n");
  console.log(input);

  var arr_len = +input[0];

  var arr = input[1].trim().split(" ").map(Number);

  var arr = arr.sort((a, b) => {
    return a - b;
  });
  var q_len = +input[2];

  var low = 0;
  var high = arr_len - 1;

  for (var i = 3; i < input.length; i++) {
    var res = Soap(arr, low, high, +input[i]);
    console.log("res:", res);
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`5/n1 4 10 5 6/n4/n2/n3/n5/n11`);
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
