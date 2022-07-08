const MaxTripletProduct = (arr) => {
  var first, sec, third;
  if (arr[0] > arr[1] && arr[1] > arr[2]) {
    first = arr[0];
    sec = arr[1];
    third = arr[2];
  } else if (arr[1] > arr[0] && arr[0] > arr[2]) {
    first = arr[1];
    sec = arr[0];
    third = arr[2];
  } else {
    first = arr[2];
    sec = arr[0];
    third = arr[1];
  }

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > first && arr[i] > sec && arr[i] > third) {
      third = sec;
      sec = first;
      first = arr[i];
    } else if (arr[i] > first && arr[i] > sec && arr[i] < third) {
      third = arr[i];
    } else if (arr[i] > first && arr[i] < sec && arr[i] < third) {
      sec = arr[i];
    } else if (arr[i] < first && arr[i] < sec && arr[i] < third) {
      first = arr[i];
    }
  }
  return first * sec * third;
};

var arr = [1, 5, 3, 4, 2];
var res = MaxTripletProduct(arr);
console.log("res:", res);
