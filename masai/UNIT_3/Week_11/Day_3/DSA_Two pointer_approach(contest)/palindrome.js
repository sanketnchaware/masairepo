isPalindrome = (mat) => {
  let start = 0;
  let end = mat.length - 1;

  if (mat.length > 1) {
    while (start < end) {
      if (mat[start] == mat[end]) {
        return "Yes";
      } else {
        return "No";
      }
    }
  } else {
    return "Yes";
  }
};

function runProgram(input) {
  input = input.trim().split("").map(Number);

  console.log(isPalindrome(input));
}
if (process.env.USERNAME === "hp") {
  runProgram(`1`);
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
