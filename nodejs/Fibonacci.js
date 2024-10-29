const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function fibonacci(n) {
  if (n <= 0) {
    console.log("Please enter a positive integer.");
    return;
  }

  let fibSequence = [];
  let a = 1,
    b = 2;

  for (let i = 0; i < n; i++) {
    fibSequence.push(a);
    let next = a + b;
    a = b;
    b = next;
  }
  console.log(fibSequence.join(", "));
}

rl.question("Enter a positive integer for Fibonacci sequence: ", (input) => {
  const n = parseInt(input);
  fibonacci(n);
  rl.close();
});
