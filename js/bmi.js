// Body Mass Index calculator

/* Resource: https://github.com/codersagor/bmiCalculator/blob/master/main.js */
/* Changes made: 
  -Replaced let or var with const
  -Replaced parseFloat with +
  -Style of Calculators (in css) 
  -Added comments & BMI category (if & else)
  -edited result & innerHTML */

// This function is called when the form is submitted for BMI
function calculateBMI() 
{
  // Get the user's height & weight from the calculator form
  // '+' converts a string to a number
  const height = +(document.getElementById("bmi-height").value);
  const weight = +(document.getElementById("bmi-weight").value);
  
  // Calculate the BMI using its formula
  const bmi = weight / (height * height);
  
  // Determine the BMI category
  // Info taken from: https://www.ncbi.nlm.nih.gov/books/NBK541070/
  let category;
  if (bmi < 16.5) 
   {
      category = "Severely underweight";
      textColor = "red";
   } 
  else if (bmi >= 16.5 && bmi < 18.5) 
   {
      category = "Underweight";
   } 
  else if (bmi >= 18.5 && bmi < 25) 
   {
      category = "Normal weight";
   }  
  else if (bmi >= 25 && bmi < 30) 
   {
      category = "Overweight";
   } 
  else if (bmi >= 30 && bmi < 35) 
   {
      category = "Obesity class I";
   } 
  else if (bmi >= 35 && bmi < 40) 
   {
      category = "Obesity class II";
   } 
  else 
   {
      category = "Obesity class III (also referred to as severe, extreme, or massive obesity)";
   }
  
   const result = bmi.toFixed(2); // Rounds a number to 2 decimal places

  // Display the result 
  document.getElementById("bmi-result").innerHTML =
    "BMI score: " + result + ", category: " + category; 
}
