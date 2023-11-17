numberOfDice = parseInt(prompt("Please enter the number of dice rolls: "));
let sum = 0;
for (let i=1; i<=numberOfDice; i++)
{
    a = Math.floor(Math.random()*6) + 1;
    sum = sum + a;
}

document.write(`The sum is ${sum}.`)