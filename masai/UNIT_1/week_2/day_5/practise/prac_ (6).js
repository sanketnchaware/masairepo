var nums = [1, 4, 5, 9, 2, 9, 7, 2];  //Taken a array//

function getHighest(numbers) {  //function to find maximum no from array//
  var high = numbers[0];
  for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > high) {
      high = numbers[i];
    }
  }
  return high;
}

function getFrequency(no, compare) {  //function to count the count of maximum no//
  var count = 0;
  for (var i = 0; i < no.length; i++) {
    if(no[i] == compare) {
      count++;
    }
  }
  return count;
}

var highest = getHighest(nums);  //printing the outputs//

var freq = getFrequency(nums, highest);

console.log(highest+" "+freq);
