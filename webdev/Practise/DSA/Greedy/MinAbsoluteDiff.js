// const MinAbsolute = (arr, len) => {
//   var ans = Number.MAX_VALUE;
//   arr = arr.sort(function (a, b) {
//     return a - b;
//   });

//   for (var i = 0; i < len - 1; i++) {
//     var ans = Math.min(ans, Math.abs(arr[i] - arr[i + 1]));
//   }
//   return ans;
// };

function minimumAbsoluteDifference(arr) {
  var ans = Number.MAX_VALUE;
  arr = arr.sort(function (a, b) {
    return a - b;
  });
  for (var i = 0; i < arr.length - 1; i++) {
    ans = Math.min(ans, Math.abs(arr[i] - arr[i + 1]));
  }
  return ans;
}

var arr = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75];
var len = arr.length;
var res = minimumAbsoluteDifference(arr, len);
console.log("res:", res);
