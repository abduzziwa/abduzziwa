let x = 5;
let y = 10;
let z = add(x, y);

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  s = "subctract";
  return a - b;
}

function multiply(a, b) {
  m = "multiply";
  return a * b;
}

let difference = subtract(z, 7);
let product = multiply(x, y);

console.log("The sum of x and y is:", z);
console.log("The difference when 7 is subtracted from the sum is:", difference);
console.log("The product of x and y is:", product);
