function FindOdd(arr) {
  var res = [];
  function helper(helperInput) {
    if (helperInput.length == 0) {
      return;
    }

    if (helperInput[0] % 2 != 0) {
      res.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);
  return res;
}

var arr = [1, 45, 8, 6, 46, 25];
var out = FindOdd(arr);
console.log("out:", out);
