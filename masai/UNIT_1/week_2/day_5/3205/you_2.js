// cbazyx snfdsjglnweln
function stringCut(str) {
console.log(str.length);

  if(str.length%2==0){
    var mid = Math.floor(str.length / 2);
    var s = str.reverse();
    var s1 = s.splice(mid, str.length).join("");
    console.log(s1);
    var s2 = s.splice(0, mid).join("");
    console.log(s2);
    var final = [s1, s2];
    console.log(final.join(""));
  }
  else{
    var mid = Math.floor(str.length / 2);
    var s = str.reverse();
    var middle=s[mid].trim().split("");
    console.log(s);
    var s1 = s.splice(mid+1, str.length).join("");
    console.log(s1);
    var s2 = s.splice(0, mid).join("");
    console.log(s2);
    var final = [s1,middle,s2];

    console.log(final.join(""));
  }
  
}

function runProgram(input) {
  arr = input.trim().split("");
  stringCut(arr);
}

if (process.env.USERNAME === "hp") {
  runProgram(`jsdfnsgnlewnl`);
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
