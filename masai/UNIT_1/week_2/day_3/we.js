//1.//
var limit = 10;
for (var i = 1; i <= limit; i++) {
  console.log(i, "Masai School");
}

//----------------------------/
//2.//
var limit_2 = 10;
sum = 0;
for (var i = 0; i <= limit_2; i++) {
  if (i % 3 == 0) {
    sum = sum + i;
  }
}
console.log("Sum is", sum);

//----------------------------/
//3.//
var loop = 3;
for (var i = 1; i <= loop; i++) {
  for (var j = 1; j <= i; j++) {
    console.log(i + "." + j);
  }
}

//----------------------------/
//4.//
var scores = [29, 31, 21, 2, 7, 91];
var lowest = scores[0];

for (var i = 1; i < scores.length; i++) {
  if (scores[i] < lowest) {
    lowest = scores[i];
  }
}
console.log(lowest);

//----------------------------/

//5.//
var Names = ["sanket", "sayali", "chaware"];
conso = 0;
for (var i = 0; i < Names.length; i++) {
  var Name = Names[i];
  console.log(Name);
  for (var j = 0; j < Name.length; j++) {
    if (Name[j] != "a" && Name[j] != "e" && Name[j] != "i" && Name[j] != "o" && Name[j] != "u") {
      conso++;
    }
  }
}
console.log(conso);


