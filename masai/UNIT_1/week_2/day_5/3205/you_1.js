function firstBigger(num_arr, num) {
  var new_arr = [];
  for (var j = 0; j < num_arr.length; j++) {
    if (num_arr[j] > num) {
      new_arr.push(num_arr[j]);
    }
  }
console.log(new_arr);
  if (new_arr == 0) {
    console.log("-1");
  } 

  
  else 
  {
    var small = new_arr[0];
    for (var b = 1; b < new_arr.length; b++) {
      if (new_arr[b] < small) {
        small = new_arr[b];
      }
    }
    console.log(small);
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  var num_buildings = Number(input[0]);
  var cases = Number(input[2]);
  var arr = input[1].trim().split(" ").map(Number);
  for (var i = 3; i < input.length; i++) {
    var n = Number(input[i]);
    firstBigger(arr, n);
  }
}

if (process.env.USERNAME === "hp") {
  runProgram(`10
      13 89 81 66 81 63 71 76 73 81
      2
      65
      15`);
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
