function Good_Bad(str){

var status = isGood(str);
if (status = false) {
  let removed = str.splice(str[1], 1);
  console.log(removed);
  console.log(str);
}
}