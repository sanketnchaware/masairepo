var arr=[1,1,1,3,4,6,7]
var num=arr.length;
  var maxCount = 0;
  var mf = arr[0];
  for (var i = 0; i < num; i++) {
    var count = 0;
    for (var j = i+1; j < num; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }

    if (maxCount < count) {
      var mf = arr[i];
    }
  }
  console.log(mf);