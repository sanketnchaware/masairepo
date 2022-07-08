function AnswerQueries(arr, queries) {
  var obj={};
  for (var i = 0; i < arr.length; i++) {
    obj[arr[i]] = 1;
  }
  // console.log(obj)
  for(var i = 0; i < queries.length; i++) {
  if(queries[i] in obj){
    console.log("YES");
  }
  else{
    console.log("NO");
  }
  }

}

function runProgram(input) {
  input = input.trim().split("\n");
  var arr = input[1].trim().split(" ").map(Number);
  // console.log("arr:", arr);
  var queries = input[3].trim().split(" ").map(Number);
  // console.log("queries:", queries);
  AnswerQueries(arr, queries);
}

if (process.env.USERNAME === "hp") {
  runProgram(`5
    1 2 3 4 5
    3
    3 5 7`);
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
