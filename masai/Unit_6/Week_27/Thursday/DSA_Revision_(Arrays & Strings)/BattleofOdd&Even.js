const BattleOddAndEven = (arr) => {
  var even_sum = 0;
  var odd_sum = 0;

  for (var i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 == 1) {
      odd_sum += arr[i];
    }
    if (arr[i] % 2 == 0) {
      even_sum += arr[i];
    }
  }

  if (odd_sum > even_sum) {
    return "Odd";
  } else {
    return "Even";
  }
};

function runProgram(input) {
  var input = input.trim().split("\n");
  var len = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
 

  var res = BattleOddAndEven(arr);
  console.log( res);
}
if (process.env.USERNAME === "hp") {
  runProgram(`4
    1 2 3 4`);
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
