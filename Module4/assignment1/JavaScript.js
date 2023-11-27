const numbers = [];
for(let i=1;i<=5;i++)
{
    a = parseInt(prompt("Please enter a number: "));
    numbers.push(a);
}

for(let j=numbers.length;j>=0;j--)
{
    console.log(numbers[j]);
}