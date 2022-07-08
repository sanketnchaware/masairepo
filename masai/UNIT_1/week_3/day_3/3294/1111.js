// Create an object with a key call item having a string value
// Create the methods vowelsCount reverse changeCase
// The vowelsCount returns the count of vowels in the string
// The reverse returns the string in reverse order
// The changeCase flips the case lower to upper or upper to lower

var word = {
  items: " FireFox",
  reverse: function () {
    var out = "";
    for (var i = this.items.length - 1; i >= 0; i--) {
      out = out + this.items[i];
    }
    return out;
  },
  vowelsCount: function () {
    var count = 0;
    var vow = "aeiouAEIOU";
    for (var i = 0; i < this.items.length; i++) {
      for (var j = 0; j < vow.length; j++) {
        if (this.items[i] == vow[j]) {
          count++;
          break;
        }
      }
    }
    return count;
  },
  changeCase: function () {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var low = "abcdefghijklmnopqrstuvwxyz";
    var s1 = this.items.trim().split("");
    var u = upper.trim().split("");
    var l = low.trim().split("");

    var new_str = [];
    for (var i = 0; i < s1.length; i++) {
      for (var j = 0; j < u.length; j++) {
        if (s1[i] == u[j]) {
          new_str.push(l[j]);
        } else if (s1[i] == l[j]) {
          new_str.push(u[j]);
        }
      }
    }
    console.log(new_str.join(""));
  },
};

console.log(word.vowelsCount());
console.log(word.reverse());
word.changeCase();
