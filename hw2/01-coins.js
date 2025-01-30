/** Exercise 01 - Coins **/

function format_output(denomination, amount) {
  let result = "",
    plural = "",
    singular = "";

  if (amount === 0) {
    return result;
  }
  if (denomination === "penny") {
    plural = "pennies";
    singular = "penny";
  } else {
    plural = denomination + "s,";
    singular = denomination + ",";
  }

  if (amount > 1) {
    result += `${amount} ${plural} `;
  } else {
    result += `${amount} ${singular} `;
  }
  return result;
}

// Add your function here
const calculateChange = function calculateChange(amount) {
  let dollars = 0,
    quarters = 0,
    dime = 0,
    nickel = 0,
    penny = 0,
    cents = 0;

  let result = "";

  console.log(`Initial amount is ${amount}`);

  if (amount > 100) {
    result =
      "Amount is more than $100, please enter an amount less than or equal to 100";
  }

  if (amount < 0) {
    result = "Amount is negative, not valid";
  }

  if (amount === 0) {
    result = `${dollars} dollars, ${quarters} quarters, ${dime} dimes, ${nickel} nickels, ${penny} pennies are needed`;
  }

  result = `\$${amount} ==> `;
  dollars = Math.floor(amount);
  result += format_output("dollar", dollars);

  //   if (dollars > 1 || dolars === 0) {
  //     result = `${dollars} dollars`;
  //   } else {
  //     result = `${dollars} dollar`;
  //   }

  cents = amount - dollars;
  cents = parseFloat(cents.toFixed(2));
  console.log(`After subtracting dollars, cents is now ${cents}`);

  quarters = Math.floor(cents / 0.25);
  result += format_output("quarter", quarters);

  //   if (quarters > 1 || quarters === 0) {
  //     result += `${quarters} quarters`;
  //   } else {
  //     result += `${quarters} quarter`;
  //   }

  cents -= quarters * 0.25;
  cents = parseFloat(cents.toFixed(2));
  console.log(`After subtracting quarters cents is now ${cents}`);

  dime = Math.floor(cents / 0.1);
  result += format_output("dime", dime);

  //   if (dime > 1 || dime === 0) {
  //     result += `${dime} dimes`;
  //   } else {
  //     result += `${dime} dime`;
  //   }

  cents -= dime * 0.1;
  cents = parseFloat(cents.toFixed(2));
  console.log(`After subtracting dimes, cents is now ${cents}`);

  nickel = Math.floor(cents / 0.05);
  result += format_output("nickel", nickel);

  cents -= nickel * 0.05;
  cents = parseFloat(cents.toFixed(2));
  console.log(`After subtracting nickels, cents is now ${cents}`);

  penny = Math.floor(cents / 0.01);
  result += format_output("penny", penny);

  return result;
};

// Sample test cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(150.11));
// $150.11 ==> Error: the number is too large

// Add additional test cases here
