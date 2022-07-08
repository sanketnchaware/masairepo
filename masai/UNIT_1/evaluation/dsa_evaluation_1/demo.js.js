var res = [];
var nam=["a","m","a","n"]
for (var i = 0; i < nam.length; i++) {
  for (var j = i + 1; j <= nam.length; j++) {
    res.push(nam.slice(i, j));
  }
}
console.log(res);
