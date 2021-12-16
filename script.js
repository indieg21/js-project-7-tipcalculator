//if value has to change then we use let and the value is not changing then we can use const. 

const total = document.getElementById("totalBill");
total.style.color = "red";
const bill = document.getElementById("billInput");
const tip = document.getElementById("tipInput");
const btn = document.getElementById("btn");
btn.addEventListener("click", tipCalculator);

function tipCalculator() {
  const billAmount = parseFloat(bill.value);
  const tipPerecentage = parseFloat(tip.value);
  const tipAmount = (tipPerecentage / 100) * billAmount;
  const totalAmount = billAmount + tipAmount;
  //console.log(billAmount, tipPerecentage, tipAmount, totalAmount)
  total.innerHTML = `
          <h3>your total bill amount including tip: ${totalAmount}</h3>
          <h4>your tip amount is: ${tipAmount}</h4>

          `;
}

