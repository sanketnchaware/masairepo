function subStrings(nam) {
  var res = [];
  for (var i = 0; i < nam.length; i++) {
    for (var j = i + 1; j <= nam.length; j++) {
      res.push(nam.slice(i, j));
    }
  }
  return res;
}




function even_odd_Count(arr) {
  var count1 = 0,
    count2 = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      count1++;
    }
    if (arr[i] % 2 == 1) {
      count2++;
    }
  }
  return [count1, count2];
}




function runProgram(input) {
  input = input.trim().split("\n");
  console.log(input);
  var length = Number(input[1]);
  console.log(length);
  var arr = input[2].trim().split(" ").map(Number);
  console.log(arr);
  var subs = subStrings(arr);
  console.log(subs);
  var counter = 0;
  for (var g = 0; g < subs.length; g++) {
    var b = even_odd_Count(subs[g]);
    console.log(b);
    if (b[0] < b[1]) {
      counter++;
    }
  }
  console.log(counter);
}






if (process.env.USERNAME === "hp") {
  runProgram(`1
    5
    1 2 3 4 5`);
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
