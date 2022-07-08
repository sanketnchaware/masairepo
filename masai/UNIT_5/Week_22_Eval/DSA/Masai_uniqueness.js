const Unique = (arr) => {
 

  var count = 1;
  for (var i = 0; i < arr.length; i++) {
    for (j = i + 1; j <= arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }
  }
  return count;
};

function runProgram(input) {
  input = input.trim().split("");
  let output = Unique(input);
  if (output > 1) {
    console.log("No");
  } else {
    console.log("Unique");
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`nagth`);
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
