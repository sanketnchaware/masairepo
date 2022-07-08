// process.stdin.resume();
// process.stdin.setEncoding("utf8");

// your code goes here
function LongestSubstring(n,arr) {

    console.log(n,arr);
  let freq = new Map();

  for (let i = 0; i < n; i++) {
    if (freq.has(arr[i])) {
      freq.set(arr[i], freq.get(arr[i] + 1));
    } else {
      freq.set(arr[i], 1);
    }
  }

  let len = 0;
  for (let i = 1; i <= n; i++) {
    if (!freq.has(i)) {
      break;
    }
    len++;
  }
  console.log(len);
}

function runProgram(input) {
  
    let n = +input.split("\n")[0];
    let arr = input.split("\n")[1].split(" ").map(Number);
    LongestSubstring(n,arr);

}
if (process.env.USERNAME === "hp") {
  runProgram(`5
    1 2 3 2 1`);
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
