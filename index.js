function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

  let heightM = height * 0.01; // height = height*0.01
  let BMI = weight / heightM ** 2;
  alert(BMI + " is your BMI");

  if (BMI < 18.5) {
    alert("underweight");
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    alert("Healthy Weight");
  } else if (BMI >= 25.0 && BMI <= 29.9) {
    alert("Overweight");
  } else {
    alert("Obesity");
  }
}
