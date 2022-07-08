function runProgram(input) {
  var a = Number(input);
  
  var arr1 = [];
  var arr2 = [];
  for (var i = 1; i <= a; i++) {
    arr1.push(i);
  }

  for (var z = 2; z <= arr1.length; z++) {
    for (var j = 0; j < arr1.length; j++) {
      res = arr1[j] * z;
      arr2.push(res);
    }
  }
  console.log(arr1.join(" "));
  console.log(arr2.slice(0, a).join(" "));
  console.log(arr2.slice(a, a+a).join(" "));
  console.log(arr2.slice(a+a, a+a+a).join(" "));
  console.log(arr2.slice(a+a+a, a+a+a+a).join(" "));
  console.log(arr2.slice(a+a+a+a, a+a+a+a+a).join(" "));
  console.log(arr2.slice(a+a+a+a+a, a+a+a+a+a+a).join(" "));



  
}

if (process.env.USERNAME === "hp") {
  runProgram(`4`);
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
