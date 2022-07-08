function isPalindrome(str) {
  var rev = [];
  for (var i = str.length - 1; i >= 0; i--) {
    rev.push(str[i]);
  }

  if (str.join(" ") == rev.join(" ")) {
    return true;
  } else {
    return false;
  }
}

function runProgram(input) {
  input = input.trim().split("");
  
  var substring = [];
  for (var i = 0; i < input.length; i++) {
    for (var j = i + 1; j <= input.length; j++) {
      substring.push(input.slice(i, j));
    }
  }


  var pal_subs = [];
  for (var x = 0; x < substring.length; x++) {
    var pal = isPalindrome(substring[x]);

    if (pal) {
      pal_subs.push(substring[x]);
    }
  }

if(pal_subs.length>1){
  var highest = pal_subs[i].length;
  for (var z = 0; z < pal_subs.length; z++) {
    if (pal_subs[z].length > highest) {
      highest = pal_subs[z].length;
    }
  }
  console.log(highest);
  
}
else if(pal_subs.length==1){
  console.log(pal_subs.length);
}


}
if (process.env.USERNAME === "hp") {
  runProgram(`a`);
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
