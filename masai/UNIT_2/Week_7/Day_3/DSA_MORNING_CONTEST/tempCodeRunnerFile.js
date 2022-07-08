
function isPrim(num) {
  var count = 0;
  for (var i = 2; i < num - 1; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  if (count) {
   return false;
  } else {
    return true;
  }
  
}

function isIJ(a,b){
  if(a<b){
    return true;
  }
  else{
    return false;
  }
}