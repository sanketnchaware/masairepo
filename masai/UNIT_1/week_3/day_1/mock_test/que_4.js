
function runProgram(input) {
  var n = Number(input);

		
		for (i = 1; i <= n; i++)
		{
		for (j = 1; j <= n; j++)
		{
			if (i == 1 || i == n || j == 1 || j == n)
				console.log("*");
			else
				console.log("");
		}
		console.log(" ");
		}
	}

	

 


if (process.env.USERNAME === "hp") {
  runProgram(`4`);
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
