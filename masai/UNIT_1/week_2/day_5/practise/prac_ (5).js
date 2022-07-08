function prime(num){
    for(var i=2;i<num-1;i++){
        if(num%i==0){
            return true;
        }
        return false;
    }
}
var no= prime(17);
if(no==true){
    console.log("not prime");
}
else{
    console.log("prime");
}
