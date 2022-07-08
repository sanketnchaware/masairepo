//1.//

var num =72;
var count =0,i=1;
while(i<=num){
    if(num%i==0){
        count++;
    }
    i++;
}
if(count==2){
    console.log("Its Prime");
}
else{
    console.log("Not Prime");
}
console.log("----------------------------")
//-----------------------------------------//
//2.//
var limit=36;
sum=0;
for(i=0;i<=limit;i++){
    if(i%3==0){
        sum=sum+i;
    }
}
console.log(sum/limit);
console.log("----------------------------")
//-------------------------------------------//3.//
var lim=3;
var even_sum=0,odd_sum=0;
for(i=0;i<=lim;i++){
    if(i%2==0){
        even_sum = even_sum+i;
    }
    else{
        odd_sum=odd_sum+i;
    }
}
console.log(odd_sum);
console.log(even_sum);
console.log("----------------------------")


//-----------------------------//
//4.//
var scores=[26,16,101,55,1,89];
var lowest=scores[0];
var highest=scores[0];
for(i=0;i<scores.length;i++){
    if(scores[i]<lowest){
        lowest=scores[i];
    }
    else if(scores[i]>highest){
        highest=scores[i];
    }
}
console.log(lowest);
console.log(highest);
console.log("----------------------------")
//-----------------------------//
//5.//
var num=79;
var counter=0;
for (var i=1;i<=num;i++){
    if (num%i==0){
        counter++;
    }
}
if(counter == 2){
    console.log("Its Prime");
}
else{
    console.log("Not Prime");
}
console.log("----------------------------")
//-------------------------------//
//6.//

var words=["may","god","bless","you"];
var conso_count=0;
var vowel_count=0;
for(i=0;i<words.length;i++){
    var item=words[i];
    console.log(item);
    for(j=0;j<item.length;j++){
        if(item[j]!="a" && item[j]!="e" && item[j]!="i" && item[j]!="o"&& item[j]!="u"){
            conso_count++;
        }
        else {
            vowel_count++;
        }
       
    }
}

console.log("consonents are",conso_count);
console.log("vowels are",vowel_count);
console.log("----------------------------")