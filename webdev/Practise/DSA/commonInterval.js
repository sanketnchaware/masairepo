var intervalIntersection = function (firstList, secondList) {
  let first = 0; // pointer for firstList
  let second = 0; // pointer for secondList
  let result = [];

  while (first < firstList.length && second < secondList.length) {
    // largest starting point of the interval
    let maxStart = Math.max(firstList[first][0], secondList[second][0]);

    // smallest end point of the interval
    let minEnd = Math.min(firstList[first][1], secondList[second][1]);

    // if the intervals intersect
    if (maxStart <= minEnd) {
      result.push([maxStart, minEnd]);
     
    }

    // move a pointer depending on which end point of the interval is smaller
    if (firstList[first][1] < secondList[second][1]) {
      first++;
    } else {
      second++;
    }
  }

  return result;
};

var firstList = [
  [10, 50],
  [60, 120],
  [140, 210],
];
var secondList = [
  [0, 15],
  [60, 70],
];
var dur = 8
var res = intervalIntersection(firstList, secondList);

for (var c = 0; c < res.length; c++) {
  var need = res[c][1] - res[c][0];
  if (need >= dur) {
    var out = res[c][0];
    console.log("out:", out + dur);
    break;
  }
  if(need <dur){
    console.log("out:",[]);
    break
  }
  
  
}
