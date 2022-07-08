var names=["apple", "windows", "ubuntu", "cola", "system"];
var res=names.filter(function(el,index) {
    if(el[0]=="a" || el[el.length-1]=="a"){
        return el;
        }
})
console.log(res)