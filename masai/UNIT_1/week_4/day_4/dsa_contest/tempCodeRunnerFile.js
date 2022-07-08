var input ="a3b2";
var strArr = [];
  for (let i = 0; i < input.length; i++) {
    strArr.push(input[i]);
    console.log(input[i]);
  }
  var output = '';
  for (let i = 0; i < strArr.length; i = i + 2) {
    for (let j = 0; j < Number(strArr[i + 1]); j++) {
      output += strArr[i];
    }
  }
  console.log(output);