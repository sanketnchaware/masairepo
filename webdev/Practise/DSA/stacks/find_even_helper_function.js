function FindEven(arr) {
  var res = [];
  function helper(helperInp) {
    if (helperInp.length === 0) return;

    if (helperInp[0] % 2 == 0) {
      res.push(helperInp[0]);
    }

    helper(helperInp.slice(1));
  }

  helper(arr);

  return res;
}

var out = FindEven([1, 4, 5, 45, 88]);
console.log("out:", out);
