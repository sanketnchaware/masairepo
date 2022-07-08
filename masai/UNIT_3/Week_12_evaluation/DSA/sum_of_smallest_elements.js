var str = [1, 2, 3,4];

var stack = [];

for (var i = 0; i < str.length; i++) {
  if (str[i] > str[i + 1] && str[i + 1] > str[i + 2]) {
    stack.push(str[i + 1]);
    stack.push(str[i + 2]);
  }
}

function add(res) {
    var sum=0;
    for (var i = 0; i <res.length;i++) {
        sum=sum+res[i];

    }
    return sum;
}

if(add(stack)){
    console.log(add(stack));
}
else{
    console.log(0);
}