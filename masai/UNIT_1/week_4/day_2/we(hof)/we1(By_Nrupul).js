var numbers=[1,2,3,4,5,6,7,8,9];

numbers.forEach(function(el){             
    console.log(el*el);
})

//-------------------------
function double(el){
    return el*2;
}

var double_numbers=numbers.map(double);console.log(double_numbers);

//-------------------------


function isOdd(el){
    if(el%2==0){
        return false;
    }
    else{
        return true;
    }
}

var odd_numbers=numbers.filter(isOdd);
console.log(odd_numbers);

//-------------------------

function multiply(ac,el){
    return ac*el;
}

var product=numbers.reduce(multiply);
console.log(product);



//-----------------------------


function add(a,b){
    return a+b;
}

var odd_sum=numbers.filter(isOdd).reduce(add);
console.log(odd_sum);

//-----------------------------


function multiple3(el){
    if(el%3==0){
        return true;
    }
    else{
        return false;
    }
}

function cubes(el){
    return el*el*el;
}

var cubes_sum_3=numbers.filter(multiple3).map(cubes).reduce(add);
console.log(cubes_sum_3);


//-------------------------------------