const MaxPairDiff = (arr, len) => {
  console.log(arr[0]);
  console.log(len - 1);
  var first, last;
  if (arr[0] > arr[len - 1]) {
    first = arr[0];
    last = arr[len - 1];
  } else {
    first = arr[len - 1];
    last = arr[0];
  }

  for (var i = 1; i < len; i++) {
    if (arr[i] > first) {
      first = arr[i];
    } else if (arr[i] < last) {
      last = arr[i];
    }
  }
  return (first - last);
};

var arr = [1,4,5,2,6,6,6,2,6,8];
var len = arr.length;
var maxDiff=MaxPairDiff(arr, len);
console.log('maxDiff is :', maxDiff)
