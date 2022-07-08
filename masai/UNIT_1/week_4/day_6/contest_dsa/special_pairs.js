function runProgram(input) {
  input = input.trim().split("\n");

  var total = Number(input[0]);
  var arr = input[1].trim().split(" ").map(Number);

  function isPrime(num) {
    if (num == 1) {
      return false;
    }
    count = 0;
    for (var i = 2; i <= num; i++) {
      if (num % i == 0) {
        count++;
      }
    }

    if (count >= 2) {
      return false;
    } else {
      return true;
    }
  }

  var res_arr = [];

  for (var i = 0; i < total; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (i < j && isPrime(Math.abs(j - i))) {
        var diff = arr[j] - arr[i];
        res_arr.push(diff);
      }
    }
  }

  var add = 0;
  for (var z = 0; z < res_arr.length; z++) {
    add = add + res_arr[z];
  }
  console.log(add);

}
if (process.env.USERNAME === "hp") {
  runProgram(`6
    1 2 3 5 7 12`);
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
