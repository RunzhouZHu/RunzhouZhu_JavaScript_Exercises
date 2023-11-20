let numberOfDice = parseInt(prompt("Please enter the number of dice: "));
let sumOfEyes = parseInt(prompt("Please enter the sum of the eyes: "));



let hit = 0;
for(let t = 1;t < 1000; t++)
{
    let sum = 0;
    for (let i = 1; i <= numberOfDice; i++)
    {
        let a = Math.floor(Math.random() * 6 + 1);
        sum = sum + a;
    }

    if(sum === sumOfEyes)
    {
        hit++;
    }
}

let probability = b / 1000;
document.write(`The probability is ${(100 * probability).toFixed(2)}%.`)