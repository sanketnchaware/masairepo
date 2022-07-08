function isVowel(char) {
  var vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (var i = 0; i < vowel.length; i++) {
    if (vowel[i] == char) {
      return true;
    }
  }
  return false;
}
var Name = "SanketChaware";
var output = "";
for (var i = 0; i < Name.length; i++) {
  var isVow = isVowel(Name[i]);
  if (!isVow) {
    output = output + Name[i];
  }
}
console.log(output);
