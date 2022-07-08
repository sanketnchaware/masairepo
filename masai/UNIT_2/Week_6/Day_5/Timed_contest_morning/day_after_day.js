function runProgram(input) {
  input = input.trim().split("\n");
  var current_day = input[0];
  var num = Number(input[1]);
  console.log(current_day);
  console.log(num);
  var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  for (var i = 0; i < days.length; i++) {
    if(current_day==days[i]){
        console.log(days[i]);
    }
    


  }



}
if (process.env.USERNAME === "hp") {
  runProgram(`Wednesday
    8`);
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
