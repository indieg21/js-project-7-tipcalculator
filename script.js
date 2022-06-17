//if value has to change then we use let and the value is not changing then we can use const. 

const total = document.getElementById("totalBill"); // the DOM elements. Selecting the input fields
total.style.color = "white";
const bill = document.getElementById("billInput");
const tip = document.getElementById("tipInput");
const btn = document.getElementById("btn"); //selecting all the required fields 1-7
btn.addEventListener("click", tipCalculator); // adding click event & onclick tipcalulator w/ execute

function tipCalculator() { // take all the values to the calculate & display result
  const billAmount = parseFloat(bill.value); // getting the value of the bill amount
  const tipPerecentage = parseFloat(tip.value); //getting the value of the tip amount
  const tipAmount = (tipPerecentage / 100) * billAmount; // do the math to calculate tip amount
  const totalAmount = billAmount + tipAmount; // do the math to calculate total amount
  //console.log(billAmount, tipPerecentage, tipAmount, totalAmount)
  total.innerHTML = `
          <h3>Total bill with tip: $${totalAmount}</h3>
          <h4>Tip amount is: $${tipAmount.toFixed(2)}</h4>
 `;
} 

//Using a back tick allows us to add the value  inside  html tag (h3) any tag.When adding value use $ and {} to insert the value. Text to display the amount for total bill including tip and also the tips amount


