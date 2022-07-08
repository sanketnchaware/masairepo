function earnings(items, rupees) {
  var count = 0;
 
  var highest = items[0];
  for (var i = 0; i < items.length; i++) {
    if (items[i] > highest) {
      highest = items[i];
      count++;
    }
  }
  var visited = 1 + count;
  var earnings = visited * rupees;
  return earnings;
}
function runProgram(input) {
  var arr = input.split("\n");

  for (var i = 1; i < arr.length; i = i + 2) {
    var rupees = arr[i].split(" ").map(Number);
    var buildingsHeight = arr[i + 1].split(" ").map(Number);
    console.log(earnings(buildingsHeight, rupees[1]));
  }
}

if (process.env.USERNAME === "hp") {
  runProgram(`2\n6 3\n8 2 3 11 11 10\n5 12\n12 20 39 45 89`);
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
