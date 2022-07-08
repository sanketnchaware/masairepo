// Using Brute Force

// function MaxSumPairBrute(arr, n) {
//   var maxSum = 0;
//   
//   var i, j;
//   for (i = 0; i < n; i++) {
//     for (j = i + 1; j < n; j++) {
//       var sum = arr[i] + arr[j];
//       if (sum > maxSum) {
//         maxSum = sum;
//         
//       }
//     }
//   }
//   return maxSum;
// }

// var arr = [12, 34, 10, 6, 40];
// var n = arr.length;
// var res = MaxSumPairBrute(arr, n);
// console.log("res:", res);

// =====================================================================//

// Using greedy Algorithm

function MaxSumPairGreedy(arr, n) {
  var first, second;
  if (arr[0] > arr[1]) {
    first = arr[0];
    second = arr[1];
  } else {
    first = arr[1];
    second = arr[0];
  }

  for (var i = 2; i < n; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] != first) {
      second = arr[i];
    }
  }

  return first + second;
}

var arr = [12, 34, 10, 6, 40];
var n = arr.length;
var res = MaxSumPairGreedy(arr, n);
console.log("res:", res);
