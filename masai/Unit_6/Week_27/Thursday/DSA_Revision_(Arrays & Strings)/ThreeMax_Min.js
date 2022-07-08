var arr = [-4, -7, -2, -11, -2, -8, 0, -122, -66, 10];
// var arr = [4, 5];
function ThreeMaxMin(arr) {
  var arr = arr.sort(function (a, b) {
    return a - b;
  });
  // console.log(arr);
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }

  var resArr = [];
  for (var key in obj) {
    resArr.push(key);
  }

  var resSorted = resArr.sort(function (a, b) {
    return a - b;
  });

  // console.log(resSorted);

  var min = [];
  for (var i = 0; i < 3; i++) {
    if (typeof resSorted[i] === "undefined") {
      console.log("Not Possible");
      
    }

    min.push(resSorted[i]);
  }
  var max = [];
  for (var i = resSorted.length - 1; i > resSorted.length - 4; i--) {
    if (typeof resSorted[i] === "undefined") {
      console.log("Not Possible");
      return;
    }
    max.push(resSorted[i]);
  }
  console.log(min.map(Number).join(" "));
  console.log(max.map(Number).reverse().join(" "));
}

ThreeMaxMin(arr);
