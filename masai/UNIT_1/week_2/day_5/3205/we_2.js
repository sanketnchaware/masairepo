function array_product(items) {
  var prod = 1;
  for (var i = 0; i < items.length; i++) {
    prod = prod * items[i];
  }
  return prod;
}

function item_product(numbers, product) {
  var products = [];
  for (var i = 0; i < numbers.length; i++) {
    var i_prod = product / numbers[i];
    products.push(i_prod);
  }
  return products;
}

function runProgram(input) {
  var arr = input.split("\n");
  var cases = Number(arr[0]);
  for (var i = 2; i < arr.length; i = i + 2) {
     var nums = arr[i].trim().split(" ").map(Number);
     var prod=array_product(nums);
     var it_prod=item_product(nums,prod);
     console.log(it_prod.join(" "));
    
  }
}

if (process.env.USERNAME === "hp") {
  runProgram(`2
  5
  1 2 3 4 5
  3
  3 2 7`);
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
