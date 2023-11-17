let a = parseInt(prompt("Please enter the first integer: "));
let b = parseInt(prompt("Please enter the second integer: "));
let c = parseInt(prompt("Please enter the third integer: "));

let sum = a + b + c;
let product = a * b * c;
let average = (a + b + c) / 3;

document.write(`The sum is ${sum}. The product is ${product}. The average is ${average}.`);