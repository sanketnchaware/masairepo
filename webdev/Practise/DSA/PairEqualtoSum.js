// Find the pair whose sum is K.
let arr = [6, 4, 3, 2, 1, 7];
let K = 9;

// Set two pointers at first and last index and traverse through the array
// Check if the sum of element at the left pointer and at the right pointer  is equal to K
// if got the sum then return true else return false;

function FindPairTwoPointers(arr, K) {
  var left = 0;
  console.log("left:", left);

  var right = arr.length - 1;
  console.log("right:", right);
  console.log(arr, K);

  while (left < right) {
    var sum = arr[left] + arr[right];
    console.log("sum:", sum);
    if (sum == K) {
      return true;
    } else if (sum < K) {
      left++;

     
    } else {
      right--;
     
    }
  }
  return false;
}

FindPairTwoPointers(arr, K);
