// Get input from the user
const num1 = parseFloat(prompt("Enter the first number: "));
const num2 = parseFloat(prompt("Enter the second number: "));

// Validate user input (optional)
if (isNaN(num1) || isNaN(num2)) {
  alert("Invalid input! Please enter numbers only.");
} else {
  // Perform calculations
  const sum = num1 + num2;
  const difference = num1 - num2;
  const product = num1 * num2;
  const quotient = num2 !== 0 ? num1 / num2 : "Division by zero is not allowed!"; // Check for division by zero

  // Print the results
  console.log("Sum:", sum);
  console.log("Difference:", difference);
  console.log("Product:", product);
  console.log("Quotient:", quotient);
}
