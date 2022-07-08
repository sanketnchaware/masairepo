function FindAnagram(str1, str2) {
    str1 = str1.sort();
    str2 = str2.sort();
    console.log(str1, str2);
  for (var i = 0; i < str1.length; i++) {
      if(str1[i] == str2[i]){
          console.log(str1)
          break;
      }
  }
}

function runProgram(input) {
  var input = input.trim().trim().split("\n");

  for (var i = 1; i < input.length; i++) {
    if (input[i + 1] === undefined) {
      return;
    } else {
      FindAnagram(input[i].trim().split(""), input[i + 1].trim().split(""));
    }
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`5
    eodc
    odec
    code
    baca
    aabc`);
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
