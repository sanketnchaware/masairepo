var arr = [
  [0, 0, 1, 0, 0],
  [1, 0, 0, 0, 1],
  [0, 1, 0, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
];

var XS = Xsymmetric(arr);
var YS = Ysymmetric(arr);

if (XS && YS) {
  console.log("YES");
} else {
  console.log("NO");
}

function Xsymmetric(arr) {
  var out = [];
  for (var i = 0; i < arr.length; i++) {
    var res = [];
    for (var j = 0; j < arr.length; j++) {
      res.push(arr[i][j]);
    }
    out.push(res);
  }

  var rev = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    var o = [];
    for (var j = 0; j < arr.length; j++) {
      o.push(arr[i][j]);
    }
    rev.push(o);
  }

  var nocount = 0;
  var yescount = 0;
  for (var z = 0; z < arr.length; z++) {
    if (out[z].join("") != rev[z].join("")) {
      nocount++;
    } else {
      yescount++;
    }
  }

  if (yescount == arr.length) {
    return true;
  } else {
    return false;
  }
}

function Ysymmetric(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var subr = [];
    for (var j = 0; j < arr.length; j++) {
      subr.push(arr[j][i]);
    }
    result.push(subr);
  }

  var reverse = [];

  for (var i = arr.length - 1; i >= 0; i--) {
    var subr2 = [];
    for (var j = 0; j < arr.length; j++) {
      subr2.push(arr[j][i]);
    }
    reverse.push(subr2);
  }

  var nc = 0;
  var cy = 0;
  for (var i = 0; i < arr.length; i++) {
    if (result[i].join("") != reverse[i].join("")) {
      nc++;
    } else {
      cy++;
    }
  }

  if (cy == arr.length) {
    return true;
  } else {
    return false;
  }
}
