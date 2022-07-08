function Ways(arr,N) {
  var sum = 0;
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log(sum);
  if (sum == N) {
    count++;
  }

  console.log(count);
}

var N = 9;

var arr = [];
for (var i = 1; i <= N; i++) {
  arr.push(i);
}

console.log("arr:", arr);

for (var i = 0; i < arr.length; i++) {
  for (var j = i + 1; j <= arr.length; j++) {
    var subArr = arr.slice(i, j);
    console.log("subArr:", subArr);
    Ways(subArr, N);
  }
}
