var person1 = ["Aman", "m", 20];
var person2 = ["Nrupul", "m", 32];

var persons = [];

persons.push(person1);
persons.push(person2);
console.log(persons);

for (var i = 0; i < persons.length; i++) {
  console.log(persons[i]);
  var per = persons[i];
  for (var j = 0; j < per.length; j++) {
    console.log(persons[i][j]);
  }
}
console.log("-----------------------");

var sudoku = [
  [1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 8.1, 9.1],
  [1.2, 2.2, 3.2, 4.2, 5.2, 6.2, 7.2, 8.2, 9.2],
  [1.3, 2.3, 3.3, 4.3, 5.3, 6.3, 7.3, 8.3, 9.3],
  [1.4, 2.4, 3.4, 4.4, 5.4, 6.4, 7.4, 8.4, 9.4],
  [1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5, 8.5, 9.5],
  [1.6, 2.6, 3.6, 4.6, 5.6, 6.6, 7.6, 8.6, 9.6],
  [1.7, 2.7, 3.7, 4.7, 5.7, 6.7, 7.7, 8.7, 9.7],
  [1.8, 2.8, 3.8, 4.8, 5.8, 6.8, 7.8, 8.8, 9.8],
  [1.9, 2.9, 3.9, 4.9, 5.9, 6.9, 7.9, 9.9, 9.9],
];
var sum = 0;
for (var i = 0; i < sudoku.length; i++) {
  for (var j = 0; j < sudoku[i].length; j++) {
    sum = sum + sudoku[i][j];
    if (i + j == 8) {
      console.log(sudoku[i][j], "nice");
    }
  }
}
console.log(sum);

console.log("-----------------------");
for (var k = 0; k <= 8; k++) {
  console.log(sudoku[k][8 - k]);
}

console.log("-----------------------");



function runProgram(input) {
    // Write code here
   
  }
  if (process.env.USER === "hp") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  
  