// Venkatesh C2:00 PM
// 1. Anonymous User has an array of N positive integers. The i-th integer of the array is Ai.
// A contiguous subarray is an m-countdown if it is of length m and contains the integers m, m-1, m-2, ..., 2, 1 in that order. 
// For example, [3, 2, 1] is a 3-countdown and [23,5,4,3,2,1] is a 5-countdown.

// Can you help Anonymous User count the number of K-countdowns in given array?
// Case #1: ARR=[1,2,3,7,9,3,2,1,8,3,2,1] C:3  SOL:2 
// Case #2: ARR=[101,100,99,98]    C:3        SOL:0
// Case #3: ARR=[100,7,6,5,4,3,2,1,100] C:5   SOL:1

function countdown(arr,c){
    var count=0
    for(var i=0;i<arr.length;i++){
        if(c===arr[i]){

            for(var j=i;j<c;j++){
                if(arr[j]===arr[j+1]-1){
                    count++;
                }
                
            }

            
        }
    }
    console.log(count)

}
countdown([1,2,3,7,9,3,2,1,8,3,2,1],3)