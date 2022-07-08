function runProgram(input) {
  input = input.trim().split("\n");
  var data = [];
  for (var i = 0; i < input.length; i++) {
    var item = input[i].trim().split(" ");
    var obj = {};
    var n = item[0];
    var quan = Number(item[1]);
    var p = Number(item[2]);
    obj.name = n;
    obj.quantity = quan;
    obj.price = p;
    data.push(obj);
  }
  var sum = 0;
  for (var i = 0; i < data.length; i++) {
    sum = data[i].quantity * data[i].price + sum;
  }
  console.log(sum);
}

if (process.env.USERNAME === "hp") {
  runProgram(`Rice 2 60\nDal 3 50\nSalt 1 20`);
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
