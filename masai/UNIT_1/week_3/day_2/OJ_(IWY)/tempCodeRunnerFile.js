function sum_mat(matrix) {
  var sum = 0;
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      sum = sum + matrix[i][j];
    }
  }
  return sum;
}

function runProgram(input) {
  input = input.trim().split("\n");
 var [rows1, col1] = input[0].trim().split(" ").map(Number);
  var [rows2, col2] = input[4].trim().split(" ").map(Number);

  var mat1 = [];
  for (var i = 1; i <= rows1; i++) {
    mat1.push(input[i].trim().split(" ").map(Number));
  }

  var mat2 = [];
  var ele1 = input[5].trim().split(" ").map(Number);
  var ele2 = input[6].trim().split(" ").map(Number);

  mat2.push(ele1);
  mat2.push(ele2);
  var s1=sum_mat(mat1);

  var s2=sum_mat(mat2);
  

  if(s1>s2){
      console.log(s1);
  }
  else{
      console.log(s2);
  }
}


if (process.env.USERNAME === "hp") {
  runProgram(`3 4
    1 2 3 4
    0 5 6 1
    9 3 0 8
    2 2
    8 8
    8 8`);
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
