function FindFrequency(str) {
  var obj = {};
  for (var i = 0; i < str.length; i++) {
    if (str[i] in obj) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }
//   console.log(obj);
  for (key in obj) {
    console.log(`${key}-${obj[key]}`);
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0];
  var str = input[1].trim().split("");
//   console.log(str.sort());
  FindFrequency(str.sort());
}
if (process.env.USERNAME === "hp") {
  runProgram(`76
  gfcgqxfxkujvrkjvxeirrsvqdjcejjybwjnexvnmldrfeehotsfvnawqzmztknyywomssgdmllek`);
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
