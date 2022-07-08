var obs={
    person:"sanket",
    class:6,
    students:{sanket:}
    grade:"A"
}

var arr=[];
for (key in obs) {
    arr.push(obs[key])
}
console.log(arr)
var nums=arr[2];
console.log(nums)


var sum=0;
for (var i=0; i<nums.length; i++) {
    sum=sum+nums[i];
}
console.log(sum)