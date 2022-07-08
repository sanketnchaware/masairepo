const random = (array, len) => {
  let count = 0;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (i !== j && i < j && 4 * array[i] === 5 * array[j]) {
        count++;
      }
    }
  }

  return count;
};

function runProgram(input) {
  var array = input.trim().split("\n");
  let T = Number(array[0].trim());
  let line = 1;
  for (let i = 1; i <= T; i++) {
    let n = Number(array[line].trim());
    line++;
    let arr = array[line].trim().split(" ").map(Number);
    line++;

    console.log(random(arr, n));
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`2
  6
  5 5 5 4 4 4
  3
  0 0 0`);
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
