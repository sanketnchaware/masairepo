function SelectionSort(arr) {
  var temp = 0;
  for (var i = 0; i < arr.length; i++) {
    var mini = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[mini]) {
        mini = j;
      }
    }

    let temp = arr[i];
    arr[i] = arr[mini];
    arr[mini] = temp;
  }
  return arr.join(" ");
}

function runProgram(input) {
  var input = input.trim().split("\n");
  var n = parseInt(input[0]);
  var arr = input[1].trim().split(" ").map(Number);
  console.log(SelectionSort(arr));
  //   console.log("arr:", arr);
}
if (process.env.USERNAME === "hp") {
  runProgram(`5
    3 5 0 9 8`);
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
