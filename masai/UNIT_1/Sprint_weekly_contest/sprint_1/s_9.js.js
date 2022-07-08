// // K = 2 * X - Y
// J = 2 * X + 3 * Y + 2





function runProgram(input) {

  var num = input.split(' ').map(Number)
  var K=Number(num[0]);
  var X=Number(num[1]);
  var Y=(2*X)-K;
  console.log(Y);
  var J = 2 * X + 3 * Y + 2;
  console.log(J);

}
if (process.env.USERNAME === "hp") {
  runProgram(`5 3`);
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