function toUpperCase(char) {
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (var i = 0; i < lower.length; i++) {
    if ((lower[i] == char)) {
      return upper[i];
    }
  }
}

console.log(toUpperCase("z"));
