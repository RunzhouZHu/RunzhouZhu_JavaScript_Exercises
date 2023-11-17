a = parseInt(prompt("Please enter a number: "));
let isNotPrimeNumber;
if (a > 2) {
    for (let i = 2; i < a; i++) {
        if(a % i === 0)
        {
            isNotPrimeNumber = true;
            break;
        }
    }
} else isNotPrimeNumber = a !== 2;

if(isNotPrimeNumber === true)
{
    document.write("This is not a prime number.")
}
else
{
    document.write("This is a prime number.")
}