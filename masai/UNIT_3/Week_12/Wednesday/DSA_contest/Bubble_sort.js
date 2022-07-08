// An optimized version of Bubble Sort
function bubbleSort(arr, n) {
    var i, j;
    for (i = 0; i < n - 1; i++) {
      for (j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
  
  // Driver program to test above functions
  var arr = [64, 34, 25, 12, 22, 11, 90];
  var n = 7;
  console.log("UnSorted array: \n");
  console.log(arr);
  
  bubbleSort(arr, n);
  console.log("Sorted array: \n");
  console.log(arr);
  