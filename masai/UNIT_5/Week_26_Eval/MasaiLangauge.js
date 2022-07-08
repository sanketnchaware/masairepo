function runProgram(input) {
  var input = input.trim().split("\n");
  var arr = input[1].trim().split("");

  var vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(arr[0])) {
    const hulk = ["h", "u", "l", "k"];
    for (var i = 0; i < hulk.length; i++) {
      arr.push(hulk[i]);
    }
    console.log(arr.join(""));
  } else {
    const hulk = ["t", "h", "o", "r"];
    for (var i = 0; i < hulk.length; i++) {
      arr.push(hulk[i]);
    }
    console.log(arr.join(""));
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`5
    zbced`);
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
