var N=11;

var even=[]

for(var i=0; i<=N; i++){
  if(i%2==0  && N%i===0 ){
    even.push(i)
  }
}

console.log(even)


var odd=[]
for(var o=0; o<=N; o++){
  if(o%2!=0  && N%o===0 ){
    odd.push(o)
  }
}
console.log(odd)
