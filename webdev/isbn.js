let isbn = 9783901642568;
let num = isbn;
let len = num.toString().length;
let numtostr = num.toString();
var extnum = numtostr.substring(0, 3);

function lv_ISBN() {
  if (len == 10) {
    let firstint = "978";
    let isbn10 = firstint.concat(num);
    return isbn10;
  }
  if (len == 13 && extnum == 978) {
    let isbn13 = isbn;
    return isbn13;
  }
}

// --------------------------------------------------

let ln_isbn = lv_ISBN();

function Baburao() {
  var arr = ln_isbn.toString().split("");
  for (var i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      arr[i] = arr[i] * 3;
    } else {
      arr[i] = +arr[i];
    }
  }
  return arr;
}

var result = Baburao();

// --------------------------------------------------


Sonya(result);

function Sonya(s) {
  for (var i = 0; i < 12; i++) {
    result[i + 1] = result[i] + result[i + 1];
  }
  return result;
}


