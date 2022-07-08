var weight = 68,
  height = 1.88976;
var BMI = weight / height;
console.log(BMI);
if (BMI < 18.5) {
  console.log("you're in the underweight range");
} else if (BMI >= 18.5 && BMI <= 24.9) {
  console.log("you're in the healthy weight range");
} else if ((BMI) >= 25 && BMI <= 29.9) {
  console.log("you're in the overweight range");
} else if (BMI >= 30 && BMI <= 39.9) {
  console.log("you're in the obese range");
}
