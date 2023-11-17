let year = parseInt(prompt("Please enter the year: "))
let isLeapYear

if(year%100 === 0)
{
    isLeapYear = year % 400 === 0;
}
else
{
    isLeapYear = year % 4 === 0;
}

if(isLeapYear === true)
{
    document.write("This year is leap year.");
}
else
{
    document.write("This year is not leap year.");
}