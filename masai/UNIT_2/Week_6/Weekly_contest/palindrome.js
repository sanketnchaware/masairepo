function runProgram(input) {
  input = input.trim().split("\n");
  var cases = Number(input[0]);
  var line = 1;

  for (var i = 0; i < cases; i++) {
    var num = Number(input[line]);
    line++;
    var arr = input[line].trim().split("");
    line++;
    var obj = {};

    for (var x = 0; x < arr.length; x++) {
      var count = 0;
      for (var y = 0; y < arr.length; y++) {
        if (arr[x] == arr[y]) {
          count++;
          obj[arr[x]] = count;
        } 
      }
    }

    console.log(obj)

    var arr = [];
    for (key in obj) {
      var n = obj[key];
      arr.push(n);
    }
console.log(arr);
    var c = 0;
    for (var v = 0; v < arr.length; v++) {
      if (arr[v] % 2 != 0) {
        c++;
      }
    }
    console.log(c);

    if (c > 1) {
      console.log("Not Possible!");
    } else {
      console.log("Possible!");
    }
  }
}

if (process.env.USERNAME === "hp") {
  runProgram(`3
    6
    aabbcc
    99
yxhtfboynmkokuitomvnyboqeeuugvwsnromgeruecxlkwkjdfdgknmkocttlkfvyvvawulldiapatqlktuwuicbpsrjybldwaq
7
giggbgb`);
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
