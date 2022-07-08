/*Brute Force Method
Problem -"find if any element in the array is repeated or not ."
*/

var arr = [1, 2, 3,1, 5, 6];


for (var i = 0; i < arr.length; i++) {
  for (var j =i+1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      console.log("Yes");
      break;
    }
    
  }
}

