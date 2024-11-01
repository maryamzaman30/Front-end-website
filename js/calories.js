// Protein intake Calculator (Edited from BMI Calculator)

// This function is called when the form is submitted for Protein
function calculateIntake()
{
  // Get the value entered by the user
  const weight = document.getElementById("protein-weight").value;
 
  /* Calculate the user's daily protein needs using the recommended 
  intake of 0.8 grams of protein per kilogram of body weight */
  /* About 0.8 grams info from: 
  https://www.health.harvard.edu/blog/how-much-protein-do-you-need-every-day-201506188096 */
  // It calculate it by multiplying user's weight with 0.8 gram  
  const result = (weight * 0.8).toFixed(0); // round the value to the nearest integer
  
  // Display the result
  document.getElementById("protein-result").innerHTML = "Your daily protein needs are " + 
  result + " grams.";
}