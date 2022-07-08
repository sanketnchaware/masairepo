function SubMin(arr) {
  //   console.log("arr:", arr);

  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  GetAnswer(arr);
}

function GetAnswer(arr) {
  for (var z = 0; z < arr.length; z++) {
    if (arr[0] === 0) {
      arr[0] = arr[z + 1];
      arr[z + 1] = 0;
    }
  }
  console.log(arr);
}

function runProgram(input) {
  var input = input.trim().split("\n");
  var n = +input[0];
  for (var i = 2; i < input.length; i = i + 2) {
    SubMin(input[i].trim().split(" ").map(Number));
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`3
    4
    2 1 0 0
    4
    1 4 2 3
    4
    5 2 3 2`);
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
