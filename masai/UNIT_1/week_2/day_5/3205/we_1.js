function num_position(number, items) {
  for (var i = 0; i < items.length; i++) {
    if (items[i] == number) {
      return i;
    }
  }
}

function runProgram(input) {
  var arr = input.trim().split("\n");
  var inp_nums = Number(arr[0]);
  var num = 2;
  var array = arr[1].trim().split(" ").map(Number);
  var position = num_position(num, array);
  if (position == array[-1] || position == array.length-1) {
    console.log("-1");
  } else {
    console.log(array[position + 1]);
  }
}

if (process.env.USERNAME === "hp") {
  runProgram(`5
    1 2`);
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
