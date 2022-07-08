function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

var arr = [2, 3, 5];

var res = productOfArray(arr);

console.log("res:", res);
