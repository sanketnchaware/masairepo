function isPairSum(arr, target, length) {
  var l = 0;
  var r = length - 1;

  while (l < r) {
    if (arr[l] + arr[r] == target) {
      console.log(l, r);
      break;
    } else if (arr[l] + arr[r] < target) {
      l++;
    } else {
      r--;
    }
  }
}

var mat = [2, 7, 11, 15];
var l = mat.length;
var t = 9;

isPairSum(mat, t, l);
