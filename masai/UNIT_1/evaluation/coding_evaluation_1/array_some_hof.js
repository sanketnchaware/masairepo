var a=[2, 4, 5, 3, 6, 8];

var res=a.filter(function(el,index) {

    return index%2==1 && el%2==1;
})

console.log(res);