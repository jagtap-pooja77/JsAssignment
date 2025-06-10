/*  Write a function called calculateTotal that takes price and quantity as parameters.
Use a helper function named multiply that multiplies two numbers*/
function calculateTotal(price, quantity){
   return multiply(price,quantity);
}

function multiply(num1,num2){
  return num1*num2;
}
const total = calculateTotal(4, 3);
console.log(`multiplication: ${total}`);