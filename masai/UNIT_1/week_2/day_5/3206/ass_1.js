//Noddys exam

function Find(items, number) {
  var count = 0;
  var count2 = 0;
  for (var i = 0; i < items.length; i++) {
    if (items[i] <= number) {
      count++;
    }
    if (items[i] > number) {
      count2++;
      if (count2 > 1) {
        break;
      }
    }
  }
  return count;
}

function runProgram(input) {
  var arr = input.trim().split("\n");

  var item_1 = arr[0].trim().split(" ");
  var score = Number(item_1[1]);
  var input_arr = arr[1].trim().split(" ").map(Number);

  var res = Find(input_arr, score);
  console.log(res);
}

if (process.env.USERNAME === "hp") {
  runProgram(`7 6
  4 3 7 6 7 2 2`);
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
