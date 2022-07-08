var Name = "hannah";
var len = Name.length;
var c = 0;

for (i = 0; i < len; i++) {
  if (Name[i] != Name[len - i - 1]) {
    c = 1;
    break;
  }
}

if (c == 0) {
  console.log("Palindrome ", Name);
} else {
  console.log("Not Palindrome ", Name);
}
