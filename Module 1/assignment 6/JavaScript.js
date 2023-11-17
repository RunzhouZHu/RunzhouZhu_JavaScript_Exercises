caculateConfirm = confirm("Should I calculate the square root?");

if(caculateConfirm === true)
{
    number = parseFloat(prompt("Please enter the number: "));
    if(number>=0)
    {
        squareRoot = Math.sqrt(number);
        document.write(`The square root is ${squareRoot}.`);
    }
    else
    {
        document.write("The square root of a negative number is not defined.");
    }
}
else
{
    document.write("The square root is not calculated.");
}