//1.max sum//

// var k = 3;
// var arr = [-1, -1, -2, 1, -2, 4, 1, 9, 3, 9];

// var sum=0;
// var maxSum=0;

// var i=0;
// var j=0;
// var len=arr.length;

// while (j<len){
//     sum=sum+arr[j];
//     if((j-i+1)<k){
//         j++;
//     }
//     else if((j-i+1)===k){
//         maxSum=Math.max(maxSum,sum);
//         sum=sum-arr[i];
//         i++;
//         j++;
//     }
// }

// console.log(maxSum);

//2.pair less than k//
// function pair(arr,len,k) {
//   let i = 0;
//   let j = len - 1;
//   while (i < j) {
//     if (arr[i] + arr[j] < k) {
//      return(arr[i] + arr[j]);
//     } else {
//       return `${-1}`;
//     }
//   }
// }

// var l = 3;
// var mat = [30,10,20];
// var k = 15;

// console.log(pair(mat,l,k));

function isPairK(mat, l, k) {
  var x = 0;
  var y = l - 1;
  while (x < y) {
    if (mat[x] + mat[y] < k) {
      return (mat[x] + mat[y]);
    } else {
      return -1;
    }
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0];
  var line = 1;

  for (var i = 0; i < cases; i++) {
    var len = +input[line];

    line++;
    var arr = input[line].trim().split(" ").map(Number);

    line++;
    var k = +input[line];

    line++;

    console.log(isPairK(arr, len, k));
  }
}
if (process.env.USERNAME === "hp") {
  runProgram(`2
  5
  1 2 3 4 5
  7
  3
  30 10 20
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
