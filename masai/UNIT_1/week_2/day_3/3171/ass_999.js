
var word = ["A","Quick", "Brown", "Fox", "Jumps", "Over", "A", "Lazy", "Dog"]; 
for( var i = 0; i < word.length; i++){ 
  var char = word[i];
    if ( char.length<4 ) { 
         word.splice(i, 1); 
    }

}
console.log(word);
