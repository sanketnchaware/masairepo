var array=[1,2,3,4,5,6];
array.forEach(function(number){
   console.log(number**2);
})   
console.log("-------------------------------------------")

var double= array.map(function(number){
    return number*2;
})
console.log(double);

console.log("--------------------------------")


var odd=array.filter(function(number){
    if(number%2==0){
        return false;
    }
    else{
        return true;
    }
})
console.log(odd);

console.log("--------------------------------");

var  mult=array.reduce(function(ac,el){
    return ac*el;
})
console.log(mult);

console.log("--------------------------------");


function isOdd(el){
    if(el%2==0){
        return false;
    }
    else{
        return true;
    }
}

function add(a,b){
    return a+b;
}

var oddSum=array.filter(isOdd).reduce(add);
console.log(oddSum);


console.log("--------------------------------");


function divisible3(number){
    if(number%3==0){
        return true;
    }
    else{
        return false;
    }
}

function cubes(num){
    return num**3;
}


var divisible3Cube= array.filter(divisible3).map(cubes).reduce(add);
console.log(divisible3Cube);